const experiences = [
  {
    period: "May 2025 — July 2025",
    role: "Full Stack MERN Intern",
    company: "Smart Bridge Educational Services Pvt. Ltd. (APSCHE)",
    description:
      "Built and deployed a full-stack MERN web application. Improved backend response time by 25% and enhanced frontend performance by 15% by optimizing API handling and component rendering.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "AI Web Application Developer",
    company: "Personal Projects",
    description:
      "Developed AI-powered web applications including an AI Exam Notes Maker with Google OAuth authentication, Stripe payment integration, PDF export functionality, and interactive analytics dashboards using Recharts.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Stripe",
      "Recharts",
    ],
    current: false,
  },
  {
    period: "2024",
    role: "AI Resume Builder Developer",
    company: "Personal Project",
    description:
      "Built an AI-driven resume builder with customizable templates using Strapi CMS and SQLite. Designed modern responsive UI using TailwindCSS and ShadCN with secure backend architecture.",
    technologies: [
      "React.js",
      "Strapi",
      "SQLite",
      "TailwindCSS",
      "ShadCN",
    ],
    current: false,
  },
  {
    period: "2022 — Present",
    role: "B.Tech Computer Science (Cyber Security)",
    company: "Sri Venkateshwara College of Engineering",
    description:
      "Focused on Data Structures, Algorithms, DBMS, Computer Networks, and Cybersecurity fundamentals. Actively building real-world MERN stack and AI-based applications to strengthen full-stack engineering skills.",
    technologies: [
      "Data Structures",
      "DBMS",
      "Computer Networks",
      "Cybersecurity",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Professional Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              builds expertise.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my technical journey, highlighting internship
            experience, AI-powered projects, and continuous growth in full-stack
            development and cybersecurity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};