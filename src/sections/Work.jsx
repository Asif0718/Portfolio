import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { featured, moreWork, profile } from "@/data";
import { MaskLines, Reveal } from "@/components/motion";

const Card = ({ p, i, total, progress }) => {
  const reduce = useReducedMotion();
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - 1 - i) * 0.05]);

  return (
    <div className="sticky top-0 flex h-[100dvh] items-start pt-20 md:items-center md:pt-0">
      <motion.article
        style={{ scale: reduce ? 1 : scale, top: i * 24 }}
        className="group relative grid w-full origin-top overflow-hidden rounded-[20px] border border-line bg-char md:h-[74dvh] md:grid-cols-12"
      >
        <div className="order-2 flex flex-col justify-between gap-6 p-6 md:order-1 md:col-span-5 md:p-10">
          <div>
            <p className="font-mono text-xs text-ash">{p.kind}</p>
            <h3 className="font-display mt-3 text-4xl md:text-6xl">{p.title}</h3>
            <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-bone/75 md:text-base">{p.summary}</p>
            <ul className="mt-5 hidden space-y-2 text-sm text-ash md:block">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2 h-px w-3 shrink-0 bg-ash" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-[11px] leading-relaxed text-ash">{p.tags.join(" / ")}</p>
            {(p.link || p.github) && (
              <div className="flex gap-3">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-transform active:scale-[0.97]"
                  >
                    Live site <ArrowUpRight className="size-4" strokeWidth={1.75} />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-bone/25 px-5 py-2.5 text-sm transition-colors hover:border-bone"
                  >
                    <Github className="size-4" strokeWidth={1.75} /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="relative order-1 aspect-[16/10] overflow-hidden md:order-2 md:col-span-7 md:aspect-auto">
          {p.image ? (
            <div className="flex h-full items-center justify-center bg-[#1c1c1c] p-5 md:p-10">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading="lazy"
                className="max-h-full w-full rounded-xl object-contain grayscale shadow-2xl shadow-black/50 transition duration-700 ease-out-expo group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
          ) : (
            <div className="flex h-full flex-col justify-end bg-paper p-6 text-ink md:p-10">
              <p className="font-display whitespace-nowrap text-[12vw] md:text-[6.4vw] 2xl:text-[92px]">{p.stat.value}</p>
              <p className="mt-3 font-mono text-xs md:text-sm">{p.stat.label}</p>
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
};

const MoreWork = () => (
  <div className="mt-24 md:mt-32">
    <h3 className="font-wide text-2xl font-semibold tracking-tight md:text-4xl">Earlier projects</h3>
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {moreWork.map((w, i) => (
        <Reveal as="li" key={w.title} delay={i * 0.08}>
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-[20px] border border-line bg-char transition-colors hover:border-bone/40"
          >
            <div className="flex aspect-[16/10] items-center justify-center bg-[#1c1c1c] p-5 md:p-8">
              <img
                src={w.image}
                alt={`${w.title} screenshot`}
                loading="lazy"
                className="max-h-full w-full rounded-xl object-contain grayscale transition duration-700 ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="font-wide text-xl font-semibold tracking-tight md:text-2xl">{w.title}</p>
                <p className="mt-1 text-sm text-ash">{w.kind}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover:rotate-45" strokeWidth={1.5} />
            </div>
          </a>
        </Reveal>
      ))}
    </ul>

    <Reveal className="mt-12">
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm underline decoration-line underline-offset-8 transition-colors hover:decoration-bone"
      >
        All repositories on GitHub <ArrowUpRight className="size-4" strokeWidth={1.75} />
      </a>
    </Reveal>
  </div>
);

export const Work = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 pb-28 md:px-10 md:pb-40">
      <h2 className="font-display text-[12.5vw] uppercase md:text-[11vw] 2xl:text-[156px]">
        <MaskLines lines={["Selected", "work"]} />
      </h2>

      <div ref={ref} className="mt-6">
        {featured.map((p, i) => (
          <Card key={p.title} p={p} i={i} total={featured.length} progress={scrollYProgress} />
        ))}
      </div>

      <MoreWork />
    </section>
  );
};
