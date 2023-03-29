import React, { ChangeEvent, useEffect, useState } from 'react'
import Router from 'next/router'
import styles from './styles/contact.module.scss'
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'

type Zipcode = {
    main: string
    sub: string
}

const ContactForm = () => {
    const [formname, setFormname] = useState("")
    const [formkananame, setFormkananame] = useState("")
    const [formemail, setFormemail] = useState("")
    const [formtell, setFormtell] = useState("")
    const [formmessage, setFormmessage] = useState("")
    const [formsuccess, setFormsuccess] = useState(false)
    const [formerror, setFormerror] = useState(false)
    const [zipcode, setZipcodeMain] = useState<Zipcode>({
        main: "",
        sub: ""
    })
    const [address, setAddress] = useState("")
    const [isChecked, setIsChecked] = useState(false);
    const onErrorCheck = () => {
        if (!formname) {
            alert("名前を入れてください")
        }
        if (!formkananame) {
            alert("フリガナを入れてください")
        }
        if (!formemail) {
            alert("メールアドレスを入れてください")
        }
        if (formemail) {
            if (!formemail.match(/.+@.+\..+/)) {
                alert("正しいメールアドレスを入れてください")
            }
        }
        if (!address) {
            alert("住所を入れてください")
        }
        if (!formtell) {
            alert("電話番号を入れてください")
        }
        if (!formmessage) {
            alert("お問い合わせ内容を入れてください")
        }
        if (!isChecked) {
            alert("プライバシーポリシーに同意の上チェックしてください")
        }
        Router.push(`#formid`)
        setFormerror(true)
    }
    const onformCheck = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (formname || formemail || formmessage) {
            setFormsuccess(true)
        }
        Router.push(`#formid`)
    }
    const onformCheckout = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setFormsuccess(false)
    }
    const onformreset = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setFormname("")
        setFormemail("")
        setFormmessage("")
        setFormkananame("")
        setZipcodeMain({
            main: "",
            sub: ""
        })
        setAddress("")
        setFormtell("")
        setFormerror(false)
    }
    const sendForm = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const res = await fetch('/api/send', {
            body: JSON.stringify({
                name: formname,
                kana: formkananame,
                email: formemail,
                zipcode: zipcode,
                address: address,
                message: formmessage,
                tell: formtell,
                subject: "お問い合わせいただきました"
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        if (res.ok) {
            alert("送信完了しました")
        }
    }
    const updateZipcodeSub = async (e: ChangeEvent<HTMLInputElement>) => {
        setZipcodeMain({ ...zipcode, sub: e.target.value })
        if (e.target.value.length === 7) {
            try {
                const res = await axios.get(
                    "https://zipcloud.ibsnet.co.jp/api/search",
                    {
                        params: {
                            zipcode: e.target.value
                        }
                    }
                )
                if (res.data.results) {
                    const result = res.data.results[0]
                    console.log(result)
                    setAddress(`${result.address1}${result.address2}${result.address3}`)
                }
            } catch {
                alert("住所の取得に失敗しました。")
            }
        }
    }
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const isCheckedValue = (): boolean => {
        return isChecked;
    }
    return (
        <form className={`${styles.contact_form} ${formsuccess ? `${styles.checknow}` : ""}`} id="formid">
            <div className={`${styles.input_wrap}`}>
                <div className={`${styles.input_box}`}>
                    <div className={`${styles.tl}`}>お名前<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <input
                            className={`${styles.form_input_short}`}
                            type="text"
                            name="name"
                            value={formname}
                            id="name"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFormname(e.target.value)
                            }}
                        />
                        <span className={`${styles.musttext}`}>{formerror ? <>{!formname ? <>名前を記入してください</> : <></>}</> : <></>}</span>
                    </div>
                </div>
                <div className={`${styles.input_box}`}>
                    <div className={`${styles.tl}`}>フリガナ<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <input
                            className={`${styles.form_input_short}`}
                            type="text"
                            name="kana"
                            value={formkananame}
                            id="kana"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFormkananame(e.target.value)
                            }}
                        />
                        <span className={`${styles.musttext}`}>{formerror ? <>{!formkananame ? <>フリガナを記入してください</> : <></>}</> : <></>}</span>
                    </div>
                </div>
                <div className={`${styles.input_box}`}>
                    <div className={`${styles.tl}`}>メールアドレス<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <input
                            className={`${styles.form_input_short}`}
                            type="text"
                            name="email"
                            id="email"
                            value={formemail}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFormemail(e.target.value)
                            }}
                        />
                        <span className={`${styles.musttext}`}>{formerror ? <>{!formemail ? <>アドレスを記入してください</> : <>{!formemail.match(/.+@.+\..+/) ? <>正しいフォーマットで入れてください</> : <></>}</>}</> : <></>}</span>
                    </div>
                </div>
                <div className={`${styles.input_box}`}>
                    <div className={`${styles.tl}`}>郵便番号</div>
                    <div className={`${styles.input}`}>
                        <input
                            className={`${styles.form_input_short}`}
                            type="text"
                            name="addcode"
                            onChange={updateZipcodeSub} value={zipcode.sub}
                        />
                    </div>
                </div>
                <div className={`${styles.input_box} ${styles.one_column}`}>
                    <div className={`${styles.tl}`}>住所<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <textarea
                            className={`${styles.form_input_long}`}
                            name="add"
                            value={address}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setAddress(e.target.value)
                            }}
                        />
                        <span className={`${styles.musttext}`}>{formerror ? <>{!address ? <>住所を記入してください</> : <></>}</> : <></>}</span>
                    </div>
                </div>
                <div className={`${styles.input_box}`}>
                    <div className={`${styles.tl}`}>電話番号<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <input
                            className={`${styles.form_input_short}`}
                            type="text"
                            name="tell"
                            value={formtell}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setFormtell(e.target.value)
                            }}
                        />
                        <span className={`${styles.musttext}`}>{formerror ? <>{!formtell ? <>電話番号を記入してください</> : <></>}</> : <></>}</span>
                    </div>
                </div>
                <div className={`${styles.input_box} ${styles.one_column}`}>
                    <div className={`${styles.tl}`}>お問い合わせ内容<span className={`${styles.must}`}>※</span></div>
                    <div className={`${styles.input}`}>
                        <textarea
                            name="message"
                            value={formmessage}
                            id="message"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setFormmessage(e.target.value)
                            }}
                        ></textarea>
                        <span className={`${styles.musttext}`}>{formerror ? <>{!formmessage ? <>お問い合わせ内容を記入してください</> : <></>}</> : <></>}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.form_privacy_check}`}>
                <div className={`${styles.tl}`}>個人情報の取り扱いについて</div>
                <div className={`txt ${styles.txt}`}><a href="https://www.hirabari.com/privacy-policy/" target="_blank" rel="noopener noreferrer">プライバシーポリシー<span className={`${styles.icon}`}><FontAwesomeIcon icon={faUpRightFromSquare} /></span></a>をご一読の上、ご同意頂ける場合は、「同意する」にチェックを入れ送信内容確認画面へお進みください。なお、ご入力いただいた個人情報は当スクールからの連絡やお問い合わせの回答に利用いたします。</div>
                <div className={`${styles.input_box}`}>
                    <input type="checkbox" id='privacy_check' checked={isChecked} onChange={handleCheckboxChange} />
                    <label htmlFor="privacy_check">当社の個人情報取扱規約に同意する</label>
                </div>
                {formerror ? <>{!isChecked ? <span className={`${styles.musttext}`}>プライバシーポリシーに同意してください</span> : <></>}</> : <></>}
            </div>
            <div className={`${styles.bt_wrap}`}>
                {!formsuccess ? <>
                    <button className={`${styles.reset_bt}`} onClick={onformreset} disabled={formname == "" && formkananame == "" && address == "" && formtell == "" && formemail == "" && formmessage == "" && zipcode.sub == ""}>リセット</button>
                    <span className={`${styles.formcheck}`}>
                        {!formname || !formkananame || !address || !formtell || !formemail || !formmessage || !isChecked || !formemail.match(/.+@.+\..+/) ? <><div onClick={onErrorCheck} className={`${styles.formchecksub}`}></div></> : <></>}
                        <button className={`${styles.kaku_bt}`} onClick={onformCheck} disabled={!formname || !formkananame || !address || !formtell || !formemail || !formmessage || !isChecked || !formemail.match(/.+@.+\..+/)}>確認へ</button>
                    </span>
                </> : <>
                    <button className={`${styles.back_bt}`} onClick={onformCheckout} disabled={!formname || !formkananame || !address || !formtell || !formemail || !formmessage || !isChecked || !formemail.match(/.+@.+\..+/)}>戻る</button>
                    <input className={`${styles.sub_bt}`} type="submit" onClick={sendForm} />
                </>}
            </div>
            <div className={`txt ${styles.sub_txt}`}>
                お問い合わせが送信されますと、【受信確認メール】を自動送信いたします。お客さまのご利用環境、また迷惑メール対策等の設定により、お返事が届かない場合があります。「@synapps.jp」からのメール受信が可能な設定にしていただきますようお願いいたします。
            </div>
        </form>
    )
}

export default ContactForm