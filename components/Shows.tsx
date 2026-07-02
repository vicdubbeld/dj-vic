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
    date: 'Thurs, Jul 2',
    venue: 'First Thursday at Battle Creek Cellars',
    location: 'Portland, OR',
    time: '5 PM',
  },
  {
    date: 'Thurs, Jul 9',
    venue: 'Secret Grove (Vinyl Set)',
    location: 'Portland, OR',
    time: '9 PM',
  },
  {
    date: 'Fri, Jul 10',
    venue: 'Pink Rabbit | R&B + Hip Hop',
    location: 'Portland, OR',
    time: '9 PM',
  },
  {
    date: 'Fri, Jul 17',
    venue: 'Pink Rabbit | Patio Party',
    location: 'Portland, OR',
    time: '7 PM',
  },
  {
    date: 'Sat, Jul 18',
    venue: 'After Ours | R&B + Hip Hop',
    location: 'Portland, OR',
    time: '10 PM',
  },
  {
    date: 'Fri, Jul 24',
    venue: 'Battle Creek | R&B',
    location: 'Portland, OR',
    time: '5 PM',
  },
  {
    date: 'Thurs, Aug 6',
    venue: 'First Thursday at Battle Creek Cellars',
    location: 'Portland, OR',
    time: '5 PM',
  },
  {
    date: 'Sat, Aug 15',
    venue: 'After Ours | R&B + Hip Hop',
    location: 'Portland, OR',
    time: '10 PM',
  },
  {
    date: 'Thurs, Aug 15',
    venue: 'After Ours | Vinyl R&B',
    location: 'Portland, OR',
    time: '10 PM',
  },
  {
    date: 'Sat, Aug 22',
    venue: 'Lulu Bar | R&B',
    location: 'Portland, OR',
    time: '9:30 PM',
  }
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
