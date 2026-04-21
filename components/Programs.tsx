'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '@/lib/motion'

const programs = [
  {
    numeral: 'i.',
    title: 'Classical Piano Performance',
    description:
      'A structured study of the Western piano canon from Bach through the twentieth century. Technique, interpretation, and repertoire in equal measure. Students undertake graded examinations aligned to ABRSM standards.',
    duration: '2 — 4 Year Programme',
    tags: ['Solo Performance', 'Chamber Music', 'Sight-Reading'],
  },
  {
    numeral: 'ii.',
    title: 'Orchestral Strings',
    description:
      'Violin, viola, and cello training with emphasis on ensemble performance, solo technique, and the physics of the bow arm. Weekly orchestral rehearsals are compulsory from the second term.',
    duration: '3 Year Programme',
    tags: ['Violin', 'Viola', 'Cello', 'Ensemble'],
  },
  {
    numeral: 'iii.',
    title: 'Vocal Studies',
    description:
      'Classical voice training for lyric soprano, mezzo, baritone, and bass. Breath mechanics, diction in five languages, and repertoire spanning four centuries of operatic and art-song tradition.',
    duration: '2 — 3 Year Programme',
    tags: ['Opera', 'Art Song', 'Diction', 'Phonetics'],
  },
  {
    numeral: 'iv.',
    title: 'Music Theory & Composition',
    description:
      'Counterpoint, harmonic analysis, orchestration, and original composition. A programme for those who wish to understand music at its structural core, and to create within those structures.',
    duration: '2 Year Programme',
    tags: ['Counterpoint', 'Orchestration', 'Analysis'],
  },
  {
    numeral: 'v.',
    title: 'Conducting',
    description:
      'Score reading, ensemble direction, and podium mechanics. Offered to advanced students with prior conservatory-level training in an orchestral instrument. Cohort sizes are strictly limited to four per intake.',
    duration: '1 — 2 Year Programme',
    tags: ['Score Study', 'Podium Technique', 'Rehearsal'],
  },
  {
    numeral: 'vi.',
    title: 'Early Music & Musicology',
    description:
      'Historical performance practice, archival study, and the scholarly traditions that undergird serious musical inquiry. A programme for the academic musician and the historically curious performer.',
    duration: '2 Year Programme',
    tags: ['Historical Practice', 'Research', 'Scholarship'],
  },
]

export function Programs() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="programs"
      style={{
        background: 'var(--bg-primary)',
        padding: 'clamp(80px, 10vw, 120px) clamp(32px, 6vw, 80px)',
      }}
    >
      {/* Header */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
          flexWrap: 'wrap',
          gap: '32px',
        }}
      >
        <div>
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
            02 — Programs
          </motion.span>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}
          >
            Programmes<br />of Study
          </motion.h2>
        </div>
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.85,
            maxWidth: '340px',
          }}
        >
          Each programme is designed as a complete discipline, not a sampler.
          Enrolment is selective and commitment is expected.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: 'var(--border-subtle)',
        }}
      >
        {programs.map((program, i) => (
          <ProgramCard
            key={program.numeral}
            program={program}
            isHovered={hovered === i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </motion.div>
    </section>
  )
}

function ProgramCard({
  program,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  program: (typeof programs)[number]
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <motion.article
      variants={fadeUp}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background: isHovered ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
        padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
        position: 'relative',
        transition: 'background 0.35s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Accent line on hover */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--accent)',
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s ease',
        }}
      />

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '12px',
          fontStyle: 'italic',
          color: isHovered ? 'var(--accent)' : 'var(--text-secondary)',
          letterSpacing: '0.06em',
          marginBottom: '28px',
          transition: 'color 0.35s',
        }}
      >
        {program.numeral}
      </p>

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '14px',
          lineHeight: 1.25,
        }}
      >
        {program.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.85,
          marginBottom: '28px',
          flex: 1,
        }}
      >
        {program.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {program.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
              padding: '3px 8px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        {program.duration}
      </span>
    </motion.article>
  )
}
