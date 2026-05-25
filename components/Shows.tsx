import styles from './Shows.module.css'

export type Show = {
  date: string      // e.g. "Sat, Jun 7"
  venue: string
  location: string  // e.g. "Portland, OR"
  time: string      // e.g. "9 PM – 2 AM"
  link?: string     // optional ticket/event link
}

const shows: Show[] = [
  {
    date: 'Thurs, June 4',
    venue: 'First Thursday at Battle Creek Cellars',
    location: 'Portland, OR',
    time: '5pm',
  },
  {
    date: 'Thurs, Jun 11',
    venue: 'After Ours (Vinyl Set)',
    location: 'Portland, OR',
    time: '9 PM',
  },
  {
    date: 'Sat, Jun 13',
    venue: 'Soho House PDX',
    location: 'Portland, OR',
    time: '7 PM',
  },
  {
    date: 'Sat, Jun 27',
    venue: 'After Ours',
    location: 'Portland, OR',
    time: '9 PM',
  },
  {
    date: 'Thurs, Jul 2',
    venue: 'First Thursday at Battle Creek Cellars',
    location: 'Portland, OR',
    time: '5 PM',
  },
  {
    date: 'Thurs, Jul 9',
    venue: 'Secret Grove (Date Night Vinyl Set)',
    location: 'Portland, OR',
    time: '9 PM',
  },
]

export default function Shows() {
  if (shows.length === 0) return null

  return (
    <section id="shows" className="section">
      <p className="label">Upcoming Sets</p>
      <div className={styles.list}>
        {shows.map((show, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.date}>{show.date}</div>
            <div className={styles.info}>
              <span className={styles.venue}>{show.venue}</span>
              <span className={styles.location}>{show.location}</span>
            </div>
            <div className={styles.time}>{show.time}</div>
            {show.link ? (
              <a href={show.link} target="_blank" rel="noopener noreferrer" className={styles.ticket}>
                Tickets ↗
              </a>
            ) : (
              <div className={styles.free}>Free</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
