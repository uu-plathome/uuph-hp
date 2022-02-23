import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>UU-PlatHome | 宇大生必須のプラットフォーム</title>
        <link rel="icon" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(d) {
          var config={
            kitId: 'uos7nye' ,
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+"wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded" )return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);
        ` }} />
      </Head>

      <header className="w-full pt-5 fixed z-50" style={{ height: 80 }}>
        <div className="flex wrapper justify-between items-center" style={{ height: 60 }}>
          <h1>
            <a href='https://uu-plathome.com'>
              <Image src='/Logo_black.svg' width='250' height='60' alt='UU-PlatHome' />
            </a>
          </h1>
          <nav className='text-sm mr-5 flex gap-7'>
            <a href='#about'>ABOUT</a>
            <a href='#service'>SERVICE</a>
            <a href='#news'>NEWS</a>
            <a href='/contact'>CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        <div className='mainvisual bg-main-bg pt-20 mb-10' style={{ height: 780 }}>

        </div>

        <section id="about" className="w-full mb-28">
          <div className='inner-content relative' style={{ height: 510 }}>
            <div className='w-screen bg-main-b4 absolute' style={{ zIndex: 0, height: 510 }}>
              <div className="" style={{ maxWidth: 800, marginLeft: 100, height: 510 }}>
                <h2 className='mb-60'>
                  ABOUT<br /><span>“UU-PlatHome”とは？</span>
                </h2>
                <p className='leading-8'>UU-PlatHomeは、<br /><span className='line mplus-medium'>宇都宮大学生必須のWebサービス
                  “UU-Circles”</span><br /><span className='line mplus-medium'>メディアサイト “uu-yell”</span><br />を運営するメディア団体です。
                </p>
              </div>
            </div>
            <div className='absolute top-16 left-96' style={{}}>
              <Image src='/about_boy.png' width='250' height='250' alt='' />
            </div>
            <div className='absolute top-28 left-64' style={{}}>
              <Image src='/about_girl.png' width='250' height='250' alt='' />
            </div>
            <div className='flex gap-5 absolute top-1/2 right-0' style={{ transform: 'translateY(-50%)' }}>
              <Image src='/UUCircles_iPhone.png' width='160' height='308.55' alt='UU-Circles' />
              <Image src='/uuyell_iPhone.png' width='160' height='308.55' alt='uu-yell' />
            </div>
          </div>
        </section>

        <section id="service" className="w-full mb-28">
          <div className='inner-content relative' style={{ height: 800 }}>
            <div className='w-screen bg-main-b4 absolute right-0' style={{ zIndex: 0, height: 800 }}>
              <div className="absolute right-0" style={{ width: 800, marginRight: 100, height: 800 }}>
                <h2 className='mb-16 text-right'>
                  SERVICE<br /><span>運営サービス</span>
                </h2>

                <div className='flex container justify-between mb-20'>
                  <div className='' style={{ width: 460 }}>
                    <h3 className='mb-3 line_blue inline-block'>UU-Circles</h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>「宇都宮大学の全てのサークルを知れる場所」を目標に運営を行っている Web サービス。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>各サークルオリジナルの『ビラ』一覧 や
                      毎日更新される『今日の新歓』、サークルが新歓の追加や情報を更新できる『サークル管理ページ』などの機能があります。</p>
                    <div className='text-center'>
                      <a href='https://uu-circles.com/' target='_blank' rel='noopener' className='linkbox'>UU-Circles</a>
                    </div>
                  </div>
                  <div className='my-auto'>
                    <Image src='/uucircles_thumbnail.png' width='300' height='156.27' />
                  </div>
                </div>

                <div className='flex container justify-between'>
                  <div className='my-auto'>
                    <Image src='/uuyell_thumbnail.png' width='300' height='156.27' />
                  </div>
                  <div className='' style={{ width: 460 }}>
                    <h3 className='mb-3 line_blue inline-block'>uu-yell</h3>
                    <p className='text-sm leading-7 pl-8 mb-3'>宇都宮大学の学生活動を応援する<br />プラットフォーム型メディアサイト。</p>
                    <p className='text-sm leading-7 pl-8 mb-4'>
                      uu-mailのとなりにブックマークしてもらえるくらい必須ツールにしたいという目標から「uu-mailのとなりに、uu-yell。」をキャッチコピーとして掲げています。</p>
                    <div className='text-center'>
                      <a href='https://media.uu-circles.com/' target='_blank' rel='noopener' className='linkbox'>uu-yell</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}
