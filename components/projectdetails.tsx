import Link from 'next/link';
import React from 'react'
import { URL } from 'url';

import { AiFillGithub } from "react-icons/ai";
interface InputProps {
    title:string;
    type:string;
    githubLink: string;
    imageUrl?: any;
    videoUrl?:any;
    websitelink?: any;
    techstack: string;
    info:string;
    
  }

const ProjectDetails : React.FC<InputProps> = ({title,type,githubLink,websitelink,imageUrl ,techstack,info , videoUrl }) => {
  return (
   
    <article className='w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl p-6 lg:p-12'>

    <Link href={websitelink} target='_blank' className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg mb-6 lg:mb-0 lg:mr-6'>
        {imageUrl ? (
            <img src={imageUrl} className="w-full h-auto hover:" alt={title} />
        ) : (
            <video className="w-full h-auto" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )}
    </Link>

    <div className='w-full lg:w-1/2 flex flex-col items-start justify-between'>
        <span className='text-red-700 font-medium text-xl'>
            {type}
        </span>
        <Link href={websitelink} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-2 text-left text-2xl lg:text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black'>{info}</p>
        <p className='my-2 font-medium text-black'>{techstack}</p>
        <div className='mt-2 flex items-center'>
            <Link href={githubLink} target='_blank'>
                <AiFillGithub size={35} className="min-w-16 min-h-16 rounded flex items-center justify-center" />
            </Link>
            <Link href={websitelink} target='_blank'>
                <button className="ml-4 rounded bg-black text-white p-2 px-6 text-lg font-semibold">Visit</button>
            </Link>
        </div>
    </div>
</article>


  )
}

export default ProjectDetails