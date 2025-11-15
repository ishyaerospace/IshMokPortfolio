import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets.js'

const Navbar = () => {

    const sideMenuRef = useRef();
    
    const openMenu = ()=>{
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    
    const closeMenu = ()=>{
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }


  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-opacity-100'>
        <a href='#top'>
            <Image src={assets.logo} alt="logo" className='w-15 cursor-pointer mr-14 rounded-full'/>
        </a>
        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-100 shadow-lg bg-opacity-100 absolute left-1/2 -translate-x-1/2 whitespace-nowrap'>
            <li><a className="font-ovo" href="#top">Home</a></li>
            <li><a className="font-ovo" href="#about">About me</a></li>
            <li><a className="font-ovo" href="#dashbaord">Dashboard</a></li>
            <li><a className="font-ovo" href="#project">My work</a></li>
            <li><a className="font-ovo" href="#contact">Contact me</a></li>
        </ul>
        
        <div className="flex items-center gap-3">
            <button className="cursor-pointer"><Image src={assets.moon_icon} alt="" className="w-6" /></button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo bg-gray-100 shadow-lg'>contact<Image src={assets.arrow_icon_dark} alt="" className='w-3'/></a>
            <button className="cursor-pointer block md:hidden ml-3"><Image src={assets.menu_icon_dark} alt="" className="w-6" onClick={openMenu}/></button>
        </div>

        {/* ------mobile menu------ */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div  className='absolute right-6 top-8' onClick={closeMenu}>
            <Image src={assets.close_icon_dark} alt="" className="w-5 cursor-pointer"/>
          </div>

            <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#about">About me</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#dashbaord">Dashboard</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#project">Project</a></li>
            <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
