'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, viewportOptions } from '@/lib/motion'

const programs = [
  {
    numeral: 'I',
    title: 'Classical Piano Performance',
    duration: '2 — 4 Years',
    tags: ['Solo Performance', 'Chamber Music', 'Sight-Reading', 'ABRSM Aligned'],
    description:
      'A structured study of the Western piano canon from Bach through the twentieth century. Technique, interpretation, and repertoire receive equal attention. Students undertake graded examinations aligned to ABRSM standards and perform publicly at each progression point.',
  },
  {
    numeral: 'II',
    title: 'Orchestral Strings',
    duration: '3 Years',
    tags: ['Violin', 'Viola', 'Cello', 'Ensemble'],
    description:
      'Violin, viola, and cello training with emphasis on ensemble performance, solo technique, and the mechanics of the bow arm. Weekly orchestral rehearsals are compulsory from the second term. Students graduate with a concerto of their choosing.',
  },
  {
    numeral: 'III',
    title: 'Vocal Studies',
    duration: '2 — 3 Years',
    tags: ['Opera', 'Art Song', 'Diction', 'Five Languages'],
    description:
      'Classical voice training for lyric soprano, mezzo-soprano, baritone, and bass. Breath mechanics, diction in five languages, and repertoire spanning four centuries of operatic and art-song tradition. Recital graduation required.',
  },
  {
    numeral: 'IV',
    title: 'Music Theory and Composition',
    duration: '2 Years',
    tags: ['Counterpoint', 'Orchestration', 'Harmonic Analysis'],
    description:
      'Counterpoint, harmonic analysis, orchestration, and original composition. A programme for those who wish to understand music at its structural core and to create within those structures. Final examination includes a scored work for small ensemble.',
  },
  {
    numeral: 'V',
    title: 'Conducting',
    duration: '1 — 2 Years',
    tags: ['Score Study', 'Podium Technique', 'Rehearsal Direction'],
    description:
      'Score reading, ensemble direction, and podium mechanics. Offered exclusively to advanced students with prior conservatory-level training in an orchestral instrument. Cohort sizes are strictly limited to four per intake. Prior application required.',
  },
  {
    numeral: 'VI',
    title: 'Early Music and Musicology',
    duration: '2 Years',
    tags: ['Historical Practice', 'Archival Research', 'Scholarship'],
    description:
      'Historical performance practice, archival study, and the scholarly traditions that undergird serious musical inquiry. A programme for the academic musician and the historically curious performer. Students produce a dissertation alongside performance work.',
  },
]

export function Programs() {
  const [open, setOpen] = useState<number | null>(null)

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div>
          <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
            02 — Programs
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)' }}>
            Programmes<br />of Study
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: '300px', opacity: 0.8 }}>
          Each programme is a complete discipline. Enrolment is selective and commitment is expected.
        </p>
      </motion.div>

      {/* Accordion list */}
      <motion.div
        variants={stagger(0.07)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {programs.map((program, i) => (
          <ProgramRow
            key={program.numeral}
            program={program}
            index={i}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </motion.div>
    </section>
  )
}

function ProgramRow({
  program,
  index,
  isOpen,
  onToggle,
}: {
  program: (typeof programs)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          borderTop: `1px solid ${isOpen ? 'var(--accent)' : 'var(--border-subtle)'}`,
          cursor: 'pointer',
          padding: 'clamp(20px, 2.5vw, 28px) 0',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(16px, 3vw, 40px)',
          textAlign: 'left',
          transition: 'border-color 0.35s ease',
        }}
      >
        {/* Roman numeral */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(11px, 1.2vw, 13px)',
            fontStyle: 'italic',
            color: isOpen ? 'var(--accent)' : 'var(--text-secondary)',
            opacity: isOpen ? 1 : 0.5,
            flexShrink: 0,
            width: '28px',
            transition: 'color 0.35s, opacity 0.35s',
          }}
        >
          {program.numeral}
        </span>

        {/* Programme title */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(20px, 3.2vw, 40px)',
            fontWeight: 400,
            color: isOpen ? 'var(--text-primary)' : 'var(--text-primary)',
            lineHeight: 1.1,
            flex: 1,
            transition: 'opacity 0.35s',
            opacity: isOpen ? 1 : 0.75,
            letterSpacing: '-0.01em',
          }}
        >
          {program.title}
        </span>

        {/* Duration — hidden on mobile */}
        <span
          className="hidden sm:block"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            opacity: 0.5,
            flexShrink: 0,
          }}
        >
          {program.duration}
        </span>

        {/* Toggle symbol */}
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontWeight: 300,
            color: isOpen ? 'var(--accent)' : 'var(--text-secondary)',
            opacity: isOpen ? 1 : 0.4,
            flexShrink: 0,
            width: '24px',
            textAlign: 'right',
            transition: 'transform 0.4s ease, color 0.35s, opacity 0.35s',
            display: 'inline-block',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
                paddingBottom: 'clamp(28px, 3vw, 40px)',
                paddingLeft: 'clamp(36px, 5vw, 68px)',
              }}
            >
              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                  maxWidth: '560px',
                }}
              >
                {program.description}
              </p>

              {/* Tags + duration (mobile) + CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
                        padding: '4px 10px',
                        opacity: 0.7,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="block sm:hidden">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                    {program.duration}
                  </span>
                </div>

                <a
                  href="#admissions"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--accent)',
                    paddingBottom: '3px',
                    width: 'fit-content',
                    transition: 'color 0.25s',
                    opacity: 0.85,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.opacity = '0.85' }}
                >
                  Enquire about admissions →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
