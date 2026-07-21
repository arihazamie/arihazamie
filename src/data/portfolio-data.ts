// ==========================================
// PORTFOLIO DATA — extracted from page.tsx
// All data constants live here as named exports
// ==========================================

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
};

export type Skill = {
  category: string;
  iconName: "BarChart3" | "Database" | "Terminal" | "Users";
  items: string[];
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  description: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  id: string;
  imageUrl: string;
};

// ─── Personal ────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Ari Hazamie",
  title: "Full-Stack Developer · Data Analyst",
  summary:
    "Information Systems graduate with hands-on experience across web development, data analysis, and financial administration. Built production-ready web applications with Next.js and PostgreSQL, and managed the full financial cycle for a village government — including high-value fund disbursements (Rp100–250 million per quarter), budget reporting, and direct public service through Direct Cash Assistance (BLT) distribution. Selected as 1 of 4,636 participants out of 45,000+ applicants nationwide for Bangkit Academy (Google, GoTo, Traveloka). Honest, detail-oriented, and driven by data accuracy.",
  contact: {
    email: "arihzmiutama@gmail.com",
    phone: "+6282297709583",
    location: "Merangin, Jambi",
    github: "github.com/arihazamie",
    linkedin: "linkedin.com/in/arihazamie",
  },
};

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    title: "Head of Finance",
    company: "Pemerintah Desa Sungai Jering",
    period: "Oct 2025 – Apr 2026",
    location: "Merangin, Jambi",
    description: [
      "Managed the disbursement and distribution of Direct Cash Assistance (BLT) to eligible beneficiaries, prioritizing friendly, accurate, and compliant public service.",
      "Handled village fund disbursements through the banking system every quarter with transaction values ranging from Rp100 million to Rp250 million, including check withdrawals and bank statement reconciliations.",
      "Managed the village financial cycle end-to-end using Siskeudes — including budget planning (RAB/APBDes), expenditure authorization (SPP/SPM), and maintenance of the General Cash Book (BKU) with zero discrepancies.",
      "Prepared quarterly Budget Implementation Reports (LRA) and Accountability Reports (SPJ) as a form of fiscal accountability to the local government, maintaining a high standard of reporting accuracy and compliance.",
      "Systematically cross-verified financial data against transaction evidence to maintain data integrity and meet local government audit standards.",
    ],
  },
  {
    title: "Cloud Computing Lead — Eco Sense (Capstone Project)",
    company: "Bangkit Academy (MSIB)",
    period: "Nov 2024 – Dec 2024",
    location: "Remote (Online)",
    description: [
      "Led a 3-person Cloud Computing team within a 7-person cross-divisional capstone project, coordinating closely with the Machine Learning and Mobile Development teams to keep system integration on plan and on schedule.",
      "Practiced cross-functional communication and teamwork while ensuring backend and cloud infrastructure aligned with ML and mobile deliverables.",
    ],
  },
  {
    title: "Full Stack Web Developer — Freelance Projects",
    company:
      "Research Management System (LPPM UPI YPTK) & Geopark Merangin Information System",
    period: "2024 – 2025",
    location: "Remote",
    description: [
      "Built web-based information systems end-to-end, including structured database design and production deployment, for an institutional research management platform and a geospatial information system for Geopark Merangin.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Dhimas Digital Printing",
    period: "Jan 2020 – Apr 2020",
    location: "Kota Jambi, Jambi",
    description: [
      "Produced print-ready materials tailored to client needs with optimal quality standards using CorelDRAW, including banners, billboards, flags, Yasin booklets, and company ID cards.",
      "Developed attention to detail and deadline management skills across various professional design settings.",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Web Development",
    iconName: "Terminal",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js",
      "REST API",
      "Tailwind CSS",
      "Vercel",
      "Google Cloud Platform",
    ],
  },
  {
    category: "Data & Analysis",
    iconName: "Database",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Excel (VLOOKUP, Pivot Table, SUMIFS, INDEX-MATCH)",
    ],
  },
  {
    category: "Finance & Accounting",
    iconName: "BarChart3",
    items: [
      "Siskeudes",
      "SPP/SPM",
      "BKU",
      "LRA",
      "APBDes",
      "SPJ",
      "BLT",
      "Cash Handling",
      "Financial Reporting",
      "Transaction Reconciliation",
      "Accurate 5 Desktop",
    ],
  },
  {
    category: "Service & Communication",
    iconName: "Users",
    items: [
      "Public Service",
      "Cross-team Coordination",
      "Stakeholder Reporting",
      "Teamwork",
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "Universitas Putra Indonesia YPTK Padang",
    location: "Padang, West Sumatra",
    degree: "Bachelor of Information Systems",
    period: "Aug 2021 – Oct 2025",
    description: [
      "Built a foundation in database management, information systems, and data analysis, combined with hands-on experience managing village government finances during the program — sharpening the ability to work with numbers accurately, systematically, and to reporting standards.",
    ],
  },
  {
    institution: "Bangkit Academy (by Google, GoTo, Traveloka) — MSIB Program",
    location: "Remote (Online)",
    degree: "Cloud Computing Learning Path",
    period: "Sep 2024 – Dec 2024",
    description: [
      'Selected as 1 of 4,636 participants out of 45,000+ applicants from 400+ universities across Indonesia (~10% acceptance rate). Completed the program as a Full Graduate with capstone status "Finished."',
      "Completed an industry-focused intensive program centered on cloud computing, backend development, and DevOps practices using Google Cloud Platform. Developed RESTful APIs, deployed applications using Cloud Run, and managed cloud-based databases in a team-based capstone project.",
    ],
  },
  {
    institution: "SMK Negeri 1 Merangin",
    location: "Bangko, Merangin",
    degree: "Computer Engineering & Computer Science — Multimedia",
    period: "Jun 2018 – Jun 2021",
    description: [
      "Studied graphic design using CorelDRAW, poster design, and short film production. Completed the Skills Competency Test (UKK) with a focus on practical photography.",
    ],
  },
];

// ─── Certificate ─────────────────────────────────────────────────────────────

export const certificate: Certificate = {
  title: "Cloud Computing Certificate",
  issuer: "Bangkit Academy",
  id: "C497B4KY0622",
  imageUrl: "/Bangkit_Certificate.webp",
};
