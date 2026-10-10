import { useState } from 'react'
import { Users, Award, ShieldCheck } from 'lucide-react'
import MemberCard from '../components/MemberCard.jsx'

const members = [
  { name: 'Dr. Committee Member', role: 'Chairperson', initials: 'CM', category: 'Faculty', photo: '' },
  { name: 'Prof. Chapter Coordinator', role: 'Faculty Coordinator', initials: 'CC', category: 'Faculty', photo: '' },
  { name: 'Student Branch Leader', role: 'Student Chairperson', initials: 'SL', category: 'Student', photo: '' },
  { name: 'Student Branch Secretary', role: 'Secretary', initials: 'SS', category: 'Student', photo: '' },
  { name: 'Student Branch Treasurer', role: 'Treasurer', initials: 'ST', category: 'Student', photo: '' },
  { name: 'Event Coordinator', role: 'Events Coordinator', initials: 'EC', category: 'Student', photo: '' },
]

function Committee() {
  const [filter, setFilter] = useState('All')

  const filteredMembers = filter === 'All'
    ? members
    : members.filter((m) => m.category === filter)

  return (
    <div className="committee-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">OUR TEAM &bull; LEADERSHIP</span>
            <h1 className="page-title">Executive Committee Members</h1>
            <p className="page-subtitle">
              Meet the faculty advisors and student leaders steering the IEEE Systems, Man, and Cybernetics Society student branch.
            </p>

            {/* Filter Pills */}
            <div className="page-filter-row">
              {['All', 'Faculty', 'Student'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'All' ? 'All Committee Members' : `${cat} Leadership`}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="committee-content">
          <div className="member-grid">
            {filteredMembers.map((member) => (
              <MemberCard key={member.role} {...member} />
            ))}
          </div>
        </section>
    </div>
  )
}

export default Committee
