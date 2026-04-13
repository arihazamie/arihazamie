"use client";

import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "UPI YPTK LPPM Research Portal",
    role: "Lead Full-Stack Developer",
    period: "05/2025 – 10/2025",
    description:
      "Designed and implemented a scalable research management system for the university",
    highlights: [
      "Scalable RESTful APIs using Node.js and PostgreSQL",
      "Role-Based Access Control (RBAC) system with multi-level access",
      "Multi-stage approval workflows with 8 status states",
      "Security implementation: authentication, input validation, and encryption",
      "Optimized relational queries for performance and scalability",
    ],
    previewLink: "https://research.upi-yptk.ac.id",
    projectLink: "https://github.com/arihazmie/research-portal",
  },
  {
    title: "Geopark Merangin Information System",
    role: "Solo Developer (Undergraduate Thesis)",
    period: "02/2025 – 10/2025",
    description:
      "Web-based platform to digitize information for UNESCO Global Geopark Merangin",
    highlights: [
      "Interactive mapping features and responsive UI using Next.js",
      "Full-stack deployment in production environments",
      "Performance and SEO optimization for public access",
      "Tourism-focused platform promoting geological heritage",
    ],
    previewLink: "https://geopark-merangin.id",
    projectLink: "https://github.com/arihazmie/geopark-merangin",
  },
  {
    title: "Eco Sense – Smart Environmental App",
    role: "Cloud Computing Lead",
    period: "Bangkit Capstone Project",
    description:
      "AI-powered sustainability application with cloud infrastructure",
    highlights: [
      "Scalable backend infrastructure on Google Cloud Platform (GCP)",
      "Cloud SQL and Cloud Storage configuration",
      "Backend services deployment via Cloud Run",
      "Real-time environmental data processing",
      "REST APIs for ML model integration (waste classification)",
    ],
    previewLink: "https://eco-sense.app",
    projectLink: "https://github.com/arihazmie/eco-sense",
  },
];

export function Projects() {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
        <Code2
          size={32}
          className="text-primary"
        />
        Featured Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card-lg rounded-lg p-6 hover:border-primary transition-all">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-primary mb-1">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-2">
                {project.description}
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {project.role}
                </span>
                <span className="hidden md:inline">•</span>
                <span>{project.period}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-muted-foreground text-sm">
                  <span className="text-primary font-bold">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 flex-wrap">
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all text-sm font-medium">
                Preview
                <ExternalLink size={16} />
              </a>
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary text-primary hover:bg-primary/10 transition-all text-sm font-medium">
                GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
