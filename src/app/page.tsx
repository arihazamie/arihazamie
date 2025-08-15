"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Calendar,
  User,
  Briefcase,
  Code,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Certificate } from "../types/certificate";
import Image from "next/image";
import Link from "next/link";

const personalInfo = {
  name: "Ari Hazamie",
  title: "Full Stack Developer",
  summary:
    "Passionate developer dengan fokus pada pengembangan aplikasi web modern menggunakan teknologi terkini. Selalu antusias untuk mempelajari hal baru dan berkontribusi dalam proyek yang memberikan dampak positif.",
  contact: {
    email: "arihzmii@gmail.com",
    location: "Jambi, Indonesia",
    github: "github.com/arihazamie",
    linkedin: "linkedin.com/in/arihazamie",
  },
};

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "PostgreSQL"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel"],
};

// Certificate data with proper typing
const certificates: Record<string, Certificate> = {
  bangkit: {
    id: "C497B4KY0622",
    title: "Cloud Computing Certificate",
    issuer: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    issueDate: "January 2025",
    credentialId: "C497B4KY0622",
    imageUrl: "/Bangkit_Certificate.webp",
  },
  metaFullStack: {
    id: "KL5UGUJFYKKG",
    title: "The Full Stack",
    issuer: "Meta (via Coursera)",
    issueDate: "September 18, 2023",
    credentialId: "KL5UGUJFYKKG",
    imageUrl: "/The_Full_Stack.webp",
  },
  jhuWebDevelopers: {
    id: "MVQY74QDQ53C",
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University (via Coursera)",
    issueDate: "October 7, 2023",
    credentialId: "MVQY74QDQ53C",
    imageUrl: "/Web_Developers.webp",
  },
  ibmWebDevelopment: {
    id: "CDHRFUYS9YQ",
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    issuer: "IBM (via Coursera)",
    issueDate: "September 22, 2023",
    credentialId: "CDHRFUYS9YQ",
    imageUrl: "/Web_Development.webp",
  },
};

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  certificateId?: string;
}

const experience: ExperienceItem[] = [
  {
    title: "Cloud Computing Cohort",
    company: "Bangkit Academy",
    period: "2024 - 2025",
    location: "Remote",
    type: "Program Studi Independen",
    description: [
      "Peserta program studi independen bersertifikat Google, Gojek, Traveloka, Tokopedia",
      "Fokus pada pengembangan talenta digital di bidang Cloud Computing",
      "Mempelajari teknologi cloud computing dan best practices industry",
    ],
    certificateId: "bangkit",
  },
  // Add more experience here
];

interface ProjectItem {
  title: string;
  period: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
}

const projects: ProjectItem[] = [
  {
    title: "Geopark Merangin",
    period: "2025",
    description:
      "Website informatif untuk mempromosikan Geopark Merangin sebagai UNESCO Global Geopark dengan fitur destinasi wisata, acara, dan berita terkini.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Leaflet",
      "Prisma",
    ],
    link: "geopark.arihazamie.my.id",
    github: "arihazamie/Geopark-Merangin",
  },
  {
    title: "LPPM UPI YPTK Padang",
    period: "2025",
    description:
      "Website informatif untuk mempromosikan Geopark Merangin sebagai UNESCO Global Geopark dengan fitur destinasi wisata, acara, dan berita terkini.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Next-Auth",
      "Prisma",
    ],
    link: "lppm.arihazamie.my.id",
    github: "",
  },
  // Add more projects here
];

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

const education: EducationItem[] = [
  {
    institution: "Universitas Putra Indonesia YPTK Padang",
    degree: "Sistem Informasi",
    period: "2021 - 2025",
    description:
      "Undergraduate  Program Studi Sistem Informasi UPI YPTK Padang",
  },
  // Add more education here
];

