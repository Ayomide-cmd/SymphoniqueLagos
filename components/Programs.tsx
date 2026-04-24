'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { viewportOptions } from '@/lib/motion'

const programs = [
  {
    slug: 'piano',
    title: 'Classical Piano Performance',
    duration: '2 — 4 Years',
    tags: ['Solo Performance', 'Chamber Music', 'Sight-Reading', 'ABRSM Aligned'],
    description:
      'A structured study of the Western piano canon from Bach through the twentieth century. Technique, interpretation, and repertoire receive equal attention.',
    focus: 'Technical command, tonal control, and repertoire depth.',
  },
  {
    slug: 'strings',
    title: 'Orchestral Strings',
    duration: '3 Years',
    tags: ['Violin', 'Viola', 'Cello', 'Ensemble'],
    description:
      'Violin, viola, and cello training with emphasis on ensemble performance, solo technique, and the mechanics of the bow arm.',
    focus: 'Bow technique, sectional discipline, and orchestral fluency.',
  },
  {
    slug: 'vocal',
    title: 'Vocal Studies',
    duration: '2 — 3 Years',
    tags: ['Opera', 'Art Song', 'Diction', 'Five Languages'],
    description:
      'Classical voice training for lyric soprano, mezzo-soprano, baritone, and bass. Breath mechanics and diction in five languages.',
    focus: 'Breath support, diction, and stage command.',
  },
  {
    slug: 'theory',
    title: 'Music Theory and Composition',
    duration: '2 Years',
    tags: ['Counterpoint', 'Orchestration', 'Harmonic Analysis'],
    description:
      'Counterpoint, harmonic analysis, orchestration, and original composition for those who wish to understand music at its structural core.',
    focus: 'Formal analysis and advanced harmonic literacy.',
  },
  {
    slug: 'conducting',
    title: 'Conducting',
    duration: '1 — 2 Years',
    tags: ['Score Study', 'Podium Technique', 'Rehearsal Direction'],
    description:
      'Score reading, ensemble direction, and podium mechanics. Offered exclusively to advanced students with prior conservatory-level training.',
    focus: 'Gesture economy, score command, and rehearsal leadership.',
  },
  {
    slug: 'early',
    title: 'Early Music and Musicology',
    duration: '2 Years',
    tags: ['Historical Practice', 'Archival Research', 'Scholarship'],
    description:
      'Historical performance practice, archival study, and the scholarly traditions that undergird serious musical inquiry.',
    focus: 'Research methods and period interpretation.',
  },
]

const cardEase = [0.19, 1, 0.22, 1]

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProgram = programs[activeIndex]

  return (
    <section id="programs" style={s.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOptions}
        transition={{ duration: 0.8, ease: cardEase }}
        style={s.headerGrid}
      >
        <div style={s.titleBox}>
          <span style={s.overline}>Programmes</span>
          <h2 style={s.title}>Disciplined study, performed with presence.</h2>
        </div>
        <p style={s.headerDesc}>
          Six distinct conservatory tracks, each designed as a complete artistic discipline.
        </p>
      </motion.div>

      <div style={s.mainGrid}>
        <div style={s.listCol}>
          {programs.map((program, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={program.slug}
                onClick={() => setActiveIndex(index)}
                style={{
                  ...s.navButton,
                  opacity: isActive ? 1 : 0.4,
                }}
              >
                <div style={s.navContent}>
                  <div style={s.glyphWrapper}>
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      animate={{ 
                        rotate: isActive ? 90 : 0,
                        scale: isActive ? 1.2 : 1
                      }}
                      transition={{ duration: 0.6, ease: cardEase }}
                    >
                      <motion.rect
                        x="4" y="4" width="10" height="10"
                        stroke="var(--accent)"
                        strokeWidth={isActive ? 2 : 1}
                        fill="none"
                        animate={{ rx: isActive ? 5 : 0 }}
                      />
                    </motion.svg>
                  </div>
                  
                  <div style={s.navText}>
                    <span style={s.navTitle}>{program.title}</span>
                  </div>
                </div>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    style={s.activeIndicator} 
                    transition={{ duration: 0.4, ease: cardEase }} 
                  />
                )}
              </button>
            )
          })}
        </div>

        <div style={s.detailCol}>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: cardEase }}
              style={s.detailCard}
            >
              <div style={s.detailHeader}>
                <h3 style={s.detailTitle}>{activeProgram.title}</h3>
                <div style={s.durationBadge}>{activeProgram.duration}</div>
              </div>

              <p style={s.description}>{activeProgram.description}</p>

              <div style={s.statsGrid}>
                <DetailStat label="Primary focus" value={activeProgram.focus} />
                <DetailStat label="Culmination" value="Recital or scored final work" />
              </div>

              <div style={s.tagContainer}>
                {activeProgram.tags.map(tag => (
                  <span key={tag} style={s.tag}>{tag}</span>
                ))}
              </div>

              <a href="#admissions" style={s.cta}>Begin Admissions Enquiry</a>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div style={s.statItem}>
      <span style={s.statLabel}>{label}</span>
      <span style={s.statValue}>{value}</span>
    </div>
  )
}

