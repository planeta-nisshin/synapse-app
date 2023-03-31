import './styles/globals.scss'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useCallback, useEffect, useState } from 'react'
import Bottom_bt from '../components/Bottom_bt'
import Sidbt from '../components/Sidbt'
import ToddlerIcon from '../public/common/sid_icon_tod.svg'
import BabyIcon from '../public/common/sid_icon_baby.svg'
import Logo from '../public/common/logo.svg'
import Link from 'next/link'
import Drawer from '../components/Drawer'

function MyApp({ Component, pageProps }: AppProps) {
  const tellnum = "052-801-7170"
  const opentxt = "火～土曜日 10:00～14:30"
  const classtl = [
    {
      slug: 'baby',
      tl: "ベビー",
      cons: "ママといっしょに",
      age: "6ヶ月〜3歳",
      icond: <BabyIcon />
    },
    {
      slug: 'toddler',
      tl: "トドラー",
      cons: "ママみててね",
      age: "2歳〜3歳",
      icond: <ToddlerIcon />
    }
  ]
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const isTop = scrollPosition === 0
      setIsAtTop(isTop)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  useEffect(() => {
    let prevScrollPos = window.scrollY || 0
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || 0
      setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100)
      prevScrollPos = currentScrollPos
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },)
  return <>
    <DefaultSeo
      defaultTitle="名古屋市天白区｜知育体育スクール「シナップス」｜平針スイミングスクール運営"
      description="シナップスは、神経系の発達が著しい6ヶ月の赤ちゃんから3歳までの乳幼児対象の知育体育スクール。最新の心理学と運動発達学に基づき、プールと知育体操で40年以上の指導実績のある平針スイミングスクールが運営しています。"
      openGraph={{
        type: "website",
        title: "名古屋市天白区｜知育体育スクール「シナップス」｜平針スイミングスクール運営",
        description: "シナップスは、神経系の発達が著しい6ヶ月の赤ちゃんから3歳までの乳幼児対象の知育体育スクール。最新の心理学と運動発達学に基づき、プールと知育体操で40年以上の指導実績のある平針スイミングスクールが運営しています。",
        site_name: "シナップス",
        url: "https://www.synapps.jp/",
      }}
    />
    <div className={`con_main ${isHeaderVisible ? "" : "UpMovemain"}`}>
      <div className="pc_left">
        <div className="pc_nav_wrap pc">
          <ul className="pc_nav">
            <li className="pc_nav_li"><Link href="/">TOP</Link></li>
            <li className="pc_nav_li"><Link href="/class#baby">ベビークラス</Link></li>
            <li className="pc_nav_li"><Link href="/class#toddler">トドラークラス</Link></li>
            <li className="pc_nav_li"><a href="https://www.hirabari.com/" target="_blank" rel="noopener noreferrer">平針スイミングスクールHP</a></li>
          </ul>
        </div>
      </div>
      <div className="con_main_in" id='main_scroll'>
        <Component {...pageProps} classtl={classtl} tellnum={tellnum} opentxt={opentxt} />
      </div>
      <div className="com_bt_fix">
        <Bottom_bt isHeaderVisible={isHeaderVisible} isAtTop={isAtTop} />
        <Sidbt isHeaderVisible={isHeaderVisible} />
        <Drawer />
      </div>
      <div className="pc_right">
        <div className="pc_logo pc_tab"><Logo /></div>
      </div>
    </div>
  </>
}

export default MyApp
