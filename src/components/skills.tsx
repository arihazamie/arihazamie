'use client'

import { Code2, Database, Shield, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Code2,
    title: 'Backend Development',
    skills: ['Node.js', 'RESTful APIs', 'JavaScript', 'TypeScript']
  },
  {
    icon: Database,
    title: 'Databases & ORM',
    skills: ['PostgreSQL', 'Prisma ORM', 'SQL Query Optimization', 'Cloud SQL']
  },
  {
    icon: Shield,
    title: 'Security & Cloud',
    skills: ['NextAuth.js (JWT)', 'Google Cloud Platform', 'Cloud Run', 'RBAC Systems']
  },
  {
    icon: Wrench,
    title: 'Tools & Skills',
    skills: ['Git', 'AI-Assisted Tools', 'Data Integrity', 'Problem Solving']
  }
]

export function Skills() {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.title} className="glass-card rounded-lg p-6 hover:border-primary transition-all hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Icon size={24} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full border border-border hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
