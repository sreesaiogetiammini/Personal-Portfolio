import React from 'react'
import ProjectDetails from './projectdetails'

const Project = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>

    <div className='px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4 sm:gap-8'>

        <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
       
                    <ProjectDetails
                        title='Stremify Video Streaming Service'
                        type='Web Application'
                        githubLink='https://github.com/sreesaiogetiammini/CapstoneProject.git'
                        imageUrl='/stremify.png'
                        websitelink='https://sharestreamify.vercel.app/'
                        techstack='Node.js | Next.js | Tailwind CSS | TypeScript | MongoDb Cloud | Prisma |NextApi'
                        info='Developed a cross-platform video streaming platform where users can gift movies to Friends/Family with Next.js and React to ensure a consistent user experience on web and mobile interfaces. To efficiently manage user data, video content, and streaming metadata, I implemented Prisma as the database 
                        ORM and utilized MongoDB for data storage. Additionally, a scalable backend with Node.js will enable the platform to handle increased user activity and content growth while maintaining optimal performance and reliability.'
                    />
                    
            </div>


            <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
       
                    <ProjectDetails
                        title='Paints Andriod App'
                        type='Android Application'
                        githubLink='https://github.com/sreesaiogetiammini/Paints'
                        videoUrl='/paintsdemo.mp4'
                        websitelink='https://github.com/sreesaiogetiammini/Paints'
                        techstack='Kotlin | Room | Jetpack Compose | Flutter '
                        info='A collaborative drawing app was developed using Kotlin, Custom ViewModel, Jetpack Compose, and Ktor Server. It offers diverse tools for drawing, a user-friendly interface, and thorough testing. The app is reliable and performs well, enhancing user satisfaction. It was rigorously tested using Unit Test cases, Instrumented Tests, and Automation Testing using Espresso.'
                    />
                    
            </div>

            <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
       
                    <ProjectDetails
                        title='A Personal portfolio Website'
                        type='Portfolio Website'
                        githubLink='https://web.physics.utah.edu/~deemyad/#'
                        imageUrl='/personalportfolio.png'
                        websitelink='https://web.physics.utah.edu/~deemyad/#'
                        techstack='Next.js | Tailwind CSS | TypeScript '
                        info='A professional portfolio website using Next JS,  and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive.'
                    />
                    
            </div>

            <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
       
                    <ProjectDetails
                        title='A Simple portfolio Website'
                        type='Portfolio Website'
                        githubLink='https://web.physics.utah.edu/~deemyad/#'
                        imageUrl='/deemyadWebsite.png'
                        websitelink='https://web.physics.utah.edu/~deemyad/#'
                        techstack='HTML | CSS | JS'
                        info='A simple portfolio website was built using HTML , CSS and Javascript during my intial days into programming for the Professor from Department of Astronomy and Physics.'
                    />     
            </div>

            <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3'>
       
                    <ProjectDetails
                        title='BlackJack Game With SFML(C++)'
                        type='Fun Game'
                        githubLink='https://github.com/sreesaiogetiammini/BlackJackGameUsingSFML'
                        imageUrl='/gamescreen.png'
                        websitelink='https://github.com/sreesaiogetiammini/BlackJackGameUsingSFML'
                        techstack='C++ | SFML '
                        info=' This collaborative game project was built in C++ SFML libraries to make interactive screens for the game. Players can play the game 
                        with keyboard and mouse interactions.
                      '
                    />     
            </div>

                
            </div>
        </main>
        
  )
}

export default Project


