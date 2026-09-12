import { Icons } from "@/components/icons";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { HomeIcon, NotebookIcon } from "lucide-react";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const DATA = {
  name: "Adam Essaidi",
  initials: "AE",
  url: SITE_URL,
  location: "Rabat, Morocco",
  locationLink: "https://www.google.com/maps/place/Rabat,+Morocco",
  description:
    "Software Engineer and Full-Stack Developer building reliable web applications and information systems with .NET, Java, and Angular.",
  summary:
    "Software Engineer (Full-Stack) with over 3 years of experience building web applications and information systems. I have delivered solutions for Moroccan public institutions using **ASP.NET Core, Spring Boot, Angular, React, REST APIs, and microservices**. I focus on scalable architecture, performance, advanced debugging, and solving complex engineering problems.",
  skills: [
    { name: "C#", icon: Csharp },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: undefined },
    { name: "ASP.NET Core", icon: Csharp },
    { name: ".NET", icon: Csharp },
    { name: "Spring Boot", icon: Java },
    { name: "REST APIs", icon: undefined },
    { name: "Microservices", icon: undefined },
    { name: "Angular", icon: undefined },
    { name: "React", icon: ReactLight },
    { name: "Bootstrap", icon: undefined },
    { name: "SQL Server", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Oracle", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: undefined },
    { name: "Postman", icon: undefined },
    { name: "Figma", icon: undefined },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Intermediate" },
  ],
  strengths: [
    "Advanced debugging and troubleshooting",
    "Complex problem solving",
    "Performance optimization",
    "Scalable system design",
    "Software architecture",
    "AI tools and prompt engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adam.essaidi01@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AdamEssaidi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adam-essaidi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:adam.essaidi01@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "ALEXSYS SOLUTIONS",
      href: "",
      badges: [],
      location: "Rabat, Morocco",
      title: "Full-Stack Developer",
      logoUrl: "",
      start: "Oct 2025",
      end: "Present",
      description:
        "Working on NIBRAS for Hassan II University of Casablanca (UH2C). Developing Spring Boot microservices, designing REST APIs for frontend integration, and managing PostgreSQL data across Angular and React interfaces.",
    },
    {
      company: "MAROC INGENOV",
      href: "",
      badges: [],
      location: "Rabat, Morocco",
      title: ".NET Developer",
      logoUrl: "",
      start: "Mar 2024",
      end: "Oct 2025",
      description:
        "Delivered public-sector information systems including SMIV for ONSSA, Référentiel SIG, and Badre22 for the Ministry of Equipment and Water. Built data management, synchronization, and analytics capabilities with ASP.NET Core, C#, SQL Server, PostgreSQL, and Oracle.",
    },
    {
      company: "Netopia Solutions",
      href: "",
      badges: [],
      location: "Rabat, Morocco",
      title: "Web Developer (.NET)",
      logoUrl: "",
      start: "Nov 2022",
      end: "Mar 2024",
      description:
        "Developed business modules for Massar, migrated and optimized a mail management system for the Marrakech-Safi Region, and designed and implemented UI/UX for the Ministry of Justice's Adoul Acts Information System Portal using ASP.NET Core, Angular, SQL Server, and REST APIs.",
    },
    {
      company: "Le Premier Système",
      href: "",
      badges: [],
      location: "Kénitra, Morocco",
      title: "Junior Developer Intern",
      logoUrl: "",
      start: "May 2022",
      end: "Jul 2022",
      description:
        "Developed web and desktop applications, including an RFID-based stock management system.",
    },
    {
      company: "Yanconnect",
      href: "",
      badges: [],
      location: "Remote",
      title: "Freelance WordPress Developer",
      logoUrl: "",
      start: "2021",
      end: "2022",
      description:
        "Built and managed e-commerce websites, improved SEO, and configured hosting environments and servers.",
    },
  ],
  education: [
    {
      school: "ENSA Kénitra",
      href: "",
      degree: "Master's Degree - Software Engineering & IS Management",
      logoUrl: "",
      start: "2023",
      end: "2025",
    },
    {
      school: "EST Kénitra",
      href: "",
      degree: "Professional Bachelor's Degree - Computer Engineering",
      logoUrl: "",
      start: "2021",
      end: "2022",
    },
    {
      school: "ISTA Rabat",
      href: "",
      degree: "Specialized Technician Diploma - IT Development",
      logoUrl: "",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "NIBRAS",
      href: "",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "An information system for Hassan II University of Casablanca, built around Spring Boot microservices, REST API integration, PostgreSQL, Angular, and React.",
      technologies: ["Java", "Spring Boot", "Microservices", "Angular", "React", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "SMIV",
      href: "",
      dates: "2024 - 2025",
      active: false,
      description:
        "A veterinary product management system delivered for ONSSA, focused on dependable business workflows and structured data management.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "PostgreSQL", "Oracle"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Référentiel SIG",
      href: "",
      dates: "2024 - 2025",
      active: false,
      description:
        "A Ministry of Equipment and Water system for synchronizing and managing data across multiple database platforms.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "PostgreSQL", "Oracle"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Badre22",
      href: "",
      dates: "2024 - 2025",
      active: false,
      description:
        "A data management and analytics platform developed for the Ministry of Equipment and Water.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "PostgreSQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Massar",
      href: "",
      dates: "2022 - 2024",
      active: false,
      description:
        "Full-stack development of business modules for Morocco's Ministry of Education information system.",
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Adoul Acts Information System Portal",
      href: "",
      dates: "2022 - 2024",
      active: false,
      description:
        "UI/UX design and implementation for an information-system portal delivered for Morocco's Ministry of Justice.",
      technologies: ["ASP.NET Core", "Angular", "SQL Server", "Figma"],
      links: [],
      image: "",
      video: "",
    },
  ],
} as const;
