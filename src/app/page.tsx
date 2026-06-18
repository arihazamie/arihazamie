"use client";

import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Terminal,
  Database,
  BarChart3,
  Briefcase,
  GraduationCap,
  ChevronRight,
  FileSpreadsheet,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { websiteProjects } from "@/data/website-portfolio";

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
              <div className="absolute top-0 right-0 w-[16rem] h-[16rem] bg-violet-500/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
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

          {/* 3. EXPERIENCE & EDUCATION (Spans 6 columns) */}
          <div className="md:col-span-6 flex flex-col gap-4 md:gap-6">
            <motion.section
              className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}>
              <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none"></div>
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
              className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 flex-1 relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeUp}>
              <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-emerald-500/5 rounded-full blur-[80px] -ml-24 -mb-24 pointer-events-none"></div>
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

          {/* 4. SKILLS (Spans 8 columns) */}
          <motion.section
            className="md:col-span-8 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <div className="absolute top-0 right-0 w-[22rem] h-[22rem] bg-orange-500/5 rounded-full blur-[90px] -mr-28 -mt-28 pointer-events-none"></div>
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
            className="md:col-span-4 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <div className="absolute top-0 right-0 w-[18rem] h-[18rem] bg-pink-500/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
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

          {/* 8. WEBSITE PORTFOLIO (Spans 12 columns) */}
          <motion.section
            className="md:col-span-12 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}>
            <div className="absolute top-0 right-0 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#ccff00]" /> Website Portfolio
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify mb-5">
                  Full-stack web systems built with Next.js, PostgreSQL, and
                  modern tooling — from institutional data management to
                  geospatial information systems and cloud-powered environmental
                  apps.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    `${websiteProjects.length} Projects`,
                    "Next.js",
                    "PostgreSQL",
                    "TypeScript",
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
                href="/website"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors shrink-0 self-start lg:self-center">
                View Website Portfolio <ArrowUpRight className="w-4 h-4" />
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
