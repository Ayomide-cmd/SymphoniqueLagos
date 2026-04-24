'use client'

import { motion } from 'framer-motion'
import { stagger, viewportOptions } from '@/lib/motion'

const cardEase = [0.16, 1, 0.3, 1]

const revealVariants = {
  hidden: { 
    y: '100%', 
    skewY: 7, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    skewY: 0, 
    opacity: 1,
    transition: { duration: 1.4, ease: cardEase }
  }
}

export function About() {
  return (
    <section id="about" style={s.section}>
      <div style={s.container}>
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: cardEase }}
          style={s.sideLabel}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={s.runningHead}
          >
            Institutional Philosophy
          </motion.span>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={s.content}
        >
          <div style={s.bodyGrid}>
            <div style={s.leadCol}>
              <div style={{ overflow: 'hidden' }}>
                <motion.p variants={revealVariants} style={s.leadText}>
                  Founded on the principle that serious musical study demands 
                  absolute institutional commitment.
                </motion.p>
              </div>
            </div>

            <div style={s.mainCol}>
              <div style={{ overflow: 'hidden' }}>
                <motion.p variants={revealVariants} style={s.paragraph}>
                  We offer nothing casual. Our training is structured, methodical, 
                  and designed to produce musicians of the highest technical order.
                </motion.p>
              </div>
              
              <div style={{ overflow: 'hidden' }}>
                <motion.p variants={revealVariants} style={s.paragraph}>
                  Our curriculum draws from conservatory models in Paris and Vienna, 
                  re-engineered for the modern aspirant.
                </motion.p>
              </div>
              
              <motion.div 
                style={s.signatureBox}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: cardEase }}
              >
                <div style={s.line} />
                <span style={s.signatureText}>The Conservatory Standard</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const s = {
  section: {
    background: 'var(--bg-primary)',
    padding: 'clamp(100px, 20vh, 240px) clamp(24px, 5vw, 80px)',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gap: 'clamp(30px, 8vw, 80px)',
  },
  sideLabel: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '12px',
    borderRight: '1px solid var(--accent)',
    width: '40px',
  },
  runningHead: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    whiteSpace: 'nowrap',
    padding: '20px 0',
  } as React.CSSProperties,
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bodyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '60px',
    alignItems: 'start',
  },
  leadCol: {
    position: 'relative',
  },
  leadText: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(24px, 3.5vw, 42px)',
    lineHeight: 1.15,
    color: 'var(--text-primary)',
    margin: 0,
    fontWeight: 400,
    letterSpacing: '-0.02em',
  },
  mainCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    paddingTop: '12px',
  },
  paragraph: {
    fontFamily: 'var(--font-sans)',
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--text-secondary)',
    lineHeight: 1.9,
    margin: 0,
    maxWidth: '42ch',
  },
  signatureBox: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  line: {
    width: '60px',
    height: '1px',
    background: 'var(--accent)',
    flexShrink: 0,
  },
  signatureText: {
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--text-primary)',
    whiteSpace: 'nowrap',
  },
}