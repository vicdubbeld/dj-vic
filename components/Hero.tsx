import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div>
          <p className={styles.tag}>Portland, OR · Open Format · Vinyl + Digital</p>
          <h1 className={styles.name}>
            V<span>!</span>C<br />
            DUB<br />
            BELD
          </h1>
          <p className={styles.sub}>
            R&B · Soul · Funk · Hip-Hop<br />
            The feeling in the room is everything
          </p>
        </div>
        <a href="#book" className={styles.cta}>Book a Gig ↗</a>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/hero.webp"
          alt="V!C at the turntables"
          fill
          className={styles.photo}
          sizes="50vw"
          priority
        />
        <p className={styles.caption}>All vinyl · Portland</p>
      </div>
    </section>
  )
}
