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
  { group: "Languages", items: ["PHP 8", "JavaScript", "TypeScript", "Node.js"] },
  { group: "Backend", items: ["Laravel", "Express.js", "Inertia.js", "CodeIgniter"] },
  { group: "Frontend", items: ["React.js", "Tailwind CSS", "Vite", "Recharts", "Bootstrap", "jQuery", "HTML5", "CSS3"] },
  { group: "Laravel", items: ["Eloquent ORM", "Blade", "Middleware", "Migrations & Seeders", "Service Classes", "MVC", "OOP"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Query optimization", "Indexing", "Schema design"] },
  { group: "APIs & Auth", items: ["REST APIs", "JWT Auth", "Laravel Sanctum", "OAuth 2.0", "Webhooks", "Axios", "Postman"] },
  { group: "Payments & Integrations", items: ["Stripe", "Razorpay", "Supabase", "Google Maps API", "Leaflet / OpenStreetMap", "SMTP / Transactional email"] },
  { group: "AI Engineering", items: ["Google Gemini API", "Claude", "ChatGPT", "Cursor", "GitHub Copilot", "Prompt engineering"] },
  { group: "Testing", items: ["PHPUnit", "Pest", "Vitest", "Feature & unit testing"] },
  { group: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Composer", "npm", "Vercel", "Render", "Linux", "VS Code", "CI/CD"] },
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

export const personalProjects = [
  {
    name: "Employee Management System",
    tagline: "Role-based HR platform",
    domain: "Human Resources",
    url: "https://mayank-ems-laravel-react.vercel.app/login",
    description:
      "An internal HR tool for managing departments, employees, and organisational activity. A React single-page application consumes a Laravel REST API secured with token authentication, with administrator and employee roles resolved through route middleware.",
    highlights: [
      "Department and employee CRUD with automatic user provisioning and generated employee codes",
      "Administrator dashboard with headcount charts, employment-type breakdown, and a recent activity feed",
      "Activity logging across every write operation for a complete audit trail",
      "Business logic isolated in a service layer, with form requests for validation and API resources for response shaping",
    ],
    tech: ["Laravel", "PHP 8", "React.js", "Sanctum", "MySQL", "Tailwind CSS", "Recharts", "Vite"],
  },
  {
    name: "Nova — AI Customer Support Chatbot",
    tagline: "AI helpdesk with conversation history",
    domain: "AI / Customer Support",
    url: "https://ai-chatbot-gilt-pi-35.vercel.app/",
    description:
      "A support chat platform where users open sessions with an AI assistant and revisit past conversations. An Express API sits between the client and the Gemini model, holding the API key server-side and forwarding the user's token so database policies still apply.",
    highlights: [
      "Google Gemini responses served through an Express layer, never exposing the key to the browser",
      "Email and Google OAuth authentication, with row-level security restricting every query to its owner",
      "Live session list kept in sync through Postgres change subscriptions",
      "Per-session system prompts and a usage dashboard covering sessions, messages, and prompt-to-reply ratio",
    ],
    tech: ["Express.js", "Node.js", "React.js", "Supabase", "PostgreSQL", "Gemini API", "Tailwind CSS", "Vite"],
  },
  {
    name: "Slotwise — Booking & Payment Platform",
    tagline: "Service marketplace with split payments",
    domain: "Marketplace / Payments",
    url: "https://booking-platform-rosy.vercel.app/",
    description:
      "A two-sided marketplace where providers publish services and manage availability while clients book and pay for appointments. The payment layer splits a single charge between provider, platform commission, and processing costs, and reverses it correctly on refund.",
    highlights: [
      "Three-way payment split computed in integer minor units, so provider share, commission, and fees reconcile exactly",
      "Dual gateway support with gateway-aware refunds and transfer reversals that account for fees already deducted",
      "Signature-verified, replay-safe webhooks; cancellation and refund committed as a single atomic transaction",
      "Row-level locking on slot selection so concurrent requests for one slot produce exactly one booking",
      "Booking lifecycle with email notifications, reviews, map-based service discovery, and an administrative console",
    ],
    tech: ["Laravel", "PHP 8", "React.js", "Sanctum", "MySQL", "Stripe", "Razorpay", "Leaflet", "Three.js"],
  },
  {
    name: "Ledger — Personal Expense Tracker",
    tagline: "Monolithic Laravel and Inertia finance tracker",
    domain: "Personal Finance",
    url: "https://ledger-x3ve.onrender.com/",
    description:
      "A personal finance tracker built as a single Laravel application rendering React through Inertia.js — server-driven routing with no REST layer and no CORS configuration. Transactions are stored as documents in MongoDB through Eloquent-compatible models.",
    highlights: [
      "Inertia.js server-side routing with React as the view layer, page components loaded as separate chunks",
      "Every amount held as an integer number of paise and parsed once at the boundary, so totals never drift",
      "Built-in EMI calculator producing a full month-by-month amortisation schedule that closes at exactly zero",
      "Monthly category breakdowns, filtering by period, type and category, and a formula-safe CSV export",
      "91 automated tests across PHP and JavaScript covering money handling, filters, authentication, and reporting",
    ],
    tech: ["Laravel", "PHP 8", "Inertia.js", "React.js", "MongoDB", "Tailwind CSS", "Recharts", "Vite"],
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
