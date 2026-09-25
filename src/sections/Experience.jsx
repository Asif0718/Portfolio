import { ArrowDownToLine, Briefcase, GraduationCap } from "lucide-react";
import { experience, profile } from "@/data";
import { Reveal } from "@/components/motion";

const icons = [Briefcase, GraduationCap];

export const Experience = () => (
  <section id="experience" className="grid gap-4 px-1 py-10 sm:px-4 md:grid-cols-2 md:py-16">
    <Reveal className="md:row-span-2">
      <div className="flex h-full flex-col justify-between gap-10 rounded-[20px] bg-card p-6 sm:p-8">
        <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-5xl">
          Want to see
          <br />
          my experience?
        </h2>
        <div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            The full story, including skills and coursework, is in my resume.
          </p>
          <a
            href={profile.resume}
            download
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.97]"
          >
            <ArrowDownToLine className="size-4" /> Resume
          </a>
        </div>
      </div>
    </Reveal>

    {experience.map((e, i) => {
      const Icon = icons[i];
      return (
        <Reveal key={e.org} delay={0.08 * (i + 1)}>
          <article className="lift h-full rounded-[20px] bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 text-muted">
              <Icon className="size-5" strokeWidth={1.75} />
              <span className="text-sm font-medium">{e.org}</span>
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight">{e.role}</h3>
            <p className="mt-1 text-sm text-muted">{e.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{e.note}</p>
          </article>
        </Reveal>
      );
    })}
  </section>
);
