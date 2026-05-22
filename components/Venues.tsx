import styles from './Venues.module.css'

const venues = [
  'After Ours',
  'Pink Rabbit',
  'Soho House',
  "Kelly's Olympian",
  'Fools & Horses',
  'Lulu Bar',
  'Battle Creek Wine Cellars',
  'Pearl District Farmers Market',
]

export default function Venues() {
  return (
    <section id="venues" className="section">
      <p className="label">Venues</p>
      <div className={styles.grid}>
        {venues.map((v) => (
          <div key={v} className={styles.tag}>{v}</div>
        ))}
      </div>
    </section>
  )
}
