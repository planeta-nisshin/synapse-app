export default function handler(req: any, res: any) {
    let response = null;

    if (req.method === 'POST') {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_APIKEY);
        const msg = {
            to: req.body.email,
            bcc: 'hisano@planeta.co.jp',
            from: 'hisano@planeta.co.jp',
            subject: '【平針スイミングスクール】お問合せありがとうございました。',
            text: `${req.body.name} 様\n\nこの度は、お問い合わせをいただき誠にありがとうございます。\n以下内容を受け付けました。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\n-- \nこのメールは (https://www.synapps.jp/) のお問い合わせフォームから送信されました`
        };
        const msg2 = {
            to: 'hisano@planeta.co.jp',
            bcc: '',
            from: 'hisano@planeta.co.jp',
            subject: 'シナップスHPからお問合せがありました',
            text: `ホームページからお問い合わせが届きました。\n\n内容は以下になります。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\n-- \nこのメールは (https://www.synapps.jp/) のお問い合わせフォームから送信されました`
        };
        (async () => {
            try {
                response = await sgMail.send(msg);
                response = await sgMail.send(msg2);
            } catch (error: any) {
                console.error(error);
                if (error.response) {
                    console.error(error.response.body)
                }
            }
        })();
    }

    res.status(200);
    res.send(response);
}