/* eslint-disable @next/next/no-img-element */
import { Heart, Twitter, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Feature from './Feature'
import { GiThumbDown } from 'react-icons/gi'
import { FaTwitter } from 'react-icons/fa'
import { PiDiscordLogo } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className='border-t w-full flex max-h-screen  '>
      <footer className='flex w-full my-4 px-1'>
        <div className='flex max-w-sm'>
            <Link href={'/'} className='flex gap-2'>
             <Image  src={'/svg/logo.svg'} width={26} height={12} alt='Footer'/>
               <h1 className='font-bold'>Azimov</h1>
            </Link>
        </div>
        <div className='flex justify-between  w-full'>
            <div className='gap-x-2'>
                <Link href={'/'}>
                  
                </Link>
                <div></div>
            </div>
            <div className='flex gap-x-2'>
                <Link href={'/'}>
                 <img src='/svg/discord.svg' className='w-7' />
                </Link>
                <Link href={'/'}>
                 <img src="/svg/github.svg" alt="" className='w-6 ' />
                </Link>
                <Link href={'/'}>
                 <img src="/svg/telegram.svg" alt="" className='w-7 ' />
                </Link>
            </div>
        </div>
        <div className='flex '>

        </div>
      </footer>

    </div>
  )
}

export default Footer
