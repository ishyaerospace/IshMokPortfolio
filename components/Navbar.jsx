import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets.js'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='top'>
            <Image src={assets.logo} alt="logo" className='w-15 cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex item-centre gap-6 lg:gap-8'>
            <li><a className="font-Ovo" href="#top">Home</a></li>
            <li><a className="font-Ovo" href="#about">About me</a></li>
            <li><a className="font-Ovo" href="#project">Project</a></li>
            <li><a className="font-Ovo" href="#contact">Contact</a></li>
        </ul>
        <div>
            <a href="#contact" className='hidden lg:flex item-center gap-3 px-5
            py-2 border border-gray-500 rounded-full ml-4 font-Ovo'>contact<Image src={assets.mail_icon_dark} alt="contact" className="w-10"/></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
