'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '28px 64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
          background: scrolled ? 'rgba(11,11,12,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
          }}
        >
          Symphonique{' '}
          <span style={{ color: 'var(--accent)' }}>Lagos</span>
        </a>

        {/* Desktop links */}
        <ul
          className="hidden md:flex"
          style={{ gap: '40px', listStyle: 'none' }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'block', width: '24px', height: '1px', background: 'var(--text-primary)' }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'block', width: '24px', height: '1px', background: 'var(--text-primary)' }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'block', width: '24px', height: '1px', background: 'var(--text-primary)' }}
          />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              background: 'var(--bg-secondary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '64px 40px',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '36px',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div style={{ marginTop: '48px' }}>
              <p style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'color 0.25s ease',
        position: 'relative',
      }}
      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--text-primary)' }}
      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-secondary)' }}
    >
      {children}
    </a>
  )
}
