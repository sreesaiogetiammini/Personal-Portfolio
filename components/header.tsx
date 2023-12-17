import Link from 'next/link'
import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (

  
    <header className='w-full flex-1 px-32 py-8 font-medium flex items-center justify-between'>
    <nav className='flex-row hidden lg:flex lg:gap-x-12'>
        <Link href='/'className='w-auto h-auto min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2'>Home</Link>
        <Link href='/about' className='w-auto h-auto min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2 '>About</Link>
        <Link href='/projects' className='w-auto h-auto min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2'>Projects</Link>
    </nav>
    <div className='flex items-center justify-center mt-2'>
    <Link href={'/'} className='w-16 h-16 bg-black text-white rounded-full text-2xl font-bold flex items-center justify-center hover:bg-fuchsia-600'>SS</Link>
    </div>



    <nav className='hidden lg:flex lg:gap-x-12'>
      <Link href='https://www.linkedin.com/in/sree-sai-ogeti-ammini/' target='_blank'>
        <TiSocialLinkedin size={35} className="w-auto h-auto min-w-16 min-h-16 rounded flex items-center justify-center"/>
      </Link>
      <Link href='https://github.com/sreesaiogetiammini' target='_blank'>
        <AiFillGithub size={35} className="min-w-16 min-h-16 rounded flex items-center justify-center"/>
      </Link>
      <Link href='mailto:sreesaiogeti@gmail.com' target='_blank'>
        <FcGoogle size={35} className="w-auto h-auto min-w-16 min-h-16 rounded flex items-center justify-center"/>
      </Link>
    </nav>
  </header>
  
  )
}

export default Header
