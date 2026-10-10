import { User, Calendar, ArrowRight } from 'lucide-react'

function PostCard({ category, title, excerpt, author, date }) {
  // Extract initials for author avatar badge
  const initials = author
    ? author
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'IE'

  return (
    <article className="post-card">
      <div className="post-card-header">
        <span className="post-category-tag">{category}</span>
        <div className="post-date-tag">
          <Calendar size={13} />
          <span>{date}</span>
        </div>
      </div>

      <div className="post-card-body">
        <h3 className="post-title">{title}</h3>
        <p className="post-excerpt">{excerpt}</p>
      </div>

      <div className="post-card-footer">
        <div className="post-author-info">
          <div className="post-author-avatar" aria-hidden="true">
            {initials}
          </div>
          <div className="post-author-text">
            <span className="post-author-label">Written by</span>
            <span className="post-author-name">{author}</span>
          </div>
        </div>

        <a href="#read-post" className="post-read-link">
          <span>Read More</span>
          <ArrowRight size={14} className="post-arrow-icon" />
        </a>
      </div>
    </article>
  )
}

export default PostCard
