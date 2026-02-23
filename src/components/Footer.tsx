import { Link } from 'react-router-dom'
import { serviceAreas } from '../data/serviceAreas'
import { services } from '../data/services'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3>McKay’s Plumbing and Gasfitting</h3>
            </div>
            <p className="footer-tagline">Domestic plumbing and gasfitting maintenance for all types of dwellings.</p>
            <p className="footer-contact-item">
              <a href="tel:0438792102">0438 792 102</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:bmplumb@bigpond.com">bmplumb@bigpond.com</a>
            </p>
            <div className="footer-licence-badges">
              <span className="footer-licence-badge">
                <svg className="footer-licence-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2 4 5v5.8c0 5.2 3.5 10.1 8 11.2 4.5-1.1 8-6 8-11.2V5L12 2zm-1.1 13.1-3-3 1.4-1.4 1.6 1.6 3.9-3.9 1.4 1.4-5.3 5.3z"/>
                </svg>
                <span className="footer-licence-badge-text">
                  <span className="footer-licence-badge-label">QBCC Licence</span>
                  <span className="footer-licence-badge-number">15130806</span>
                </span>
              </span>
              <span className="footer-licence-badge">
                <svg className="footer-licence-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2 4 5v5.8c0 5.2 3.5 10.1 8 11.2 4.5-1.1 8-6 8-11.2V5L12 2zm-1.1 13.1-3-3 1.4-1.4 1.6 1.6 3.9-3.9 1.4 1.4-5.3 5.3z"/>
                </svg>
                <span className="footer-licence-badge-text">
                  <span className="footer-licence-badge-label">Gas Licence</span>
                  <span className="footer-licence-badge-number">L93521</span>
                </span>
              </span>
            </div>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h4>OUR SERVICES</h4>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h4>SERVICE AREAS</h4>
            <ul className="footer-service-areas-list">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/service-areas/${area.slug}`}>{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="footer-section">
            <h4>OPERATING HOURS</h4>
            <ul className="hours-list">
              <li>
                <span>Mon - Fri:</span>
                <span>7:00am - 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} McKay’s Plumbing and Gasfitting. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
