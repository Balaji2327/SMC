import { Eye, Image as ImageIcon } from 'lucide-react'

function GalleryCard({ image, alt, title, caption }) {
  return (
    <figure className="gallery-card">
      <div className="gallery-image-container">
        <img src={image} alt={alt} className="gallery-image" />
        <div className="gallery-overlay">
          <span className="gallery-view-btn">
            <Eye size={16} />
            <span>View Image</span>
          </span>
        </div>
        <span className="gallery-type-pill">
          <ImageIcon size={12} />
          <span>Campus Moments</span>
        </span>
      </div>
      <figcaption className="gallery-card-caption">
        <h3 className="gallery-title">{title}</h3>
        <p className="gallery-description">{caption}</p>
      </figcaption>
    </figure>
  )
}

export default GalleryCard
