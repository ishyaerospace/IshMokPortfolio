import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center lg:translate-y-[-180px] gap-4'>
      <div>
        <Image src={assets.logo} alt="" className='rounded-full w-32'/>
      </div>
      <h3 className= "flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I am Muahammd Ishtiaq Mokbul</h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Developer</h1>
      <p className='max-w-2xl mx-auto font-ovo'>I am a developer in frontend, backend and electronics</p>
    </div>
  )
}

export default Header
