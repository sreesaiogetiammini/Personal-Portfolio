import { Inter } from 'next/font/google'
import Header from '../../components/header'
import Footer from '../../components/footer';
import AboutPage from '../../components/aboutpage';


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <main>
    <Header/>
    <AboutPage/>
    <div className='pt-8'>
        <Footer/>
    </div>
   
    </main>
  )
}
