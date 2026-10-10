import { Cpu, Users, Bot, Network, Sparkles, Binary } from 'lucide-react'
import MemberCard from '../components/MemberCard.jsx'

const scopeMembers = [
  { name: 'Systems Engineering', role: 'Focus Area', initials: 'SE' },
  { name: 'Human-Machine Systems', role: 'Focus Area', initials: 'HM' },
  { name: 'Cybernetics', role: 'Focus Area', initials: 'CY' },
  { name: 'Decision and Control', role: 'Focus Area', initials: 'DC' },
  { name: 'Intelligent Systems', role: 'Focus Area', initials: 'IS' },
  { name: 'Socio-Technical Systems', role: 'Focus Area', initials: 'ST' },
]

function ScopeMembers() {
  return (
    <div className="scope-members-page">
      {/* Page Header Banner */}
      <section className="page-header-strip">
        <div className="page-header-inner">
          <span className="page-badge">OUR COMMUNITY &bull; DOMAINS</span>
          <h1 className="page-title">Scope &amp; Technical Domains</h1>
          <p className="page-subtitle">
            Our multidisciplinary community unites students, researchers, and mentors from the diverse engineering fields that define systems science and cybernetics.
          </p>
        </div>
      </section>

      <section className="scope-members-content">
        <div className="scope-members-grid">
          {scopeMembers.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ScopeMembers
