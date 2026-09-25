import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/motion";

const statement =
  "I'm a full stack developer working across React, FastAPI, Python and MongoDB. I build web apps that scale, automate the repetitive parts of people's work, and wire LLMs into products so they do something useful.";

const stats = [
  { value: "70%", label: "Faster poster workflows with Editor Lab" },
  { value: "100s", label: "Of users across multiple colleges" },
  { value: "9.16", label: "CGPA in B.Tech CSE (Cyber Security)" },
];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
};

export const About = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = statement.split(" ");

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <p ref={ref} className="font-wide max-w-[22ch] text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
        {reduce
          ? statement
          : words.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {w}
              </Word>
            ))}
      </p>

      <dl className="mt-20 grid gap-10 border-t border-line pt-10 md:mt-28 md:grid-cols-3 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <dt className="font-display text-6xl md:text-7xl">{s.value}</dt>
            <dd className="mt-4 max-w-[24ch] text-sm leading-relaxed text-ash">{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
};
