import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import { serviceAreas } from '../data/serviceAreas'
import './EmergencyPlumbingPage.css'

const heroImage = '/Images/locations-hero.avif'

const ServiceAreaPage = () => {
  const { areaSlug } = useParams()
  const area = serviceAreas.find((entry) => entry.slug === areaSlug)
  const areaName = area?.name ?? 'Service Area'

  return (
    <div className="service-page">
      <section
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("${heroImage}")`
        }}
      >
        <div className="container service-hero-container">
          <div className="service-hero-tag">Service Areas</div>
          <h1 className="service-hero-title">Plumbing in {areaName}</h1>
          <p className="service-hero-subtitle">
            Local plumbing and gasfitting support for homes across {areaName} and the surrounding areas.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Trusted Plumbing Services in {areaName}</h2>
          <p>
            At McKay’s Plumbing and Gasfitting, our service in {areaName} focuses on keeping your plumbing and gas
            systems safe, reliable, and running smoothly. Whether you are dealing with a blockage, leaking pipe, or a
            faulty hot water system, our team delivers efficient, reliable solutions.
          </p>
          <p>
            We handle drain cleaning, pipe and leak repairs, tap and toilet work, shower fixes, and hot water system
            installation and repairs (electric, gas, and heat pump). We use quality parts and proven techniques to
            ensure lasting results, and we keep you informed with clear options and upfront pricing before any work
            begins.
          </p>
          <p>
            We also offer preventive maintenance to keep your plumbing running smoothly and to help avoid unexpected
            issues. Choose McKay’s Plumbing and Gasfitting in {areaName} for dependable service, tidy workmanship, and
            long-term peace of mind.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default ServiceAreaPage
