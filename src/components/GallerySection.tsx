import './GallerySection.css'

interface GalleryImage {
  id: number
  url: string
  alt: string
  tall?: boolean
}

const GallerySection = () => {
  const galleryImages: GalleryImage[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', alt: 'Landscaped front garden with lawn', tall: true },
    { id: 2, url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800', alt: 'Fresh planting and garden bed detail' },
    { id: 3, url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800', alt: 'Low-maintenance garden design planting' },
    { id: 4, url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800', alt: 'Large property landscaping project', tall: true },
    { id: 5, url: 'https://images.unsplash.com/photo-1466692052106-e5cf528f34ce?w=800', alt: 'Lawn and garden installation work' },
    { id: 6, url: 'https://images.unsplash.com/photo-1473447198193-c83a3d7c1f2f?w=800', alt: 'Backyard landscaping layout and planting' },
    { id: 7, url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800', alt: 'Garden restoration greenery and pathways' },
    { id: 8, url: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800', alt: 'Finished residential landscaping presentation', tall: true },
  ]

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-left">
            <div className="gallery-label">SEE WHY OUR CUSTOMERS LOVE US</div>
            <h2 className="gallery-title">See Our Work</h2>
          </div>
          <div className="gallery-header-right">
            <button className="btn btn-outline-light">
              See All Photos →
            </button>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry-gallery">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item ${image.tall ? 'gallery-item-tall' : ''}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
