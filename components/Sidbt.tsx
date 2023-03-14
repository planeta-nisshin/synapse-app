import React from 'react'
import styles from './styles/Sid_bt.module.scss'
import Baby from '../public/common/sid_icon_baby.svg'
import Toddler from '../public/common/sid_icon_tod.svg'
import Link from 'next/link'

const sidbtlist = [
    { num: 0, tl: "ベビー", icond: <Baby />, link: "/#baby", slug: "baby" },
    { num: 1, tl: "トドラー", icond: <Toddler />, link: "/#toddler", slug: "toddler"  },
]

const Sidbt = (props:any) => {
    return (
        <div className={`${props.isHeaderVisible ? "" : "SideMove"} ${styles.side_bt_move}`}>
            <ul className={`${styles.side_bt_wrap}`}>
                {sidbtlist.map((sb) => (
                    <li className={`${styles.side_bt} ${sb.slug}`} key={sb.num}>
                        <Link href={`/class${sb.link}`}>
                            <span className={`${styles.icon}`}>{sb.icond}</span>
                            <span className={`${styles.txt_box}`}>
                                <span className={`${styles.tl}`}>{sb.tl}</span>
                                <span className={`${styles.sub}`}>クラス</span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidbt