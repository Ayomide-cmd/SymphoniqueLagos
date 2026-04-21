'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

const steps = [
  {
    numeral: 'i.',
    title: 'Application Submission',
    body: 'Complete the written application, including a personal statement, documentation of prior musical study, and two references — one from a music teacher or recognised institution.',
  },
  {
    numeral: 'ii.',
    title: 'Portfolio Review',
    body: 'Faculty review submitted materials including recordings (where applicable) and a written theory assessment completed on-site or under supervised conditions.',
  },
  {
    numeral: 'iii.',
    title: 'Live Audition',
    body: 'A formal audition before a panel of three faculty members. Repertoire requirements are programme-specific and communicated upon shortlisting. There are no exceptions.',
  },
  {
    numeral: 'iv.',
    title: 'Enrolment & Placement',
    body: 'Successful candidates receive a formal offer letter. Placement within a programme cohort is finalised following a one-to-one faculty consultation.',
  },
]

export function Admissions() {
  return (
    <section
      id="admissions"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(48px, 6vw, 80px)',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}
          >
            04 — Admissions
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '32px',
            }}
          >
            We Admit<br />
            for <em style={{ fontStyle: 'italic' }}>Readiness</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}
          >
            Admission to Symphonique Lagos is competitive and assessed
            holistically. We are not selecting potential alone — we are
            selecting commitment, preparation, and the kind of seriousness
            that sustains years of disciplined study.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '48px',
            }}
          >
            Intake occurs once annually. Applications open in October and
            close in January. All applicants are required to perform in
            person before a panel of senior faculty.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                padding: '16px 28px',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--accent)'
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border-subtle)'
                el.style.color = 'var(--text-primary)'
              }}
            >
              Request a Prospectus
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — process steps */}
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          style={{ paddingTop: 'clamp(0px, 4vw, 60px)' }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.numeral}
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: '32px',
                padding: '32px 0',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '13px',
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  flexShrink: 0,
                  width: '24px',
                  paddingTop: '2px',
                }}
              >
                {step.numeral}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </motion.div>
      </div>
    </section>
  )
}
