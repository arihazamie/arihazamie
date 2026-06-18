// FILE: src/data/website-portfolio.ts

export type WebsiteProject = {
    id: string;
    title: string;
    role: string;
    period: string;
    description: string[];
    tech: string[];
    link: string;
    status: "live" | "archived" | "private";
    highlights: string[];
    category: "Full Stack" | "Cloud" | "Frontend" | "Backend";
    gradient: string;
  };
  
  export const websiteProjects: WebsiteProject[] = [
    {
      id: "lppm-research-management",
      title: "LPPM Research Management System",
      role: "Full Stack Web Developer",
      period: "May 2025 – Oct 2025",
      description: [
        "Developed a full-stack institutional data management system for the university's LPPM with role-based access (Admin & Faculty) and an approval workflow — mirroring structured financial approval processes.",
        "Designed and managed a PostgreSQL database schema using Prisma ORM, supporting 5+ modules for research and community service data with strict data integrity.",
        "Implemented data export to Excel for institutional reporting — a pattern directly applicable to financial reporting and audit-trail workflows.",
      ],
      tech: [
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Prisma ORM",
        "NextAuth.js",
        "Excel Export",
      ],
      link: "https://lppm.arihazamie.my.id",
      status: "live",
      highlights: [
        "Role-based access control with Admin & Faculty permission tiers",
        "5+ data modules with full CRUD and multi-step approval workflow",
        "Excel export for institutional audit-trail reporting",
      ],
      category: "Full Stack",
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    },
    {
      id: "geopark-merangin",
      title: "Geopark Merangin Information System",
      role: "Full Stack Web Developer — Final Thesis (Skripsi)",
      period: "Feb 2025 – Oct 2025",
      description: [
        "Built a web-based information system with structured location and environmental data management using PostgreSQL — demonstrating end-to-end data lifecycle handling.",
        "Deployed via Vercel with Next.js and TypeScript, ensuring reliable and scalable data access for public-facing reporting.",
      ],
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      link: "https://geopark.arihazamie.my.id",
      status: "live",
      highlights: [
        "Geospatial data management for Merangin Geopark locations",
        "Public-facing system deployed on Vercel with PostgreSQL backend",
        "Final thesis project with end-to-end data lifecycle design",
      ],
      category: "Full Stack",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      id: "eco-sense-app",
      title: "Eco Sense Smart Environmental App",
      role: "Cloud Computing Lead — Bangkit Academy Capstone",
      period: "Nov 2024 – Dec 2024",
      description: [
        "Led cloud architecture (GCP) for a geospatial data processing system serving real-time satellite datasets, applying data pipeline principles transferable to financial data flows.",
        "Built a RESTful API (Flask) integrating Random Forest and K-Means models, demonstrating quantitative data analysis capabilities relevant to financial forecasting.",
      ],
      tech: [
        "Python",
        "Flask",
        "GCP",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      link: "https://github.com/arihazamie/EcoSense",
      status: "archived",
      highlights: [
        "Led GCP cloud architecture for real-time satellite data processing",
        "RESTful API with Random Forest & K-Means ML model integration",
        "Bangkit Academy capstone — graded by Google, GoTo & Traveloka engineers",
      ],
      category: "Cloud",
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
  ];