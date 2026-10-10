import { ArrowUp, Mail, MapPin, Globe, ExternalLink, ShieldCheck } from 'lucide-react'
import { useRouter } from '../context/RouterContext.jsx'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Chapter', href: '/about' },
  { label: 'Executive Committee', href: '/committee' },
  { label: 'Upcoming Events', href: '/events' },
  { label: 'Latest News', href: '/news' },
  { label: 'Photo Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
]

const ieeePolicies = [
  'IEEE Privacy Policy',
  'Terms & Conditions',
  'Nondiscrimination Policy',
  'IEEE Ethics Reporting',
  'Accessibility',
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'Facebook', href: 'https://facebook.com' },
  { name: 'YouTube', href: 'https://youtube.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
]

function SocialIcon({ name }) {
  if (name === 'Twitter') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  }
  if (name === 'Facebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.028.312-1.028 1.055v3.01h4.156l-.587 3.667h-3.569v7.98h-5.576z"/>
      </svg>
    )
  }
  if (name === 'LinkedIn') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
  }
  if (name === 'YouTube') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
  if (name === 'Instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
  return <Globe size={18} />
}

function Footer() {
  const { navigate } = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main 4-column footer grid */}
        <div className="footer-grid">
          {/* Col 1: Chapter Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <span className="footer-chapter-pill">IEEE SMC Society</span>
              <h3 className="footer-brand-title">Sri Sairam Engineering College</h3>
              <p className="footer-chapter-sub">Student Branch Chapter &bull; Region 10</p>
            </div>
            <p className="footer-description">
              Advancing theory and application in systems science, human-machine interaction, and cybernetics. Fostering future engineering leaders through technical excellence and international collaboration.
            </p>
            <div className="footer-social-bar">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={item.name}
                >
                  <SocialIcon name={item.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('/')) {
                        e.preventDefault()
                        navigate(item.href)
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: IEEE Global Ecosystem */}
          <div className="footer-col">
            <h4 className="footer-col-title">IEEE Resources</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Official Portal <ExternalLink size={12} className="inline-ext" />
                </a>
              </li>
              <li>
                <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Xplore Digital Library <ExternalLink size={12} className="inline-ext" />
                </a>
              </li>
              <li>
                <a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Standards Association <ExternalLink size={12} className="inline-ext" />
                </a>
              </li>
              <li>
                <a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer">
                  IEEE Spectrum Magazine <ExternalLink size={12} className="inline-ext" />
                </a>
              </li>
              <li>
                <a href="https://www.ieeesmc.org" target="_blank" rel="noopener noreferrer">
                  IEEE SMC Society Global <ExternalLink size={12} className="inline-ext" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Location & Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Chapter Office</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-item-icon" />
                <span>Sai Leo Nagar, West Tambaram, Chennai - 600044, Tamil Nadu, India</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-item-icon" />
                <a href="mailto:ieeesmc@sairam.edu.in">ieeesmc@sairam.edu.in</a>
              </div>
              <div className="contact-item">
                <ShieldCheck size={18} className="contact-item-icon" />
                <span>Affiliated with Anna University & Approved by AICTE</span>
              </div>
            </div>
            <a href="#become-a-member" className="footer-membership-badge">
              Become an IEEE SMC Member &rarr;
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom copyright & policies row */}
        <div className="footer-bottom-row">
          <div className="footer-legal-text">
            <p>&copy; 2026 IEEE &bull; Sri Sairam Engineering College Student Branch Chapter. All rights reserved.</p>
            <p className="footer-charity-note">A public charity, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
          </div>
          <div className="footer-policies">
            {ieeePolicies.map((policy) => (
              <a key={policy} href={`#${policy.toLowerCase().replaceAll(' ', '-')}`}>
                {policy}
              </a>
            ))}
          </div>
          <button type="button" onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
