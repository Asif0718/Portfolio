export const profile = {
  name: "Shaik Mahammed Asif",
  role: "Full Stack Developer",
  email: "mahammedasifqwerty@gmail.com",
  phone: "+91 72075 25953",
  phoneHref: "tel:+917207525953",
  github: "https://github.com/Asif0718",
  linkedin: "https://linkedin.com/in/mahammedasiff",
  resume: "/Asif_Resume.pdf",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript (basic)"] },
  { label: "Frontend", items: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "ShadCN", "Responsive UI"] },
  { label: "Backend", items: ["FastAPI", "Node.js", "Express.js", "REST APIs"] },
  { label: "AI", items: ["Generative AI", "RAG", "Agentic AI", "LangGraph", "LLM integration"] },
  { label: "Databases", items: ["MongoDB", "SQL"] },
  { label: "Cloud & tools", items: ["AWS EC2", "Amazon S3", "Vercel", "Render", "Docker", "Git", "GitHub"] },
];

export const featured = [
  {
    title: "Editor Lab",
    kind: "Poster automation & API platform",
    summary:
      "A visual template editor that turns one base poster into hundreds of customized ones for sports statistics and college events.",
    points: [
      "Bulk generation from reusable templates, about 70% faster poster workflows",
      "FastAPI services let external apps generate posters from template JSON",
      "Hosted on AWS EC2, generated assets stored in Amazon S3",
    ],
    tags: ["React.js", "FastAPI", "Python", "MongoDB", "AWS EC2", "Amazon S3"],
    image: null,
    stat: { value: "1 → 100s", label: "One base template, hundreds of posters" },
  },
  {
    title: "PrepMate AI",
    kind: "AI placement assistant",
    summary:
      "A career platform for resume analysis, personalized preparation guides, job recommendations and application tracking.",
    points: [
      "Resume PDF parsing with LLM analysis through OpenRouter",
      "JWT authentication and a responsive React interface",
    ],
    tags: ["React.js", "FastAPI", "MongoDB Atlas", "OpenRouter", "JWT", "Tailwind CSS"],
    image: "/projects/project5.png",
    link: "https://prep-mate-ai-frontend.vercel.app/",
    github: "https://github.com/Asif0718/PrepMateAi-Frontend",
  },
  {
    title: "AI Exam Notes",
    kind: "AI study tool",
    summary:
      "Generates exam-oriented notes on a credit-based model, with Google sign-in, Stripe payments and PDF export.",
    points: ["Usage analytics dashboards built with Recharts"],
    tags: ["React.js", "Node.js", "MongoDB", "Google OAuth", "Stripe"],
    image: "/projects/project1.png",
    link: "https://examnotesaiclient-ancn.onrender.com/",
    github: "https://github.com/Asif0718/1.ExamNotesAI",
  },
];

export const moreWork = [
  {
    title: "AI Resume Builder",
    kind: "Strapi, SQLite, ShadCN",
    image: "/projects/project2.png",
    href: "https://github.com/Asif0718/Ai-Resume-Builder",
  },
  {
    title: "Shop EZ",
    kind: "MERN e-commerce",
    image: "/projects/project3.png",
    href: "https://github.com/Asif0718/Shop-EZ",
  },
];

export const experience = [
  {
    period: "July 2026 - Present",
    current: true,
    role: "Associate Full Stack Developer Intern",
    org: "Alonzo AI",
    points: [
      "Own and evolve Editor Lab, a poster automation platform used by multiple colleges and hundreds of users.",
      "Built REST APIs so external applications can generate customized posters from template JSON.",
      "Improved sports data workflows that extract and structure statistics from record books and PDFs.",
    ],
  },
  {
    period: "2022 - 2026",
    role: "B.Tech, Computer Science (Cyber Security)",
    org: "Sri Venkateshwara College of Engineering, Tirupati",
    points: [
      "CGPA 9.16 / 10.",
      "Coursework in data structures and algorithms, DBMS, operating systems, computer networks and OOP.",
    ],
  },
];
