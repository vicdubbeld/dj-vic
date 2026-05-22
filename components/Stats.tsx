import styles from './Stats.module.css'

const stats = [
  { num: '3+', label: 'Years behind the decks' },
  { num: 'PDX', label: 'Portland original' },
  { num: '45s', label: 'Vinyl all the way' },
]

export default function Stats() {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.num} className={styles.stat}>
          <div className={styles.num}>{s.num}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
