"use client";

import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border pb-8 text-center justify-items-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
          Ari Hazamie
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Backend Engineer & Cloud Architect
        </p>
      </div>

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        Information Systems graduate with a strong passion for data engineering
        and backend infrastructure. Experienced in architecting scalable
        solutions on Google Cloud Platform, optimizing SQL queries, and building
        robust data integrations via RESTful APIs.
      </p>

      <div className="flex gap-5 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail
            size={16}
            className="text-primary"
          />
          <a
            href="mailto:arihzmiutama@gmail.com"
            className="hover:text-primary transition-colors">
            arihzmiutama@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin
            size={16}
            className="text-primary"
          />
          <span>Merangin, Jambi, Indonesia</span>
        </div>
        <a
          className="flex items-center gap-2 text-muted-foreground"
          href="https://www.linkedin.com/in/arihazamie/"
          target="_blank">
          <Linkedin
            size={16}
            className="text-primary"
          />
          <span>Linkedin</span>
        </a>
        <a
          className="flex items-center gap-2 text-muted-foreground"
          href="https://github.com/arihazamie"
          target="_blank">
          <Github
            size={16}
            className="text-primary"
          />
          <span>Github</span>
        </a>
      </div>
    </header>
  );
}
