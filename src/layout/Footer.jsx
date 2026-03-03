import { Github, Linkedin, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Asif0718",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/mahammedasiff",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-xl font-bold tracking-tight hover:text-primary"
            >
              MA<span className="text-primary">.</span>
            </button>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Shaik Mahammed Asif. Built with React & Tailwind.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-8 text-xs text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500" /> by Asif
        </div>
      </div>
    </footer>
  );
};