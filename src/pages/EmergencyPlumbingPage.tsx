import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import './EmergencyPlumbingPage.css'

const EmergencyPlumbingPage = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">Domestic Maintenance</h1>
          <p className="service-hero-subtitle">
            Plumbing and gasfitting maintenance for all types of dwellings, from renovations to repairs.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Reliable Domestic Plumbing &amp; Gasfitting</h2>
          <p>
            We handle renovations, general maintenance, drain cleaning, tap and toilet repairs, outdoor plumbing, and
            pipe and leak repairs. Our team arrives on time, assesses the issue thoroughly, and explains the best path
            forward before any work begins.
          </p>
          <p>
            We also install and repair electric, gas, and heat pump hot water systems, along with storm water repairs
            and installations.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default EmergencyPlumbingPage
