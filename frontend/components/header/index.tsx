import Image from "next/image"
import Link from "next/link";
import { Link as Scroll } from 'react-scroll';
import React from "react";

export function HomeHeader() {
  return (
    <header className=" pt-5 fixed z-50 mplus-regular" style={{ height: 80, width: '100vw' }}>
      <div className="flex wrapper justify-between items-center header" style={{ height: 60 }}>
        <h1>
          <a href='https://uu-plathome.com'>
            <Image src='/Logo_black.svg' width='220' height='39' alt='UU-PlatHome' />
          </a>
        </h1>
        <nav className='text-xs mr-5 flex gap-7'>
          <Scroll smooth={true} offset={-90} to='about' className='link-ul'>ABOUT</Scroll>
          <Scroll smooth={true} offset={-90} to='service' className='link-ul'>SERVICE</Scroll>
          {/*<Scroll smooth={true} offset={-90} to='news' className='link-ul'>NEWS</Scroll>*/}
          <Link href='/contact'>
            <a className='link-ul'>CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function Header() {
  return (
    <header className="w-full pt-5 fixed z-50 mplus-regular" style={{ height: 80 }}>
      <div className="flex wrapper justify-between items-center header" style={{ height: 60 }}>
        <h1>
          <a href='https://uu-plathome.com'>
            <Image src='/Logo_black.svg' width='220' height='39' alt='UU-PlatHome' />
          </a>
        </h1>
        <nav className='text-xs mr-5 flex gap-7'>
          <a href='/#about' className='link-ul'>ABOUT</a>
          <a href='/#service' className='link-ul'>SERVICE</a>
          {/*<a href='/#news' className='link-ul'>NEWS</a>*/}
          <Link href='/contact'>
            <a className='link-ul'>CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}