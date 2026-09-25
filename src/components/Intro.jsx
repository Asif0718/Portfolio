import { motion, useReducedMotion } from "motion/react";
import { ease, INTRO_SECONDS } from "@/components/timing";

export const Intro = () => {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 flex items-end justify-between bg-paper px-5 pb-8 text-ink md:px-10 md:pb-10"
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.9, delay: INTRO_SECONDS - 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <motion.p
          className="font-display text-4xl uppercase md:text-7xl"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease }}
        >
          Asif
        </motion.p>
      </div>
      <motion.p
        className="font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Portfolio 2026
      </motion.p>
    </motion.div>
  );
};
