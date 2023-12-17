import { Inter } from 'next/font/google'
import Header from '../../components/header'
import Footer from '../../components/footer';
import HomePage from '../../components/homepage';
import Project from '../../components/project';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main>
    <Header/>
    <Project/>
    <div className='pt-8'>
        <Footer/>
    </div>
    </main>
  )
}
