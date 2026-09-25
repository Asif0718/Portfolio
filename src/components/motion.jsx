import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { ease } from "@/components/timing";

export const Reveal = ({ children, delay = 0, y = 32, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  );
};

// Each line slides up out of its own clipping mask. The trigger sits on the
// unclipped wrapper: the lines themselves start fully masked, so they never intersect.
export const MaskLines = ({ lines, className = "", delay = 0, animateOnMount = false }) => {
  const reduce = useReducedMotion();
  const trigger = animateOnMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, amount: 0.4 } };
  return (
    <motion.span className={`block ${className}`} initial={reduce ? false : "hidden"} {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 1.1, delay: delay + i * 0.08, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export const Magnetic = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};
