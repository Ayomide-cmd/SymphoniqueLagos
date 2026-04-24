'use client'

import { motion, MotionStyle } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { stagger } from '@/lib/motion'
import React, { CSSProperties } from 'react'

const steps = [
  {
    title: 'Application Submission',
    body: 'Complete the written application, including a personal statement, documentation of prior musical study, and two references.',
  },
  {
    title: 'Portfolio Review',
    body: 'Faculty review submitted materials including recordings and a written theory assessment completed on-site.',
  },
  {
    title: 'Live Audition',
    body: 'A formal audition before a panel of three faculty members. Repertoire requirements are programme-specific. There are no exceptions.',
  },
  {
    title: 'Enrolment & Placement',
    body: 'Successful candidates receive a formal offer letter. Placement is finalised following a one-to-one faculty consultation.',
  },
]

const cardEase = [0.16, 1, 0.3, 1]

const textReveal = {
  hidden: { y: '100%', opacity: 0, skewY: 2 },
  visible: { 
    y: 0, 
    opacity: 1, 
    skewY: 0,
    transition: { duration: 1, ease: cardEase }
  }
}

export function Admissions() {
  return (
    <section id="admissions" style={s.section}>
      <div style={s.container}>
        
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={s.leftCol}
        >
          <motion.span
            variants={textReveal}
            style={s.overline}
          >
            Admissions
          </motion.span>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              variants={textReveal}
              style={s.title}
            >
              We Admit<br />
              for <span style={s.italic}>Readiness</span>
            </motion.h2>
          </div>

          <motion.div variants={stagger(0.1)} style={s.descriptionBox}>
            <div style={{ overflow: 'hidden' }}>
              <motion.p variants={textReveal} style={s.paragraph}>
                Admission is competitive and assessed holistically. We are selecting 
                the kind of seriousness that sustains years of disciplined study.
              </motion.p>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.p variants={textReveal} style={s.paragraph}>
                Intake occurs once annually. All applicants are required to perform 
                in person before a panel of senior faculty.
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={textReveal} style={{ marginTop: '40px' }}>
            <a href="#contact" style={s.cta}>
              Request a Prospectus
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>

        <div style={s.rightCol}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={s.stepRow}
            >
              <div style={s.visualCol}>
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  transition={{ duration: 1.2, ease: cardEase, delay: index * 0.1 }}
                  style={s.connector} 
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  style={s.dot} 
                />
              </div>

              <motion.div 
                variants={stagger(0.05)}
                style={s.stepContent}
              >
                <div style={{ overflow: 'hidden' }}>
                  <motion.h3 variants={textReveal} style={s.stepTitle}>
                    {step.title}
                  </motion.h3>
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <motion.p variants={textReveal} style={s.stepBody}>
                    {step.body}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    background: 'var(--bg-primary)',
    padding: 'clamp(100px, 15vw, 200px) clamp(24px, 5vw, 80px)',
    borderTop: '1px solid var(--border-subtle)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '80px',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  overline: {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '24px',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(40px, 5vw, 64px)',
    fontWeight: 400,
    lineHeight: 1,
    color: 'var(--text-primary)',
    margin: '0 0 40px 0',
    letterSpacing: '-0.03em',
  },
  italic: {
    fontStyle: 'italic',
  },
  descriptionBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  paragraph: {
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    fontWeight: 300,
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
    margin: 0,
    maxWidth: '40ch',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: '20px 0',
    borderBottom: '1px solid var(--accent)',
    width: 'fit-content',
    transition: 'opacity 0.3s',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  stepRow: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr',
    gap: '24px',
    minHeight: '140px',
  },
  visualCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  connector: {
    width: '1px',
    background: 'var(--border-subtle)',
    height: '100%',
  },
  dot: {
    position: 'absolute',
    top: '10px',
    width: '5px',
    height: '5px',
    background: 'var(--accent)',
    borderRadius: '50%',
  },
  stepContent: {
    paddingBottom: '48px',
  },
  stepTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '22px',
    fontWeight: 400,
    color: 'var(--text-primary)',
    margin: '0 0 12px 0',
    letterSpacing: '-0.01em',
  },
  stepBody: {
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    fontWeight: 300,
    color: 'var(--text-secondary)',
    lineHeight: 1.7,
    margin: 0,
    maxWidth: '45ch',
  },
}