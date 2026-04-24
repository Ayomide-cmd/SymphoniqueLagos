'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

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
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-10% 0',
          y: imageY,
          backgroundImage: 'url(https://i.pinimg.com/1200x/e8/0b/8e/e80b8e7942a117718bf0ca5497bc40c0.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(11,11,12,0.58)',
          zIndex: 1,
        }}
      />

      
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(11,11,12,0.97) 0%, rgba(11,11,12,0.4) 45%, rgba(11,11,12,0.1) 100%)',
          zIndex: 2,
        }}
      />

      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '860px',
          opacity: contentOpacity,
        }}
      >
        
        <motion.div variants={itemVariants} style={{ marginBottom: '52px' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(13px, 1.4vw, 16px)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'var(--text-primary)',
            marginBottom: '6px',
            opacity: 0.9,
          }}>
           
          </p>
          
        </motion.div>

       
        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px, 8vw, 100px)',
            fontWeight: 400,
            lineHeight: 1.04,
            letterSpacing: '-0.015em',
            color: 'var(--text-primary)',
            marginBottom: '32px',
          }}
        >
          Architects<br />
          of{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Sound</em>.
        </motion.h1>

        
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            fontWeight: 300,
            color: 'rgba(245,243,239,0.7)',
            lineHeight: 1.8,
            maxWidth: '460px',
            marginBottom: '32px',
          }}
        >
          Symphonique Lagos is a discipline-focused music conservatory
          offering European-standard training in classical performance,
          composition, and music theory.
        </motion.p>

        
        <motion.div variants={itemVariants}>
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
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
          >
            Explore Programs
            <span aria-hidden="true" style={{ fontSize: '14px' }}>→</span>
          </a>
        </motion.div>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '56px',
          right: 'clamp(32px, 6vw, 80px)',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px',
          zIndex: 4,
        }}
      >
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,243,239,0.4)' }}>
          Lagos, Nigeria
        </span>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', fontStyle: 'italic', color: 'rgba(245,243,239,0.3)' }}>
          Est. 2018
        </span>
      </motion.div>
    </section>
  )
}
