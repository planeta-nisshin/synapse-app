import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../public/common/logo.svg'
import styles from './styles/Drawer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Drawer = () => {
    const [drawer, setDrawer] = useState(false)
    const onDrawer = () => {
        if (!drawer) {
            setDrawer(true)
        } else {
            setDrawer(false)
        }
    }
    const onLink = () => {
        setDrawer(false)
    }
    return (
        <>
            <button className={`tab ${styles.drawer_btn} ${drawer ? styles.action : ""}`} onClick={onDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`${styles.drawer} ${drawer ? styles.action : ""}`}>
                <div className={`${styles.nav_wrap} sec_in`}>
                    <div className={`${styles.nav_box}`}>
                        <div className={`${styles.img}`}>
                            <Logo />
                        </div>
                        <nav>
                            <ul className={`${styles.drawer_nav}`}>
                                <li className={`${styles.drawer_nav_li}`} onClick={onLink}><Link href="/"><span>TOP</span><FontAwesomeIcon icon={faArrowRight} /></Link></li>
                                <li className={`${styles.drawer_nav_li}`} onClick={onLink}><Link href="/class#baby"><span>ベビークラス</span><FontAwesomeIcon icon={faArrowRight} /></Link></li>
                                <li className={`${styles.drawer_nav_li}`} onClick={onLink}><Link href="/class#toddler"><span>トドラークラス</span><FontAwesomeIcon icon={faArrowRight} /></Link></li>
                                <li className={`${styles.drawer_nav_li}`} onClick={onLink}><a href="https://www.hirabari.com/" target="_blank" rel="noopener noreferrer"><span>平針スイミングスクールHP</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer