import { CheckCircle2, Sparkles, Target, Award, ArrowRight } from 'lucide-react'
import campusImage from '../assets/images/front.jpeg'

const chapterValues = [
  { title: 'Membership', desc: 'Maximize the value of being a member.' },
  { title: 'Professionalism', desc: 'Advance knowledge and professional development.' },
  { title: 'Excellence', desc: 'Deliver high quality and relevant services and products.' },
  { title: 'Integrity', desc: 'Act with honesty and fairness.' },
  { title: 'Collaboration', desc: 'Achieve results and excellence through teamwork.' },
  { title: 'Communication', desc: 'Promote honest and transparent interactions.' },
  { title: 'Diversity', desc: 'Embrace diversity of members and their ideas.' },
  { title: 'Empowerment', desc: 'Empower volunteers and value their contributions.' },
  { title: 'Equality', desc: 'Provide equal opportunities to all members.' },
  { title: 'Respect', desc: 'Practice respectfulness in all relationships.' },
]

function HomeScreen() {
  return (
    <div className="home-screen-content">
      {/* Modern Hero Section */}
      <section className="campus-hero" aria-label="IEEE SMC welcome banner">
        <img src={campusImage} alt="Sri Sairam Engineering College campus" className="campus-hero-img" />
        <div className="campus-hero-overlay">
          <div className="campus-hero-badge">
            <span>Official Student Branch Chapter &bull; Region 10</span>
          </div>
          <h1>
            IEEE SYSTEM, MAN AND<br />
            <span>CYBERNETICS SOCIETY</span>
          </h1>
          <p className="hero-welcome-sub">welcomes you</p>
          <div className="hero-actions">
            <a href="/events" className="hero-primary-btn">
              <span>Explore Events</span>
              <ArrowRight size={16} />
            </a>
            <a href="#become-a-member" className="hero-secondary-btn">
              <span>Become a Member</span>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome & Vision Grid */}
        <section className="welcome-content">
          <article className="welcome-copy">
            <div className="section-eyebrow-wrapper">
              <span className="section-eyebrow-pill">WELCOME</span>
            </div>
            <h2 className="welcome-title">System, Man and Cybernetics Society</h2>

            {/* Vision & Mission Cards */}
            <div className="vision-mission-cards">
              <div className="vm-card vision-card">
                <div className="vm-header">
                  <Target size={20} className="vm-icon" />
                  <h3>Student Branch Vision</h3>
                </div>
                <p>
                  The vision of the Systems, Man, and Cybernetics Society is to be
                  recognized as the world leading society for the advancement of
                  theory and application in systems science and engineering,
                  human-machine systems, and cybernetics.
                </p>
              </div>

              <div className="vm-card mission-card">
                <div className="vm-header">
                  <Sparkles size={20} className="vm-icon" />
                  <h3>Our Mission</h3>
                </div>
                <p>
                  The mission of the Systems, Man, and Cybernetics Society is to
                  serve the interests of its members and the community at large by
                  promoting the theory, practice, and interdisciplinary aspects of
                  systems science and engineering, human-machine systems, and
                  cybernetics. It is accomplished through conferences,
                  publications, and other activities that contribute to the
                  professional needs of its members.
                </p>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="values-section">
              <div className="values-header">
                <h3>Our Core Values</h3>
                <p className="values-sub">The fundamental values providing the foundation for all SMC Society activities:</p>
              </div>
              <div className="values-grid">
                {chapterValues.map((val) => (
                  <div key={val.title} className="value-item-card">
                    <CheckCircle2 size={18} className="value-check-icon" />
                    <div className="value-item-content">
                      <strong>{val.title}</strong>
                      <span>{val.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Membership Elevated Sidebar */}
          <aside className="membership-sidebar">
            <div className="sidebar-sticky-wrapper">
              <div className="sidebar-badge-header">
                <span className="sidebar-eyebrow">MEMBERSHIP</span>
                <span className="sidebar-dot" />
              </div>

              <div className="sidebar-panel highlight-panel" id="join-our-society">
                <div className="panel-badge">Join Community</div>
                <h3>Become a member</h3>
                <p>Sign up today to get involved in the SMC Chapter and unlock global IEEE benefits.</p>
                <a className="content-button primary-btn" href="#become-a-member">
                  <span>JOIN OUR SOCIETY</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="sidebar-panel benefit-panel" id="become-a-member">
                <div className="panel-badge secondary">Key Privileges</div>
                <h3>Why join us?</h3>
                <p>
                  The SMC Society membership fee includes electronic access to
                  the <strong>IEEE Transactions on Systems, Man, and Cybernetics, Systems</strong>,
                  <strong> IEEE Transactions on Human-Machine Systems</strong>, and <strong>IEEE
                  Transactions on Cybernetics</strong>.
                </p>
                <div className="benefit-highlight-box">
                  <Award size={16} />
                  <span>Reduced rates at the annual conference and conferences sponsored by the SMC Society</span>
                </div>
                <a className="content-button outline-btn" href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer">
                  <span>ENROLL NOW</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </aside>
        </section>
    </div>
  )
}

export default HomeScreen
