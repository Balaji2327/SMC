import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

function NewsCard({ category, title, excerpt, date }) {
  return (
    <article className="news-card">
      <div className="news-card-top">
        <span className="news-category-badge">{category}</span>
        <div className="news-date-meta">
          <Calendar size={13} />
          <span>{date}</span>
        </div>
      </div>

      <div className="news-card-body">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-excerpt">{excerpt}</p>
      </div>

      <div className="news-card-footer">
        <span className="news-read-time">
          <BookOpen size={13} />
          <span>3 min read</span>
        </span>
        <a href="#news-details" className="news-card-link">
          <span>Read Story</span>
          <ArrowRight size={14} className="news-arrow-icon" />
        </a>
      </div>
    </article>
  )
}

export default NewsCard
