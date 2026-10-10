import { useState } from 'react'
import { Image, Sparkles } from 'lucide-react'
import GalleryCard from '../components/GalleryCard.jsx'
import campusImage from '../assets/images/front.jpeg'
import smcImage from '../assets/images/ieee_smc.jpg'
import ieeeImage from '../assets/images/ieee-img.jpg'

const galleryItems = [
  {
    image: campusImage,
    alt: 'Sri Sairam Engineering College campus',
    title: 'Our Campus',
    caption: 'Sri Sairam Engineering College - 300 acres of academic and technological excellence.',
    category: 'Campus',
  },
  {
    image: smcImage,
    alt: 'IEEE SMC logo',
    title: 'IEEE SMC Society',
    caption: 'Advancing research and systems engineering across the SEC Chapter.',
    category: 'Society',
  },
  {
    image: ieeeImage,
    alt: 'IEEE logo',
    title: 'IEEE Community',
    caption: 'Connecting students, scholars, and global technology innovators.',
    category: 'Ecosystem',
  },
]

function Gallery() {
  const [filter, setFilter] = useState('All')

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter)

  return (
    <div className="gallery-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">VISUAL ARCHIVE &bull; HIGHLIGHTS</span>
            <h1 className="page-title">Campus &amp; Chapter Gallery</h1>
            <p className="page-subtitle">
              A curated visual collection of moments, campus infrastructure, and milestones from our IEEE SMC community.
            </p>

            {/* Filter Pills */}
            <div className="page-filter-row">
              {['All', 'Campus', 'Society', 'Ecosystem'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'All' ? 'All Photographs' : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-content">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </section>
    </div>
  )
}

export default Gallery
