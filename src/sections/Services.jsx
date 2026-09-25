import { Cloud, LayoutTemplate, Server, Sparkles } from "lucide-react";
import { services } from "@/data";
import { Reveal } from "@/components/motion";

const icons = { layout: LayoutTemplate, server: Server, sparkles: Sparkles, cloud: Cloud };

export const Services = () => (
  <section id="services" className="grid gap-6 px-1 py-10 sm:px-4 md:py-16 lg:grid-cols-12 lg:gap-4">
    <Reveal className="lg:col-span-3 lg:px-4">
      <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] md:text-5xl">
        How can
        <br />I help?
      </h2>
    </Reveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
      {services.map((s, i) => {
        const Icon = icons[s.icon];
        return (
          <Reveal key={s.title} delay={(i % 2) * 0.08}>
            <article className="lift flex h-full flex-col justify-between gap-10 rounded-[20px] bg-card p-6">
              <div className="flex gap-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-soft text-teal-deep">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
              <h3 className="text-xl font-medium tracking-tight">{s.title}</h3>
            </article>
          </Reveal>
        );
      })}
    </div>
  </section>
);
