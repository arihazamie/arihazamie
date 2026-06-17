"use client";

import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Database,
  BarChart3,
  Briefcase,
  GraduationCap,
  ChevronRight,
  FileSpreadsheet,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// DATA FROM CV (English Version)
// ==========================================
const personalInfo = {
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

const experience = [
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

const projects = [
  {
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
    link: "lppm.arihazamie.my.id",
  },
  {
    title: "Geopark Merangin Information System",
    role: "Full Stack Web Developer — Final Thesis (Skripsi)",
    period: "Feb 2025 – Oct 2025",
    description: [
      "Built a web-based information system with structured location and environmental data management using PostgreSQL — demonstrating end-to-end data lifecycle handling.",
      "Deployed via Vercel with Next.js and TypeScript, ensuring reliable and scalable data access for public-facing reporting.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
    link: "geopark.arihazamie.my.id",
  },
  {
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
    link: "github.com/arihazamie/EcoSense",
  },
];

const skills = [
  {
    category: "Finance & Accounting",
    icon: <BarChart3 className="w-5 h-5" />,
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
    icon: <Database className="w-5 h-5" />,
    items: ["Python", "Pandas", "NumPy", "SQL", "PostgreSQL", "Excel"],
  },
  {
    category: "Tools & Software",
    icon: <Terminal className="w-5 h-5" />,
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

const education = [
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

const certificate = {
  title: "Cloud Computing Certificate",
  issuer: "Bangkit Academy",
  id: "C497B4KY0622",
  imageUrl: "/Bangkit_Certificate.webp",
};

// ==========================================
// COMPONENT
// ==========================================
export default function DarkBentoPortfolio() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        {/* ===== BENTO GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* 1. HERO SECTION (Spans 8 columns) */}
          <motion.section
            className="md:col-span-8 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
            initial="initial"
            animate="animate"
            variants={fadeUp}>
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ccff00]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

            <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] mr-2 animate-pulse"></span>
              Available for work
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Finance & Accounting <br />
              <span className="text-[#ccff00]">specialist.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 text-justify">
              I&apos;m{" "}
              <strong className="text-white">{personalInfo.name}</strong>.{" "}
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="px-6 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" /> Let&apos;s Connect
              </a>
              <div className="px-6 py-3 bg-[#1a1a1a] border border-[#262626] text-zinc-300 font-medium rounded-xl flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ccff00]" />{" "}
                {personalInfo.contact.location}
              </div>
            </div>
          </motion.section>

          {/* 2. SOCIALS & QUICK CONTACT (Spans 4 columns) */}
          <motion.section
            className="md:col-span-4 flex flex-col gap-4 md:gap-6"
            initial="initial"
            animate="animate"
            variants={fadeUp}>
            <div className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 flex-1 flex flex-col justify-center relative group overflow-hidden hover:border-[#333] transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#ccff00]" /> Social Profiles
              </h3>
              <div className="space-y-3">
                <a
                  href={`https://${personalInfo.contact.github}`}
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-[#262626] rounded-xl hover:bg-[#222] transition-colors group/link">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Github className="w-5 h-5" /> GitHub
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/link:text-[#ccff00] transition-colors" />
                </a>
                <a
                  href={`https://${personalInfo.contact.linkedin}`}
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-[#262626] rounded-xl hover:bg-[#222] transition-colors group/link">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/link:text-[#ccff00] transition-colors" />
                </a>
              </div>
            </div>

            <div className="bg-[#ccff00] rounded-[2rem] p-8 text-black flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Looking to hire <br /> a finance specialist?
              </h3>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 font-bold text-lg">
                Email Me <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.section>

          {/* 3. EXPERIENCE & EDUCATION (Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <motion.section
              className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#ccff00]" /> Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-[#262626]">
                    <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5"></div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[#ccff00] font-medium text-sm mb-3">
                      {exp.company}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md text-xs font-medium text-zinc-400 mb-4">
                      {exp.period}
                    </span>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                          <span className="flex-1 text-justify">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 flex-1"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#ccff00]" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-[#262626]">
                    <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5"></div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-[#ccff00] font-medium text-sm mb-1">
                      {edu.degree}
                    </p>
                    {edu.location && (
                      <div className="flex items-center gap-1.5 text-zinc-400 text-sm mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </div>
                    )}
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md text-xs font-medium text-zinc-400 mb-4">
                      {edu.period}
                    </span>
                    {edu.description && (
                      <ul className="space-y-2">
                        {edu.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                            <span className="flex-1 text-justify">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* 4. PROJECTS (Spans 7 columns) */}
          <motion.section
            className="md:col-span-7 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code2Icon className="w-6 h-6 text-[#ccff00]" /> Projects &
              Systems Built
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#1a1a1a] border border-[#262626] rounded-2xl group hover:border-[#333] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ccff00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-sm font-medium">
                        {project.role}
                      </p>
                    </div>
                    <Link
                      href={`https://${project.link}`}
                      target="_blank"
                      className="p-2 bg-[#121212] border border-[#262626] rounded-lg text-zinc-400 group-hover:text-[#ccff00] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="flex-1 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#121212] border border-[#262626] text-zinc-300 text-xs font-medium rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. SKILLS (Spans 8 columns) */}
          <motion.section
            className="md:col-span-8 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <h2 className="text-2xl font-bold text-white mb-8">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <div className="p-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[#ccff00]">
                      {skill.icon}
                    </div>
                    {skill.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-[#1a1a1a] border border-[#262626] text-zinc-400 text-sm rounded-lg hover:text-[#ccff00] transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. CERTIFICATE (Spans 4 columns) */}
          <motion.section
            className="md:col-span-4 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 flex flex-col"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#ccff00]" /> Certification
            </h2>
            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 border border-[#262626] group">
              <Image
                src={certificate.imageUrl || "/placeholder.svg"}
                alt="Bangkit Certificate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>
            <h3 className="font-bold text-white text-lg mb-1">
              {certificate.title}
            </h3>
            <p className="text-[#ccff00] text-sm font-medium mb-4">
              {certificate.issuer}
            </p>
            <Link
              href={certificate.imageUrl}
              target="_blank"
              className="mt-auto w-full py-3 bg-[#1a1a1a] border border-[#262626] text-white font-medium text-sm rounded-xl hover:bg-[#222] transition-colors text-center flex items-center justify-center gap-2">
              View Credential <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </motion.section>

          {/* 7. EXCEL PORTFOLIO (Spans 12 columns) */}
          <motion.section
            className="md:col-span-12 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-[#ccff00]/5 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FileSpreadsheet className="w-6 h-6 text-[#ccff00]" /> Excel
                  Portfolio
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify mb-5">
                  A 1,500-transaction sales workbook taken from raw data to an
                  executive report: data cleaning, a live lookup table, a pivot
                  analysis, a KPI dashboard built on
                  SUMIFS/INDEX-MATCH/SUMPRODUCT, and a written business
                  recommendation — the same spreadsheet discipline I bring to
                  village financial reporting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Rp4.4M Revenue Analyzed",
                    "7 Sheets",
                    "8+ Formula Types",
                    "1,500 Rows",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#1a1a1a] border border-[#262626] text-zinc-400 text-xs font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/excel"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors shrink-0 self-start lg:self-center">
                View Excel Portfolio <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="mt-12 py-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a
              href={`https://${personalInfo.contact.linkedin}`}
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              LinkedIn
            </a>
            <a
              href={`https://${personalInfo.contact.github}`}
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Icon helper
function Code2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
