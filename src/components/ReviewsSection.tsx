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
  const googleReviewLink =
    'https://www.google.com/search?kgmid=/g/11ydh0p7yz&hl=en-AU&q=JP+Landscaping+care&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=ab8e32aa9cbd5023&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/osrp/m5/1#lrd=0xa4d8ac656cf02707:0x7ba54ea3f8f1fe80,1,,,,'
  // Template Google reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Cassandra Gasser',
      date: '7 months ago',
      rating: 5,
      text: 'Jett has done a wonderful job of our lawns for the past few months and has helped me with some landscaping as well. I highly recommend him.'
    },
    {
      id: 2,
      name: 'Hunter Bleechmore',
      date: '5 months ago',
      rating: 5,
      text: 'The service was really good with communication, had a one week turn over, and was easy and clear to work with. He also did an amazing job.'
    },
    {
      id: 3,
      name: 'Tabrah Evans',
      date: '7 months ago',
      rating: 5,
      text: 'Jett is a hardworking and dedicated professional. He did an outstanding job on my landscaping project and demonstrated excellent manners throughout. I highly recommend him for any landscaping work.'
    },
    {
      id: 4,
      name: 'Jayde Porter',
      date: '7 months ago',
      rating: 5,
      text: "Jett's landscaping services was very good and neat, not only did he do a good job but the relationship we built felt like family."
    },
    {
      id: 5,
      name: 'Maia Hoepfner-Muir',
      date: '7 months ago',
      rating: 5,
      text: 'Jett does a great job. Is reliable, consistent and has the initiative to pick up on other jobs that need to be done around the property.'
    },
    {
      id: 6,
      name: 'Amelia Genganah',
      date: '7 months ago',
      rating: 5,
      text: 'Jett is a well spoken man and quite reliable. He did some landscaping jobs for me, and the before and after results were incredible. Thank you again Jett.'
    },
    {
      id: 7,
      name: 'Matt B',
      date: '7 months ago',
      rating: 5,
      text: 'I engaged Jett to fix my garden beds after 12 months of neglect with overgrown trees, plants, and weeds. In an afternoon he trimmed trees, cleared the beds, and added fresh mulch. Good presentation, no mess left behind, and great customer service.'
    },
    {
      id: 8,
      name: 'Jacob Borrelli',
      date: '7 months ago',
      rating: 5,
      text: 'Jett did a wonderful job on our landscaping job, 10/10 would recommend.'
    },
    {
      id: 9,
      name: 'Talon Coleman',
      date: '7 months ago',
      rating: 5,
      text: "Young Jett was very helpful and did an amazing job. Couldn't have asked for more."
    },
    {
      id: 10,
      name: 'Di Bannister',
      date: '7 months ago',
      rating: 5,
      text: 'Highly recommend this young man. Very polite, knowledgeable and competent. Great worker.'
    },
    {
      id: 11,
      name: 'Abigail Adams',
      date: '8 months ago',
      rating: 5,
      text: 'Very professional and amazing work done.'
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
              href={googleReviewLink}
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
            href={googleReviewLink}
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
