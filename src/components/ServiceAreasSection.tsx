import { serviceAreas } from '../data/serviceAreas'
import './ServiceAreasSection.css'

const ServiceAreasSection = () => {
  return (
    <section id="service-areas" className="service-areas-section">
      <div className="container service-areas-container">
        <div className="service-areas-layout">
          <div className="service-areas-content">
            <h2>
              PROUDLY SERVING
              <span>LOCAL AREAS</span>
            </h2>
            <div className="service-areas-list">
              {serviceAreas.map((area) => (
                <div key={area.slug} className="service-area-item">
                  <svg
                    className="service-area-pin"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7zm0 9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" fill="currentColor"/>
                  </svg>
                  <span>{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreasSection
