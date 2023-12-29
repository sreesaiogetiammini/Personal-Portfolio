import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import Project from "../components/project";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <main>
      <Analytics />
      <Header />
      <Project />
      <div className="pt-8">
        <Footer />
      </div>
    </main>
  );
}
