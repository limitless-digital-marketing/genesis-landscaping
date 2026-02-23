import './GallerySection.css'

interface GalleryImage {
  id: number
  url: string
  alt: string
  tall?: boolean
}

const GallerySection = () => {
  // Placeholder images - replace with real plumbing work photos
  const galleryImages: GalleryImage[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800', alt: 'Bathroom renovation', tall: true },
    { id: 2, url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800', alt: 'Kitchen plumbing' },
    { id: 3, url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800', alt: 'Hot water installation' },
    { id: 4, url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800', alt: 'Pipe repair', tall: true },
    { id: 5, url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800', alt: 'Bathroom fixtures' },
    { id: 6, url: 'https://images.unsplash.com/photo-1584622781867-4f34c1fad77b?w=800', alt: 'Drain cleaning' },
    { id: 7, url: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800', alt: 'Modern bathroom' },
    { id: 8, url: 'https://images.unsplash.com/photo-1595514535116-2b9b571f6a2b?w=800', alt: 'Plumbing work', tall: true },
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

