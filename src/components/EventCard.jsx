import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react'

function EventCard({ date, month, category, title, description }) {
  return (
    <article className="event-card">
      <div className="event-card-header">
        <div className="event-date-badge" aria-label={`Event date: ${date} ${month}`}>
          <span className="event-date-day">{date}</span>
          <span className="event-date-month">{month}</span>
        </div>
        <div className="event-header-meta">
          <span className="event-category-pill">{category}</span>
          <div className="event-time-hint">
            <Clock size={13} />
            <span>10:00 AM - 1:00 PM</span>
          </div>
        </div>
      </div>

      <div className="event-card-body">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
      </div>

      <div className="event-card-footer">
        <div className="event-location-hint">
          <MapPin size={14} />
          <span>Campus Auditorium</span>
        </div>
        <a href="#event-details" className="event-action-link">
          <span>View Details</span>
          <ArrowRight size={15} className="event-arrow-icon" />
        </a>
      </div>
    </article>
  )
}

export default EventCard
