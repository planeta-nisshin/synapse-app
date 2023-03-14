import styles from './styles/Footer.module.scss'
import Logo from '../public/common/logo.svg'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faCircleArrowRight, faSquareParking } from "@fortawesome/free-solid-svg-icons"
import Iframe from 'react-iframe';
import { GetStaticProps } from 'next';
import wpClient from '../lib/wpapi';
import { type } from 'os';


const Footer = () => {
  return (
    <>
      <footer className={`${styles.f_wrap}`}>
        <div className="sec_in">
          <div className={`${styles.f_logo}`}>
            <Link href={`/`}>
              <Logo />
            </Link>
          </div>
          <div className={`${styles.f_tell_box}`}>
            <div className={`${styles.f_tell_tl}`}>お電話でのお問合せは</div>
            <a href={`tel:052-801-7170`} className={`${styles.f_tell_num}`}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </span>
              052-801-7170
            </a>
            <div className={`${styles.f_tell_open}`}>火～土曜日 10:00～14:30</div>
          </div>
          <div className="bt"><Link href={'/class#form'}>メールでのお問い合わせはこちら<span className='icon'><FontAwesomeIcon icon={faCircleArrowRight} /></span></Link></div>
        </div>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11390.707035680125!2d136.98405470255184!3d35.1173846897974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600364bb39d8520f%3A0x160849cf6941bd30!2z5bmz6Yed44K544Kk44Of44Oz44Kw44K544Kv44O844Or!5e0!3m2!1sja!2sjp!4v1678067337513!5m2!1sja!2sjp"
          width="100%"
          height="428px"
          id=""
          className={styles.f_map}
          display="block"
          position="relative"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <div className="sec_in">
          <div className={`${styles.f_comp}`}>
            <div className={`${styles.comp_name}`}>
              運営
              <a href="https://www.hirabari.com/" target="_blank" rel="noopener noreferrer">
                平針スイミングスクール
              </a>
            </div>
            <div className={`${styles.add_box}`}>
              <div className={`${styles.add_num}`}>〒468-0023</div>
              <div className={`${styles.add}`}>名古屋市天白区御前場町308</div>
            </div>
            <div className={`${styles.open_txt}`}>
              <div className={`${styles.tl}`}>営業時間</div>
              <div className={`${styles.time}`}>
                月～土曜日/10:00～21:00<br />日曜日/10:00～14:00
              </div>
            </div>
            <div className={styles.parking}>
              <FontAwesomeIcon icon={faSquareParking} />
              <span>無料駐車場</span>
              <span className={styles.detail}>140台完備</span>
            </div>
          </div>
          <p className={`${styles.f_copy}`}>Copyright © Hiribari Swimming School All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const comp = await wpClient.url(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/comp`).perPage(1)
  return {
    props: {
      comps: comp
    }
  }
}

export default Footer