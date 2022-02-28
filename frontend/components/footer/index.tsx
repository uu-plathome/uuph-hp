import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


export function Footer() {
  return (
    <footer className='w-full bg-main-bg pt-10 pb-5'>
      <div className='flex flex-row justify-center gap-20 inner-wrap pb-10'>
        <div className='mr-4'>
          <a className='block mb-4' href='https://uu-plathome.com'>
            <Image src='/Logo_black.svg' width='200' height='36' alt='UU-PlatHome' />
          </a>
          <a className='block m-auto' href='https://twitter.com/UU_PlatHome' target='_blank' rel='noopener'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className='flex gap-10'>
          <a className='h-fit' href='https://uu-circles.com' target='_blank' rel='noopener'>
            <Image src='/UU-Circles.svg' width='110' height='22.92' alt='UU-Circles' />
          </a>
          <div className='flex flex-col justify-between'>
            <a className='block' href='https://media.uu-circles.com' target='_blank' rel='noopener'>
              <Image src='/uu-yell.svg' width='76.48' height='22.92' alt='uu-yell' />
            </a>
            <a className='block mx-auto' href='https://twitter.com/uu_yell' target='_blank' rel='noopener'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <p className='text-center text-sm'>&copy; 2022 UU-PlatHome</p>
    </footer>
  )
}