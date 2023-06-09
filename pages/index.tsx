import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/Home.module.scss'
import Layout from '../components/Layout'
import wpClient from '../lib/wpapi'
import ThreeConnect from '../public/index/three_connect.svg'
import Sirokuma1 from '../public/index/sirokuma1.svg'
import Sirokuma2 from '../public/index/sirokuma2.svg'
import Sirokuma3 from '../public/index/sirokuma3.svg'
import RironZiseki from '../public/index/riron_ziseki.svg'
import Graph from '../public/index/hattatu_graph.svg'
import ToddlerColor from '../public/index/toddler_color.svg'
import BabyColor from '../public/index/baby_color.svg'
import BabyConcept from '../public/index/baby_concept.svg'
import ToddlerConcept from '../public/index/toddler_concept.svg'
import ClassTlIcon1 from '../public/index/class_tl_icon1.svg'
import ClassTlIcon2 from '../public/index/class_tl_icon2.svg'
import ClassTlIcon3 from '../public/index/class_tl_icon3.svg'
import AityakuFlow1 from '../public/index/aityaku_flow1.svg'
import AityakuFlow2 from '../public/index/aityaku_flow2.svg'
import AityakuFlow3 from '../public/index/aityaku_flow3.svg'
import AityakuFlow4 from '../public/index/aityaku_flow4.svg'
import FlagIcon from '../public/index/flag_icon.svg'
import Present1 from '../public/index/present1.svg'
import Present2 from '../public/index/present2.svg'
import Present3 from '../public/index/present3.svg'
import ExperiencIcon1 from '../public/index/experience_icon1.svg'
import ExperiencIcon2 from '../public/index/experience_icon2.svg'
import ExperiencIcon3 from '../public/index/experience_icon3.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import AnimationTrigger from '../components/AnimationTrigger'


