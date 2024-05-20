import React from 'react'

interface InputProps {
    position: string;
    company: string;
    companylink: string;
    time: string;
    address: string;
    work:string
}
// Hello from origin how are you doing

const ExperienceDetails : React.FC<InputProps>  = ({position,company,companylink,time,address,work}) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-0.6 mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companylink} target='_blank' className='text-zinc-800 capitalize'>@ {company}</a></h3>
              
                <span className=' capitalize font-medium text-xl text-black/75 '>

                    {time}| {address}

                </span>
                <p className='font-medium w-full pt-4'>
                    {work}
                </p>

            </div>

    </li>
  )
}

export default ExperienceDetails
