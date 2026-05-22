import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>V<span>!</span>C</div>
      <div className={styles.links}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://discogs.com" target="_blank" rel="noopener noreferrer">Discogs</a>
      </div>
    </footer>
  )
}
