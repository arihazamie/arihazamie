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
  Cloud,
  Briefcase,
  GraduationCap,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// DATA FROM CV (English Version)
// ==========================================
const personalInfo = {
  name: "Ari Hazamie",
  title: "Backend Developer & Cloud Architecture",
  summary:
    "Information Systems graduate with a focus on backend development, cloud computing, and data-driven systems. Experienced in building RESTful APIs, managing PostgreSQL databases, and developing scalable cloud-based systems through team-based projects.",
  contact: {
    email: "arihzmiutama@gmail.com",
    location: "Merangin, Jambi",
    github: "github.com/arihazamie",
    linkedin: "linkedin.com/in/arihazamie",
  },
};

const experience = [
  {
    title: "Head of Finance Affairs",
    company: "Sungai Jering Village Office",
    period: "Oct 2025 - Apr 2026",
    location: "Jambi, Indonesia",
    description: [
      "Managed the withdrawal and disbursement of village funds through the banking system every three months, with transaction amounts ranging from Rp100 million to Rp250 million",
      "Ensured the smooth and timely distribution of salaries to 9 village officials and 5 members of the Village Council (BPD), as well as village staff and institutions.",
      "Prepared systematic financial accountability reports to support transparency and accountability in the management of village funds.",
      "Managed the administration of the Village Budget (APBDes), including the accurate and timely entry of data and printing of budget documents."
    ],
  },
];

const projects = [
  {
    title: "Eco Sense Smart Environment",
    role: "Cloud Computing Lead",
    period: "Nov 2024 - Dec 2024",
    description: [
      "Led the design and implementation of cloud architecture for geospatial environmental data processing systems.",
      "Developed RESTful APIs (Flask) and satellite image processing pipelines (GeoTIFF), as well as ML model integrations (Random Forest, K-Means).",
      "Managed data storage and distribution using Firebase Storage and Firestore, and deployed the backend using Gunicorn, collaborating across teams to deliver a scalable end-to-end system."
    ],
    tech: ["Python", "Flask", "TensorFlow", "TensorFlow Decision Forests", "Firebase", "Gunicorn", "Numpy", "Pandas"],
    link: "github.com/arihazamie/EcoSense",
  },
  {
    title: "LPPM Research Management",
    role: "Full Stack Web Developer",
    period: "May 2025 - Oct 2025",
    description: [
      "Developed a web-based research and community service management system with a role-based architecture (Admin and Faculty) and an approval workflow.",
      "Built a RESTful API, managed a database using PostgreSQL and Prisma ORM, and implemented JWT-based authentication using NextAuth.js.",
      "Integrated data export features to Excel, input validation using Zod, and security measures including role-based protection middleware, password hashing, and user data isolation."
    ],
    tech: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma ORM", "JWT"],
    link: "lppm.arihazamie.my.id",
  },
  {
    title: "Geopark Merangin Information System",
    role: "Full Stack Web Developer",
    period: "Feb 2025 - Oct 2025",
    description: [
      "Developed a web-based tourism information system by building a RESTful API and managing location and environmental data using PostgreSQL.",
      "Used Next.js and TypeScript for application development and deployed the system via Vercel to ensure fast and stable access",
      "Created a system capable of presenting information in a structured manner and supporting efficient data access."
    ],
    tech: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma ORM", "Vercel"],
    link: "geopark.arihazamie.my.id",
  },
];

const skills = [
  {
    category: "Cloud & Backend",
    icon: <Cloud className="w-5 h-5" />,
    items: ["GCP", "Cloud Run", "Node.js", "Python", "Flask", "REST API"],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "SQL", "Prisma ORM", "Firebase"],
  },
  {
    category: "Web Frontend",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
];

