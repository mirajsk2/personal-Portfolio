// ============================================================
// resumeData.js
// Single source of truth for all portfolio content.
// SYNCED TO THE ACTUAL RESUME (source of truth) on 2026-09-28:
// no invented companies, employment, certifications, results,
// or links. Where the resume provides no per-project URL, the
// field is simply omitted (components render nothing fake).
// ============================================================

export const profile = {
  name: "SK MD MIRAJ",
  // Split for the two-tone hero name ("SK MD" dark · "MIRAJ" blue).
  nameFirst: "SK MD",
  nameAccent: "MIRAJ",
  title: "Frontend Developer",
  tagline: "React.js • Responsive UI • MERN Development",
  avatarSrc: "assets/profileImg.png", // falls back to monogram if missing
  avatarFallback: "M",
};

// Hero description (resume-derived, not exaggerated).
export const heroBio =
  "Frontend Developer skilled in HTML, CSS, JavaScript, and React.js, focused on building responsive and modular user interfaces while expanding into full-stack MERN development.";

// Availability line (does not imply current employment).
export const availability =
  "Available for Frontend Developer Internships & Entry-Level Opportunities";

// Resume-derived professional summary (used for print/SEO).
export const summary =
  "Frontend Developer skilled in HTML, CSS, JavaScript, and React.js with a strong foundation in responsive and modular UI design. Currently expanding expertise in full-stack MERN development, focusing on scalable APIs, clean architecture, and optimized user experiences.";

// Hero stat row (resume-supported numbers only).
export const stats = [
  { value: "8.5", label: "CGPA" },
  { value: "6+", label: "Projects" },
  { value: "12+", label: "Technologies" },
];

// "What I Do" — three focus cards.
// Icon keys map to the registry in components/icons.jsx.
export const services = [
  {
    icon: "react",
    title: "Frontend Development",
    blurb: "Building responsive and modular interfaces using modern frontend technologies.",
    items: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    icon: "bootstrap",
    title: "UI Design & Styling",
    blurb: "Creating clean, responsive interfaces with reusable styling systems.",
    items: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    icon: "nodejs",
    title: "Backend & API Integration",
    blurb: "Connecting frontend applications with backend services and REST APIs.",
    items: ["Node.js", "Express", "REST APIs"],
  },
];

// Dedicated professional skills section (resume-supported only).
// NOTE: MySQL kept at "Basics" per the resume; no MongoDB claimed;
// TypeScript appears only inside the Algo Trading project context.
export const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Database",
    skills: ["MySQL (Basics)"],
  },
  {
    label: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    label: "Platform / Tools",
    skills: ["VS Code"],
  },
  {
    label: "Core Computer Science",
    skills: ["Data Structures", "Algorithms", "OOPS"],
  },
  {
    label: "Soft Skills",
    skills: ["Communication", "Team Collaboration", "Time Management"],
  },
];

// Scrolling tech marquee (static when printed) — all resume skills.
export const marquee = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express",
  "REST APIs",
  "MySQL",
  "Git",
  "GitHub",
];

// "About" copy (resume-derived, no invented employment history).
export const aboutText =
  "I'm a Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I enjoy building responsive, modular and user-friendly interfaces, while expanding my full-stack development skills with Node.js, Express and REST APIs.";

// Structured facts shown in the About section (all resume-sourced).
export const aboutFacts = [
  { label: "Location", value: "Bangalore, India" },
  { label: "Education", value: "B.E. Computer Science" },
  { label: "University", value: "Garden City University" },
  { label: "Academic Stage", value: "7th Semester" },
];

// Experience: the resume has no employment history, so this is a
// single neutral, honest line (not a fabricated job entry).
export const experienceNote =
  "Currently building practical experience through frontend and full-stack projects.";

// Contact rows — `icon` keys map to the icons component.
// Phone and email are deep-linked; LinkedIn/GitHub are the real,
// verified links from the original codebase.
export const contact = [
  { icon: "location", label: "Bangalore, India" },
  { icon: "phone", label: "+91 8073496638", href: "tel:+918073496638" },
  {
    icon: "mail",
    label: "mirajmd89586@gmail.com",
    href: "mailto:mirajmd89586@gmail.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/skmdmiraj/",
  },
  { icon: "github", label: "GitHub", href: "https://github.com/mirajsk2" },
];

// CTA sub-heading (resume-appropriate, no over-claiming).
export const ctaSub =
  "Open to frontend internships, entry-level opportunities, projects and collaborations.";

// "Primary" marks the most current record (rendered most prominent).
export const education = [
  {
    degree: "B.E. in Computer Science",
    school: "Garden City University",
    meta: "2023 to 2027 · CGPA 8.5",
    note: "7th Semester",
    primary: true,
  },
  {
    degree: "Pre-University (PCMB)",
    school: "Govt. Pre-University College Malleshwaram",
    meta: "2021 to 2023 · 80%",
  },
  {
    degree: "SSLC",
    school: "Sri Vidya Kendra",
    meta: "2011 to 2021 · 87.84%",
  },
];

// `inProgress` renders the status pill on the sub-header.
// `label` is the category eyebrow; `mock` picks the visual card
// variant ("dark" | "light"). `github`/`live` are only set when a
// real URL exists — never invented. Real screenshots, when
// provided in `screenshot`, replace the mock panel.
export const projects = [
  {
    name: "Responsive Personal Portfolio Website",
    label: "Portfolio",
    mock: "dark",
    tech: ["React.js", "Tailwind CSS"],
    description:
      "Developed a responsive personal portfolio website to showcase skills, projects, education and professional profile with a modern, user-friendly interface.",
    github: "https://github.com/mirajsk2",
  },
  {
    name: "Responsive Coffee Shop Website",
    label: "Web Development",
    mock: "light",
    tech: ["React.js", "Tailwind CSS"],
    description:
      "Built a responsive coffee shop website with an attractive menu and modern UI, optimized for smooth navigation across desktop and mobile devices.",
    github: "https://github.com/mirajsk2",
  },
  {
    name: "Employee Leave Management System",
    label: "Full Stack",
    mock: "dark",
    tech: ["React.js", "Node.js", "Express.js", "JWT"],
    description:
      "Developed a full-stack leave management system where employees submit leave requests and managers approve or reject requests with remarks using secure role-based authentication.",
    github: "https://github.com/mirajsk2",
  },
  {
    name: "Binance Auto Posting Bot",
    label: "Automation",
    mock: "light",
    tech: ["Python", "Node.js"],
    description:
      "Developed an automation bot for automatically posting Binance-related content, integrating Python and Node.js for automated workflows.",
    github: "https://github.com/mirajsk2",
  },
  {
    name: "Auto Language Translation",
    label: "API Integration",
    mock: "dark",
    inProgress: true,
    tech: ["React.js", "Tailwind CSS", "External API"],
    description:
      "Developing a web application that translates text between languages using an external translation API with a simple and responsive React interface.",
  },
  {
    name: "Algo Trading on Binance",
    label: "Trading / Full Stack",
    mock: "light",
    inProgress: true,
    tech: ["Python", "React", "TypeScript", "FastAPI", "MySQL"],
    description:
      "Building a full-stack algorithmic trading platform for automated trading and market-data analysis using Python, FastAPI, React.js and MySQL.",
  },
];
