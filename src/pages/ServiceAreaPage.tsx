import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import PageSeo from '../components/PageSeo'
import { serviceAreas } from '../data/serviceAreas'
import './ServicePageShared.css'

const heroImage = '/Images/greenmount-beach-credit-tourism-and-events-queensland-and-paul-a-broben.jpg'

const ServiceAreaPage = () => {
  const { areaSlug } = useParams()
  const area = serviceAreas.find((entry) => entry.slug === areaSlug)
  const areaName = area?.name ?? 'Service Area'
  const pageTitle = area
    ? `Landscaping in ${areaName} | Genesis Landscaping`
    : 'Service Areas | Genesis Landscaping'
  const pageDescription = area
    ? `Genesis Landscaping provides landscaping services for residential and commercial properties in ${areaName} and surrounding areas. Get a free quote today.`
    : 'Genesis Landscaping services Casuarina, Kingscliff, Tweed Coast, Murwillumbah, and surrounding areas.'

  return (
    <div className="service-page">
      <PageSeo title={pageTitle} description={pageDescription} />
      <section
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url("${heroImage}")`
        }}
      >
        <div className="container service-hero-container">
          <div className="service-hero-tag">Service Areas</div>
          <h1 className="service-hero-title">Landscaping in {areaName}</h1>
          <p className="service-hero-subtitle">
            Local landscaping support for residential and commercial properties across {areaName} and surrounding
            areas.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Trusted Landscaping Services in {areaName}</h2>
          <p>
            At Genesis Landscaping, our service in {areaName} focuses on clean, practical outdoor results for new
            builds and existing properties. Whether you need turf, garden beds, planting, or a full yard refresh, we
            deliver efficient, reliable workmanship.
          </p>
          <p>
            We handle sod installation, artificial turf, garden design and restorations, yard clean ups, garden beds,
            and plant installation. We keep communication clear and work to a tidy finish so your outdoor space is
            ready to enjoy.
          </p>
          <p>
            We also complete commercial landscape fit-outs and presentation work for new developments. Choose Genesis
            Landscaping in {areaName} for dependable service, tidy workmanship, and a polished result.
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
