import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data";
import { Magnetic, MaskLines } from "@/components/motion";
import { ease, INTRO_SECONDS } from "@/components/timing";

export const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const d = reduce ? 0 : INTRO_SECONDS;

  return (
    <section
      id="top"
      ref={ref}
      className="mx-auto grid min-h-[100dvh] max-w-[1400px] gap-10 overflow-hidden px-5 pb-8 pt-20 md:grid-cols-12 md:gap-8 md:px-10 md:pb-10 md:pt-24"
    >
      <div className="order-2 flex flex-col justify-between gap-10 md:order-1 md:col-span-7">
        <motion.p
          className="font-mono text-xs leading-relaxed text-ash md:text-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: d + 0.5 }}
        >
          Full stack developer
          <br />
          at Alonzo AI
        </motion.p>

        <div>
          <motion.h1
            className="font-display text-[11.4vw] uppercase md:text-[6.6vw] 2xl:text-[92px]"
            style={reduce ? undefined : { y: nameY }}
          >
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true">
              <MaskLines lines={["Mahammed", "Asif"]} delay={d + 0.25} animateOnMount />
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 grid max-w-[440px] gap-6 md:mt-10"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: d + 0.7, ease }}
          >
            <p className="text-base leading-relaxed text-bone/80 md:text-lg">
              I build React and FastAPI products, and bring LLMs into the workflows people already use.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink transition-transform active:scale-[0.97]"
                >
                  View work <ArrowDown className="size-4" strokeWidth={1.75} />
                </a>
              </Magnetic>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3 text-sm transition-colors hover:border-bone hover:bg-bone hover:text-ink"
              >
                Resume <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="order-1 ml-auto aspect-[4/5] w-[74vw] max-w-[440px] self-start overflow-hidden rounded-[20px] md:order-2 md:col-span-5 md:max-h-[calc(100dvh-8.5rem)] md:w-full md:self-end"
        initial={reduce ? false : { clipPath: "inset(100% 0 0 0)" }}
        animate={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{ duration: 1.4, delay: d, ease }}
      >
        <motion.img
          src="/photo.jpg"
          alt="Portrait of Shaik Mahammed Asif"
          className="h-full w-full scale-[1.18] object-cover object-top contrast-[1.15] grayscale"
          style={reduce ? undefined : { y: imgY }}
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
};
