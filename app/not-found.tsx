import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        padding: '64px 32px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'var(--accent)',
          display: 'block',
          marginBottom: '20px',
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '20px',
          lineHeight: 1.1,
        }}
      >
        Page not found.
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          maxWidth: '340px',
          marginBottom: '48px',
        }}
      >
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--accent)',
          paddingBottom: '4px',
        }}
      >
        Return to Home
      </Link>
    </div>
  )
}
