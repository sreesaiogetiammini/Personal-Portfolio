import { Inter } from 'next/font/google'
import Header from '../../components/header'
import Footer from '../../components/footer';
import HomePage from '../../components/homepage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col h-screen overflow-hidden'>
    <Header/>
    <HomePage/>
    <Footer/>   
    </main>
  )
}
