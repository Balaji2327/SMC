import { useState } from 'react'
import { FileText, Search } from 'lucide-react'
import PostCard from '../components/PostCard.jsx'

const posts = [
  {
    category: 'Society News',
    title: 'Welcome to the IEEE SMC Student Branch',
    excerpt: 'Learn more about our chapter, our goals, and the opportunities available to students through the IEEE community.',
    author: 'IEEE SMC Chapter',
    date: 'June 12, 2026',
  },
  {
    category: 'Student Activities',
    title: 'Building Skills Through Collaboration',
    excerpt: 'Our members share how workshops, technical talks, and teamwork help them grow as future engineers.',
    author: 'Student Committee',
    date: 'May 28, 2026',
  },
  {
    category: 'Technology',
    title: 'Exploring Systems Thinking',
    excerpt: 'Discover how systems thinking can help us understand complex challenges and create meaningful solutions.',
    author: 'IEEE SMC Chapter',
    date: 'April 16, 2026',
  },
  {
    category: 'Community',
    title: 'Connecting Students and Professionals',
    excerpt: 'Read about the importance of professional communities and the experiences they create for our members.',
    author: 'Faculty Coordinator',
    date: 'March 09, 2026',
  },
]

function Post() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', 'Society News', 'Student Activities', 'Technology', 'Community']

  const filteredPosts = posts.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="posts-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">INSIGHTS &bull; PUBLICATIONS</span>
            <h1 className="page-title">Articles, Perspectives &amp; Stories</h1>
            <p className="page-subtitle">
              Read insights, student reflections, and technical articles contributed by the IEEE SMC student community.
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

        <section className="posts-content">
          <div className="posts-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.title} {...post} />
              ))
            ) : (
              <div className="empty-results-box">
                <FileText size={32} />
                <p>No posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
    </div>
  )
}

export default Post
