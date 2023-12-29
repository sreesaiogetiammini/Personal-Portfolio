import { Inter } from 'next/font/google'
import Header from '../components/header'
import AboutPage from '../components/aboutpage'
import Footer from '../components/footer'
import { Analytics } from '@vercel/analytics/react'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main>
      <Analytics/>
    <Header/>
    <AboutPage/>
    <div className='pt-8'>
        <Footer/>
    </div>
    </main>
  )
}
