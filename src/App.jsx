import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/layout/Navbar";
import { Intro } from "@/components/Intro";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Work } from "@/sections/Work";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";

function App() {
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.09 });
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
