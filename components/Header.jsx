import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.logo} alt="" className='rounded-full w-32'/>
      </div>
      <h3 className= "flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I am Muhammad Ishtiaq Mokbul</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Developer</h1>
      <p className='max-w-2xl mx-auto font-ovo'>Full-stack and electronics developer with a passion for hardware and networks.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <Image src={assets.arrow_icon} alt='' className='w-4'/></a>
        <a href="/resume.pdf" download className='px-5 py-3 border border-gray-400 rounded-full bg-white flex items-center gap-2' >my resume <Image src={assets.download_icon_dark} alt='' className='w-3'/></a>
      </div>
    </div>
  )
}

export default Header
