import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


export default function Home() {
  return (
    <div className="bg-main pt-5">
      <Head>
        <title>Contact | UU-PlatHome</title>
      </Head>

      <header className="w-full">
        <div className="flex wrapper">
          <h1>
            <img src='./Logo_black.svg' width='250' alt='UU-PlatHome' />
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
