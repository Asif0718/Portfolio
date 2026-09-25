import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Reveal } from "@/components/motion";

const statement =
  "My goal is to build software that removes busywork: fast interfaces, dependable APIs and AI features that actually help the people using them.";

const stats = [
  { value: "70%", label: "faster poster workflows" },
  { value: "100s", label: "of users on Editor Lab" },
  { value: "9.16", label: "CGPA, B.Tech CSE" },
];

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.3, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
};

export const Mission = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.55"] });
  const words = statement.split(" ");

  return (
    <section className="rounded-[20px] bg-teal px-6 py-10 text-white sm:px-10 md:px-14 md:py-16">
      <p ref={ref} className="max-w-4xl text-2xl font-medium leading-[1.2] tracking-[-0.02em] sm:text-3xl md:text-[2.6rem]">
        {reduce
          ? statement
          : words.map((w, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
                {w}
              </Word>
            ))}
      </p>

      <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 md:mt-14 md:max-w-2xl">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <dt className="text-3xl font-medium tracking-tight md:text-4xl">{s.value}</dt>
            <dd className="mt-1 text-xs text-white/75 md:text-sm">{s.label}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
};
