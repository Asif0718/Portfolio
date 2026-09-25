import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Mission } from "@/sections/Mission";
import { Work } from "@/sections/Work";
import { Services } from "@/sections/Services";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";

function App() {
  useEffect(() => {
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true, anchors: { offset: -96 }, lerp: 0.09 });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-sheet">
      <div className="mx-auto max-w-[1440px] px-3 pb-3 sm:px-6 sm:pb-6 lg:px-10">
        <Navbar />
        <main className="space-y-4">
          <Hero />
          <Mission />
          <Work />
          <Services />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
