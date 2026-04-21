export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '15px',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          opacity: 0.4,
          letterSpacing: '0.06em',
        }}
      >
        Symphonique Lagos
      </span>
    </div>
  )
}
