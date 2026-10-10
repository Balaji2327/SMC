import { useState, useRef, useEffect, useCallback } from 'react'
import { Search, Menu, X, ExternalLink, Sparkles } from 'lucide-react'
import { useRouter } from '../context/RouterContext.jsx'
import ieeeLogo from '../assets/svgs/ieee.svg'
import sairamLogo from '../assets/svgs/sairam.svg'

const utilityLinks = [
  { label: 'IEEE.org', href: 'https://www.ieee.org/' },
  { label: 'IEEE Xplore Digital Library', href: 'https://ieeexplore.ieee.org/' },
  { label: 'IEEE Standards', href: 'https://standards.ieee.org/' },
  { label: 'IEEE Spectrum', href: 'https://spectrum.ieee.org/' },
  { label: 'More Sites', href: 'https://www.ieee.org/sitemap.html' },
]

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Committee', href: '/committee' },
  { label: 'Events', href: '/events' },
  { label: 'Post', href: '/post' },
  { label: 'News', href: '/news' },
  { label: 'Scope Members', href: '/scope-members' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { currentPath, navigate } = useRouter()

  const navLinksContainerRef = useRef(null)
  const navItemRefs = useRef({})
  const [pillStyle, setPillStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 })

  // Calculate sliding pill coordinates relative to container
  const updatePill = useCallback((targetPath) => {
    const path = targetPath || currentPath
    const targetElement = navItemRefs.current[path]
    const container = navLinksContainerRef.current

    if (targetElement && container) {
      const containerRect = container.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()

      const left = targetRect.left - containerRect.left
      const top = targetRect.top - containerRect.top
      const width = targetRect.width
      const height = targetRect.height

      setPillStyle({
        left,
        top,
        width,
        height,
        opacity: 1,
      })
    }
  }, [currentPath])

  // Sync pill position on mount, route change, and window resize
  useEffect(() => {
    const timer = setTimeout(() => {
      updatePill(currentPath)
    }, 30)

    const handleResize = () => updatePill(currentPath)
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [currentPath, updatePill])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    if (href === currentPath) return

    // Instantly glide the pill to the clicked target
    updatePill(href)

    // Trigger SPA navigation
    navigate(href)
    setMobileMenuOpen(false)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`)
    }
  }

  return (
    <header className="site-header">
      {/* Top Utility Announcement Bar */}
      <div className="utility-bar">
        <div className="utility-bar-inner">
          <div className="utility-badge">
            <span>Sri Sairam Engineering College &bull; Student Branch Chapter</span>
          </div>
          <nav className="utility-nav" aria-label="IEEE Global resources">
            {utilityLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ExternalLink size={10} className="ext-icon" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Brand Header Row */}
      <div className="brand-row">
        <a
          className="brand-link"
          href="/"
          onClick={(e) => {
            e.preventDefault()
            updatePill('/')
            navigate('/')
          }}
          aria-label="IEEE SMC Sairam Home"
        >
          <img
            className="sairam-logo"
            src={sairamLogo}
            alt="IEEE SMC Systems, Man, and Cybernetics Society SEC Student Branch Chapter and Sri Sairam Engineering College"
          />
        </a>

        <div className="brand-actions">
          {searchOpen ? (
            <form onSubmit={handleSearchSubmit} className="header-search-form">
              <input
                type="text"
                placeholder="Search events, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="header-search-input"
              />
              <button type="submit" className="header-search-submit" aria-label="Submit search">
                <Search size={16} />
              </button>
              <button
                type="button"
                className="header-search-close"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </form>
          ) : (
            <button
              className="search-trigger-button"
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search bar"
            >
              <Search size={17} />
              <span className="search-label">Search</span>
            </button>
          )}

          <a className="ieee-link" href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" aria-label="IEEE.org">
            <img src={ieeeLogo} alt="IEEE" />
          </a>

          <a href="#join-our-society" className="header-cta-button">
            Join Chapter
          </a>

          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
        <div className="main-nav-inner">
          <ul className="nav-links" ref={navLinksContainerRef}>
            {/* Smooth Sliding Pill Capsule - physically slides across all in-between items! */}
            {pillStyle.width > 0 && (
              <div
                className="nav-sliding-pill"
                style={{
                  transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
                  width: `${pillStyle.width}px`,
                  height: `${pillStyle.height}px`,
                  opacity: pillStyle.opacity,
                }}
              >
                <span className="active-dot" />
              </div>
            )}

            {navigationLinks.map((link) => {
              const isActive = link.href === currentPath
              return (
                <li key={link.label}>
                  <a
                    ref={(el) => { navItemRefs.current[link.href] = el }}
                    className={isActive ? 'active' : ''}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="nav-label">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
