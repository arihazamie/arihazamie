'use client'

import { useState } from 'react'
import { Award, X } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'Bangkit Academy Cloud Computing Learning Path',
    issuer: 'Led by Google, GoTo, & Traveloka',
    description: 'Graduated from Cloud Computing learning path',
    role: 'Led a 3-member Cloud Computing subgroup within a 7-person cross-functional team',
    achievements: [
      'Built and deployed scalable solutions on Google Cloud Platform',
      'Developed backend services using Node.js & Python',
      'Managed cloud deployments and infrastructure',
      'Integrated Machine Learning APIs for AI features',
      'Applied teamwork, critical thinking, and problem-solving'
    ]
  }
]

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  return (
    <>
      <section className="border-t border-border pt-8">
        <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
          <Award size={32} className="text-primary" />
          Certifications
        </h2>

        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-card-lg rounded-lg p-6 hover:border-primary transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground font-medium mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground mb-4">
                <p><span className="text-primary font-medium">Leadership Role:</span> {cert.role}</p>
                <div>
                  <p className="text-primary font-medium mb-2">Key Achievements:</p>
                  <ul className="ml-4 space-y-1">
                    {cert.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-block text-primary font-medium hover:underline transition-all"
              >
                View Certificate →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lightweight Modal Popup */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass-card-lg border-primary rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors bg-secondary rounded-full p-2 z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{selectedCert.title}</h3>
              <p className="text-muted-foreground font-medium mb-4">{selectedCert.issuer}</p>

              <div className="bg-secondary rounded-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Award size={48} className="text-primary" />
                </div>
                <p className="text-center text-foreground font-semibold mb-2">Certificate of Achievement</p>
                <p className="text-center text-muted-foreground text-sm">{selectedCert.description}</p>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-primary font-medium mb-2">Leadership Role:</p>
                  <p>{selectedCert.role}</p>
                </div>

                <div>
                  <p className="text-primary font-medium mb-2">Key Achievements:</p>
                  <ul className="space-y-2 ml-4">
                    {selectedCert.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
