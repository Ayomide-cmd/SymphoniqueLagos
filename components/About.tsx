'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

const stats = [
  { number: '14+', label: 'Years of combined faculty experience in European conservatories' },
  { number: '6', label: 'Structured programmes across performance, theory, and composition' },
  { number: '92%', label: 'Of graduates pursue advanced study or professional performance' },
  { number: '18', label: 'Maximum enrolment per cohort — small, intensive, deliberate' },
]

export function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 6vw, 80px)',
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <motion.div
          variants={stagger(0.1, 0)}
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
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}
          >
            01 — About
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
            Rigorous.<br />
            Precise.<br />
            <em style={{ fontStyle: 'italic' }}>Uncompromising</em>.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              marginBottom: '24px',
              maxWidth: '480px',
            }}
          >
            Symphonique Lagos was founded on the principle that serious musical
            study demands serious institutional commitment. We offer nothing
            casual — only structured, methodical training designed to produce
            musicians of the highest technical and interpretive order.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.9,
              maxWidth: '480px',
            }}
          >
            Our curriculum draws from conservatory models in Paris, Vienna,
            and London, adapted for the serious musical aspirant in West
            Africa. Every programme is built around disciplined practice,
            music theory, and performance under expert supervision.
          </motion.p>
        </motion.div>

        {/* Right — stats */}
        <motion.div
          variants={stagger(0.08, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          style={{ paddingTop: 'clamp(0px, 5vw, 80px)' }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.number}
              variants={fadeUp}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                padding: '28px 0',
                display: 'flex',
                alignItems: 'baseline',
                gap: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  flexShrink: 0,
                  width: '100px',
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </motion.div>
      </div>
    </section>
  )
}
