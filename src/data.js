export const profile = {
  name: "Shaik Mahammed Asif",
  role: "Full Stack Developer",
  place: "Tirupati, India",
  email: "mahammedasifqwerty@gmail.com",
  phone: "+91 72075 25953",
  phoneHref: "tel:+917207525953",
  github: "https://github.com/Asif0718",
  linkedin: "https://linkedin.com/in/mahammedasiff",
  resume: "/Asif_Resume.pdf",
};

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Simple Icons slugs, rendered from cdn.simpleicons.org
export const stack = [
  { slug: "react", name: "React" },
  { slug: "fastapi", name: "FastAPI" },
  { slug: "python", name: "Python" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "docker", name: "Docker" },
  { slug: "langchain", name: "LangChain and LangGraph" },
  { slug: "vercel", name: "Vercel" },
  { slug: "render", name: "Render" },
];

export const projects = [
  {
    title: "Editor Lab",
    kind: "Poster automation platform",
    year: "2026",
    summary:
      "Visual template editor that turns one base poster into hundreds of customized ones, with REST APIs for external apps.",
    tags: ["React.js", "FastAPI", "AWS EC2", "Amazon S3"],
    image: "/projects/editor-lab.jpg",
  },
  {
    title: "PrepMate AI",
    kind: "AI placement assistant",
    year: "2026",
    summary: "Resume analysis, preparation guides, job recommendations and application tracking.",
    tags: ["FastAPI", "OpenRouter", "JWT"],
    image: "/projects/project5.png",
    href: "https://prep-mate-ai-frontend.vercel.app/",
  },
  {
    title: "AI Exam Notes",
    kind: "AI study tool",
    year: "2025",
    summary: "Exam-oriented notes on a credit model, with Google sign-in, Stripe and PDF export.",
    tags: ["Node.js", "Stripe", "Google OAuth"],
    image: "/projects/project1.png",
    href: "https://examnotesaiclient-ancn.onrender.com/",
  },
  {
    title: "AI Resume Builder",
    kind: "Resume builder",
    summary: "Customizable resume templates with AI content suggestions.",
    tags: ["Strapi", "SQLite", "ShadCN"],
    image: "/projects/project2.png",
    href: "https://github.com/Asif0718/Ai-Resume-Builder",
  },
  {
    title: "Shop EZ",
    kind: "MERN e-commerce",
    year: "2025",
    summary: "Full stack store built and deployed during an internship.",
    tags: ["React.js", "Express.js", "MongoDB"],
    image: "/projects/project3.png",
    href: "https://github.com/Asif0718/Shop-EZ",
  },
];

export const services = [
  {
    icon: "layout",
    title: "Frontend",
    body: "Responsive React interfaces with Tailwind CSS, ShadCN and Bootstrap that stay fast on every screen.",
  },
  {
    icon: "server",
    title: "Backend & APIs",
    body: "FastAPI and Node.js services with REST APIs, JWT auth and MongoDB or SQL storage.",
  },
  {
    icon: "sparkles",
    title: "AI integration",
    body: "RAG pipelines, agentic workflows with LangGraph and LLM features wired into real products.",
  },
  {
    icon: "cloud",
    title: "Cloud & deployment",
    body: "Shipping on AWS EC2 and S3, Vercel, Render and Docker, with Git-based workflows.",
  },
];

export const experience = [
  {
    period: "July 2026 - Present",
    role: "Associate Full Stack Developer Intern",
    org: "Alonzo AI",
    note: "Own Editor Lab, a poster automation platform used by multiple colleges and hundreds of users.",
  },
  {
    period: "2022 - 2026",
    role: "B.Tech CSE (Cyber Security), CGPA 9.16",
    org: "Sri Venkateshwara College of Engineering",
    note: "Coursework in DSA, DBMS, operating systems, computer networks and OOP.",
  },
];
