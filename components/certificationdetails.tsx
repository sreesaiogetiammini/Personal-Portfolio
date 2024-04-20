import React from 'react'


interface InputProps {
    name: string;
    place: string;
    schoolLink: string;
    time: string;
    info:string;
  }

const Certificationdetails : React.FC<InputProps> = ({name,time,place,schoolLink,info}) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-0.6 mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{name}&nbsp;<a href={schoolLink} target='_blank' className='text-zinc-800 capitalize'>@ {place}</a></h3>
              
                <span className=' capitalize font-medium text-xl text-black/75 '>

                    {time} 

                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>

            </div>

    </li>
  )
}

export default Certificationdetails
