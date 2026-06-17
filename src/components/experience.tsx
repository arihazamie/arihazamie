'use client'

import { Briefcase, CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    title: 'Head of Finance',
    company: 'Pemerintah Desa Sungai Jering',
    period: '10/2025 – 04/2026',
    location: 'Merangin, Jambi',
    highlights: [
      'Fully operated the Siskeudes application — inputting RAB/APBDes, recording SPP/SPM, maintaining the General Cash Book (BKU), and preparing the Budget Implementation Report (LRA)',
      'Managed village fund disbursements of Rp100–250 million per quarter via banking system, including check withdrawals and bank statement reconciliation',
      'Prepared Accountability Reports (SPJ) and village financial reports for local government accountability',
      'Managed disbursement and distribution of Direct Cash Assistance (BLT) to eligible beneficiaries per applicable regulations',
      'Verified consistency of financial data against transaction records to ensure accuracy in village financial recording and reporting'
    ]
  },
  {
    title: 'Graphic Designer',
    company: 'Dhimas Digital Printing',
    period: '01/2020 – 04/2020',
    location: 'Kota Jambi, Jambi',
    highlights: [
      'Designed visual materials using CorelDRAW — banners, billboards, flags, and print media',
      'Coordinated with production team to ensure print-ready output with optimal quality'
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