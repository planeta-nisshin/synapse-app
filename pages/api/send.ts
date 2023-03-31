import sgMail from '@sendgrid/mail'
import { EmailData } from '@sendgrid/helpers/classes/email-address'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
                subject: '【シナップス】お問合せありがとうございました。',
                text: `${req.body.name} 様\n\nこの度は、シナップスにお問い合わせをいただき誠にありがとうございます。\n以下内容を受け付けました。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode.sub ? req.body.zipcode.sub : ""}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\nお問い合わせいただきました内容を確認後\n担当者より改めてご連絡いたします。\nよろしくお願い申し上げます。\n\n※本メールは送信専用です。\nこちらに返信いただいても、ご回答いたしかねますのでご了承ください。\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n　シナップス\n　運営／平針スイミングスクール\n　フィットネスクラブ\n　https://www.synapps.jp/\n\n　〒468-0023\n　愛知県名古屋市天白区御前場町 308\n　TEL: 052-801-7170（代表）\n　[受付時間] 月～土 10:00～20:00／日 10:00～14:00\n　\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n-- \nこのメールは 【シナップス】 のお問い合わせフォームから送信されました\n`
            },
            {
                to: process.env.NEXT_PUBLIC_MAIL_SEND_ADDRESS,
                bcc: '',
                from: process.env.NEXT_PUBLIC_MAIL_ADDRESS as EmailData,
                subject: 'シナップスHPからお問合せがありました',
                text: `ホームページからお問い合わせが届きました。\n\n内容は以下になります。\n-----------------------------\n\n【お名前】${req.body.name}\n\n【フリガナ】${req.body.kana}\n\n【メールアドレス】${req.body.email}\n\n【郵便番号】${req.body.zipcode.sub ? req.body.zipcode.sub : ""}\n\n【住所】${req.body.address}\n\n【電話番号】${req.body.tell}\n\n【お問い合わせ内容】\n${req.body.message}\n\n-----------------------------\n\n-- \nこのメールは (https://www.synapps.jp/) のお問い合わせフォームから送信されました`
            },
        ]
        try {
            await sgMail.send(messages);
            res.status(200).json(messages);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}