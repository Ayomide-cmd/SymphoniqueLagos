import type { Metadata } from 'next'
import { serif, sans } from '@/lib/fonts'
import { SmoothScroll } from '@/components/SmoothScroll'
import './globals.css'

export const metadata: Metadata = {
  title: 'Symphonique Lagos — Conservatory of Music',
  description:
    'A discipline-focused music conservatory offering European-standard training in classical performance, composition, and music theory. Based in Lagos, Nigeria.',
  keywords: [
    'music conservatory Lagos',
    'classical music Nigeria',
    'piano lessons Lagos',
    'music school Lagos',
    'Symphonique Lagos',
  ],
  openGraph: {
    title: 'Symphonique Lagos — Conservatory of Music',
    description:
      'Where mastery is the only standard. European-standard training in classical music, Lagos Nigeria.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
