import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HomeHeader } from '../components/header'
import { Footer } from '../components/footer'

const Home = () => {
  return (
    <>
      <Head>
        <title>UU-PlatHome | 宇大生必須のプラットフォーム</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UU-PlatHome | 宇大生必須のプラットフォーム" />

      </Head>

      <HomeHeader />

      <main>
        <div className='bg-main-bg pt-20 mb-10'>
          <div className='relative inner-content'>
            <div className='mv-base' >
              <Image src='/bg.svg' width='1000' height='160' alt='' />
            </div>
            <div className='fv-content'>
              <div className='fv-children'>
                <Image src='/children.svg' width='290' height='113' alt='' />
              </div>
              <div className='fv-home'>
                <Image src='/home.svg' width='450' height='430' alt='' />
              </div>
              <p>宇大生必須のプラットフォーム</p>
            </div>
          </div>
        </div>

        <section id="about" className='overflow-hidden pb-8'>
          <div className='inner-content relative' >
            <div className='w-screen bg-main-b4 sec-shadow absolute' style={{ zIndex: 0 }}>
              <div className="about" >
                <h2 className='mb-60'>
                  ABOUT<br /><span>“UU-PlatHome”とは？</span>
                </h2>
                <p className='leading-8'>UU-PlatHomeは、<br /><span className='mplus-medium border-b-2 border-main-b1'> 宇都宮大学生必須のWebサービス <br className='hidden' />“UU-Circles”<br /> メディアサイト “uu-yell”</span><br />を運営するメディア団体です。
                </p>
              </div>
            </div>
            <div className='sub_girl01'>
              <Image src='/sub_girl_01.svg' width='150' height='220' alt='' />
            </div>
            <div className='sub_boy01'>
              <Image src='/sub_boy_01.svg' width='160.5' height='250' alt='' />
            </div>
            <div className='flex gap-5 absolute top-1/2 right-0 sp'>
              <Image src='/UUCircles_iPhone.png' width='160' height='308.55' alt='UU-Circles' />
              <Image src='/uuyell_iPhone.png' width='160' height='308.55' alt='uu-yell' />
            </div>
          </div>
        </section>

        <section id="service">
          <div className='inner-content relative'>
            <div className='w-screen bg-main-b4 sec-shadow absolute right-0' style={{ zIndex: 0 }}>
              <div className="absolute right-0 service">
                <h2 className='mb-16 text-right'>
                  SERVICE<br /><span>運営サービス</span>
                </h2>

                <div className='flex container justify-between mb-20'>
                  <div className='service-item' >
                    <h3 className='mb-3 px-3 pt-2 pb-1 border-2 border-uucircles leading-none inline-block'>
                      <Image src='/UU-Circles.svg' width='110' height='22.92' alt='UU-Circles' />
                    </h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>「宇都宮大学の全てのサークルを知れる場所」を目標に運営を行っている Web サービス。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>各サークルオリジナルの『ビラ』一覧 や
                      毎日更新される『今日の新歓』、サークルが新歓の追加や情報を更新できる『サークル管理ページ』などの機能があります。</p>
                  </div>
                  <div className='relative my-auto'>
                    <a href='https://uu-circles.com/' target='_blank' rel='noopener' className='hover-circles' >
                      <Image src='/uucircles_thumbnail.png' width='300' height='156.27' />
                    </a>
                  </div>
                </div>

                <div className='flex container justify-between mb-10'>
                  <div className='relative my-auto'>
                    <a href='https://media.uu-circles.com/' target='_blank' rel='noopener' className='hover-yell' >
                      <Image src='/uuyell_thumbnail.png' width='300' height='156.27' />
                    </a>
                  </div>
                  <div className='service-item' >
                    <h3 className='mb-3 px-3 pt-2 pb-1 border-2 border-uuyell leading-none inline-block'>
                      <Image src='/uu-yell.svg' width='76.48' height='22.92' alt='uu-yell' />
                    </h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>宇都宮大学の学生活動を応援する<br />プラットフォーム型メディアサイト。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>
                      uu-mailのとなりにブックマークしてもらえるくらい必須ツールにしたいという目標から「uu-mailのとなりに、uu-yell。」をキャッチコピーとして掲げています。</p>
                  </div>
                </div>
                <div className='text-center'>
                  <Link href='https://gakusai.uu-plathome.com'>
                    <a className='duration-100 hover:opacity-80'>
                      <h3 className='mb-1'>峰ヶ丘祭2022公式サイト公開中！</h3>
                      <Image src='/thumbnail.png' width='600' height='315' />
                      <p className='text-sm sp-text-left'>学園祭運営：大学祭実行委員会<span className='sp-none'> / </span><br className="sp" />HP制作：UU-PlatHome</p>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<section id='news'>
          news
          <Image src='/sub_book.svg' width='200' height='172' alt='' />
        </section>*/}

        <section id='u-lab' className='mb-12'>
          <div className='relative text-center py-10 inner-content rounded-3xl border-4 border-ulab'>
            <h2 className='mplus-medium text-lg text-fb mt-0 mb-7'>制作について</h2>
            <p className='mb-8'>UU-Circles・uu-yellの開発は <br className='hidden b5' />学生団体U-lab が行いました！</p>
            <div className='w-fit text-center m-auto'>
              <a href='https://ulab-uu.com' target='_blank' rel='noopener' className='block mb-2 hover:opacity-70'>
                <Image src='/U-lab_uu.jpg' width='250' height='145' alt='U-lab' />
                <p>U-lab HP</p>
              </a>
            </div>
            <div className='absolute top-28 left-4'>
              <Image src='/sub_boy_02.svg' width='200' height='172' alt='' />
            </div>
            <div className='absolute top-20 right-4'>
              <Image src='/sub_girl_02.svg' width='200' height='135' alt='' />
            </div>
          </div>
        </section>

        <div className="form text-center mb-24">
          <div className='inner-content'>
            <h2 className='mplus-medium text-lg text-fb mt-0 mb-6'>UU-PlatHomeの活動に<br className='hidden b5' />参加したい方へ</h2>
            <p className='mb-1'>以下のリンクを開き、<br className='hidden b5' />空いている時間を選択してください。</p>
            <p className='mb-6'>活動内容についてご紹介します！</p>

            <Link href={'https://timerex.net/s/tetsu.work.it_36f8/a185cd43'}>
              <a className='inline-block bg-ora text-center text-white py-4 px-16 rounded-2xl text-xl font-bold hover:opacity-80'>
                <p>活動に参加！</p>
              </a>
            </Link>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home