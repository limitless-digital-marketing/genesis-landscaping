import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import './ServicePageShared.css'

const LandscapeProjectSupportPage = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">Landscape Project Support</h1>
          <p className="service-hero-subtitle">
            Landscaping for new builds and property upgrades, from turf and planting to yard cleanups and restorations.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Reliable Landscaping Services</h2>
          <p>
            Genesis Landscaping handles new build landscaping, turf installation, garden design, garden restorations,
            and yard clean ups with clear communication and tidy workmanship from start to finish.
          </p>
          <p>
            We also build garden beds, install plants, and complete feature landscaping touches to improve presentation
            and usability for residential and commercial properties.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default LandscapeProjectSupportPage
