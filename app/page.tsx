import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Shows from '@/components/Shows'
import About from '@/components/About'
import Mixes from '@/components/Mixes'
import Venues from '@/components/Venues'
import BookCTA from '@/components/BookCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Shows />
        <About />
        <Mixes />
        <Venues />
        <BookCTA />
      </main>
      <Footer />
    </>
  )
}
