import styles from './Nav.module.css'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        V<span>!</span>C
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#shows">Shows</a>
        <a href="#mixes">Mixes</a>
        {/* <a href="#venues">Venues</a> */}
        <a href="#book">Book</a>
        <ThemeToggle />
      </div>
    </nav>
  )
}
