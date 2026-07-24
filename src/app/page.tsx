import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Journey/Journey";
import BeyondCode from "@/components/sections/BeyondCode/BeyondCode";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";
import Journey from "@/components/sections/Journey/Journey";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <BeyondCode />
      <Contact />
      <Footer />
    </main>
  );
}