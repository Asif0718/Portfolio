import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TailwindCSS",
  "ShadCN",
  "JWT",
  "Google OAuth",
  "Stripe",
  "REST APIs",
  "SQLite",
  "Strapi",
  "Git",
  "Postman",
  "Recharts",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                MERN Stack Developer • AI Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary glow-text">
                  Shaik Mahammed Asif
                </span>
                <br />
                Building secure & intelligent
                <br />
                <span className="font-serif italic font-normal text-white">
                  full-stack applications.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                A Full Stack MERN Developer and Cybersecurity student passionate
                about building AI-powered web applications with secure
                authentication systems, payment integrations, and scalable
                backend architectures.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => (window.location.href = "#contact")}>
                Contact Me <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <a
                      href="/Asif_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <AnimatedBorderButton>
                        <Download className="w-5 h-5 mr-2" />
                        Download Resume
                      </AnimatedBorderButton>
                    </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>

              <a
                href="https://github.com/Asif0718"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/mahammedasiff"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div>
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Shaik Mahammed Asif"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                {/* Projects Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Major Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies & Tools
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};