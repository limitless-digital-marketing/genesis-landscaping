import { Link } from 'react-router-dom'
import CurvedCTASection from '../components/CurvedCTASection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import HeroQuoteForm from '../components/HeroQuoteForm'
import './HomePage.css'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200',
    alt: 'Bathroom renovation'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    alt: 'Kitchen plumbing'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200',
    alt: 'Hot water installation'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200',
    alt: 'Leak repair'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    alt: 'Bathroom fixtures'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=1200',
    alt: 'Drain work'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    alt: 'Modern bathroom'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
    alt: 'House plumbing'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200',
    alt: 'Window install'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200',
    alt: 'Outdoor plumbing'
  }
]

const heroBenefitPoints = [
  {
    id: 1,
    title: 'Upfront Pricing',
    subtitle: 'Competitive affordable plumbers',
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
    title: 'Licensed and Insured',
    subtitle: 'Over 25 years experience',
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
    title: 'Honest & On Time',
    subtitle: 'We travel to all areas of Brisbane',
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
    title: 'Same Day Service',
    subtitle: "Don't wait call us today!",
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

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/Images/home-hero-mobile.png"
          alt=""
          className="hero-mobile-image"
          aria-hidden="true"
        />
        <div className="container">
          <div className="hero-grid">
            {/* Left Column - Headline & Value Prop */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.6-1.2 3-2.6 3.9v3h4.2c2.5-2.3 3.9-5.6 3.9-9z"/>
                    <path fill="#34A853" d="M12 24c3.3 0 6.1-1.1 8.2-3.1l-4.2-3c-1.2.8-2.7 1.3-4 1.3-3.1 0-5.7-2.1-6.6-4.9H1v3.1C3.1 21.1 7.3 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.4 14.3c-.2-.6-.4-1.3-.4-2s.1-1.4.4-2V7.2H1C.3 8.7 0 10.3 0 12s.3 3.3 1 4.8l4.4-2.5z"/>
                    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.1 2.9 1 7.2l4.4 3.1C6.3 6.9 8.9 4.8 12 4.8z"/>
                  </svg>
                </span>
                <span className="hero-badge-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="currentColor"
                      d="M12 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7zm0 9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z"
                    />
                  </svg>
                </span>
                <span className="hero-badge-stars" aria-label="5 out of 5 stars">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                </span>
                <span className="hero-badge-text hero-badge-text-desktop">5-Star Reviews</span>
              </div>
              <h1>
                MCKAY’S
                <span className="hero-headline-line hero-headline-nowrap">PLUMBING &amp; GASFITTING</span>
              </h1>
              <p className="hero-subheading">Servicing Ipswich, Brisbane and Surrounds</p>
              <p className="hero-description">
                Domestic plumbing and gasfitting for all types of dwellings, including renovations, drain cleaning,
                gas piping and bottle connections, cooktops, hot water systems, water filters, septic tanks, and
                general maintenance repairs.
              </p>
              <div className="hero-mobile-cta">
                <a
                  className="hero-cta-button"
                  href="#quote-section"
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById('quote-section')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
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
                  src="/Images/brads-plumbing-logo.png"
                  alt="McKay’s Plumbing and Gasfitting"
                  className="form-logo"
                />
                <HeroQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-benefits-strip" aria-label="McKay’s Plumbing and Gasfitting key benefits">
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
          <div className="hero-form-container hero-form-container-quote">
            <div className="hero-form-card">
              <img
                src="/Images/brads-plumbing-logo.png"
                alt="McKay’s Plumbing and Gasfitting"
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
                Brad is a hands-on plumber and gasfitter who takes pride in turning up on time, doing the job properly,
                and leaving your home clean and tidy. Whether it is a renovation, general maintenance, drain cleaning,
                pipe and leak repairs, or hot water system work, Brad keeps the process clear and straightforward so you
                always know what is happening.
              </p>
              <div className="about-licence-badges">
                <span className="licence-badge">
                  <svg className="licence-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2 4 5v5.8c0 5.2 3.5 10.1 8 11.2 4.5-1.1 8-6 8-11.2V5L12 2zm-1.1 13.1-3-3 1.4-1.4 1.6 1.6 3.9-3.9 1.4 1.4-5.3 5.3z"/>
                  </svg>
                  <span className="licence-badge-text">
                    <span className="licence-badge-label">QBCC Licence</span>
                    <span className="licence-badge-number">15130806</span>
                  </span>
                </span>
                <span className="licence-badge">
                  <svg className="licence-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 2 4 5v5.8c0 5.2 3.5 10.1 8 11.2 4.5-1.1 8-6 8-11.2V5L12 2zm-1.1 13.1-3-3 1.4-1.4 1.6 1.6 3.9-3.9 1.4 1.4-5.3 5.3z"/>
                  </svg>
                  <span className="licence-badge-text">
                    <span className="licence-badge-label">Gas Licence</span>
                    <span className="licence-badge-number">L93521</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/Images/about-us.webp"
                alt="Plumbing service van"
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
            <Link to="/services/renovations" className="service-grid-card">
              <img
                src="/Images/renovation.png"
                alt="Renovation plumbing"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">RENOVATIONS</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Plumbing upgrades for kitchens, bathrooms, and laundries.</span>
              </div>
            </Link>
            <Link to="/services/water-heaters" className="service-grid-card">
              <img
                src="/Images/water-heaters.png"
                alt="Water heaters"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">WATER HEATERS</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Electric, gas, and heat pump hot water systems.</span>
              </div>
            </Link>
            <Link to="/services/drain-cleaning" className="service-grid-card">
              <img
                src="/Images/blocked-drains.png"
                alt="Drain cleaning"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">DRAIN CLEANING</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Clear slow drains and stubborn blockages.</span>
              </div>
            </Link>
            <Link to="/services/pipe-leak-repairs" className="service-grid-card">
              <img
                src="/Images/leak-detection.png"
                alt="Pipe and leak repairs"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">PIPE &amp; LEAK REPAIRS</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Find and fix leaks fast to prevent damage.</span>
              </div>
            </Link>
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
            <span className="work-gallery-label">SEE WHY OUR CUSTOMERS LOVE US</span>
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
