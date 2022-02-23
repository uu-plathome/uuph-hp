import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>UU-PlatHome | 宇大生必須のプラットフォーム</title>
        <link rel="icon" href="/favicon.png" />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(d) {
          var config = {
            kitId: 'uos7nye',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        ` }} />
      </Head>

      <header className="w-full pt-5 bg-main-bg" style={{height: 80}}>
        <div className="flex wrapper justify-between items-center" style={{height: 60}}>
          <h1>
            <Image src='/Logo_black.svg' width='250' height='60' alt='UU-PlatHome'/>
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
        <div className='mainvisual bg-main-bg mb-10' style={{height: 700}}>

        </div>

        <section id="about" className="w-full mb-28">
          <div className='inner-content relative' style={{height: 500}}>
            <div className='w-screen bg-main-b4 absolute' style={{zIndex: -1, height: 500}}>
              <div className=""  style={{maxWidth: 800, marginLeft: 100, height: 500}}>
                <h2 className='mb-60'>
                  ABOUT<br /><span>“UU-PlatHome”とは？</span>
                </h2>
                <p className='leading-8'>UU-PlatHomeは、<br /><span className='line mplus-medium'>宇都宮大学生必須のWebサービス “UU-Circles”</span><br /><span className='line mplus-medium'>メディアサイト “uu-yell”</span><br />を運営するメディア団体です。</p>
              </div>
            </div>
            <div className='absolute top-16 left-96' style={{}}>
              <Image src='/about_boy.png' width='250' height='250' alt='' />
            </div>
            <div className='absolute top-28 left-64' style={{}}>
              <Image src='/about_girl.png' width='250' height='250' alt='' />
            </div>
            <div className='flex gap-5 absolute top-1/2 right-0' style={{transform: 'translateY(-50%)'}}>
              <Image src='/UUCircles_iPhone.png' width='160' height='308.55' alt='UU-Circles' />
              <Image src='/uuyell_iPhone.png' width='160' height='308.55' alt='uu-yell' />
            </div>
          </div>
        </section>
      </main>

      <footer>

      </footer>
    </>
  )
}
