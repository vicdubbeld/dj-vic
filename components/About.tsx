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
            V!C is an <strong>open format DJ</strong> based in Portland, Oregon —
            digging deep in <strong>R&B, soul, funk, and hip-hop</strong>, on vinyl
            and digital. Every set is built around the feeling in the room.
          </p>
          <p className={styles.text} style={{ marginTop: '1rem' }}>
            Resident at <strong>After Ours, Pink Rabbit, Soho House, Battle Creek Cellars, and more PDX spots</strong>.
            Available for clubs, corporate events, and private parties.
          </p>
          <p className={styles.venues}>
            After Ours · Pink Rabbit · Soho House · Battle Creek Cellars · Fools & Horses
          </p>
        </div>
      </div>
    </section>
  )
}
