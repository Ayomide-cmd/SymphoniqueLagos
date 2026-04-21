'use client'

import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger, viewportOptions } from '@/lib/motion'

const principles = [
  {
    title: 'Structure Before Expression',
    body: 'Expressive musicianship emerges from technical mastery, not before it. Our students learn the architecture of music before they inhabit it.',
  },
  {
    title: 'Small Cohorts by Design',
    body: 'We limit intake deliberately. Every student receives sustained individual attention. Excellence cannot be manufactured in volume.',
  },
  {
    title: 'European Standards, Local Roots',
    body: 'We draw from the world\'s most rigorous musical traditions while building a conservatory that belongs to Lagos, and to Africa\'s future.',
  },
  {
    title: 'Performance as Examination',
    body: 'Advancement is earned in public. Students perform formally at each progression point. The concert is both the test and the reward.',
  },
]

export function Philosophy() {
  return (
    <section
      style={{
        background: 'var(--bg-primary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(48px, 8vw, 120px)',
          alignItems: 'center',
        }}
      >
        {/* Left — pull quote */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            variants={fadeIn}
            style={{
              width: '48px',
              height: '1px',
              background: 'var(--accent)',
              marginBottom: '40px',
            }}
          />
          <motion.div
            variants={fadeUp}
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '40px',
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 2.5vw, 30px)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.5,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              &ldquo;Talent is a beginning. Discipline is the curriculum.&rdquo;
            </blockquote>
            <cite
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontStyle: 'normal',
              }}
            >
              — Founding Principle, Symphonique Lagos
            </cite>
          </motion.div>
        </motion.div>

        {/* Right — principles grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
          }}
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
