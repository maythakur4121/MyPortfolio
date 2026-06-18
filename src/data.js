// All your content lives here — edit this file to update the site.

export const profile = {
  name: "Mayank Thakur",
  role: "PHP / Laravel Developer",
  location: "Mohali, Punjab, India",
  email: "may.thakur47@gmail.com",
  phone: "+91 7347248475",
  linkedin: "https://www.linkedin.com/in/mayank-thakur-1a493397",
  github: "", // add your GitHub URL here once you have one
  resumeFile: "Mayank_Thakur_PHP_Laravel_Developer.pdf", // place this PDF in /public
  tagline: "I build the Laravel backends and REST APIs that web apps run on.",
  intro:
    "Backend-focused full-stack developer with 4+ years building web applications, payment integrations, and multi-role platforms with Laravel, MySQL, and React.",
  stats: [
    { value: "4+", label: "years experience" },
    { value: "6", label: "shipped projects" },
    { value: "Laravel", label: "primary stack" },
    { value: "MySQL", label: "database" },
  ],
};

export const about =
  "I'm a PHP and Laravel developer with 4+ years of experience building web applications and REST APIs. I'm comfortable across the full request lifecycle in Laravel — routing, controllers, middleware, Eloquent ORM, and Blade — and I've worked on Stripe payment integration, multi-role platforms, and MySQL query optimization. I work in agile teams using Git and CI/CD, and I care about writing code that the next developer can actually read.";

export const skills = [
  { group: "Languages", items: ["PHP 8", "JavaScript", "TypeScript"] },
  { group: "Backend", items: ["Laravel", "CodeIgniter"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap", "jQuery", "HTML5", "CSS3"] },
  { group: "Laravel", items: ["Eloquent ORM", "Blade", "Middleware", "Migrations & Seeders", "Service Classes", "MVC", "OOP"] },
  { group: "Databases", items: ["MySQL", "Query optimization", "Indexing", "Schema design"] },
  { group: "APIs & Auth", items: ["REST APIs", "JWT Auth", "Stripe", "Google Maps API", "Axios", "Postman"] },
  { group: "Tools", items: ["Git", "GitHub", "Composer", "Linux", "VS Code", "CI/CD"] },
];

export const experience = [
  {
    role: "Software Developer",
    company: "SoftRadix Technologies",
    location: "Mohali",
    period: "Jan 2025 – Present",
    points: [
      "Built web applications and REST APIs using Laravel, Eloquent ORM, and React.js for platforms serving multiple user roles.",
      "Developed REST APIs consumed by React (Axios) frontends and mobile apps, secured with JWT-based authentication.",
      "Integrated the Stripe payment gateway for secure transactions across the Sheydance, Manvik, and Telecey platforms.",
      "Built Sheydance, a multi-role booking and hiring platform, using Laravel, MySQL, and the Google Maps API.",
      "Organized business logic into service classes to reduce duplicate code and keep controllers maintainable.",
      "Optimized MySQL queries and indexes to reduce API response times, working through Git and CI/CD cycles.",
    ],
  },
  {
    role: "Software Developer",
    company: "RV Technologies",
    location: "Mohali",
    period: "Feb 2022 – March 2024",
    points: [
      "Developed and maintained Laravel web applications with JavaScript and jQuery.",
      "Built REST APIs supporting frontend integration and data processing.",
      "Improved MySQL performance by adding indexes and rewriting slow queries.",
      "Reused service layers and common patterns to reduce repeated code and ease future maintenance.",
      "Delivered features in a 3–5 member agile team with on-time releases.",
    ],
  },
  {
    role: "Web Developer",
    company: "Rankers Media (Palabras Pvt Ltd)",
    location: "Mohali",
    period: "Feb 2020 – July 2021",
    points: [
      "Built backend modules and APIs using PHP and CodeIgniter for the Class Rankers ed-tech platform.",
      "Designed and optimized MySQL schemas to improve data retrieval speed.",
      "Worked with frontend developers to define API contracts and improve data flow.",
    ],
  },
];

export const projects = [
  {
    name: "Sheydance",
    url: "https://sheydance.com",
    tech: ["Laravel", "MySQL", "Stripe", "Google Maps API"],
    description:
      "Multi-role platform for user booking and hiring with Google Maps integration and Stripe online payments.",
  },
  {
    name: "Manvik Door Frame",
    url: "https://manvikdoorframe.com",
    tech: ["Laravel", "MySQL"],
    description:
      "Inventory and order management across factory, warehouse, and multiple branches with multi-level approval workflows and lead tracking.",
  },
  {
    name: "Telecey",
    url: "https://telecey.com",
    tech: ["Laravel", "REST APIs", "MySQL"],
    description:
      "Device plan management platform with plan creation, reviews, an admin panel, and REST APIs for mobile integration.",
  },
  {
    name: "Employee Management System",
    url: "",
    tech: ["Laravel", "React.js", "MySQL", "JWT"],
    description:
      "Full-stack EMS managing employee records, salaries, and leaves with JWT-secured REST APIs and a React.js frontend.",
  },
  {
    name: "Mughal Mahal",
    url: "https://mughalmahal.com",
    tech: ["Laravel", "MySQL", "jQuery"],
    description:
      "Multi-portal restaurant website with customer, admin, and branch modules covering menu and order management.",
  },
  {
    name: "Class Rankers",
    url: "https://classrankers.com",
    tech: ["CodeIgniter", "PHP", "jQuery"],
    description:
      "Ed-tech platform offering NCERT solutions, quizzes, and discussion forums with dynamic content management.",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA), Computer Science",
    school: "Chandigarh Group of Colleges, Mohali, Punjab",
    period: "2018 – 2020",
  },
  {
    degree: "Bachelor of Computer Applications (BCA), Computer Science",
    school: "G.G.D.S.D College (Panjab University), Chandigarh",
    period: "2015 – 2018",
  },
];
