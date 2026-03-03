import { Link } from 'react-router-dom'
import CurvedCTASection from '../components/CurvedCTASection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import HeroQuoteForm from '../components/HeroQuoteForm'
import PageSeo from '../components/PageSeo'
import './HomePage.css'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
    alt: 'Modern landscaped front yard'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200',
    alt: 'Freshly planted garden bed'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200',
    alt: 'Garden design planting details'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=1200',
    alt: 'Landscaped outdoor path'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200',
    alt: 'Garden restoration greenery'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
    alt: 'Large property landscaping'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1473447198193-c83a3d7c1f2f?w=1200',
    alt: 'Backyard garden layout'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1460533893735-45cea2212645?w=1200',
    alt: 'Outdoor landscaped garden beds'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1466692052106-e5cf528f34ce?w=1200',
    alt: 'Lawn and plant installation'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200',
    alt: 'Residential landscaping finish'
  }
]

const heroBenefitPoints = [
  {
    id: 1,
    title: 'Residential & Commercial',
    subtitle: 'New builds and property upgrades',
    icon: (
      <svg viewBox="0 0 24 24" className="hero-benefit-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 12 2.5zm1.1 14.4v1h-2.1v-1a3.2 3.2 0 0 1-2.8-2.7l2-.3a1.6 1.6 0 0 0 1.7 1.3c1 0 1.6-.5 1.6-1.2 0-.8-.8-1.1-2-1.5-1.6-.5-3.1-1.1-3.1-3.1 0-1.5 1-2.7 2.6-3V5.3h2.1v1.1a3.1 3.1 0 0 1 2.5 2.4l-2 .3a1.4 1.4 0 0 0-1.5-1.1c-.9 0-1.4.4-1.4 1.1 0 .7.7 1 1.9 1.4 1.7.6 3.3 1.3 3.3 3.3 0 1.7-1.1 2.9-2.8 3.2z"
        />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Design To Install',
    subtitle: 'Garden plans, turf, beds, and plants',
    icon: (
      <svg viewBox="0 0 24 24" className="hero-benefit-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 4 5v5.8c0 5.2 3.5 10.1 8 11.2 4.5-1.1 8-6 8-11.2V5L12 2zm-1.1 13.1-3-3 1.4-1.4 1.6 1.6 3.9-3.9 1.4 1.4-5.3 5.3z"
        />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Local & Reliable',
    subtitle: 'Based in Casuarina NSW',
    icon: (
      <svg viewBox="0 0 24 24" className="hero-benefit-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.5 9.5 0 0 0 12 2.5zm0 17a7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 0 1-7.5 7.5zm1-11h-2v4.1l3.5 2.1 1-1.7-2.5-1.5z"
        />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Clean Finishes',
    subtitle: 'Tidy workmanship and site presentation',
    icon: (
      <svg viewBox="0 0 24 24" className="hero-benefit-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="m13.2 2-7 11h5.1L10.8 22l7-11h-5.1L13.2 2z"
        />
      </svg>
    )
  }
]

const popularServiceCards = [
  {
    slug: 'garden-design',
    title: 'Landscape Design',
    description:
      'Transform your backyard with our custom landscape design services tailored to suit you and your lifestyle.',
    image: '/Images/landscape-design.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="service-grid-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3c3.6 2.3 5.4 5.1 5.4 8.2a5.4 5.4 0 1 1-10.8 0C6.6 8.1 8.4 5.3 12 3zm-1 13.1V21h2v-4.9h-2z"
        />
      </svg>
    )
  },
  {
    slug: 'garden-beds-edging',
    title: 'Retaining Walls',
    description:
      'We build quality retaining walls in a variety of materials including concrete sleepers and sandstone.',
    image: '/Images/retaining-walls.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="service-grid-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M2 19h20v2H2v-2zm2-8h16v6H4v-6zm0-6h7v4H4V5zm9 0h7v4h-7V5z"
        />
      </svg>
    )
  },
  {
    slug: 'new-build-landscaping',
    title: 'Deck Builders',
    description:
      'Quality timber or composite decks, perfect for entertaining or relaxing with a cuppa.',
    image: '/Images/dock-builders.webp',
    icon: (
      <svg viewBox="0 0 24 24" className="service-grid-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 19h18v2H3v-2zm1-2h16v-3H4v3zm0-5h16V9H4v3zm2-5h12V5H6v2z"
        />
      </svg>
    )
  }
]

const HomePage = () => {
  return (
    <div className="homepage">
      <PageSeo
        title="Genesis Landscaping | Casuarina NSW Landscaping Services"
        description="Genesis Landscaping provides new build landscaping, turf installation, garden design, restorations, and yard clean ups in Casuarina NSW and surrounding areas."
      />

      {/* Hero Section */}
      <section className="hero">
        <img
          src="/Images/homepage-hero-mobile.webp"
          alt=""
          className="hero-mobile-image"
          aria-hidden="true"
        />
        <div className="container">
          <div className="hero-grid">
            {/* Left Column - Headline & Value Prop */}
            <div className="hero-content">
              <div className="hero-review-pill" aria-label="5.0 star rating from 47 reviews">
                <span className="hero-review-pill-icon" aria-hidden="true">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"
                    alt=""
                    className="hero-review-pill-logo"
                    loading="lazy"
                  />
                </span>
                <span className="hero-review-pill-icon" aria-hidden="true">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png"
                    alt=""
                    className="hero-review-pill-logo"
                    loading="lazy"
                  />
                </span>
                <span className="hero-review-pill-score">5.0</span>
                <span className="hero-review-pill-stars" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/></svg>
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/></svg>
                </span>
                <span className="hero-review-pill-count">(11)</span>
              </div>
              <h1>
                WELCOME TO GENESIS
                <span className="hero-headline-line hero-headline-nowrap">LANDSCAPING</span>
              </h1>
              <p className="hero-subheading">New Residential &amp; Commercial Landscaping</p>
              <p className="hero-description">
                Clean, professional landscaping for new builds and outdoor upgrades. We handle sod installation,
                garden design and restorations, yard clean ups, garden beds, artificial turf, and plant installation
                across Casuarina and surrounding areas.
              </p>
              <div className="hero-mobile-cta">
                <a
                  className="hero-cta-button"
                  href="#quote-section"
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById('quote-section')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    })
                  }}
                >
                  <span>GET FREE QUOTE</span>
                  <span className="hero-cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 4v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Quote Form (Desktop Only) */}
            <div className="hero-form-container hero-form-container-desktop">
              <div className="hero-form-card">
                <img
                  src="/Images/logo-white-text.png"
                  alt="Genesis Landscaping logo"
                  className="form-logo"
                />
                <HeroQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-benefits-strip" aria-label="Genesis Landscaping key benefits">
        <div className="container hero-benefits-strip-container">
          {heroBenefitPoints.map((benefit) => (
            <article className="hero-benefit-point" key={benefit.id}>
              <span className="hero-benefit-icon-wrap">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p className="hero-benefit-subtitle">{benefit.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hero-quote-section" id="quote-section">
        <div className="container">
          <div className="hero-quote-intro">
            <h2>Get Your Free Quote Today</h2>
          </div>
          <div className="hero-form-container hero-form-container-quote">
            <div className="hero-form-card">
              <img
                src="/Images/logo-white-text.png"
                alt="Genesis Landscaping logo"
                className="form-logo"
              />
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-developer">
        <div className="container about-developer-container">
          <div className="about-main">
            <div className="about-text">
              <div className="about-title-row">
                <h2>ABOUT US</h2>
                <span className="about-accent-line" aria-hidden="true"></span>
              </div>
              <p>
                Genesis Landscaping is a hands-on landscaping business based in Casuarina NSW, led by Jett Paludan.
                We specialise in landscaping for new residential and commercial builds, plus garden restorations and
                outdoor refreshes that make properties look finished, clean, and ready to enjoy.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/Images/IMG_2214.jpeg"
                alt="Genesis Landscaping team at work"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-grid-section">
        <div className="container services-grid-container">
          <div className="services-grid-header">
            <span className="services-grid-label">WHAT WE ARE BEST AT</span>
            <div className="services-grid-heading-row">
              <h2>OUR SERVICES</h2>
              <span className="services-grid-midline" aria-hidden="true"></span>
              <Link to="/services" className="services-grid-cta-button">
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>

          <div className="services-grid">
            {popularServiceCards.map((service) => (
              <article key={service.slug} className="service-grid-card">
                <div className="service-grid-image-wrap">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-grid-card-body">
                  <span className="service-grid-icon-wrap">{service.icon}</span>
                  <h3 className="service-grid-title">{service.title}</h3>
                  <p className="service-grid-desc">{service.description}</p>
                  <Link to={`/services/${service.slug}`} className="service-grid-button">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="services-grid-cta-mobile">
            <Link to="/services" className="services-grid-cta-button">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* See Our Work Section */}
      <section className="work-gallery-section">
        <div className="container work-gallery-container">
          <div className="work-gallery-header">
            <span className="work-gallery-label">SEE WHY CLIENTS CHOOSE US</span>
            <div className="work-gallery-heading-row">
              <h2>SEE OUR WORK</h2>
              <span className="work-gallery-midline" aria-hidden="true"></span>
              <button className="work-gallery-cta" type="button">
                SEE ALL PHOTOS
              </button>
            </div>
          </div>

          <div className="work-gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="work-gallery-card">
                <img src={image.url} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="work-gallery-cta-mobile">
            <button className="work-gallery-cta" type="button">
              SEE ALL PHOTOS
            </button>
          </div>
        </div>

      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection />

      <ServiceAreasSection />

      <CurvedCTASection />

    </div>
  )
}

export default HomePage
