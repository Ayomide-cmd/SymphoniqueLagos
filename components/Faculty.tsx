'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

const faculty = [
  {
    initials: 'AO',
    name: 'Dr. Adaeze Okafor',
    role: 'Piano — Head of Department',
    bio: 'Former lecturer at the Royal College of Music, London. Concert pianist with performances across Europe and West Africa. Doctoral studies in Schubertian harmonic language, Universität Wien.',
    credentials: ['RCM London', 'Universität Wien', 'PhD Musicology'],
  },
  {
    initials: 'EB',
    name: 'Prof. Emeka Bassey',
    role: 'Violin & Orchestral Strings',
    bio: 'Graduate of the Conservatoire de Paris. Section violinist with the Vienna Philharmonic, 2009–2017. Has given master classes in Budapest, Lyon, and Cape Town.',
    credentials: ['Conservatoire de Paris', 'Vienna Philharmonic', 'Master Classes'],
  },
  {
    initials: 'CE',
    name: 'Ms. Chisom Eze',
    role: 'Voice — Lyric & Dramatic',
    bio: 'Soprano. Trained at the Guildhall School of Music & Drama. Performed with the English National Opera and Opéra de Lyon. Specialises in Verdi and the bel canto tradition.',
    credentials: ['Guildhall School', 'ENO', 'Opéra de Lyon'],
  },
  {
    initials: 'KA',
    name: 'Dr. Kelechi Anyanwu',
    role: 'Theory, Harmony & Composition',
    bio: 'PhD in musicology, King\'s College London. Published theorist and author of two monographs on post-tonal harmonic systems. Occasional composer for chamber ensembles.',
    credentials: ['King\'s College London', 'Published Theorist', 'Composer'],
  },
]

export function Faculty() {
  return (
    <section
      id="faculty"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      {/* Header */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{ marginBottom: 'clamp(48px, 6vw, 80px)', maxWidth: '640px' }}
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
          03 — Faculty
        </motion.span>
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}
        >
          Those Who<br />
          <em style={{ fontStyle: 'italic' }}>Have Mastered</em>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            maxWidth: '520px',
          }}
        >
          Our faculty are practising performers and scholars. Not former
          musicians — current ones. Their instruction is drawn from active
          concert life, not memory.
        </motion.p>
      </motion.div>

      {/* Faculty grid */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
        }}
      >
        {faculty.map((member) => (
          <FacultyCard key={member.initials} member={member} />
        ))}
      </motion.div>
    </section>
  )
}

function FacultyCard({ member }: { member: (typeof faculty)[number] }) {
  return (
    <motion.article variants={fadeUp}>
      {/* Portrait placeholder */}
      <div
        style={{
          width: '100%',
          aspectRatio: '3 / 4',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Initials monogram */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.08)',
            userSelect: 'none',
          }}
        >
          {member.initials}
        </span>
        {/* Corner accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '32px',
            height: '32px',
            borderTop: '1px solid var(--accent)',
            borderRight: '1px solid var(--accent)',
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '32px',
            height: '32px',
            borderBottom: '1px solid var(--accent)',
            borderLeft: '1px solid var(--accent)',
            opacity: 0.4,
          }}
        />
      </div>

      {/* Role */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '8px',
        }}
      >
        {member.role}
      </p>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '20px',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '12px',
        }}
      >
        {member.name}
      </h3>

      {/* Bio */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.75,
          marginBottom: '16px',
        }}
      >
        {member.bio}
      </p>

      {/* Credentials */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        {member.credentials.map((cred) => (
          <span
            key={cred}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              opacity: 0.6,
              marginRight: '12px',
              marginBottom: '4px',
            }}
          >
            {cred}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
