import { skillGroups } from "@/data";
import { Reveal } from "@/components/motion";

const marquee = ["React.js", "FastAPI", "Python", "MongoDB", "LangGraph", "RAG", "AWS", "Docker", "Tailwind CSS", "Node.js"];

export const Skills = () => (
  <section aria-labelledby="skills-title" className="py-28 md:py-40">
    <div className="overflow-hidden border-y border-line py-4 md:py-6" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {[...marquee, ...marquee].map((s, i) => (
          <span
            key={i}
            className={`font-display whitespace-nowrap px-4 text-3xl uppercase md:px-6 md:text-5xl ${
              i % 2 ? "text-outline" : ""
            }`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>

    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <h2 id="skills-title" className="font-wide mt-20 text-3xl font-semibold tracking-tight md:mt-28 md:text-5xl">
        What I work with
      </h2>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 0.08} className="border-t border-line pt-6">
            <h3 className="text-sm text-ash">{g.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-4 py-2 text-sm transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
