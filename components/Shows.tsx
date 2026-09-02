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
    date: 'Thurs, Sept 3',
    venue: 'First Thursday at Battle Creek Cellars',
    location: 'Portland, OR',
    time: '5 PM',
  },
  {
    date: 'Sat, Sept 5',
    venue: 'A Toast to Summer | Oxford League',
    location: '3309 N Mississippi Ave',
    time: '4 PM – 2 AM',
  },
  {
    date: 'Sun, Sept 6',
    venue: "Pearl District Farmer's Market",
    location: 'NW 13th between Everett & Glisan',
    time: '10 AM – 2 PM',
  },
  {
    date: 'Thurs, Sept 10',
    venue: 'After Ours | Vinyl Set',
    location: '2226 NE Broadway',
    time: '10 PM',
  },
  {
    date: 'Fri, Sept 11',
    venue: 'Battle Creek Cellars',
    location: '820 NW 13th Ave',
    time: '5 PM',
  },
  {
    date: 'Sat, Sept 19',
    venue: 'Pearl District Block Party',
    location: 'NW 13th Ave (between Hoyt & Irving)',
    time: '11 AM – 4 PM',
  },
  {
    date: 'Thurs, Sept 24',
    venue: 'The Malarkey',
    location: '1210 NW Hoyt St',
    time: '7 PM',
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
