'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Scanline texture */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Top border rule */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--border-subtle)',
        }}
      />

      {/* Vertical accent line */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          left: 'clamp(32px, 6vw, 80px)',
          top: '0',
          width: '1px',
          height: '200px',
          background: 'var(--accent)',
          transformOrigin: 'top',
          opacity: 0.5,
        }}
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}
      >
        {/* Pre-heading */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '40px',
              height: '1px',
              background: 'var(--accent)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            Conservatory of Music — Lagos, Nigeria
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px, 8vw, 100px)',
            fontWeight: 400,
            lineHeight: 1.04,
            letterSpacing: '-0.015em',
            color: 'var(--text-primary)',
            marginBottom: '56px',
          }}
        >
          <motion.span
            style={{ display: 'block', y: headlineY, opacity }}
          >
            Where mastery<br />
            is the only{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
              standard
            </em>.
          </motion.span>
        </motion.h1>

        {/* Sub row */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'flex-start', gap: '64px' }}
          className="flex-col sm:flex-row"
        >
          <div
            className="hidden sm:block"
            style={{
              width: '1px',
              height: '88px',
              background: 'var(--border-subtle)',
              flexShrink: 0,
              marginTop: '4px',
            }}
          />
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                maxWidth: '420px',
                marginBottom: '36px',
              }}
            >
              Symphonique Lagos is a discipline-focused music conservatory
              offering European-standard training in classical performance,
              composition, and music theory. We do not offer convenience —
              we offer rigour.
            </p>
            <a
              href="#programs"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--accent)',
                paddingBottom: '4px',
                transition: 'color 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = 'var(--text-primary)'
              }}
            >
              Explore Programs
              <span aria-hidden="true" style={{ fontSize: '14px' }}>→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom-right metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '56px',
          right: 'clamp(32px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
        }}
        className="hidden md:flex"
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
          }}
        >
          Lagos, Nigeria
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            opacity: 0.6,
          }}
        >
          Est. 2018
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: '52px',
          left: 'clamp(32px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        className="hidden md:flex"
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            opacity: 0.5,
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ width: '1px', height: '40px', background: 'var(--border-subtle)' }}
        />
      </motion.div>
    </section>
  )
}
