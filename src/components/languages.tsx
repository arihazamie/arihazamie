"use client";

import { Globe } from "lucide-react";

const languages = [
  { name: "Indonesian", proficiency: "Native/Bilingual", level: 100 },
  { name: "English", proficiency: "Conversational", level: 50 },
];

export function Languages() {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
        <Globe
          size={32}
          className="text-primary"
        />
        Languages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="glass-card rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-foreground">{lang.name}</h3>
              <span className="text-sm text-primary font-medium">
                {lang.proficiency}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-cyan-400 h-full transition-all duration-500"
                style={{ width: `${lang.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
