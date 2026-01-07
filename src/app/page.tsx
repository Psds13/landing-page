// app/page.tsx (ou app/home/page.tsx dependendo do seu projeto)

import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contacts from "@/app/components/Contacts";
import Sobre from "./components/Sobre";
import Methodology from "./components/Methodology";


export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Skills />
      <Projects />
      <Methodology />
      <Contacts />
    </main>
  );
}
