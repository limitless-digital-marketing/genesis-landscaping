import { useState, useEffect } from 'react'
import './ReviewsSection.css'

interface Review {
  id: number
  name: string
  date: string
  rating: number
  text: string
  avatar?: string
}

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  // Template Google reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Local Client',
      date: 'Recent',
      rating: 5,
      text: 'McKay’s Plumbing were brilliant. They were helpful with every question, went above and beyond, and the communication was great. The service putting in our new tap was prompt and professional. I highly recommend McKay’s Plumbing. Great job guys and thank you so much.'
    },
    {
      id: 2,
      name: 'Local Customer',
      date: 'Recent',
      rating: 5,
      text: 'We had Brad out to service our gas wall heater and couldn’t be happier. He was on time, very personable, incredibly thorough, and explained everything as he went. Great to have a local all-in-one plumber.'
    },
    {
      id: 3,
      name: 'Happy Client',
      date: 'Recent',
      rating: 5,
      text: 'McKay’s Plumbing did an excellent job. They provided great service and offered solutions that saved us a lot of money. Would not hesitate to recommend. Thanks again McKay’s Plumbing.'
    },
    {
      id: 4,
      name: 'Holiday Home Owner',
      date: 'Recent',
      rating: 5,
      text: 'Holiday home requiring a new hot water system. Owners couldn’t attend to supervise installation. McKay’s Plumbing and Gasfitting organised everything, including the unit, installation, and other trades. The team kept me informed throughout. Completely trustworthy.'
    },
    {
      id: 5,
      name: 'Local Resident',
      date: 'Recent',
      rating: 5,
      text: 'Honest, reliable, and great work ethic. I would highly recommend McKay’s Plumbing. If I could give ten stars, I would.'
    },
    {
      id: 6,
      name: 'Happy Customer',
      date: 'Recent',
      rating: 5,
      text: 'Fantastic, prompt service and very easy to deal with.'
    },
    {
      id: 7,
      name: 'Repeat Client',
      date: 'Recent',
      rating: 5,
      text: 'Work was excellent. Friendly. On time.'
    },
    {
      id: 8,
      name: 'Local Homeowner',
      date: 'Recent',
      rating: 5,
      text: 'McKay’s Plumbing was prompt, tidy, and explained the fix clearly. Great service and would use again.'
    },
    {
      id: 9,
      name: 'Satisfied Customer',
      date: 'Recent',
      rating: 5,
      text: 'Quick response, quality workmanship, and fair pricing. Highly recommend McKay’s Plumbing and Gasfitting.'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? '#F2C230' : '#C6D5E6'}
        stroke="none"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const totalSlides = Math.ceil(reviews.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }
    if (touchStart - touchEnd < -50) {
      prevSlide()
    }
  }

  // Auto-play carousel disabled
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides)
  //   }, 5000) // Change slide every 5 seconds

  //   return () => clearInterval(interval)
  // }, [totalSlides])

  return (
    <section className="reviews-section">
      <div className="container">
        {/* Header */}
        <div className="reviews-header">
          <div className="reviews-eyebrow">
            SEE WHAT OUR CUSTOMERS SAY
          </div>
          <div className="reviews-heading-row">
            <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
            <span className="reviews-midline" aria-hidden="true"></span>
            <a
              href="https://www.google.com/search?q=brads+plumbing+and+gasfitting&oq=brads+plumbing+and+gasfitting&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRiPAjIHCAYQIRiPAtIBCDgyMDBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x6ad5c9f13374e661:0x3491450f8a0ffc70,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-button"
            >
              LEAVE A REVIEW
            </a>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="reviews-carousel-container">
          <button 
            className="carousel-nav-btn carousel-prev" 
            onClick={prevSlide}
            aria-label="Previous reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div 
            className="reviews-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="reviews-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="reviews-slide">
                  {reviews
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((review) => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <div className="review-avatar">
                            {getInitials(review.name)}
                          </div>
                          <div className="review-info">
                            <div className="review-author">{review.name}</div>
                            <div className="review-date">{review.date}</div>
                          </div>
                        </div>
                        <div className="review-rating">{renderStars(review.rating)}</div>
                        <p className="review-text">{review.text}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav-btn carousel-next" 
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Carousel Pagination */}
        <div className="carousel-pagination">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`carousel-page ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="reviews-cta-mobile">
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-cta-button"
          >
            LEAVE A REVIEW
          </a>
        </div>

      </div>
    </section>
  )
}

export default ReviewsSection