const Home: NextPage = ({ calendars, classtl }: any) => {
  const indep = [
    {
      img: <AityakuFlow1 />,
      txt: <>周囲の人に<br />守られる</>,
      main: "安全",
    }, {
      img: <AityakuFlow2 />,
      txt: <>自分を守って<br />くれる人がいて<br />気持ちが落ち着</>,
      main: "安心",
    }, {
      img: <AityakuFlow3 />,
      txt: <>嬉しい楽しい<br />気持ちを<br />共有してくれる</>,
      main: "信頼",
    }, {
      img: <AityakuFlow4 />,
      txt: <>外の世界へ<br />自分で<br />歩み始める</>,
      main: "",
    },
  ]
  return (
    <Layout>
      <Head>
        <title>名古屋市天白区｜知育体育スクール「シナップス」｜平針スイミングスクール運営</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.mv}>
          <Image
            src="/index/mv.jpg"
            alt="今しかできない脳力アップ!プール&知育体操"
            width={428}
            height={597}
            quality={100}
          />
        </section>
        <section className={`${styles.sec1} ${styles.sec}`}>
          <div className={`${styles.main_concept_box}`}>
            <div
              className={`${styles.main_concept_txt_wrap}`}
            >
              <div className={`${styles.main_concept_txt_top} ${styles.main_concept_txt}`}>
                <span className={`${styles.main_concept_bgc_txt}`}>最新の心理学</span>と<span className={`${styles.main_concept_bgc_txt}`}>運動発達学</span><br />に基づき<br /><span className={`${styles.main_concept_big_txt}`}>乳幼児期の</span>
              </div>
              <div className={`${styles.img}`}>
                <AnimationTrigger animation="fadeInup" rootMargin="0px" triggerOnce>
                  <ThreeConnect />
                </AnimationTrigger>
              </div>
              <div className={`${styles.main_concept_txt_bottombotomu} ${styles.main_concept_txt}`}>
                <span className={`${styles.main_concept_big_txt}`}>をつないで<br /><span className={`${styles.main_concept_blue_txt}`}>脳力アップ！</span></span>をめざす<br />知育体育スクールです
              </div>
            </div>
            <div className={`${styles.sec_img}`}>
              <Image
                src="/index/sec1_img.jpg"
                alt=""
                width={450}
                height={200} />
            </div>
            <div className={`${styles.sec_sirokuma}`}>
              <Sirokuma1 />
            </div>
          </div>
          <div className={`${styles.sec1_box1} ${styles.sec_box}`}>
            <div className="sec_in">
              <h2 className={`${styles.index_h2} ${styles.index_h2_fukidasi} h_tl`}>
                <span className={`txt_border`}>乳幼児期</span>に<br /><span className={`txt_border`}>さまざまな動き</span>を<br />経験することが<br /><span className={`txt_border`}>脳力アップ</span>に<br />重要です。
              </h2>
              <div className={`${styles.sec1_box1_tlsub}`}>
                乳幼児期は神経系の発達が著しい時期です
              </div>
              <div className={`${styles.img}`}>
                <Graph viewBox="0 0 388 600" />
              </div>
              <p className={`${styles.sec_box1_txt} h_tl`}>
                運動神経の良し悪しは<br />生まれつきではなく、<br />小さい頃の動きの経験によって<br />変わります。
              </p>
            </div>
            <div className={`${styles.sec_sirokuma}`}>
              <Sirokuma2 />
            </div>
          </div>
          <div className={`${styles.sec1_box2} ${styles.sec_box}`}>
            <div className="sec_in">
              <h2>幼児期からの運動発達に欠かせない<span className={styles.ribbon}>コオーディネーション能力</span></h2>
              <div className={`txt ${styles.txt}`}>コオーディネーション能力は<span className={styles.blue}>７つの能力</span>で構成されています。</div>
              <div className={styles.img}>
                <Image
                  src="/index/kids_skill.jpg"
                  alt=""
                  width={388}
                  height={430}
                />
              </div>
              <div className={`txt ${styles.txt}`}>
                これらの能力は、様々な運動場面において組み合わさることで身体や道具を正確にコントロールすることを可能にします。例えば狙ったところにボールを投げたり、ジャンプしたり、鬼ごっこで鬼から逃げたり身をかわす際に発揮されます。特に<span className={styles.blue}>定位能力（時空間を把握する能力</span>）と<span className={styles.blue}>分化能力（動作における筋出力を調整する能力）</span>は、幼児期からの運動発達に欠かせない能力といわれています。
              </div>
            </div>
          </div>
          <div className={`${styles.sec1_box3} ${styles.sec_box}`}>
            <h2>
              <RironZiseki viewBox="0 0 428 284" />
              <span className="visuallyHidden">40年以上の指導実績と最新の人間発達学の理論</span>
            </h2>
            <div className={`${styles.sec1_box3_txt} h_tl`}>
              子どもの<br />
              <span className="txt_border">運動脳力</span>をのばし、<br />
              <span className="txt_border">心身の発育・発達</span>に<br />
              つなげます
            </div>
          </div>
        </section>
        <section className={`${styles.sec2} ${styles.sec}`}>
          <div className={`${styles.b_t_anchor_wrap}`}>
            <div className={`${styles.b_t_anchor_sirokuma}`}>
              <div className={`${styles.sirokuma_txt} h_tl`}>お子様の発達にあわせた<br />きめ細やかなプログラム</div>
              <Sirokuma3 />
            </div>
            <ul className={`${styles.b_t_anchor}`}>
              {classtl.map((clas: any, index: number) => (
                <li className={`${styles.b_t_anchor_li} ${clas.slug}`} key={index}>
                  <a href={`#${clas.slug}`}>
                    <div className={`${styles.class_cons_txt}`}>{clas.cons}</div>
                    <div className={`${styles.tl}`}>{clas.tl}クラス</div>
                    <div className={`${styles.age}`}>{clas.age}</div>
                    <div className={`${styles.icon}`}>{clas.icond}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* ベビークラス（6ヶ月〜3歳） */}
          <div id={`baby`} className={`${styles.class_wrap} ${styles.baby}`}>
            <div className={`${styles.class_tl_box}`}>
              <div className={`${styles.icon}`}>
                <BabyColor />
              </div>
              <h2>
                ベビークラス
                <span>（6ヶ月〜3歳）</span>
              </h2>
              <div className={`${styles.class_tl_txt} h_tl`}>
                親子いっしょに<br />プール・知育体操
              </div>
            </div>
            {/* クラスメイン */}
            <div className={styles.class_mv}>
              <div className={styles.class_mv_img}>
                <Image
                  src="/index/baby_main_img.jpg"
                  alt=""
                  width={428}
                  height={289}
                />
              </div>
              <div className={styles.class_mv_tl}>
                <h3>元気に育つための基礎作りの時期</h3>
                <div className={styles.class_mv_txt}>
                  体あそびの刺激が<br />神経系と運動機能の発達を促します。
                  <div className={`${styles.class_cons_txt}`}>ママといっしょ安心が大切</div>
                </div>
              </div>
            </div>
            {/* /クラスメイン */}
            {/* クラスコンセプト */}
            <div className={styles.class_concept}>
              <div className="sec_in">
                <div className={styles.class_concept_img}>
                  <AnimationTrigger animation="fadeInup" rootMargin="0px" triggerOnce>
                    <BabyConcept viewBox="0 0 362 340" />
                  </AnimationTrigger>
                </div>
                <div className={styles.class_concept_boxs}>
                  {/* あたま */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon1 />
                      </div>
                      <h4>脳の発達の素地をつくる</h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img}`}>
                        <Image
                          src="/index/baby_img1.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>赤ちゃんは、まねが上手</div>
                          <div className={`txt ${styles.txt}`}>ママと一緒にぶくぶくと息を吐く練習。安全で楽しい水遊びをするために、コーチが指導してくれるので安心です。</div>
                        </li>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>色々な動きにチャレンジ</div>
                          <div className={`txt ${styles.txt}`}>動いているものを目で追うために体の向き変えたり、目の前のおもちゃを掴むために指を動かしてみる。<br />赤ちゃんは、様々な動きに何度もチャレンジして、これらのことができるようになっていきます。そして、その過程で神経系はぐんぐん発達していきます。</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /あたま */}
                  {/* からだ */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon2 />
                      </div>
                      <h4>丈夫な体の基礎をつくる</h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img}`}>
                        <Image
                          src="/index/baby_img2.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>べビースイミング</div>
                          <div className={`txt ${styles.txt}`}>プールの水温は、体温調節機能がまだ未熟な赤ちゃんも気持ちよくプール遊びを楽しめるよう管理されています。 また、赤ちゃんの体力や月齢に合わせて水の中に入る時間を調整します。<br />体温よりも低いお水に入れば、体温を上げようとする身体の機能が働きます。全身運動の後は、ぐっすり眠れるので、自律神経の働きも良好になり、心身の健康を支える生活習慣の基礎作りにも効果が期待できます。</div>
                          <div className={styles.img}>
                            <Image
                              src="/index/baby_swimming.jpg"
                              alt=""
                              width={357}
                              height={170}
                            />
                          </div>
                        </li>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>親子体操</div>
                          <div className={`txt ${styles.txt}`}>スクールレッスンの魅力は、お友達と一緒に、色々な運動遊具で、ダイナミックな動きを体験できること。<br />月齢に合わせた親子体操や運動遊びで、手足、お腹、背中など、体の色々な部位を、沢山使って体あそびをします。<br />この時期、体を動かすことが楽しい!気持ちいい!という感覚を体験することが、健やかな心身の発育発達を促します。<br />赤ちゃんは、様々な動きに何度もチャレンジして、これらのことができるようになっていきます。そして、その過程で神経系はぐんぐん発達していきます。</div>
                          <div className={styles.img}>
                            <Image
                              src="/index/baby_taiso.jpg"
                              alt=""
                              width={357}
                              height={170}
                            />
                          </div>
                        </li>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>ママのためのリフレッシュクラス</div>
                          <div className={`txt ${styles.txt}`}>赤ちゃんと少し離れてママだけでリフレッシュしたい時もありますよね。そんな時は骨盤ケアや癒しの効果もあるママフラダンスとママアクアのレッスンにも参加できます。赤ちゃんの預け先がない場合は、館内の託児が利用できます。</div>
                          <div className={styles.img}>
                            <Image
                              src="/index/mom_dance.jpg"
                              alt=""
                              width={357}
                              height={170}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /からだ */}
                  {/* こころ */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon3 />
                      </div>
                      <h4>愛着を育む</h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img}`}>
                        <Image
                          src="/index/baby_img3.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>赤ちゃんもママも、笑顔で元気に</div>
                          <div className={`txt ${styles.txt}`}>赤ちゃんは、自分を守ってくれる人がそばにいると安心して健やかに成長することができます。ママも、赤ちゃんとの触れ合いによる幸せホルモン「オキシトシン」で心身ともに元気になれます。忙しい日常だからこそ、いっしょに楽しんで、笑顔になれる時間は大切です。</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /こころ */}
                </div>
              </div>
            </div>
            {/* /クラスコンセプト */}
            {/* 自立の土台 */}
            <div className={styles.independence}>
              <h3 className={`h_tl`}>「愛着」は乳幼児期に<br />養育者との間に形成される信頼関係<br />自立の土台</h3>
              <ul className={styles.independence_flows}>
                {indep.map((ind, index) => (
                  <li className={styles.independence_flow} key={index}>
                    <div className={styles.img}>{ind.img}</div>
                    <div className={styles.txt_box}>
                      <AnimationTrigger animation="fadeInup" rootMargin="0px" triggerOnce>
                        <div className={styles.txt}>{ind.txt}</div>
                        <div className={styles.main}>{ind.main}</div>
                      </AnimationTrigger>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* /自立の土台 */}
            {/* コーチコメント */}
            <div className={styles.coach}>
              <h3 className={`h_tl`}>
                <div className={`${styles.icon}`}><FlagIcon /></div>
                確かな「愛着」が育まれた<br />
                子どもは生涯に渡って<br />
                <span className={`txt_border`}>満足と幸福を</span>感じ、<br />
                <span className={`txt_border`}>社会的能力が高い</span><br />
                と言われています。
              </h3>
              <div className={`txt ${styles.coach_txt}`}>
                皆が笑顔になれるよう、親子で<br />
                「楽しい」「嬉しい」「気持ちいい」を<br />
                共有することから始めましょう。<br />
                愛着の最初の一歩はママ・パパの笑顔!
              </div>
              <div className={`${styles.coach_img}`}>
                <Image
                  src="/index/sato_coach.png"
                  alt="佐藤芳美コーチ"
                  width={338}
                  height={222}
                />
              </div>
              <div className={`${styles.sec_img}`}>
                <Image
                  src="/index/sec2_img1.jpg"
                  alt=""
                  width={450}
                  height={200} />
              </div>
            </div>
            {/* /コーチコメント */}
            {/* 体験レッスン申し込み */}
            <div className={styles.experience}>
              <div className="sec_in">
                <h3 className={`h_tl`}>まずは体験レッスンへ！</h3>
                <div className={styles.experience_boxs}>
                  <div className={styles.experience_box}>
                    <div className={styles.column1}>
                      <div className={styles.lesson_icon}><ExperiencIcon1 /></div>
                      <div className={styles.tl}>どちらでも体験できます。</div>
                    </div>
                    <div className={`${styles.img_bt} bt`}>
                      <Link href="/class#baby">
                        <AnimationTrigger animation="vibration" rootMargin="0px" triggerOnce><span className={`${styles.img}`}><Present1 viewBox="0 0 355 182" /></span></AnimationTrigger>
                        <span className={styles.bt_txt}>体験レッスンのお申込みはこちら<span className={styles.icon}><FontAwesomeIcon icon={faCircleArrowRight} /></span></span>
                      </Link>
                    </div>
                    {calendars[0].acf.calendar_img ? <div className={styles.calendar}><a href={calendars[0].acf.calendar_img.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarDays} />レッスンカレンダー</a></div> : ""}
                  </div>
                </div>
              </div>
            </div>
            {/* /体験レッスン申し込み */}
          </div>
          {/* /ベビークラス（6ヶ月〜3歳） */}
          {/* トドラークラス（2歳〜3歳） */}
          <div id={`toddler`} className={`${styles.class_wrap} ${styles.toddler}`}>
            <div className={`${styles.class_tl_box}`}>
              <div className={`${styles.icon}`}>
                <ToddlerColor />
              </div>
              <h2>
                トドラークラス
                <span>（2歳〜3歳）</span>
              </h2>
              <div className={`${styles.class_tl_txt} h_tl`}>
                おともだちといっしょに<br />プールまたは知育体操
              </div>
            </div>
            {/* クラスメイン */}
            <div className={styles.class_mv}>
              <div className={styles.class_mv_img}>
                <Image
                  src="/index/toddler_main_img.jpg"
                  alt=""
                  width={428}
                  height={289}
                />
              </div>
              <div className={styles.class_mv_tl}>
                <h3>新しい動きを発見し、考え、<br />自ら遊びを創造する時期です。</h3>
                <div className={styles.class_mv_txt}>
                  <div className={`${styles.class_cons_txt}`}>ママみててね! 自立の一歩</div>
                </div>
              </div>
            </div>
            {/* /クラスメイン */}
            {/* クラスコンセプト */}
            <div className={styles.class_concept}>
              <div className="sec_in">
                <div className={styles.class_concept_img}>
                  <AnimationTrigger animation="fadeInup" rootMargin="0px" triggerOnce>
                    <ToddlerConcept viewBox="0 0 362 346" />
                  </AnimationTrigger>
                </div>
                <div className={styles.class_concept_boxs}>
                  {/* あたま */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon1 />
                      </div>
                      <h4>体験から学ぶ<span>［認知能力］</span></h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img250}`}>
                        <Image
                          src="/index/toddler_img1.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>幼児期は、視て、聴いて、<br />触って、やってみる。<br />体験からどんどん学び、吸収しながら、<br />認知能力が養われていく時期です。</div>
                          <div className={`txt ${styles.txt}`}>
                            認知能力とは、五感(視る・聴く、触る、嗅ぐ、味わう)を介して外部からの情報をもとに、物事を認識したり言葉を使ったり、計算、学習、記憶する力。つまり、学力など数値化できる知的能力。<br />身の回りは沢山の文字、数字、形、色、ことば、リズムが溢れていて、楽しい、嬉しいがいっぱい!<br />運動遊びの中で、声を出し、体を動かし、見立て遊びをしながら、次のような動きの基本動作を身に付けていきます。
                          </div>
                          <ul className={`${styles.move_lis}`}>
                            <li>
                              <div className={`${styles.tl}`}>体のバランスをとる動き</div>
                              <div className={`txt ${styles.txt}`}>立つ・座る・転がる・渡る・ぶら下がるなど</div>
                            </li>
                            <li>
                              <div className={`${styles.tl}`}>身体を移動する動き</div>
                              <div className={`txt ${styles.txt}`}>歩く・走る・跳ぶ昇・よける・這う・滑るなど</div>
                            </li>
                            <li>
                              <div className={`${styles.tl}`}>用具などを操作する動き</div>
                              <div className={`txt ${styles.txt}`}>運ぶ・投げる・捕る・蹴る・掘る・押すなど</div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /あたま */}
                  {/* からだ */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon2 />
                      </div>
                      <h4>運動で、健康的な<br />生活習慣を身に付ける</h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img}`}>
                        <Image
                          src="/index/toddler_img2.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>プールの中は特別な運動場</div>
                          <div className={`txt ${styles.txt}`}>
                            カメさんやワニさん歩きをすると目の前に水面が広がって水と仲良しに。沢山遊んで水に慣れたら、次はしっかり呼吸をして体を真っ直ぐ伸ばし、バタ足で水の中を進む。陸上とは違う感覚を体で覚えていきます。全身を使って泳げるようになると、体力もアップ。<br />コツコツ継続して丈夫な体づくりをしましょう。<br />運動の後は、美味しく食べて、ぐっすり眠れるので、メリハリのある健康的な生活習慣を身に付けることができるようになります。
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /からだ */}
                  {/* こころ */}
                  <div className={styles.class_concept_box}>
                    <div className={styles.class_concept_box_tl}>
                      <div className={styles.icon}>
                        <ClassTlIcon3 />
                      </div>
                      <h4>社会性を育む<span>［非認知能力］</span></h4>
                    </div>
                    <div className={styles.class_concept_box_cont}>
                      <div className={`${styles.img} ${styles.class_concept_box_img400}`}>
                        <Image
                          src="/index/toddler_img3.jpg"
                          alt=""
                          fill
                          quality={100}
                        />
                      </div>
                      <ul className={styles.class_concept_box_cont_lis}>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>
                            <span>お友達と一緒にレッスンすることで、<br />社会性を育みます。</span>
                            幼児期は、心の土台ができる時期。
                          </div>
                          <div className={`txt ${styles.txt}`}>例えば…集団の中で、順番に並んだり、相手に譲る。絵本の世界で色々な人の気持ちや感情に触れて共感する。お手伝いをして皆に喜んでもらう。このような働きかけが、自制心、相手を思いやる気持ち、自己肯定感を育み、子ども達の非認知能力を伸ばします。</div>
                        </li>
                        <li className={styles.class_concept_box_cont_li}>
                          <div className={styles.tl}>
                            非認知能力とは、社会とかかわり、<br />生きていくための力。
                          </div>
                          <div className={`txt ${styles.txt}`}>非認知能力は疑問や課題を解決するために諦めず探求する力、前向きに取り組む力、自分の気持ちをコントロールする力、コミュニケーションする力など、数値では出すことが難しい能力です。非認知能力は、愛着という安心感を土台に、家族やお友達と関わることで、様々な気持ちを体験しながら時間をかけて育まれていきます。</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /こころ */}
                </div>
              </div>
              <div className={`${styles.sec_img}`}>
                <Image
                  src="/index/sec2_img2.jpg"
                  alt=""
                  width={450}
                  height={200} />
              </div>
            </div>
            {/* /クラスコンセプト */}
            {/* 体験レッスン申し込み */}
            <div className={styles.experience}>
              <div className="sec_in">
                <h3 className={`h_tl`}>まずは体験レッスンへ！</h3>
                <div className={styles.experience_boxs}>
                  <div className={styles.experience_box}>
                    <div className={styles.column2}>
                      <div className={styles.lesson_icon}><ExperiencIcon2 /></div>
                      <div className={styles.tl_box}>
                        <div className={styles.tl}>1DAY<br />スイム</div>
                        <div className={styles.txt}>ママは見学。コーチやお友達と一緒に水遊び。</div>
                      </div>
                    </div>
                    <div className={`${styles.img_bt} bt`}>
                      <Link href="/class#toddlerclass-72">
                        <AnimationTrigger animation="vibration" rootMargin="0px" triggerOnce><span className={`${styles.img}`}><Present2 viewBox="0 0 355 135" /></span></AnimationTrigger>
                        <span className={styles.bt_txt}>体験レッスンのお申込みはこちら<span className={styles.icon}><FontAwesomeIcon icon={faCircleArrowRight} /></span></span>
                      </Link>
                    </div>
                    {calendars[0].acf.calendar_img ? <div className={styles.calendar}><a href={calendars[0].acf.calendar_img.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarDays} />レッスンカレンダー</a></div> : ""}
                  </div>
                  <div className={styles.experience_box}>
                    <div className={styles.column2}>
                      <div className={styles.lesson_icon}><ExperiencIcon3 /></div>
                      <div className={styles.tl_box}>
                        <div className={styles.tl}>1ヶ月<br />トライアル</div>
                        <div className={styles.txt}>親子で参加。お友達と関わりながら、運動遊び。</div>
                      </div>
                    </div>
                    <div className={`${styles.img_bt} bt`}>
                      <Link href="/class#toddlerclass-74">
                        <AnimationTrigger animation="vibration" rootMargin="0px" triggerOnce><span className={`${styles.img}`}><Present3 viewBox="0 0 355 135" /></span></AnimationTrigger>
                        <span className={styles.bt_txt}>体験レッスンのお申込みはこちら<span className={styles.icon}><FontAwesomeIcon icon={faCircleArrowRight} /></span></span>
                      </Link>
                    </div>
                    {calendars[0].acf.calendar_img ? <div className={styles.calendar}><a href={calendars[0].acf.calendar_img.url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCalendarDays} />レッスンカレンダー</a></div> : ""}
                  </div>
                </div>
              </div>
            </div>
            {/* /体験レッスン申し込み */}
          </div>
          {/* /トドラークラス（2歳〜3歳） */}
        </section>
        <section className={`${styles.sec3} ${styles.sec}`}>
          <div className="sec_in">
            <div className={styles.member_benefits_box}>
              <h2>
                <Image
                  src="/index/member_privi.png"
                  alt="シナップス会員特典"
                  width={345}
                  height={154}
                />
                <span className="visuallyHidden">シナップス会員特典</span>
              </h2>
              <ul className={styles.member_benefits}>
                <li className={styles.member_benefit}>
                  <div className={styles.num}>1</div>
                  <div className={styles.txt_box}>
                    <div className={styles.tl}>
                      託児サービスが利用できます
                    </div>
                    <div className={`txt ${styles.txt}`}>レッスン中、保育士や子育て経験者のベテランシッターが0～3歳（未就園児）のお子様をお預かりします。<br />2時間660円（予約制）</div>
                    <div className={styles.img}>
                      <Image
                        src="/index/privilege_img1.png"
                        alt=""
                        width={295}
                        height={166}
                      />
                    </div>
                  </div>
                </li>
                <li className={styles.member_benefit}>
                  <div className={styles.num}>2</div>
                  <div className={styles.txt_box}>
                    <div className={styles.tl}>
                      ステップアッププレゼント
                    </div>
                    <div className={`txt ${styles.txt}`}>子ども本科スクール年少クラスにステップアップされた方にスクールバッグをプレゼントします。<br />使いやすく、持ち物を整理して入れやすいレッスンバッグです。</div>
                    <div className={styles.img}>
                      <Image
                        src="/index/privilege_img2.png"
                        alt=""
                        width={295}
                        height={166}
                      />
                    </div>
                  </div>
                </li>
                <li className={styles.member_benefit}>
                  <div className={styles.num}>3</div>
                  <div className={styles.txt_box}>
                    <div className={styles.tl}>
                      再入会ご優待
                    </div>
                    <div className={`txt ${styles.txt}`}>退会後3年以内のご本人再入会は入会登録手続料が無料になります。</div>
                  </div>
                </li>
                <li className={styles.member_benefit}>
                  <div className={styles.num}>4</div>
                  <div className={styles.txt_box}>
                    <div className={styles.tl}>
                      同居家族ご優待
                    </div>
                    <div className={`txt ${styles.txt}`}>同居のご家族は入会登録手続料を50%割引します。</div>
                  </div>
                </li>
                <li className={styles.member_benefit}>
                  <div className={styles.num}>5</div>
                  <div className={styles.txt_box}>
                    <div className={styles.tl}>
                      スクール指定用品割引
                    </div>
                    <div className={`txt ${styles.txt}`}>水着や体操服など指定用品とプロショップ商品が10%割引になります。</div>
                    <div className={styles.img}>
                      <Image
                        src="/index/privilege_img3.png"
                        alt=""
                        width={295}
                        height={166}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const calendar = await wpClient.url(`https://${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/wp/v2/calendar`).perPage(1)
  return {
    props: {
      calendars: calendar,
    }
  }
}

export default Home
