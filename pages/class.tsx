import Head from 'next/head'
import React, { useState } from 'react'
import styles from './styles/Class.module.scss'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSeedling, faMagnifyingGlass, faMobileScreenButton, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import BabyPool from '../public/class/baby_pool.svg'
import BabyTaiso from '../public/class/baby_taiso.svg'
import ToddlerPool from '../public/class/toddler_pool.svg'
import ToddlerTaiso from '../public/class/toddler_taiso.svg'
import { GetStaticProps } from 'next'
import wpClient from '../lib/wpapi'
import parse from 'html-react-parser'
import Image from 'next/image'
import Sirokuma from '../public/class/sirokuma.svg'
import Popup from '../public/class/popupicon.svg'
import Popup2 from '../public/class/popupicon2.svg'
import Popclose from '../public/class/popclose.svg'
import ContactForm from '../components/ContactForm'

type blogtype = { slug: string; id?: number; title: { rendered: string }; content: { rendered: string }; acf: { baby_present: { url: string; alt: string }; baby_pay: number; baby_mom: string; baby_kids: string; baby_momkids: string; tod_present: { url: string; alt: string }; tod_pay: number; tod_mom: string; tod_kids: string; tod_momkids: string; count: number; }; classcat: number };

const Class = ({ classtl, babys, toddlers, calendars, opentxt, tellnum }: any) => {
  const [popup, setPopup] = useState(false)
  const [poptd, setPoptd] = useState(false)
  const [swipe, setSwipe] = useState(true)
  const onPopup = () => {
    if (!swipe) {
      setSwipe(true)
    }
    setPopup(true)
    setTimeout(() => {
      setSwipe(false)
    }, 1500)
  }
  const onPopupclose = () => {
    setPopup(false)
    setPoptd(false)
  }
  const onPopup2 = () => {
    if (!swipe) {
      setSwipe(true)
    }
    setPopup(true)
    setPoptd(true)
    setTimeout(() => {
      setSwipe(false)
    }, 1500)
  }
  const onSwipeclose = () => {
    setSwipe(false)
  }
  return (
    <Layout>
      <Head>
        <title>体験レッスンのお申込み | シナップス</title>
      </Head>
      <main className={styles.class}>
        <section className={`${styles.page_tl}`}>
          <h2>
            <div className={`${styles.icon}`}><FontAwesomeIcon icon={faSeedling} /></div>
            <div className={`${styles.tl} h_tl`}>体験レッスンのお申込み</div>
          </h2>
        </section>
        <section className={`${styles.sec1} ${styles.sec}`} id="baby">
          <div className={`${styles.class_tl} ${classtl[0].slug}`}>
            <div className={`${styles.icon}`}>{classtl[0].icond}</div>
            <div className={`${styles.class_cons_txt}`}>{classtl[0].cons}</div>
            <h3>{classtl[0].tl}クラス<span>（{classtl[0].age}）</span></h3>
          </div>
          <div className="sec_in">
            <ul className={`${styles.class_lists}`}>
              {babys.map((bay: blogtype) => (
                <li className={`${styles.class_list}`} id={bay.slug} key={bay.id}>
                  <div className={`${styles.tl_box}`}>
                    <div className={`${styles.icon}`}>
                      {bay.classcat == 6 ? <><BabyTaiso /></> : <></>}
                      {bay.classcat == 7 ? <><BabyPool /></> : <></>}
                    </div>
                    <div className={`${styles.tl_txts}`}>
                      <div className={`${styles.classname}`}>{classtl[0].tl}クラス</div>
                      <h4>{parse(bay.title.rendered)}</h4>
                      <div className={`${styles.price}`}>
                        {bay.acf.count}回/{bay.acf.baby_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 円(税込)
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.cons_txt} txt`}>
                    {parse(bay.content.rendered)}
                  </div>
                  <ul className={`${styles.belongings}`}>
                    {
                      bay.acf.baby_mom ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>保護者様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {bay.acf.baby_mom}
                          </div>
                        </li>
                      </> : <></>
                    }
                    {
                      bay.acf.baby_kids ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>お子様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {bay.acf.baby_kids}
                          </div>
                        </li>
                      </> : <></>
                    }
                    {
                      bay.acf.baby_momkids ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>保護者様・お子様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {bay.acf.baby_momkids}
                          </div>
                        </li>
                      </> : <></>
                    }
                  </ul>
                  <div className={`${styles.present_box}`}>
                    {bay.acf.baby_present ? <Image src={bay.acf.baby_present.url} alt={bay.acf.baby_present.alt} width={400} height={122} /> : <></>}
                  </div>
                  <div className={`${styles.calendar_box}`}>
                    <div className={`${styles.calendar_tl}`}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />体験希望日をお選びください
                    </div>
                    {calendars[0].acf.calendar_img ? <div className={styles.calendar} onClick={onPopup}><div className={styles.calendar_icon}><Popup /></div><Image src={calendars[0].acf.calendar_img.url} alt="" width={400} height={280} /></div> : ""}
                  </div>
                  <div className={`bt ${styles.tel_bt}`}>
                    <a href={`tel:${tellnum}`}>
                      <div className={`${styles.tl} `}><FontAwesomeIcon icon={faMobileScreenButton} />お電話でお申込み</div>
                      <div className={`${styles.txt}`}>初めてのプールで心配…持ち物は？など<br />担当者が丁寧にご案内します</div>
                      <div className={`${styles.open_txt}`}>{tellnum} {opentxt}</div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={`${styles.sec2} ${styles.sec}`} id="toddler">
          <div className={`${styles.class_tl} ${classtl[1].slug}`}>
            <div className={`${styles.icon}`}>{classtl[1].icond}</div>
            <div className={`${styles.class_cons_txt}`}>{classtl[1].cons}</div>
            <h3>{classtl[1].tl}クラス<span>（{classtl[1].age}）</span></h3>
          </div>
          <div className="sec_in">
            <ul className={`${styles.class_lists}`}>
              {toddlers.map((tod: blogtype) => (
                <li className={`${styles.class_list}`} id={tod.slug} key={tod.id}>
                  <div className={`${styles.tl_box}`}>
                    <div className={`${styles.icon}`}>
                      {tod.classcat == 6 ? <><ToddlerTaiso /></> : <></>}
                      {tod.classcat == 7 ? <><ToddlerPool /></> : <></>}
                    </div>
                    <div className={`${styles.tl_txts}`}>
                      <div className={`${styles.classname}`}>{classtl[1].tl}クラス</div>
                      <h4>{parse(tod.title.rendered)}</h4>
                      <div className={`${styles.price}`}>
                        {tod.acf.count}回/{tod.acf.tod_pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 円(税込)
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.cons_txt} txt`}>
                    {parse(tod.content.rendered)}
                  </div>
                  <ul className={`${styles.belongings}`}>
                    {
                      tod.acf.tod_mom ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>保護者様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {tod.acf.tod_mom}
                          </div>
                        </li>
                      </> : <></>
                    }
                    {
                      tod.acf.tod_kids ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>お子様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {tod.acf.tod_kids}
                          </div>
                        </li>
                      </> : <></>
                    }
                    {
                      tod.acf.tod_momkids ? <>
                        <li>
                          <div className={`${styles.belong_tl}`}>保護者様・お子様持ち物</div>
                          <div className={`${styles.belong_txt} txt`}>
                            {tod.acf.tod_momkids}
                          </div>
                        </li>
                      </> : <></>
                    }
                  </ul>
                  <div className={`${styles.present_box}`}>
                    {tod.acf.tod_present ? <Image src={tod.acf.tod_present.url} alt={tod.acf.tod_present.alt} width={400} height={122} /> : <></>}
                  </div>
                  <div className={`${styles.calendar_box}`}>
                    <div className={`${styles.calendar_tl}`}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />体験希望日をお選びください
                    </div>
                    {calendars[0].acf.calendar_img ? <div className={styles.calendar} onClick={onPopup2}><div className={styles.calendar_icon}><Popup2 /></div><Image src={calendars[0].acf.calendar_img.url} alt="" width={400} height={280} /></div> : ""}
                  </div>
                  <div className={`bt ${styles.tel_bt}`}>
                    <a href={`tel:${tellnum}`}>
                      <div className={`${styles.tl} `}><FontAwesomeIcon icon={faMobileScreenButton} />お電話でお申込み</div>
                      <div className={`${styles.txt} txt`}>初めてのプールで心配…持ち物は？など<br />担当者が丁寧にご案内します</div>
                      <div className={`${styles.open_txt}`}>{tellnum} {opentxt}</div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.sec_sirokuma}`}>
            <Sirokuma />
          </div>
        </section>
        <section className={`${styles.sec3} ${styles.sec}`} id="form">
          <div className={`${styles.tl_box}`}>
            <div className={`${styles.icon}`}><FontAwesomeIcon icon={faEnvelope} /></div>
            <h2 className={`${styles.tl} h_tl`}>お問い合わせフォーム</h2>
            <div className={`${styles.form_tyu}`}><span>※</span>項目は必須です</div>
            <div className={`${styles.tl_txt} txt`}>
              お問い合わせ内容によっては、お返事を差し上げるまでにお時間をいただく場合や、メールではなく、お電話でご連絡させていただく場合もございます。
            </div>
          </div>
          <div className={`${styles.form_wrap}`}>
            <div className="sec_in">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      {popup ? <div className={`${styles.popupmain}`}>
        <div className={`${styles.in} ${poptd ? `toddler` : ""}`}>
          <div className={`${styles.img_close}`} onClick={onPopupclose}><Popclose /></div>
          <div className={`${styles.img_scroll_wrap}`} onClick={onSwipeclose}>
            <div className={`${styles.swipe_icon_box} ${swipe ? `` : `${styles.swipe_icon_box_close}`} sp`} onClick={onSwipeclose}><div className={`${styles.swipe_icon}`} onClick={onSwipeclose}><Image src="/class/swipe.png" alt="" width={80} height={80} /></div></div>
            <div className={`${styles.img_scroll}`}>
              <div className={`${styles.img}`}>
                <Image quality={100} className={`${styles.calendar_img}`} src={calendars[0].acf.calendar_img.url} alt="" width={calendars[0].acf.calendar_img.width} height={calendars[0].acf.calendar_img.height} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.bg}`} onClick={onPopupclose}></div>
      </div> : <></>}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const calendar = await wpClient.url(`https://${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/calendar`).perPage(1)
  const baby = await wpClient.url(`https://${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/babyclass?_embed&orderby=modified&order=desc&per_page=100`)
  const toddler = await wpClient.url(`https://${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/toddlerclass?_embed&orderby=modified&order=desc&per_page=100`)
  return {
    props: {
      calendars: calendar,
      toddlers: toddler,
      babys: baby,
    }
  }
}

export default Class