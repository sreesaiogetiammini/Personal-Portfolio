import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full min-h-screen'>
    <img className='w-full lg:w-1/4 h-auto' src='Logo.png' alt='logo'></img>
    <div className='flex-grow lg:w-3/4 p-4 mt-6'>
    <p className='flex items-center font-normal text-xl animate-pulse'>
    Transforming challenges into opportunities, I seamlessly transitioned from a meticulous QA engineer to a dynamic Full Stack Software Engineer, delivering comprehensive solutions that unite quality assurance and development expertise to elevate digital experiences.
    </p>

    <div className='flex flex-row self-start mt-2'>
    <Link href='/SreeSai_SDE.pdf' target='_blank' className=' bg-black text-white flex items-center font-bold p-2.5 px-6  rounded mt-6 hover:bg-white hover:text-black hover:border-solid hover:border hover:border-black'>
    Resume
    </Link>

    </div>
    
    </div>
</div>
  )
}

export default HomePage
