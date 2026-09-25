import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { experience } from "@/data";
import { MaskLines, Reveal } from "@/components/motion";

export const Experience = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });

  return (
    <section id="experience" className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-28 md:grid-cols-12 md:px-10 md:pb-40">
      <h2 className="font-display text-[10vw] uppercase md:sticky md:top-28 md:col-span-5 md:self-start md:text-[4vw] 2xl:text-[56px]">
        <MaskLines lines={["Experience"]} />
      </h2>

      <div ref={ref} className="relative md:col-span-7">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-line" />
        <motion.div
          className="absolute bottom-0 left-0 top-0 w-px origin-top bg-bone"
          style={{ scaleY: reduce ? 1 : scrollYProgress }}
        />

        <ol className="space-y-20 md:space-y-28">
          {experience.map((e) => (
            <li key={e.org} className="relative pl-8 md:pl-12">
              <span
                className={`absolute -left-[5px] top-1.5 size-[11px] rounded-full border border-bone ${
                  e.current ? "bg-bone" : "bg-ink"
                }`}
              />
              <Reveal>
                <p className="font-mono text-xs text-ash">
                  {e.period}
                  {e.current && <span className="ml-3 text-bone">Current role</span>}
                </p>
                <h3 className="font-wide mt-4 text-2xl font-semibold tracking-tight md:text-4xl">{e.org}</h3>
                <p className="mt-2 text-bone/70">{e.role}</p>
                <ul className="mt-6 max-w-[60ch] space-y-3 text-sm leading-relaxed text-ash md:text-base">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