const s = {
  section: {
    background: 'var(--bg-primary)',
    padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)',
    color: 'var(--text-primary)',
    minHeight: '100vh'
  },
  headerGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '40px',
    marginBottom: 'clamp(60px, 10vw, 100px)',
  },
  titleBox: { maxWidth: '800px' },
  overline: {
    display: 'block',
    fontSize: '10px',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: '20px',
    fontFamily: 'var(--font-sans)',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(42px, 7vw, 84px)',
    fontWeight: 400,
    lineHeight: 0.95,
    margin: 0,
    letterSpacing: '-0.04em',
  },
  headerDesc: {
    maxWidth: '280px',
    fontSize: '13px',
    lineHeight: 1.7,
    opacity: 0.6,
    fontFamily: 'var(--font-sans)',
    letterSpacing: '0.01em'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '80px',
    alignItems: 'start',
  },
  listCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  navButton: {
    background: 'transparent',
    border: 'none',
    padding: '20px 0',
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.5s ease',
  } as React.CSSProperties,
  navContent: { display: 'flex', gap: '24px', alignItems: 'center' },
  glyphWrapper: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: { display: 'flex', flexDirection: 'column' },
  navTitle: { 
    fontFamily: 'var(--font-serif)', 
    fontSize: 'clamp(24px, 3vw, 32px)', 
    letterSpacing: '-0.02em',
    lineHeight: 1.1
  },
  activeIndicator: {
    position: 'absolute',
    left: '-20px',
    width: '4px',
    height: '4px',
    borderRadius: '999px',
    background: 'var(--accent)',
  } as React.CSSProperties,
  detailCol: {
    position: 'sticky',
    top: '60px',
  } as React.CSSProperties,
  detailCard: {
    padding: 'clamp(32px, 6vw, 64px)',
    border: '1px solid var(--border-subtle)',
    background: 'transparent',
  },
  detailHeader: {
    marginBottom: '48px',
  },
  detailTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(36px, 5vw, 56px)',
    margin: '0 0 24px 0',
    fontWeight: 400,
    lineHeight: 0.9,
    letterSpacing: '-0.03em'
  },
  durationBadge: {
    display: 'inline-block',
    fontSize: '10px',
    padding: '6px 14px',
    border: '1px solid var(--border-subtle)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  },
  description: {
    fontSize: '18px',
    lineHeight: 1.7,
    opacity: 0.8,
    marginBottom: '48px',
    maxWidth: '48ch',
    fontFamily: 'var(--font-sans)',
    fontWeight: 300
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
    marginBottom: '48px',
    borderTop: '1px solid var(--border-subtle)',
    paddingTop: '48px',
  },
  statItem: { display: 'flex', flexDirection: 'column', gap: '8px' },
  statLabel: { fontSize: '10px', textTransform: 'uppercase', opacity: 0.4, letterSpacing: '0.15em' },
  statValue: { fontSize: '15px', lineHeight: 1.5, opacity: 0.9 },
  tagContainer: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '60px' },
  tag: {
    fontSize: '9px',
    textTransform: 'uppercase',
    padding: '5px 12px',
    border: '1px solid var(--border-subtle)',
    letterSpacing: '0.1em',
    opacity: 0.7
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    background: 'var(--text-primary)',
    color: 'var(--bg-primary)',
    padding: '24px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    textDecoration: 'none',
  } as React.CSSProperties,
}