// ===== COMPONENT =====
export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-7xl mx-auto p-6">
        {/* ===== HEADER SECTION ===== */}
        <motion.div {...fadeIn}>
          <Card className="mb-10 overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 backdrop-blur-sm">
            <CardContent className="p-8 xl:p-12 text-white relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="mb-6 lg:mb-0 lg:flex-1">
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-xl lg:text-2xl xl:text-3xl text-blue-100 mb-6 font-medium">
                    {personalInfo.title}
                  </p>
                  <p className="text-blue-100 max-w-3xl leading-relaxed opacity-90 lg:text-lg">
                    {personalInfo.summary}
                  </p>
                </div>
                <div className="lg:flex-shrink-0">
                  <div className="flex flex-col space-y-4 text-sm lg:text-base backdrop-blur-sm bg-white/10 p-8 rounded-3xl border border-white/20 lg:min-w-[320px]">
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="flex items-center gap-4 hover:text-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Mail className="h-5 w-5 text-blue-200" />
                      <span>{personalInfo.contact.email}</span>
                    </a>
                    <div className="flex items-center gap-4 hover:text-blue-200 transition-colors">
                      <MapPin className="h-5 w-5 text-blue-200" />
                      <span>{personalInfo.contact.location}</span>
                    </div>
                    <a
                      href={`https://${personalInfo.contact.github}`}
                      className="flex items-center gap-4 hover:text-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-blue-200" />
                      <span>{personalInfo.contact.github}</span>
                    </a>
                    <a
                      href={`https://${personalInfo.contact.linkedin}`}
                      className="flex items-center gap-4 hover:text-blue-200 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-blue-200" />
                      <span>{personalInfo.contact.linkedin}</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ===== LEFT COLUMN ===== */}
          <div className="lg:col-span-8 space-y-10">
            {/* Experience Section */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6 lg:pb-8 border-b border-gradient-to-r from-blue-100 to-transparent lg:px-8 lg:pt-8">
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 flex items-center gap-4">
                    <div className="p-3 lg:p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <Briefcase className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    Pengalaman
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8 lg:px-8 lg:pb-8">
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="space-y-8">
                    {experience.map((job, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="relative p-8 bg-gradient-to-r from-blue-50/50 to-transparent rounded-3xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-4">
                          <div className="xl:flex-1">
                            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                              {job.title}
                            </h3>
                            <p className="text-blue-600 font-medium text-lg mb-3">
                              {job.company}
                            </p>
                          </div>
                          <div className="flex flex-col xl:items-end gap-2 mt-3 xl:mt-0">
                            <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 px-4 py-2 xl:flex-shrink-0">
                              {job.period}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/60 px-3 py-2 rounded-full">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>

                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-sm px-4 py-2 mb-6">
                          {job.type}
                        </Badge>

                        <ul className="space-y-3 text-gray-700 mb-6">
                          {job.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-base leading-relaxed flex items-start gap-4">
                              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects Section */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6 lg:pb-8 border-b border-gradient-to-r from-blue-100 to-transparent lg:px-8 lg:pt-8">
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 flex items-center gap-4">
                    <div className="p-3 lg:p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <Code className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    Proyek Unggulan
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8 lg:px-8 lg:pb-8">
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="space-y-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        className="relative p-8 bg-gradient-to-r from-blue-50/50 to-transparent rounded-3xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-4">
                          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors xl:flex-1">
                            {project.title}
                          </h3>
                          <Badge className="mt-3 xl:mt-0 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 px-4 py-2 xl:flex-shrink-0">
                            {project.period}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed text-base lg:text-lg">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-sm border-blue-200 text-blue-600 bg-blue-50/50 hover:bg-blue-100 transition-colors px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 text-base">
                          <a
                            href={`https://${project.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                            <Globe className="h-5 w-5" />
                            <span>{project.link}</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                          <a
                            href={`https://github.com/${project.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-600 hover:text-gray-700 transition-colors">
                            <Github className="h-5 w-5" />
                            <span>{project.github}</span>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificates Section */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6 lg:pb-8 border-b border-gradient-to-r from-blue-100 to-transparent lg:px-8 lg:pt-8">
                  <CardTitle className="text-2xl lg:text-3xl text-gray-900 flex items-center gap-4">
                    <div className="p-3 lg:p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <GraduationCap className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                    </div>
                    Sertifikat
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-8 lg:px-8 lg:pb-8">
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="space-y-8">
                    {Object.values(certificates).map((certificate) => (
                      <motion.div
                        key={certificate.id}
                        variants={fadeIn}
                        className="relative p-8 bg-gradient-to-r from-blue-50/50 to-transparent rounded-3xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 group">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>

                        <div className="flex flex-col xl:flex-row xl:gap-8">
                          {/* Certificate Image */}
                          <div className="xl:w-1/3 mb-6 xl:mb-0">
                            <div className="relative overflow-hidden rounded-md shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <Image
                                src={certificate.imageUrl || "/placeholder.svg"}
                                alt={`${certificate.title} Certificate`}
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </div>

                          {/* Certificate Details */}
                          <div className="xl:w-2/3">
                            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-4">
                              <div className="xl:flex-1">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                  {certificate.title}
                                </h3>
                                <p className="text-blue-600 font-medium text-lg mb-3">
                                  {certificate.issuer}
                                </p>
                              </div>
                              <div className="flex flex-col xl:items-end gap-2 mt-3 xl:mt-0">
                                <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border-0 px-4 py-2 xl:flex-shrink-0">
                                  {certificate.issueDate}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/60 px-3 py-2 rounded-full">
                                  <span className="font-medium">ID:</span>
                                  <span className="font-mono">
                                    {certificate.credentialId}
                                  </span>
                                </div>
                                <Link
                                  href={certificate.imageUrl}
                                  target="_blank"
                                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
                                  Buka
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="lg:col-span-4 space-y-8">
            {/* Skills Section */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300 lg:sticky lg:top-6">
                <CardHeader className="pb-6 border-b border-gradient-to-r from-blue-100 to-transparent">
                  <CardTitle className="text-xl lg:text-2xl text-gray-900 flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <User className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    Keahlian
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="space-y-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <motion.div
                        key={category}
                        variants={fadeIn}>
                        <h3 className="font-semibold  mb-4 text-blue-600 flex items-center gap-3 text-lg">
                          <div
                            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            aria-hidden="true"></div>
                          {category}
                        </h3>
                        <ul
                          className="flex flex-wrap gap-2"
                          role="list">
                          {skillList.map((skill) => (
                            <li
                              key={skill}
                              className="flex items-center gap-2 px-3 py-2 bg-blue-50/50 rounded-full hover:bg-blue-100/50 transition-colors border border-blue-100/30">
                              <div
                                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                                aria-hidden="true"></div>
                              <span className="text-gray-700 text-sm font-medium">
                                {skill}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education Section */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6 border-b border-gradient-to-r from-blue-100 to-transparent">
                  <CardTitle className="text-xl lg:text-2xl text-gray-900 flex items-center gap-3">
                    <div className="p-2 lg:p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    Pendidikan
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative p-6 bg-gradient-to-r from-blue-50/50 to-transparent rounded-2xl border border-blue-100/50 hover:shadow-md transition-all duration-300">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-blue-600 font-medium mb-3">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white/60 px-3 py-2 rounded-full w-fit">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.description && (
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div {...fadeIn}>
              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <h3 className="font-semibold mb-3 text-lg">
                    Mari Berkolaborasi
                  </h3>
                  <p className="text-blue-100 mb-6 opacity-90 leading-relaxed">
                    Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi
                    saya.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://${personalInfo.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://${personalInfo.contact.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center pt-12 mt-12"
          {...fadeIn}>
          <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border border-blue-100/50">
            <p className="text-gray-500">
              Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
