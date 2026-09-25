import { motion, useReducedMotion } from "motion/react";
import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile, stack } from "@/data";
import { Magnetic, MaskLines } from "@/components/motion";
import { ease } from "@/components/timing";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", href: profile.phoneHref },
];

const Tile = ({ i, className = "", children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden rounded-[20px] ${className}`}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35 + i * 0.1, ease }}
    >
      {children}
    </motion.div>
  );
};

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="grid items-center gap-12 px-3 pb-10 pt-14 sm:px-8 md:pt-20 lg:grid-cols-2 lg:gap-10 lg:px-14 lg:pb-16">
      <div>
        <motion.p
          className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-teal-deep"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="size-1.5 rounded-full bg-teal" />
          Open to full-time roles
        </motion.p>

        <h1 className="mt-6 text-[13vw] font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.4rem]">
          <MaskLines lines={["Hi, I'm a", "Full Stack", "Developer"]} delay={0.1} animateOnMount />
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I build React and FastAPI products and bring LLMs into everyday workflows. Currently an intern at Alonzo AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_24px_-10px_rgb(28_28_30/0.6)] transition-transform active:scale-[0.97]"
              >
                Contact me <ArrowRight className="size-4" />
              </a>
            </Magnetic>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:border-ink/40 active:scale-[0.97]"
            >
              Resume <ArrowDownToLine className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <Tile i={0} className="flex flex-1 flex-col justify-between gap-4 bg-card p-4 sm:p-5">
            <div>
              <p className="text-base font-medium leading-tight tracking-tight sm:text-xl">{profile.name}</p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{profile.place}</p>
            </div>
            <dl className="hidden space-y-3 border-t border-line pt-4 text-sm sm:block lg:hidden xl:block">
              <div>
                <dt className="text-xs text-muted">Currently</dt>
                <dd className="mt-0.5 font-medium leading-snug">Full Stack Developer Intern, Alonzo AI</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Education</dt>
                <dd className="mt-0.5 font-medium leading-snug">B.Tech CSE, CGPA 9.16</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-sheet px-2.5 py-1 text-[11px] font-medium sm:hidden lg:inline xl:hidden">Intern at Alonzo AI</span>
              <span className="rounded-full bg-teal-soft px-2.5 py-1 text-[11px] font-medium text-teal-deep">React + FastAPI</span>
            </div>
          </Tile>

          <Tile i={1} className="grid grid-cols-2 place-items-center gap-2 py-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-12 place-items-center rounded-full bg-card shadow-[0_6px_18px_-10px_rgb(28_28_46/0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 sm:size-14"
              >
                <s.icon className="size-5" strokeWidth={1.75} />
              </a>
            ))}
          </Tile>
        </div>

        <Tile i={2} className="col-span-3 aspect-[3/4] bg-card">
          <img src="/photo.jpg" alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" fetchPriority="high" />
        </Tile>

        <Tile i={3} className="bg-lavender col-span-5 flex flex-col justify-between gap-4 p-5">
          <p className="max-w-[18rem] text-sm text-ink/75">The stack behind my recent projects</p>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
            <ul className="animate-marquee flex w-max items-center gap-8">
              {[...stack, ...stack].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-ink/70">
                  <img src={`https://cdn.simpleicons.org/${s.slug}/3a3a4a`} alt="" className="size-5" loading="lazy" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </Tile>
      </div>
    </section>
  );
};
