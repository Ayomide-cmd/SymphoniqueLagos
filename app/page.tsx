import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Programs } from '@/components/Programs'
import { Faculty } from '@/components/Faculty'
import { Philosophy } from '@/components/Philosophy'
import { Admissions } from '@/components/Admissions'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Faculty />
        <Philosophy />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
