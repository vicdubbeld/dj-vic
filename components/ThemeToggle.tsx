'use client'

import { useTheme } from './ThemeProvider'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      className={styles.toggle}
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={styles.icon}>{theme === 'dark' ? '○' : '●'}</span>
      <span className={styles.label}>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
