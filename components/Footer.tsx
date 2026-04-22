'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '@/lib/motion'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(32px, 4vw, 48px) clamp(32px, 6vw, 80px)',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Logo */}
        <motion.a
          variants={fadeUp}
          href="#"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '15px',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          Symphonique Lagos
        </motion.a>

       
        <motion.ul
          variants={fadeUp}
          style={{
            display: 'flex',
            gap: 'clamp(20px, 3vw, 36px)',
            listStyle: 'none',
            flexWrap: 'wrap',
          }}
        >
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  opacity: 0.5,
                  transition: 'opacity 0.25s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.5' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            color: 'var(--text-secondary)',
            opacity: 0.35,
          }}
        >
          &copy; {new Date().getFullYear()} Symphonique Lagos. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  )
}
