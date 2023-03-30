import sgMail from '@sendgrid/mail'
import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import { EmailData } from '@sendgrid/helpers/classes/email-address'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let response = null;

    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_APIKEY as string)
        const messages = [
            {
                to: req.body.email,
                bcc: process.env.NEXT_PUBLIC_MAIL_SEND_ADDRESS,
                from: {
                    name: 'シナップス',
                    email: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
                } as EmailData,
                subject: '【平針スイミングスクール】お問合せありがとうございました。',
                text: `${req.body.name} 様\n\nこの度は、お問い合わせをいただき誠にありがとうございます。\n以下内容を受け付けました。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode.sub ? req.body.zipcode.sub : ""}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\n-- \nこのメールは (https://www.synapps.jp/) のお問い合わせフォームから送信されました`
            },
            {
                to: process.env.NEXT_PUBLIC_MAIL_SEND_ADDRESS,
                bcc: '',
                from: process.env.NEXT_PUBLIC_MAIL_ADDRESS as EmailData,
                subject: 'シナップスHPからお問合せがありました',
                text: `ホームページからお問い合わせが届きました。\n\n内容は以下になります。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode.sub ? req.body.zipcode.sub : ""}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\n-- \nこのメールは (https://www.synapps.jp/) のお問い合わせフォームから送信されました`
            },
        ]
        console.log('req.body: ', req.body);
        (async () => {
            try {
                await sgMail.send(messages);
                res.status(200).json(messages);
            } catch (err) {
                console.error(err);
                res.status(500).json(err);
            }
        })();
    }

    res.status(200);
    res.send(response);
}