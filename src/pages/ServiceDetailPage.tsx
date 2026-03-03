import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import PageSeo from '../components/PageSeo'
import { services } from '../data/services'
import './ServicePageShared.css'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams()
  const service = services.find((entry) => entry.slug === serviceSlug)
  const pageTitle = service
    ? `${service.name} | Genesis Landscaping Casuarina NSW`
    : 'Service Not Found | Genesis Landscaping'
  const pageDescription = service
    ? `${service.heroSubtitle} Get a free landscaping quote from Genesis Landscaping in Casuarina NSW and surrounding areas.`
    : 'Explore Genesis Landscaping services for new builds, turf installation, planting, garden design, restorations, and yard clean ups.'

  if (!service) {
    return (
      <div className="service-page">
        <PageSeo title={pageTitle} description={pageDescription} />
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
      <PageSeo title={pageTitle} description={pageDescription} />
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
            We arrive on time, assess the site, and explain the best way to complete the work before we start. Every
            job is completed with tidy workmanship, clear communication, and a finish that suits the property.
          </p>
          <p>
            From simple touch-ups to full outdoor transformations, Genesis Landscaping tailors every{' '}
            {service.name.toLowerCase()} job to the layout, scope, and presentation goals of your property. If you are
            unsure where to start, we can guide you with practical recommendations that match your budget.
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
