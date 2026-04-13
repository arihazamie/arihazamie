'use client'

import { Briefcase, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Head of Finance Affairs',
    company: 'Sungai Jering Village Government',
    period: '10/2025 – Present',
    location: 'Merangin, Jambi',
    highlights: [
      'Manage input and printing of Village Budget (APBDes) with strict data accuracy',
      'Execute village fund withdrawals and manage monthly salary disbursements',
      'Prepare detailed financial accountability reports (SPJ) in compliance with government regulations',
      'Strengthened attention to detail and data integrity - core soft skills for engineering work'
    ]
  }
]

export function Experience() {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
        <Briefcase size={32} className="text-primary" />
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-card-lg rounded-lg p-6 hover:border-primary transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground mt-2 md:mt-0">
                <div>{exp.period}</div>
                <div>{exp.location}</div>
              </div>
            </div>
            
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
