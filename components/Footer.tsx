import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>V<span>!</span>C</div>
      <div className={styles.links}>
        <a href="https://www.instagram.com/vic__dj/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.youtube.com/@dj__vic" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.discogs.com/user/vicdubbeld" target="_blank" rel="noopener noreferrer">Discogs</a>
      </div>
    </footer>
  )
}
