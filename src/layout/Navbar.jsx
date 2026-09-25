import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { navLinks, profile } from "@/data";
import { ease } from "@/components/timing";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160);
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 text-white mix-blend-difference"
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease }}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#top" className="font-wide text-lg font-bold tracking-tight">
            SMA
          </a>

          <ul className="hidden items-center gap-10 text-sm md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative py-1">
                  {l.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            download
            className="hidden rounded-full border border-white/40 px-5 py-2 text-sm transition-colors hover:bg-white hover:text-black md:inline-block"
          >
            Resume
          </a>

          <button
            className="text-sm md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-30 flex flex-col justify-end bg-ink px-5 pb-12 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
          >
            <ul className="space-y-2">
              {[...navLinks, { href: profile.resume, label: "Resume" }].map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block text-[15vw]"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-xs text-ash">{profile.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
