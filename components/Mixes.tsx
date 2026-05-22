import styles from './Mixes.module.css'

const mixes = [
  {
    title: '45s for 45 Minutes',
    meta: 'All Vinyl · Home session · 45 min',
    href: 'https://youtu.be/al4Fk3r2cgo?si=dpbwVAOcWtIXCKwE',
    live: true,
  },
  {
    title: 'Live at Soho House PDX',
    meta: 'All Vinyl · Laid Back Lounge · 60 min · Coming Soon',
    href: 'https://youtube.com', // TODO: replace with actual YouTube URL
    live: false,
  },
  {
    title: 'Day Party at Battle Creek Cellars',
    meta: 'First Thursday in the Pearl District · 2+ hr',
    href: 'https://www.mixcloud.com/djviiiiic/vic-funk-soul-rb-live-at-battle-creek-wine-cellars/',
    live: true,
  },
  {
    title: 'Live at Fools & Horses',
    meta: 'Sexy Date Night Set · 3 hr',
    href: 'https://www.mixcloud.com/djviiiiic/vc-rb-soul-live-at-fools-horses/',
    live: true,
  },
]

export default function Mixes() {
  return (
    <section id="mixes" className={styles.section}>
      <div className={styles.header}>
        <p className="label" style={{ marginBottom: 0 }}>Featured Mixes</p>
      </div>
      <div className={styles.grid}>
        {mixes.map((mix) => (
          <div key={mix.title} className={`${styles.card} ${!mix.live ? styles.dim : ''}`}>
            {mix.href ? (
              <a href={mix.href} target="_blank" rel="noopener noreferrer" className={styles.inner}>
                <div>
                  <p className={styles.title}>{mix.title}</p>
                  <p className={styles.meta}>{mix.meta}</p>
                </div>
                <div className={styles.play}>▶</div>
              </a>
            ) : (
              <div className={styles.inner}>
                <div>
                  <p className={styles.title}>{mix.title}</p>
                  <p className={styles.meta}>{mix.meta}</p>
                </div>
                <div className={styles.play}>◷</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
