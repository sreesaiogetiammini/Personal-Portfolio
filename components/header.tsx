import Link from 'next/link'
import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  return (

    <header className='px-6 py-4 lg:px-32 lg:py-8 font-medium flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
    <nav className='flex items-start  gap-x-6 mt-4 lg:mt-0'>
        <Link href='/' className='min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2 mb-2 lg:mb-0'>Home</Link>
        {/* <Link href='/about' className='min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2 mb-2 lg:mb-0'>About</Link> */}
        <Link href='/projects' className='min-w-16 min-h-16 rounded flex items-center justify-center hover:underline underline-offset-2'>Projects</Link>
    </nav>
    <div className='lg:mx-auto flex items-center justify-center mt-2 lg:mt-0'>
        <Link href={'/'} className='w-16 h-16 bg-black text-white rounded-full text-2xl font-bold flex items-center justify-center hover:bg-yellow-300 hover:text-black'>SS</Link>
    </div>
  

    <nav className='flex gap-x-6 mt-4 lg:mt-0'>
        <Link href='https://www.linkedin.com/in/sree-sai-ogeti-ammini/' target='_blank' className='rounded-full p-2 hover:bg-gray-200'>
            <TiSocialLinkedin size={35} className="w-auto h-auto hover:animate-spin" />
        </Link>
        <Link href='https://github.com/sreesaiogetiammini' target='_blank' className='rounded-full p-2 hover:bg-gray-200'>
            <AiFillGithub size={35} className="w-auto h-auto hover:animate-spin" />
        </Link>
        <Link href='mailto:sreesaiogeti@gmail.com' target='_blank' className='rounded-full p-2 hover:bg-gray-200'>
            <FcGoogle size={35} className="w-auto h-auto hover:animate-spin" />
        </Link>
    </nav>
</header>




  
  )
}

export default Header
