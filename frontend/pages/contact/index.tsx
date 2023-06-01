import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'


// Attention: 現在リンクされてないページ
export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | UU-PlatHome</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | UU-PlatHome" />
      </Head>

      <Header />

      <main className='text-center pt-32'>
        <h2 className='mb-16'>CONTACT<br /><span>お問い合わせ</span></h2>
        <div className='w-fit mx-auto mb-28 contact-i'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwmb9711rpENdPhCvFlH2KZU7i7Tg-recV7PrfeL4ObOLebw/viewform?embedded=true" width="640" height="1600" >読み込んでいます…</iframe>
        </div>
      </main>

      <Footer />
    </>
  )
}
