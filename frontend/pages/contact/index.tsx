import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | UU-PlatHome</title>
      </Head>

      <Header />

      <main className='text-center pt-32'>
        <h2 className='mb-16'>CONTACT<br /><span>お問い合わせ</span></h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScUDn6XHyVHkfQG481VrfcsYPpy_TfYa7CwExBpMEV0T0moTA/viewform?embedded=true" width="640" height="1720" className='mx-auto mb-28'>読み込んでいます…</iframe>
      </main>

      <Footer />
    </>
  )
}
