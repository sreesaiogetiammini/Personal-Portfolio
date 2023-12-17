import React from 'react'


interface InputProps {
    type: string;
    place: string;
    schoolLink: string;
    time: string;
    gpa:string;
    info:string
  }

const EducationDetails : React.FC<InputProps> = ({type,time,place,schoolLink,info ,gpa}) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-0.6 mx-auto flex flex-col items-center justify-between'>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{type}&nbsp;<a href={schoolLink} target='_blank' className='text-zinc-800 capitalize'>@ {place}</a></h3>
              
                <span className=' capitalize font-medium text-xl text-black/75 '>

                    {time}| {gpa}

                </span>
                <p className='font-medium w-full'>
                    {info}
                </p>

            </div>

    </li>
  )
}

export default EducationDetails
