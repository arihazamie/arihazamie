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
  title: "Finance & Accounting Specialist",
  summary:
    "Information Systems graduate with hands-on experience in village financial management as Head of Finance. Expert in managing the full financial cycle using Siskeudes — from inputting RAB/APBDes, recording SPP/SPM, maintaining the General Cash Book (BKU), to preparing Budget Implementation Reports (LRA) and Accountability Reports (SPJ). Combines financial discipline with data analysis skills using Python and SQL for accurate, systematic financial reporting.",
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
      "Fully operated the Siskeudes application — including inputting RAB/APBDes, recording SPP/SPM, maintaining the General Cash Book (BKU), and preparing the Budget Implementation Report (LRA).",
      "Managed village fund disbursements through the banking system every 3 months with transaction values ranging from Rp100 million to Rp250 million, including check withdrawals and bank statement retrievals.",
      "Prepared Accountability Reports (SPJ) and printed village financial reports as a form of accountability to the local government.",
      "Managed the disbursement and distribution of Direct Cash Assistance (BLT) to eligible beneficiaries in accordance with applicable regulations.",
      "Verified consistency of financial data against transaction records to ensure accuracy in village financial recording and reporting.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Dhimas Digital Printing",
    period: "Jan 2020 – Apr 2020",
    location: "Kota Jambi, Jambi",
    description: [
      "Designed various visual materials using CorelDRAW, including banners, billboards, and flags.",
      "Created print media designs such as Yasin booklets and company ID cards, tailored to client specifications.",
      "Coordinated with the production team to ensure designs matched printed output with optimal quality.",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
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
      "Budget Execution Analysis",
    ],
  },
  {
    category: "Data Analysis",
    iconName: "Database",
    items: ["Python", "Pandas", "NumPy", "SQL", "PostgreSQL", "Excel"],
  },
  {
    category: "Tools & Software",
    iconName: "Terminal",
    items: [
      "Microsoft Excel",
      "Microsoft Word",
      "CorelDRAW",
      "Canva",
      "Next.js",
      "TypeScript",
    ],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "Universitas Putra Indonesia YPTK Padang",
    location: "Padang, West Sumatra",
    degree: "Bachelor of Information Systems",
    period: "Aug 2021 - Oct 2025",
    description: [
      "Strengthened skills in system development, data management, and problem-solving through a combination of academic study and practical projects throughout the program.",
    ],
  },
  {
    institution: "Bangkit Academy (by Google, GoTo, Traveloka) - MSIB Program",
    location: "Remote (Online)",
    degree: "Cloud Computing Learning Path",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Completed an industry-focused intensive program centered on cloud computing, backend development, and DevOps practices using Google Cloud Platform. Developed RESTful APIs, deployed applications using Cloud Run, and managed cloud-based databases in a team-based capstone project.",
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
