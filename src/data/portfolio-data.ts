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
  iconName: "BarChart3" | "Database" | "Terminal";
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
  title: "Full-Stack Developer · Data Analyst · Finance",
  summary:
    "Information Systems graduate with hands-on experience in full-stack web development, data analysis, and government financial management. Skilled in building production-ready web apps with Next.js and PostgreSQL, analyzing data with Python, SQL, and Excel, and managing the full financial cycle using Siskeudes — from budget planning (APBDes/RAB) to accountability reporting (LRA, SPJ). Open to opportunities in web development, data analysis, or finance & accounting.",
  contact: {
    email: "arihzmiutama@gmail.com",
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
      "Managed the village financial cycle end-to-end using Siskeudes — including budget planning (RAB/APBDes), expenditure authorization (SPP/SPM), maintenance of the General Cash Book (BKU), and quarterly preparation of the Budget Implementation Report (LRA).",
      "Managed village fund disbursements through the banking system every quarter with transaction values ranging from Rp100 million to Rp250 million, including check withdrawals and bank statement reconciliations.",
      "Prepared Accountability Reports (SPJ) and village financial statements as a form of fiscal accountability to the local government, ensuring all documents comply with applicable reporting standards.",
      "Managed the disbursement and distribution of Direct Cash Assistance (BLT) to eligible beneficiaries in accordance with applicable regulations.",
      "Systematically cross-verified financial data against transaction evidence to maintain data integrity and meet local government audit standards.",
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
      "Financial Reporting",
      "Transaction Reconciliation",
      "Accurate 5 Desktop",
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "Universitas Putra Indonesia YPTK Padang",
    location: "Padang, West Sumatra",
    degree: "Bachelor of Information Systems — GPA 3.20 / 4.00",
    period: "Aug 2021 – Oct 2025",
    description: [
      "Strengthened skills in system development, data management, and problem-solving through a combination of academic study and practical projects throughout the program.",
    ],
  },
  {
    institution: "Bangkit Academy (by Google, GoTo, Traveloka) — MSIB Program",
    location: "Remote (Online)",
    degree: "Cloud Computing Learning Path",
    period: "Sep 2024 – Dec 2024",
    description: [
      "Completed an industry-focused intensive program centered on cloud computing, backend development, and DevOps practices using Google Cloud Platform. Developed RESTful APIs, deployed applications using Cloud Run, and managed cloud-based databases in a team-based capstone project.",
    ],
  },
  {
    institution: "SMK Negeri 1 Merangin",
    location: "Bangko, Merangin",
    degree: "Computer Engineering & Computer Science — Multimedia | 84.15",
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
