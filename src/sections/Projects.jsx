import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "AI Exam Notes Maker",
    description:
      "A MERN-based AI web application that generates exam-oriented notes with a credit-based usage model, Google OAuth authentication, Stripe payment integration, PDF export functionality, and interactive analytics dashboards using Recharts.",
    image: "/projects/project1.png",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "Stripe",
      "Recharts",
    ],
    link: "https://examnotesaiclient-ancn.onrender.com/",
    github: "https://github.com/Asif0718/1.ExamNotesAI",
  },
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder with customizable templates and smart content suggestions. Built using Strapi CMS with SQLite and designed using TailwindCSS & ShadCN for a modern responsive UI.",
    image: "/projects/project2.png",
    tags: [
      "React.js",
      "Node.js",
      "Strapi",
      "SQLite",
      "TailwindCSS",
      "ShadCN",
    ],
    link: "#",
    github: "https://github.com/Asif0718/Ai-Resume-Builder",
  },
  {
    title: "Shop EZ - Full Stack MERN Application",
    description:
      "Developed and deployed a full-stack E-commerce MERN web application during internship. Optimized backend APIs improving response time by 25% and enhanced frontend performance by 15%.",
    image: "/projects/project3.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
    link: "#",
    github: "https://github.com/Asif0718/Shop-EZ",
  },
  {
    title: "AI-Powered Learning Management System (In Progress)",
    description:
      "A full-stack MERN Learning Management System with AI-powered course recommendations and smart content generation. Implemented secure authentication using Google OAuth and JWT, role-based access control (Admin/Instructor/Student), protected routes, course management, and progress tracking.",
    image: "/projects/project4.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google OAuth",
      "MERN Stack"
    ],
    link: "#",
    github: "https://github.com/Asif0718/AI_LMS",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              solve real problems.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A showcase of AI-powered web applications, full-stack MERN
            development, authentication systems, and performance-optimized
            backend architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton
            onClick={() =>
              window.open("https://github.com/Asif0718", "_blank")
            }
          >
            View GitHub Profile
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};