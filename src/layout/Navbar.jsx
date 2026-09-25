import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data";
import { ease } from "@/components/timing";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-2 z-40 pt-3 sm:top-4 sm:pt-4">
      <nav className="flex h-16 items-center justify-between rounded-[20px] bg-card/90 px-4 shadow-[0_8px_30px_-20px_rgb(28_28_46/0.3)] backdrop-blur-md sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-ink text-sm font-semibold text-white">A</span>
          <span className="text-sm font-semibold uppercase tracking-wide">Mahammed Asif</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.97]"
          >
            Resume
          </a>
          <button
            className="grid size-10 place-items-center rounded-full bg-sheet md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="mt-2 space-y-1 rounded-[20px] bg-card p-3 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg hover:bg-sheet"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};
