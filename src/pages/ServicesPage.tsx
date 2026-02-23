import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import { services } from '../data/services'
import './ServicesPage.css'
import './EmergencyPlumbingPage.css'

const ServicesPage = () => {
  return (
    <div className="service-page services-page">
      <section className="service-hero services-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">Plumbing &amp; Gasfitting Services</h1>
          <p className="service-hero-subtitle">
            Domestic plumbing and gasfitting maintenance for all types of dwellings. Explore the full list of services
            below.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="services-list-section">
        <div className="container services-list-container">
          <div className="services-list-grid">
            {services.map((service) => (
              <Link key={service.slug} className="services-list-card" to={`/services/${service.slug}`}>
                <div className="services-list-title">{service.name}</div>
                <p className="services-list-copy">{service.heroSubtitle}</p>
                <span className="services-list-link">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default ServicesPage
