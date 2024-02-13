import { Inter } from "next/font/google";
import Header from "../components/header";
import HomePage from "../components/homepage";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";
import AboutPage from "@/components/aboutpage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-screen lg:overflow-hidden">
      <Analytics />
      <Header />
      <AboutPage />
      <div className="pt-8">
        <Footer />
      </div>
    </main>
  );
}
