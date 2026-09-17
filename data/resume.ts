export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  headline: string;
  location: string;
  summary: string;
  /** Path under /public, e.g. "/photo.jpg" */
  photo?: string;
  links: Link[];
};

export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  href?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type NavItem = {
  id: string;
  label: string;
};

/** Canonical site URL for sitemap / Open Graph. Override with SITE_URL env in production. */
export const siteUrl = "https://adithya-borker.vercel.app";

export const profile: Profile = {
  name: "Adithya Borker",
  headline: "Junior ERP Support Specialist / Odoo ERP Consultant",
  location: "Puttur, Karnataka, India",
  photo: "/photo.jpg",
  summary:
    "Odoo consultant at The Web People LLP working across Odoo Online (SaaS), Odoo.sh, and self-hosted Community Edition. Focused on custom module development, POS extensions, hardware integrations, client migrations, and third-party system integrations.",
  links: [
    { label: "Email", href: "mailto:aadiborker@gmail.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adithya-borker",
    },
    { label: "GitHub", href: "https://github.com/aadiborker" },
  ],
};

export const navigation: NavItem[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const experience: Role[] = [
  {
    company: "The Web People LLP",
    title: "Junior ERP Support Specialist / Odoo ERP Consultant",
    location: "Puttur, Karnataka, India",
    start: "2024",
    end: "Present",
    bullets: [
      "Support and configure Odoo deployments across Online (SaaS), Odoo.sh, and self-hosted Community Edition.",
      "Build and maintain custom Odoo modules tailored to client business processes.",
      "Extend Point of Sale (POS) workflows and integrate hardware peripherals for retail clients.",
      "Plan and execute client migrations between Odoo editions and hosting models.",
      "Integrate Odoo with third-party systems via APIs and connectors.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Custom Odoo Module Suite",
    description:
      "Placeholder: collection of domain-specific Odoo modules developed for client workflows (inventory, sales, or accounting extensions).",
    tech: ["Python", "Odoo ORM", "XML", "PostgreSQL"],
  },
  {
    name: "POS Hardware Integration",
    description:
      "Placeholder: Point of Sale extension connecting receipt printers, barcode scanners, and payment terminals to Odoo POS.",
    tech: ["Odoo POS", "JavaScript", "IoT / Hardware drivers"],
  },
  {
    name: "Client Migration Toolkit",
    description:
      "Placeholder: scripts and checklists used to migrate clients between Odoo Online, Odoo.sh, and Community Edition.",
    tech: ["Odoo", "PostgreSQL", "Shell / Python scripts"],
  },
  {
    name: "ReplyFlow",
    description:
      "Placeholder: An Open CRM which uses the official Meta Whatsapp Business API to send and receive messages from customers.",
    tech: ["node.js", "PostgreSQL", "Next,js","Superbase","Typescript","Tailwind CSS","Shadcn UI"],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "ERP & Platforms",
    items: [
      "Odoo Online (SaaS)",
      "Odoo.sh",
      "Odoo Community Edition",
      "Odoo POS",
    ],
  },
  {
    category: "Development",
    items: ["Python", "JavaScript", "XML", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Practice Areas",
    items: [
      "Custom module development",
      "POS extensions",
      "Hardware integrations",
      "Client migrations",
      "Third-party integrations",
    ],
  },
];
