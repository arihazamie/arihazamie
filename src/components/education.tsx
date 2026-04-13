'use client'

import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
        <GraduationCap size={32} className="text-primary" />
        Education
      </h2>
      
      <div className="space-y-6">
        <div className="glass-card-lg rounded-lg p-6 hover:border-primary transition-all">
          <h3 className="text-xl font-semibold text-primary mb-2">Computer Science / Information Systems</h3>
          <p className="text-muted-foreground font-medium mb-1">Universitas Putra Indonesia YPTK Padang</p>
          <p className="text-sm text-muted-foreground mb-4">10/2021 – 10/2025 | Padang, Indonesia</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Focus Areas:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
              <li className="flex gap-2">
                <span className="text-primary">•</span> Full-Stack Web Development
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Database Management
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> System Analysis
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
