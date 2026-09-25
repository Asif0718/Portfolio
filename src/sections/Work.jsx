import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/data";
import { Reveal } from "@/components/motion";

const ProjectCard = ({ p, featured }) => {
  const Tag = p.href ? "a" : "div";
  const linkProps = p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Tag {...linkProps} className="lift group block h-full rounded-[20px] bg-card p-3 sm:p-4">
      <div className={`relative overflow-hidden rounded-[14px] bg-sheet ${featured ? "aspect-[16/9]" : "aspect-[2/1]"}`}>
        <img
          src={p.image}
          alt={`${p.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
        {p.overlay && (
          <div className="absolute inset-y-0 left-0 flex w-[55%] flex-col justify-center gap-2 p-4 sm:gap-4 sm:p-8 lg:p-12">
            <span className="w-fit rounded-full bg-card px-2.5 py-1 text-[10px] font-medium text-teal-deep shadow-sm sm:text-xs">
              {p.overlay.tag}
            </span>
            <p className="text-lg font-medium leading-[1.05] tracking-[-0.035em] sm:text-3xl lg:text-[2.6rem]">
              {p.overlay.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
            <p className="hidden max-w-xs text-sm leading-relaxed text-ink/65 sm:block">{p.overlay.body}</p>
            <span className="hidden w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-white sm:inline-flex">
              Generate all <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        )}
        {p.href && (
          <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-card opacity-0 shadow transition duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
          {p.year && <span className="text-sm text-muted">{p.year}</span>}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t, i) => (
            <li
              key={t}
              className={`rounded-full px-3 py-1 text-xs font-medium ${i === 0 ? "bg-teal-soft text-teal-deep" : "bg-sheet text-muted"}`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Tag>
  );
};

export const Work = () => (
  <section id="work" className="grid gap-6 px-1 py-10 sm:px-4 md:py-16 lg:grid-cols-12 lg:gap-4">
    <Reveal className="lg:sticky lg:top-28 lg:col-span-3 lg:self-start lg:px-4">
      <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] md:text-5xl">
        Selected
        <br />
        work
      </h2>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.97]"
      >
        <Github className="size-4" /> See all
      </a>
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={i === 0 ? 0 : (i % 2) * 0.08} className={i === 0 ? "sm:col-span-2" : ""}>
          <ProjectCard p={p} featured={i === 0} />
        </Reveal>
      ))}
    </div>
  </section>
);
