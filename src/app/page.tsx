import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Education from "@/components/sections/Education/Education";
import BeyondCode from "@/components/sections/BeyondCode/BeyondCode";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <BeyondCode />
      <Contact />
    </main>
  );
}