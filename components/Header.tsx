import Link from 'next/link'
import React from 'react'
import Logo from '../public/common/logo.svg'
import styles from './styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_logo}>
        <Link href={`/`}>
          <Logo />
        </Link>
        <span className="visuallyHidden"><span>運動能力を伸ばす</span><span>発達につなげる</span><span>シナップス</span><span>6ヶ月~3歳までの知育体操スクール</span></span>
      </h1>
    </header>
  )
}

export default Header