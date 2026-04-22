'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

const contactDetails = [
  {
    label: 'Address',
    value: '14B Bourdillon Road, Ikoyi\nLagos, Nigeria',
    isAddress: true,
  },
  {
    label: 'Admissions Enquiries',
    value: 'admissions@symphoniquelagos.ng',
    href: 'mailto:admissions@symphoniquelagos.ng',
  },
  {
    label: 'General Enquiries',
    value: 'enquiries@symphoniquelagos.ng',
    href: 'mailto:enquiries@symphoniquelagos.ng',
  },
  {
    label: 'Office Hours',
    value: 'Monday – Friday\n9:00 am – 5:00 pm WAT',
    isAddress: true,
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? 'var(--accent)' : 'var(--border-subtle)'}`,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '14px',
    fontWeight: 300,
    padding: '12px 0',
    outline: 'none',
    transition: 'border-color 0.3s',
    caretColor: 'var(--accent)',
  })

  return (
    <section
      id="contact"
      style={{
        background: 'var(--bg-primary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(48px, 6vw, 80px)',
        }}
      >
       
        <motion.div
          variants={stagger(0.1)}
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
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}
          >
            05 — Contact
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: '56px',
            }}
          >
            Get in<br />
            <em style={{ fontStyle: 'italic' }}>Touch</em>
          </motion.h2>

          {contactDetails.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '22px',
                marginBottom: '28px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '10px',
                }}
              >
                {item.label}
              </p>
              {item.isAddress ? (
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {item.value}
                </p>
              ) : (
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    transition: 'color 0.25s',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--accent)' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--text-primary)' }}
                >
                  {item.value}
                </a>
              )}
            </motion.div>
          ))}

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.85,
              marginTop: '40px',
              opacity: 0.7,
            }}
          >
            We respond to all enquiries within three working days. Visits to
            the conservatory are by appointment only. We do not conduct
            admission counselling over social media or messaging platforms.
          </motion.p>
        </motion.div>

        
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            variants={fadeUp}
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '40px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: '36px',
              }}
            >
              Send an Enquiry
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '48px 0',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                  }}
                >
                  Received.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                  }}
                >
                  We will respond within three working days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                        opacity: 0.7,
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                      placeholder=""
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                        opacity: 0.7,
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="subject"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                        opacity: 0.7,
                      }}
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle('subject'),
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        color: formState.subject ? 'var(--text-primary)' : 'var(--text-secondary)',
                      }}
                    >
                      <option value="" disabled hidden>Select a subject</option>
                      <option value="admissions">Admissions Enquiry</option>
                      <option value="prospectus">Prospectus Request</option>
                      <option value="faculty">Faculty Information</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                        opacity: 0.7,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle('message'),
                        resize: 'none',
                        lineHeight: 1.7,
                      }}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    {error && (
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '12px',
                        color: '#e05a5a',
                        marginBottom: '16px',
                        letterSpacing: '0.02em',
                      }}>
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '11px',
                        fontWeight: 400,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--bg-primary)',
                        background: 'var(--accent)',
                        border: 'none',
                        padding: '16px 32px',
                        cursor: loading ? 'wait' : 'pointer',
                        opacity: loading ? 0.6 : 1,
                        transition: 'opacity 0.25s',
                      }}
                      onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = '0.85' }}
                      onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.opacity = '1' }}
                    >
                      {loading ? 'Sending…' : 'Submit Enquiry'}
                    </button>
                  </motion.div>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
