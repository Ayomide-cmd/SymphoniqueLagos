'use client'

import { useState, CSSProperties } from 'react'
import { motion, AnimatePresence, MotionStyle } from 'framer-motion'


const cardEase = [0.16, 1, 0.3, 1]

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const textReveal = {
  hidden: { y: '100%', opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1.2, ease: cardEase }
  }
}


const contactDetails = [
  { label: 'Address', value: '14B Bourdillon Road, Ikoyi\nLagos, Nigeria', isAddress: true },
  { label: 'Admissions', value: 'admissions@symphoniquelagos.ng', href: 'mailto:admissions@symphoniquelagos.ng' },
  { label: 'General Enquiries', value: 'enquiries@symphoniquelagos.ng', href: 'mailto:enquiries@symphoniquelagos.ng' },
  { label: 'Office Hours', value: 'Monday – Friday\n9:00 am – 5:00 pm WAT', isAddress: true },
]


interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" style={s.section}>
      <div style={s.container}>
        
       
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={s.leftCol}
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.span variants={textReveal} style={s.overline}>Explore The Academy</motion.span>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '60px' }}>
            <motion.h2 variants={textReveal} style={s.title}>
            Explore the <span style={s.italic}>Academy</span>
            </motion.h2>
          </div>

          <div style={s.infoGrid}>
            {contactDetails.map((item, i) => (
              <motion.div key={i} variants={textReveal} style={s.infoItem}>
                <span style={s.infoLabel}>{item.label}</span>
                {item.isAddress ? (
                  <p style={s.infoValue}>{item.value}</p>
                ) : (
                  <a href={item.href} style={s.infoLink}>{item.value}</a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: cardEase }}
          viewport={{ once: true }}
          style={s.rightCol}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={s.successBox as MotionStyle}
              >
                <h3 style={s.successTitle}>Received.</h3>
                <p style={s.successBody}>Our registrar will contact you within 72 hours.</p>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} style={s.form}>
                <div style={s.fieldGroup}>
                  <InputField 
                    label="Full Name" 
                    id="name" 
                    value={formState.name} 
                    focused={focused === 'name'}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    onChange={(v) => setFormState({...formState, name: v})}
                  />
                  <InputField 
                    label="Email" 
                    id="email" 
                    type="email"
                    value={formState.email} 
                    focused={focused === 'email'}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    onChange={(v) => setFormState({...formState, email: v})}
                  />
                </div>

                <div style={s.field}>
                  <label style={s.label}>Enquiry</label>
                  <div style={s.inputWrapper}>
                    <textarea 
                      style={{ 
                        ...s.input, 
                        ...s.textarea, 
                        borderColor: focused === 'msg' ? 'var(--accent)' : 'var(--border-subtle)' 
                      } as CSSProperties}
                      onFocus={() => setFocused('msg')}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    />
                    <motion.div 
                      initial={false}
                      animate={{ width: focused === 'msg' ? '100%' : '0%' }}
                      style={s.inputFocusLine as MotionStyle}
                    />
                  </div>
                </div>

                <button type="submit" disabled={loading} style={s.submitBtn}>
                  {loading ? 'Processing...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

function InputField({ label, id, type = "text", value, focused, onFocus, onBlur, onChange }: InputFieldProps) {
  return (
    <div style={s.field}>
      <label style={s.label} htmlFor={id}>{label}</label>
      <div style={s.inputWrapper}>
        <input 
          id={id}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ 
            ...s.input, 
            borderColor: focused ? 'var(--accent)' : 'var(--border-subtle)' 
          } as CSSProperties}
        />
        <motion.div 
          initial={false}
          animate={{ width: focused ? '100%' : '0%' }}
          style={s.inputFocusLine as MotionStyle}
        />
      </div>
    </div>
  )
}

const s: Record<string, CSSProperties> = {
  section: {
    background: 'var(--bg-primary)',
    padding: 'clamp(100px, 15vw, 240px) clamp(24px, 5vw, 80px)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '100px',
  },
  leftCol: { display: 'flex', flexDirection: 'column' },
  overline: {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: '10px',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '20px',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: 400,
    lineHeight: 1,
    margin: 0,
    letterSpacing: '-0.03em',
  },
  italic: { fontStyle: 'italic' },
  infoGrid: { display: 'flex', flexDirection: 'column', gap: '40px' },
  infoItem: { display: 'flex', flexDirection: 'column', gap: '8px' },
  infoLabel: {
    fontSize: '9px',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--accent)',
    opacity: 0.8
  },
  infoValue: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    margin: 0,
    whiteSpace: 'pre-line',
    lineHeight: 1.5
  },
  infoLink: {
    fontFamily: 'var(--font-serif)',
    fontSize: '18px',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    width: 'fit-content',
    transition: 'border-color 0.3s'
  },
  rightCol: {
    background: 'var(--bg-secondary)',
    padding: 'clamp(32px, 5vw, 64px)',
    border: '1px solid var(--border-subtle)',
  },
  form: { display: 'flex', flexDirection: 'column', gap: '40px' },
  fieldGroup: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' },
  field: { display: 'flex', flexDirection: 'column', gap: '12px' },
  label: { fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 },
  inputWrapper: { position: 'relative' },
  input: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border-subtle)',
    padding: '12px 0',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.4s',
    borderRadius: 0,
  },
  inputFocusLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '1px',
    background: 'var(--accent)',
  },
  textarea: { minHeight: '120px', lineHeight: 1.7 },
  submitBtn: {
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    border: 'none',
    padding: '24px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    cursor: 'pointer',
    transition: 'opacity 0.3s'
  },
  successBox: {
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  successTitle: { fontFamily: 'var(--font-serif)', fontSize: '42px', fontStyle: 'italic', margin: '0 0 16px 0' },
  successBody: { fontSize: '14px', opacity: 0.6 }
}