import { useState } from 'react'
import { Newspaper, Search } from 'lucide-react'
import NewsCard from '../components/NewsCard.jsx'

const newsItems = [
  {
    date: 'June 12, 2026',
    category: 'Chapter News',
    title: 'IEEE SMC Student Branch Welcomes New Members',
    excerpt: 'Our chapter continues to grow with students who are passionate about systems, technology, and professional development.',
  },
  {
    date: 'May 28, 2026',
    category: 'Activities',
    title: 'Students Take Part in Technical Workshop',
    excerpt: 'Members explored practical approaches to systems thinking and learned from an engaging technical session.',
  },
  {
    date: 'April 16, 2026',
    category: 'Community',
    title: 'Creating Opportunities Through IEEE',
    excerpt: 'The chapter is building new opportunities for collaboration, learning, and meaningful student participation.',
  },
  {
    date: 'March 09, 2026',
    category: 'Announcement',
    title: 'New Programs Coming This Semester',
    excerpt: 'Stay connected for upcoming lectures, workshops, competitions, and events organized by the student branch.',
  },
]

function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', 'Chapter News', 'Activities', 'Community', 'Announcement']

  const filteredNews = newsItems.filter((item) => {
    const matchesCat = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="news-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">STAY INFORMED &bull; UPDATES</span>
            <h1 className="page-title">Latest Chapter News &amp; Bulletins</h1>
            <p className="page-subtitle">
              Follow official announcements, member achievements, workshops, and stories from our IEEE SMC student chapter.
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
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="page-search-field"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="news-content">
          <div className="news-grid">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <NewsCard key={item.title} {...item} />
              ))
            ) : (
              <div className="empty-results-box">
                <Newspaper size={32} />
                <p>No news articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
    </div>
  )
}

export default News
