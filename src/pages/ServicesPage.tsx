import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import PageSeo from '../components/PageSeo'
import { services } from '../data/services'
import './ServicesPage.css'
import './ServicePageShared.css'

const ServicesPage = () => {
  return (
    <div className="service-page services-page">
      <PageSeo
        title="Landscaping Services | Genesis Landscaping Casuarina NSW"
        description="Explore Genesis Landscaping services including new build landscaping, turf, artificial grass, garden design, planting, restorations, and yard clean ups in Casuarina and surrounding areas."
      />

      <section className="service-hero services-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">Landscaping Services</h1>
          <p className="service-hero-subtitle">
            Landscaping for new residential and commercial builds, plus garden restorations, turf, planting, and yard
            cleanups across Casuarina and surrounding areas.
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
