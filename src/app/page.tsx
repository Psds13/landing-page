// app/page.tsx (ou app/home/page.tsx dependendo do seu projeto)

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contacts from "@/app/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
