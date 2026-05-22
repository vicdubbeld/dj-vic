import styles from './BookCTA.module.css'

export default function BookCTA() {
  return (
    <section id="book" className={styles.book}>
      <div>
        <h2 className={styles.title}>Book V!C</h2>
        <p className={styles.sub}>Clubs · Corporate · Private Events · Portland + Beyond</p>
      </div>
      <a href="mailto:bookdjvic@gmail.com" className={styles.btn}>
        Get in touch ↗
      </a>
    </section>
  )
}
