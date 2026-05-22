import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className="label">About</p>
      <div className={styles.grid}>
        <div className={styles.photos}>
          <div className={styles.photoWrap}>
            <Image
              src="/images/profile.jpg"
              alt="V!C at the turntables"
              fill
              className={styles.photo}
              sizes="25vw"
            />
            <span className={styles.photoTag}>At the decks</span>
          </div>
          <div className={styles.photoWrap}>
            <Image
              src="/images/afterOurs.jpg"
              alt="V!C digging in the crates"
              fill
              className={styles.photo}
              sizes="25vw"
            />
            <span className={styles.photoTag}>In the crates</span>
          </div>
        </div>
        <div className={styles.bio}>
          <p className={styles.text}>
            Some DJs read the room. Vic Dubbeld built his ear for it. Known as V!C, he's a{' '}
            <strong>Portland DJ</strong> specializing in open format — digging deep in{' '}
            <strong>R&B, soul, funk, and hip-hop</strong>, on vinyl and digital. Three years
            in the professional circuit, playing the records that made everything else possible
            and chasing the feeling a great song leaves in a room.
          </p>
          <p className={styles.text} style={{ marginTop: '1rem' }}>
            V!C holds residencies across Portland's most respected venues — After Ours, Pink
            Rabbit, Soho House, and Kelly's Olympian — where he recently opened for Bungalow
            Collect to a sold-out crowd. This summer he joins the Pearl District Farmers Market
            as part of the Reignite the Pearl initiative. Available for{' '}
            <strong>Portland club dates, corporate events, and private parties</strong>.
          </p>
          <p className={styles.venues}>
            After Ours · Pink Rabbit · Soho House · Kelly's Olympian · Fools & Horses · Battle Creek Cellars
          </p>
        </div>
      </div>
    </section>
  )
}
