import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ImageSlider from './imageSlider';
import SkillsGrid from './skillset';
import ExperienceDetails from './experiencedetails';
import EducationDetails from './educationdetails';

const skills = [
  'Java',
  'JavaScript',
  'Python',
  'C++',
  'Kotlin',
  'MySQL', 'LINQ', 'MongoDB',
 'Selenium Web Driver (Java)','REST Assured API Automation (Java)','Jmeter','Appium',
  'HTML','CSS', 'Next.JS', 'SFML (C++)', 'GitHub','JIRA','BitBucket',
  'Tailwind CSS',
];

const AboutPage = () => {
  return (
    <div className='w-full h-full overflow-auto flex flex-col items-center px-6'>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Embracing change with resilience',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Thrives in dynamic environments',
        1000,
        'Endures, adapts, emerges stronger',
        1000,
        'Confident leader, assertive strength',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '6em', display: 'inline-block'  }}
      repeat={Infinity}
      />

    <div className='grid w-full grid-cols-6 gap-16'>
      <div className='col-span-3 flex flex-col items-start justify-start'>
        <h2 className='mb-4 text-lg font-bold uppercase text-black/75 text-center'>Life Story</h2>
        <p className='font-medium text-justify'>
        My journey into the world of software engineering has been marked by an unconventional path, driven by determination, self-motivation, and a passion for excellence. Despite holding a bachelor's degree in Bio Technology, my interest for software development led me to delve into self-study, exploring programming basics and various computer science subjects. This commitment opened doors, and during my final year of bachelor's studies, I secured a position as a System Engineer at Infosys. In this role, I underwent rigorous training as a Test Analyst, specializing in Manual Testing and UI Automation testing using Selenium. Over two years, I honed my skills in Whitebox, Blackbox, and Integration Testing, while also mastering API Automation using the REST Assured Java Library.
        </p>
        <p className='my-4 font-medium text-justify'>
        My journey took an enlightening turn when I joined Turvo Logistics, a Product Based Company, as a Quality Engineer. This experience exposed me to the multifaceted nature of the software business world, highlighting the importance of developing well-rounded skills to thrive in a dynamic industry. Conducting research, I identified the four major technical sections of any software organization: Pre-Problem Analysis, Development of Solution for Problem, Testing and Deploying the Solution, and Post-Problem Analysis.
        </p>
        <p className='font-medium text-justify'>
        To bridge the gap between my aspirations and skills, I embarked on a transformative path by pursuing a Master's Degree in Software Development at the University of Utah. Throughout three semesters of intensive coursework, I cultivated a robust understanding of fundamental software engineering concepts. My ultimate goal is to expand my expertise into the realm of problem analysis and contribute to all stages of business development within a software organization. I am excited about the opportunity to leverage my unique background and skills to drive innovation and excellence.
        </p>
      </div>
      <div className='col-span-3 flex flex-col items-start justify-start'>
        <h2 className='mb-4 text-lg font-bold uppercase text-black/75 text-center'>Skills</h2>
        <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="w-full p-4 bg-gray-200 text-black rounded hover:bg-black hover:text-white">
            <p>{skill}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    

    <div className='grid w-full grid-cols-6 gap-16 pt-12'>
      <div className='col-span-3 flex flex-col items-start justify-start'>
        <h2 className='mb-4 text-lg font-bold uppercase text-black/75 text-center'>Experience</h2>
        <div className='w-full mx-auto relative'>
        <ul>
        <ExperienceDetails 
          position='Software Quality Assurance Engineer'
          company='Turvo India Private Limited'
          companylink='https://turvo.com'
          address='Hyderabad, India'
          time='Apr-2020 - Aug 2022'
          work='Worked on the team responsible for Quality Assurance of developed products in various environments, handled both Manual and Automation Test script development using Selenium for UI and REST Assured API Automation, and actively contributed to the release life cycle, ensuring the seamless and agile introduction of new software products to customers.Served as a Subject Matter Expert (SME), actively contributing to feature enhancements and providing KT to support developers'
        />    
        <ExperienceDetails 
          position='Software Automation Test Engineer'
          company='Infosys Private Limited'
          companylink='https://www.infosys.com'
          address='Hyderabad, India'
          time='Jun-2018 - Apr 2020'
          work='Worked on the team responsible for conducting Integration Testing for a banking client. My responsibilities included the continuous maintenance and development of an extensive UI test suite comprising nearly 2500 test cases on a daily basis as part of Regression Testing. Additionally, I worked on enhancing the scripts to prevent failures and ensure the effectiveness of the testing process. Performed White Box and Black Box testing on need basis during the Software Release.'
        />    
        </ul>

        </div>

      </div>
      <div className='col-span-3 flex flex-col items-start justify-start'>
        <h2 className='mb-4 text-lg font-bold uppercase text-black/75 text-center'>Education</h2>
        <div className='w-full mx-auto relative'>
        <ul>
        <EducationDetails 
          type='Masters in Computer Software Development (MS)'
          schoolLink='https://msd.utah.edu'
          place='University of Utah (UOU)'
          time='Aug-2022 - Dec 2023'
          gpa='3.96/4'
          info='Relevant Coursework  Including Algorithms, Operating Systems, Computer Networking, Database Management Systems, Data Visualization & Analytics , Android Programming'
        />    
        <EducationDetails 
          type='Bachelors of Technology in Bio-Technology (BTech)'
          schoolLink='https://www.nitap.ac.in'
          place='National Institute of Technology, Arunachal Pradesh (NITAP) India'
          time='Jun-2014 - Apr 2018'
          gpa='8.66/10'
          info='Relevant Coursework including Bio related subjects in engineering prospective'
       />    
        </ul>

        </div>
       
      </div>
    </div>
           
    </div>
  )
}

export default AboutPage
