import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "MERN Development",
    description:
      "Building full-stack web applications using React, Node.js, Express, and MongoDB.",
  },
  {
    icon: Rocket,
    title: "AI Integration",
    description:
      "Developing AI-powered applications with smart automation and analytics.",
  },
  {
    icon: Users,
    title: "Authentication & Payments",
    description:
      "Implementing secure Google OAuth, JWT authentication and Stripe payment systems.",
  },
  {
    icon: Lightbulb,
    title: "Cybersecurity Focus",
    description:
      "Applying security best practices in backend systems and database protection.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              I'm a passionate Full Stack MERN Developer and Cybersecurity
                    enthusiast currently pursuing B.Tech in Computer Science
                    (Cyber Security) at Sri Venkateshwara College of Engineering.
                    I love building intelligent web applications that solve real-world problems.
              </p>
              <p>
              I specialize in the MERN stack — React.js, Node.js, Express.js,
  and MongoDB — along with authentication systems like Google OAuth
  and JWT. I have built AI-powered applications with payment
  integrations using Stripe and interactive dashboards using Recharts.
              </p>
              <p>
              My focus is on writing clean, scalable backend systems and
  creating modern, responsive user interfaces using TailwindCSS
  and ShadCN. I’m always exploring AI, security, and performance
  optimization to build smarter digital solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
              "My mission is to build secure, scalable, and AI-powered web applications that make a meaningful impact while delivering high performance and clean architecture."

              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
