import { useState } from 'react'
import { Calendar, Search } from 'lucide-react'
import EventCard from '../components/EventCard.jsx'

const events = [
  {
    date: '12',
    month: 'Aug',
    category: 'Workshop',
    title: 'Systems Thinking Workshop',
    description: 'Explore systems thinking, modeling, and practical problem-solving with fellow members.',
  },
  {
    date: '24',
    month: 'Sep',
    category: 'Guest Lecture',
    title: 'Human-Machine Systems',
    description: 'Learn from an industry expert about the future of human-machine interaction and cybernetics.',
  },
  {
    date: '08',
    month: 'Oct',
    category: 'Student Meetup',
    title: 'IEEE SMC Student Meetup',
    description: 'Connect with students, share ideas, and discover opportunities within the IEEE community.',
  },
  {
    date: '21',
    month: 'Nov',
    category: 'Conference',
    title: 'Innovation and Technology Conference',
    description: 'Present innovative ideas and discuss emerging technologies with students and professionals.',
  },
]

function Events() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', 'Workshop', 'Guest Lecture', 'Student Meetup', 'Conference']

  const filteredEvents = events.filter((e) => {
    const matchesCat = activeCategory === 'All' || e.category === activeCategory
    const matchesSearch = e.title.toLowerCase().includes(search.toLowerCase()) ||
                          e.description.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="events-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">CALENDAR OF EVENTS</span>
            <h1 className="page-title">Technical Programs &amp; Workshops</h1>
            <p className="page-subtitle">
              Discover workshops, guest lectures, student meetups, and conferences organized by the IEEE Systems, Man, and Cybernetics Society.
            </p>

            {/* Filter and Search Bar */}
            <div className="filter-and-search-row">
              <div className="page-filter-row">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="page-search-input-wrapper">
                <Search size={16} className="search-input-icon" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="page-search-field"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="events-content">
          <div className="events-list">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={`${event.date}-${event.title}`} {...event} />
              ))
            ) : (
              <div className="empty-results-box">
                <Calendar size={32} />
                <p>No events found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
    </div>
  )
}

export default Events
