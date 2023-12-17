import { Inter } from "next/font/google";
import Header from "../components/header";
import HomePage from "../components/homepage";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Header />
      <HomePage />
      <div className='pt-8'>
        <Footer/>
    </div>
    </main>
  );
}
