import { assets } from '@/assets/assets'
import {infoList} from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.logo} alt='profile picture' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-ovo'>I am a Developer that enjoys building, tinkering and experimenting with hardware and circuits
                curious about how systems work under the hood -- especially in computing, communication, and embedded electronics.
                I am also a network hobbiest with a homelab setup. Im a hands-on problem solver and self-taught</p>

                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description},
                    index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image src={iconDark} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-2 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
        </div>
      </div>
    </div>
  )
}


export default About