const education = [
  {
    institution: "Universitas Putra Indonesia YPTK Padang",
    location: "Padang, West Sumatra",
    degree: "Bachelor of Information Systems",
    period: "Aug 2021 - Oct 2025",
    description: [
      "Strengthened skills in system development, data management, and problem-solving through a combination of academic study and practical projects throughout the program."
    ]
  },
  {
    institution: "Bangkit Academy (by Google, GoTo, Traveloka) - MSIB Program",
    location: "Remote (Online)",
    degree: "Cloud Computing Learning Path",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Completed an industry-focused intensive program centered on cloud computing, backend development, and DevOps practices using Google Cloud Platform. Developed RESTful APIs, deployed applications using Cloud Run, and managed cloud-based databases in a team-based capstone project."
    ]
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
            initial="initial" animate="animate" variants={fadeUp}
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#ccff00]/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

            <Badge className="w-fit mb-6 px-4 py-1.5 bg-[#1a1a1a] border-[#333] text-zinc-300 rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] mr-2 animate-pulse"></span>
              Available for work
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Backend systems & <br />
              <span className="text-[#ccff00]">cloud architecture.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10 text-justify">
              I&apos;m <strong className="text-white">{personalInfo.name}</strong>. {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <a href={`mailto:${personalInfo.contact.email}`} className="px-6 py-3 bg-[#ccff00] text-black font-bold rounded-xl hover:bg-[#b3e600] transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" /> Let&apos;s Connect
              </a>
              <div className="px-6 py-3 bg-[#1a1a1a] border border-[#262626] text-zinc-300 font-medium rounded-xl flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ccff00]" /> {personalInfo.contact.location}
              </div>
            </div>
          </motion.section>

          {/* 2. SOCIALS & QUICK CONTACT (Spans 4 columns) */}
          <motion.section
            className="md:col-span-4 flex flex-col gap-4 md:gap-6"
            initial="initial" animate="animate" variants={fadeUp}
          >
            <div className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 flex-1 flex flex-col justify-center relative group overflow-hidden hover:border-[#333] transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#ccff00]" /> Social Profiles
              </h3>
              <div className="space-y-3">
                <a href={`https://${personalInfo.contact.github}`} target="_blank" className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-[#262626] rounded-xl hover:bg-[#222] transition-colors group/link">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Github className="w-5 h-5" /> GitHub
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/link:text-[#ccff00] transition-colors" />
                </a>
                <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" className="flex items-center justify-between p-4 bg-[#1a1a1a] border border-[#262626] rounded-xl hover:bg-[#222] transition-colors group/link">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/link:text-[#ccff00] transition-colors" />
                </a>
              </div>
            </div>

            <div className="bg-[#ccff00] rounded-[2rem] p-8 text-black flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
              <h3 className="text-2xl font-bold leading-tight mb-4">Have a project <br /> in mind?</h3>
              <a href={`mailto:${personalInfo.contact.email}`} className="inline-flex items-center gap-2 font-bold text-lg">
                Email Me <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.section>

          {/* 3. EXPERIENCE & EDUCATION (Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <motion.section
              className="bg-[#121212] border border-[#262626] rounded-[2rem] p-8 md:p-10"
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#ccff00]" /> Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-[#262626]">
                    <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5"></div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-[#ccff00] font-medium text-sm mb-3">{exp.company}</p>
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-md text-xs font-medium text-zinc-400 mb-4">
                      {exp.period}
                    </span>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
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
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#ccff00]" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-[#262626]">
                    <div className="absolute w-3 h-3 bg-[#121212] border-2 border-[#ccff00] rounded-full -left-[6.5px] top-1.5"></div>
                    <h3 className="text-xl font-bold text-white mb-1 leading-snug">{edu.institution}</h3>
                    <p className="text-[#ccff00] font-medium text-sm mb-1">{edu.degree}</p>
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
                          <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
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
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code2Icon className="w-6 h-6 text-[#ccff00]" /> Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="p-6 bg-[#1a1a1a] border border-[#262626] rounded-2xl group hover:border-[#333] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ccff00] transition-colors">{project.title}</h3>
                      <p className="text-zinc-500 text-sm font-medium">{project.role}</p>
                    </div>
                    <Link href={`https://${project.link}`} target="_blank" className="p-2 bg-[#121212] border border-[#262626] rounded-lg text-zinc-400 group-hover:text-[#ccff00] transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                        <span className="flex-1 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-[#121212] border border-[#262626] text-zinc-300 text-xs font-medium rounded-md">
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
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <div className="p-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[#ccff00]">
                      {skill.icon}
                    </div>
                    {skill.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 bg-[#1a1a1a] border border-[#262626] text-zinc-400 text-sm rounded-lg hover:text-[#ccff00] transition-colors cursor-default">
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
            initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeUp}
          >
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
            <h3 className="font-bold text-white text-lg mb-1">{certificate.title}</h3>
            <p className="text-[#ccff00] text-sm font-medium mb-4">{certificate.issuer}</p>
            <Link href={certificate.imageUrl} target="_blank" className="mt-auto w-full py-3 bg-[#1a1a1a] border border-[#262626] text-white font-medium text-sm rounded-xl hover:bg-[#222] transition-colors text-center flex items-center justify-center gap-2">
              View Credential <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </motion.section>

        </div>

        {/* ===== FOOTER ===== */}
        <footer className="mt-12 py-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href={`https://${personalInfo.contact.linkedin}`} className="text-zinc-500 hover:text-[#ccff00] transition-colors">LinkedIn</a>
            <a href={`https://${personalInfo.contact.github}`} className="text-zinc-500 hover:text-[#ccff00] transition-colors">GitHub</a>
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
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}