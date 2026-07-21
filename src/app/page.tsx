import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Terminal,
  Database,
  BarChart3,
  Briefcase,
  GraduationCap,
  ChevronRight,
  FileSpreadsheet,
  Globe,
  MapPin,
  Users,
} from "lucide-react";
import {
  personalInfo,
  experience,
  skills,
  education,
  certificate,
  type Skill,
} from "@/data/portfolio-data";
import { websiteProjects } from "@/data/website-portfolio";
import { HeroSection } from "@/components/hero-section";
import { AnimatedSection } from "@/components/animated-section";

// ─── Static cache — portfolio never changes at runtime ────────────────────────
export const dynamic = "force-static";

// ─── Icon map (server-safe) ───────────────────────────────────────────────────
const SKILL_ICONS: Record<Skill["iconName"], React.ReactNode> = {
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DarkBentoPortfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* ── ROW 1 ── */}

          {/* 1. HERO — client component (self-animates on load, col-span-7) */}
          <HeroSection
            name={personalInfo.name}
            summary={personalInfo.summary}
            email={personalInfo.contact.email}
            location={personalInfo.contact.location}
          />

          {/* 2. SOCIALS + CTA — onLoad, col-span-5 */}
          <AnimatedSection
            animate="onLoad"
            delay={0.1}
            className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 flex-1 flex flex-col justify-center relative group overflow-hidden hover:border-[#333] transition-colors">
              {/* Reduced blur radius + GPU-composited layer */}
              <div className="absolute top-0 right-0 w-[16rem] h-[16rem] bg-violet-500/5 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none will-change-transform transform-gpu" />
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

            {/* CTA card — transform-gpu so scale runs on compositor thread */}
            <div className="bg-[#ccff00] rounded-[2rem] p-8 text-black flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer transform-gpu">
              <h3 className="text-2xl font-bold leading-tight mb-4">
                Need a dev, analyst, <br /> or problem-solver?
              </h3>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-2 font-bold text-lg">
                Let&apos;s Talk <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>

          {/* ── ROW 2 ── Excel & Website Portfolio — highlight position ── */}

          {/* 3. EXCEL PORTFOLIO — onView, col-span-6 */}
          <AnimatedSection
            animate="onView"
            className="md:col-span-6 bg-[#121212] border border-[#262626] hover:border-[#ccff00]/30 transition-colors rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-[#ccff00]/5 rounded-full blur-[60px] -ml-32 -mt-32 pointer-events-none will-change-transform transform-gpu" />
            <div className="flex flex-col justify-between min-h-[280px] relative">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <FileSpreadsheet className="w-6 h-6 text-[#ccff00]" /> Excel
                  Portfolio
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify mb-5">
                  A 1,500-transaction sales workbook taken from raw data to an
                  executive report: data cleaning, a live lookup table, a pivot
                  analysis, a KPI dashboard built on
                  SUMIFS/INDEX-MATCH/SUMPRODUCT, and a written business
                  recommendation — a showcase of real-world spreadsheet and data
                  analysis discipline.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors">
                View Excel Portfolio <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* 4. WEBSITE PORTFOLIO — onView, delay 0.1, col-span-6 */}
          <AnimatedSection
            animate="onView"
            delay={0.1}
            className="md:col-span-6 bg-[#121212] border border-[#262626] hover:border-[#ccff00]/30 transition-colors rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute top-0 right-0 w-[24rem] h-[24rem] bg-blue-500/5 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none will-change-transform transform-gpu" />
            <div className="flex flex-col justify-between min-h-[280px] relative">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#ccff00]" /> Website Portfolio
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed text-justify mb-5">
                  Full-stack web systems built with Next.js, PostgreSQL, and
                  modern tooling — from institutional data management to
                  geospatial information systems and cloud-powered environmental
                  apps.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors">
                View Website Portfolio <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* ── ROW 3 ── */}

          {/* 5. EXPERIENCE — onView, col-span-5 */}
          <AnimatedSection
            animate="onView"
            className="md:col-span-5 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-blue-500/5 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none will-change-transform transform-gpu" />
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#ccff00]" /> Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-[#262626]">
                  <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5" />
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
          </AnimatedSection>

          {/* 6. EDUCATION — onView, delay 0.1, col-span-7 */}
          <AnimatedSection
            animate="onView"
            delay={0.1}
            className="md:col-span-7 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute bottom-0 left-0 w-[20rem] h-[20rem] bg-emerald-500/5 rounded-full blur-[60px] -ml-24 -mb-24 pointer-events-none will-change-transform transform-gpu" />
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#ccff00]" /> Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l border-[#262626]">
                  <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5" />
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
          </AnimatedSection>

          {/* ── ROW 4 ── */}

          {/* 7. SKILLS — onView, col-span-7 */}
          <AnimatedSection
            animate="onView"
            className="md:col-span-7 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute top-0 right-0 w-[22rem] h-[22rem] bg-orange-500/5 rounded-full blur-[60px] -mr-28 -mt-28 pointer-events-none will-change-transform transform-gpu" />
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
                      {SKILL_ICONS[skill.iconName]}
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
          </AnimatedSection>

          {/* 8. CERTIFICATE — onView, delay 0.1, col-span-5 */}
          <AnimatedSection
            animate="onView"
            delay={0.1}
            className="md:col-span-5 bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden">
            {/* Reduced blur radius + GPU layer */}
            <div className="absolute top-0 right-0 w-[18rem] h-[18rem] bg-pink-500/5 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none will-change-transform transform-gpu" />
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#ccff00]" /> Certification
            </h2>
            <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-6 border border-[#262626] group">
              <Image
                src={certificate.imageUrl || "/placeholder.svg"}
                alt="Bangkit Certificate"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
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
          </AnimatedSection>
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
