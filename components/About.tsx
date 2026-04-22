'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

export function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'clamp(100px, 12vw, 160px) clamp(32px, 6vw, 80px)',
      }}
    >
      <motion.div
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Section index */}
        <motion.span
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            display: 'block',
            marginBottom: '48px',
          }}
        >
          01 — About
        </motion.span>

        
        <motion.div
          variants={fadeUp}
          style={{
            width: '1px',
            height: '64px',
            background: 'var(--accent)',
            opacity: 0.4,
            marginBottom: '48px',
          }}
        />

        {/* Main heading */}
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(34px, 4.5vw, 58px)',
            fontWeight: 400,
            lineHeight: 1.12,
            color: 'var(--text-primary)',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          Rigorous. Precise.<br />
          <em style={{ fontStyle: 'italic' }}>Uncompromising.</em>
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '40px',
            height: '1px',
            background: 'var(--border-subtle)',
            marginBottom: '40px',
          }}
        />

        {/* First paragraph — larger lead */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(18px, 2.2vw, 22px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            lineHeight: 1.65,
            marginBottom: '28px',
            opacity: 0.85,
          }}
        >
          Founded on the principle that serious musical study demands serious
          institutional commitment.
        </motion.p>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.95,
            marginBottom: '20px',
          }}
        >
          We offer nothing casual. Our training is structured, methodical, and
          designed to produce musicians of the highest technical and interpretive
          order. Every programme is built around disciplined practice, music
          theory, and performance under expert supervision.
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.95,
          }}
        >
          Our curriculum draws from conservatory models in Paris, Vienna, and
          London, adapted for the serious musical aspirant in West Africa.
          Excellence here is not aspirational. It is the minimum standard.
        </motion.p>

        {/* Bottom rule */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '1px',
            height: '64px',
            background: 'var(--accent)',
            opacity: 0.4,
            marginTop: '64px',
          }}
        />
      </motion.div>
    </section>
  )
}
