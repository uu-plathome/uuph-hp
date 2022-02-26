import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


export default function Home() {
  return (
    <div className="bg-main pt-5">
      <Head>
        <title>Contact | UU-PlatHome</title>
        <link rel="icon" href="/favicon.ico" />
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

      <header className="w-full">
        <div className="flex wrapper">
          <h1>
            <img src='./Logo_black.svg' width='250' alt='UU-PlatHome'/>
          </h1>
          <nav>
            <a href='#about'>ABOUT</a>
            <a href='#service'>SERVICE</a>
            <a href='#news'>NEWS</a>
            <a href='/contact'>CONTACT</a>
          </nav>
        </div>
      </header>

      <main>
        <p>コンタクトページ</p>
      </main>

      <footer>

      </footer>
    </div>
  )
}
