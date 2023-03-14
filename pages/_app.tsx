import './styles/globals.scss'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { useCallback, useEffect, useState } from 'react';
import Bottom_bt from '../components/Bottom_bt';
import Sidbt from '../components/Sidbt';
import ToddlerIcon from '../public/common/sid_icon_tod.svg'
import BabyIcon from '../public/common/sid_icon_baby.svg'

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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY || 0;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || 0;
      setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);
  return <>
    <DefaultSeo
      defaultTitle="デフォルトのタイトル"
      description="デフォルトの説明"
      openGraph={{
        type: "website",
        title: "デフォルトのタイトル",
        description: "デフォルトの説明",
        site_name: "サイトの名前",
        url: "サイトのURL",
        images: [
          {
            url: "https://www.example.ie/og-image-01.jpg",
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: "summary_large_image",
      }}
    />
    <div className={`con_main ${isHeaderVisible ? "" : "UpMovemain"}`}>
      <div className="pc_left"></div>
      <div className="con_main_in" id='main_scroll'>
        <Component {...pageProps} classtl={classtl} tellnum={tellnum} opentxt={opentxt}/>
      </div>
      <div className="com_bt_fix">
        <Bottom_bt isHeaderVisible={isHeaderVisible} />
        <Sidbt isHeaderVisible={isHeaderVisible} />
      </div>
      <div className="pc_right"></div>
    </div>
  </>
}

export default MyApp
