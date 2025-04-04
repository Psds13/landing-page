import Contacts from "@/app/components/Contacts";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
