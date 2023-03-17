import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './styles/Bot_bt.module.scss'
import Mobilescreenbutton from '../public/common/bottom_bt_icon1.svg'
import Envelope from '../public/common/bottom_bt_icon2.svg'
import Seedling from '../public/common/bottom_bt_icon3.svg'

const btlist = [
    { num: 0, txt: "電話をかける", icond: <Mobilescreenbutton />, link: "tel:052-801-7170" },
    { num: 1, txt: "お問い合わせ", icond: <Envelope />, link: "/class#form" },
    { num: 2, txt: "体験申込", icond: <Seedling />, link: "/class" },
]

const Bottom_bt = (props: any) => {
    return (
        <div className={`${props.isHeaderVisible ? "" : "UpMove"} ${styles.fix_bt_move} ${props.isAtTop ? `${styles.fix_bt_move_default}`: ""}`}>
            <ul className={`${styles.fix_bt_wrap}`}>
                {btlist.map((bt) => (
                    <li key={bt.num} className={`${styles.fix_bt_li}`}>
                        <Link href={`${bt.link}`}>
                            <div className={`${styles.fix_bt_icon}`}>{bt.icond}</div>
                            <div className={`${styles.txt}`}>{bt.txt}</div>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Bottom_bt