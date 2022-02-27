import Image from "next/image"
import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="w-full pt-5 fixed z-50" style={{ height: 80 }}>
      <div className="flex wrapper justify-between items-center" style={{ height: 60 }}>
        <h1>
          <a href='https://uu-plathome.com'>
            <Image src='/Logo_black.svg' width='220' height='39' alt='UU-PlatHome' />
          </a>
        </h1>
        <nav className='text-xs mr-5 flex gap-7'>
          <a href='/#about'>ABOUT</a>
          <a href='/#service'>SERVICE</a>
          {/*<a href='/#news'>NEWS</a>*/}
          <Link href='/contact'>
            <a>CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}