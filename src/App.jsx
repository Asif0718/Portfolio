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
    <div className="px-2 py-2 sm:px-4 sm:py-4 lg:px-8 lg:py-6">
      <div className="mx-auto max-w-[1240px] rounded-[32px] bg-sheet px-3 pb-3 shadow-[0_30px_80px_-40px_rgb(28_28_46/0.35)] sm:px-4 sm:pb-4">
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
