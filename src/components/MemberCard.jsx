function MemberCard({ name, role, initials, photo, linkedin }) {
  const linkedinHref = linkedin || 'https://linkedin.com'

  return (
    <article className="member-card">
      {/* Top Header Row with Society Badge & Active Status */}
      <div className="member-card-header">
        <span className="member-society-pill">IEEE SMC Chapter</span>
        <span className="member-active-status" title="Active Office Bearer">
          {/* <span className="status-indicator-dot" /> */}
          {/* <span>Active</span> */}
        </span>
      </div>

      {/* Medium Circular Photo with Luxury Gradient Ring */}
      <div className="member-photo-frame">
        <div className="member-ring">
          <div className="member-avatar" aria-label={`${name} photo`}>
            {photo ? (
              <img src={photo} alt={name} className="member-avatar-img" />
            ) : (
              <div className="member-avatar-fallback">
                <span className="member-initials">{initials}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Member Details */}
      <div className="member-meta">
        <span className="member-role-chip">{role}</span>
        <h3 className="member-name">{name}</h3>
        <p className="member-institution">Sri Sairam Engineering College</p>
      </div>

      {/* Profile Connect Action */}
      <div className="member-card-actions">
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="member-connect-btn linkedin"
          aria-label={`${name} LinkedIn Profile`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </article>
  )
}

export default MemberCard
