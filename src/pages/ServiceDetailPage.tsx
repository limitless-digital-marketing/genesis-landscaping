import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import { services } from '../data/services'
import './EmergencyPlumbingPage.css'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams()
  const service = services.find((entry) => entry.slug === serviceSlug)

  if (!service) {
    return (
      <div className="service-page">
        <section className="service-hero">
          <div className="container service-hero-container">
            <div className="service-hero-tag">Services</div>
            <h1 className="service-hero-title">Service Not Found</h1>
            <p className="service-hero-subtitle">
              The service you are looking for is not available. Explore our full list of services to find the right
              fit.
            </p>
            <Link className="service-hero-cta" to="/">
              GO BACK HOME
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">{service.name}</h1>
          <p className="service-hero-subtitle">{service.heroSubtitle}</p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>{service.name}</h2>
          <p>{service.content}</p>
          <p>
            Our team arrives on time, assesses the issue thoroughly, and explains the best path forward before any work
            begins. We use quality materials and proven techniques to deliver repairs that last, with tidy workmanship
            and clear communication at every step.
          </p>
          <p>
            From quick fixes to more involved solutions, McKay’s Plumbing and Gasfitting tailors every{' '}
            {service.name.toLowerCase()} job to the needs of your property. If you are unsure what is causing the
            problem, we will diagnose it and
            provide honest recommendations so you can make the right call with confidence.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default ServiceDetailPage
