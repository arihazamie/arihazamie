// FILE: src/components/website-portfolio-client.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { websiteProjects, type WebsiteProject } from "@/data/website-portfolio";

// ==========================================
// HELPERS
// ==========================================
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const statusStyle: Record<WebsiteProject["status"], string> = {
  live: "text-[#ccff00] border-[#ccff00]/30 bg-[#ccff00]/10",
  archived: "text-zinc-400 border-zinc-400/30 bg-zinc-400/10",
  private: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

const statusLabel: Record<WebsiteProject["status"], string> = {
  live: "Live",
  archived: "Archived",
  private: "Private",
};

// ==========================================
// PAGE
// ==========================================
export function WebsitePortfolioClient() {
  const liveCount = websiteProjects.filter((p) => p.status === "live").length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-[#ccff00] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>

        {/* ===== HERO ===== */}
        <motion.section
          className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-12 relative overflow-hidden mb-6 md:mb-8"
          initial="initial"
          animate="animate"
          variants={fadeUp}>
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />

          <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
            <Globe className="w-3.5 h-3.5 text-[#ccff00] mr-2" />
            Website Portfolio
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Systems built to <span className="text-[#ccff00]">last.</span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 text-justify">
            Full-stack web applications architected from data model to
            deployment — role-based access, structured PostgreSQL schemas,
            RESTful APIs, and cloud infrastructure. Each project solves a real
            institutional or environmental problem with production-grade
            tooling.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {websiteProjects.length}
              </div>
              <div className="text-xs text-zinc-500 mt-1">Projects</div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {liveCount}
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Live in production
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-[#262626] rounded-xl p-4">
              <div className="text-2xl md:text-3xl font-bold text-white">
                3+
              </div>
              <div className="text-xs text-zinc-500 mt-1">Tech stacks</div>
            </div>
          </div>
        </motion.section>

        {/* ===== PROJECT CARDS ===== */}
        <div className="space-y-8">
          {websiteProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* ===== FOOTER NOTE ===== */}
        <div className="mt-10 border border-dashed border-[#262626] rounded-2xl p-6 flex items-center gap-4 text-zinc-500 text-sm">
          <Sparkles className="w-5 h-5 text-[#ccff00] shrink-0" />
          New projects get added here as they ship — internal tools, data
          dashboards, and API services join this same page once they&apos;re
          production-ready.
        </div>

        {/* ===== FOOTER ===== */}
        <footer className="mt-12 py-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} Ari Hazamie. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a
              href="https://linkedin.com/in/arihazamie"
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              LinkedIn
            </a>
            <a
              href="https://github.com/arihazamie"
              className="text-zinc-500 hover:text-[#ccff00] transition-colors">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

// ==========================================
// PROJECT CARD
// ==========================================
function ProjectCard({ project }: { project: WebsiteProject }) {
  return (
    <motion.div
      className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10 relative overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeUp}>
      {/* Per-project gradient overlay */}
      <div
        className={`absolute top-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl ${project.gradient} rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none`}
      />

      <div className="relative">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div>
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
                  statusStyle[project.status]
                }`}>
                {project.status === "live" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mr-1.5 animate-pulse" />
                )}
                {statusLabel[project.status]}
              </span>
              <span className="px-3 py-1 bg-[#1a1a1a] border border-[#262626] text-zinc-400 text-xs font-medium rounded-full">
                {project.category}
              </span>
            </div>

            {/* Title + role */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-snug">
              {project.title}
            </h2>
            <p className="text-[#ccff00] font-medium text-sm mb-3">
              {project.role}
            </p>
            <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md text-xs font-medium text-zinc-400">
              {project.period}
            </span>
          </div>

          {/* CTA button — only shown when project is live */}
          {project.status === "live" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors shrink-0 self-start">
              <ExternalLink className="w-4 h-4" /> Visit Site
            </a>
          )}
        </div>

        {/* ── Description ── */}
        <ul className="space-y-3 mb-8">
          {project.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
              <ChevronRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
              <span className="flex-1 text-justify">{item}</span>
            </li>
          ))}
        </ul>

        {/* ── Highlights ── */}
        <div className="bg-[#ccff00]/5 border border-[#ccff00]/15 rounded-2xl p-5 mb-8">
          <h3 className="text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5" /> Key highlights
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((hl, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Tech stack ── */}
        <div>
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
            Tech stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-[#1a1a1a] border border-[#262626] text-zinc-300 text-xs font-medium rounded-lg hover:text-[#ccff00] transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
