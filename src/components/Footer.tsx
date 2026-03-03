import { Link } from 'react-router-dom'
import './Footer.css'

const footerServiceLinks = [
  { label: 'Landscaping & New Builds', to: '/services/new-build-landscaping' },
  { label: 'Garden Design & Planting', to: '/services/garden-design' },
  { label: 'Turf & Artificial Grass', to: '/services/artificial-turf-installation' },
  { label: 'Maintenance & Clean-Ups', to: '/services/yard-clean-ups' },
  { label: 'Commercial Landscaping', to: '/services/commercial-landscape-fit-outs' }
]

const footerAreaLinks = [
  { label: 'Tweed Coast', to: '/service-areas/tweed-coast' },
  { label: 'Kingscliff', to: '/service-areas/kingscliff' },
  { label: 'Casuarina', to: '/service-areas/casuarina' },
  { label: 'Murwillumbah', to: '/service-areas/murwillumbah' }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-content">
            <section className="footer-section footer-brand" aria-labelledby="footer-brand-heading">
              <p className="footer-eyebrow">Tweed Coast Landscaping</p>
              <div className="footer-logo">
                <h3 id="footer-brand-heading">Genesis Landscaping</h3>
              </div>

              <div className="footer-contact-list" aria-label="Contact details">
                <p className="footer-contact-item">
                  <a href="tel:0403297672">0403 297 672</a>
                </p>
                <p className="footer-contact-item">
                  <a href="mailto:jettpaludan3@gmail.com">jettpaludan3@gmail.com</a>
                </p>
              </div>

              <Link to="/get-quote" className="btn btn-primary footer-quote-button">
                Get Free Quote
              </Link>
            </section>

            <section className="footer-section" aria-labelledby="footer-services-heading">
              <h4 id="footer-services-heading">Our Services</h4>
              <ul className="footer-link-list footer-services-list">
                {footerServiceLinks.map((service) => (
                  <li key={service.to}>
                    <Link to={service.to}>{service.label}</Link>
                  </li>
                ))}
              </ul>
              <p className="footer-list-note">
                <Link to="/services">View All Services</Link>
              </p>
            </section>

            <section className="footer-section" aria-labelledby="footer-areas-heading">
              <h4 id="footer-areas-heading">Service Areas</h4>
              <ul className="footer-link-list footer-service-areas-list">
                {footerAreaLinks.map((area) => (
                  <li key={area.to}>
                    <Link to={area.to}>{area.label}</Link>
                  </li>
                ))}
                <li>
                  <span className="footer-plain-item">Surrounding Areas</span>
                </li>
              </ul>
              <p className="footer-list-note">
                Don&apos;t see your area? <Link to="/get-quote">Get in touch.</Link>
              </p>
            </section>

            <section className="footer-section footer-hours" aria-labelledby="footer-hours-heading">
              <h4 id="footer-hours-heading">Operating Hours</h4>
              <ul className="hours-list">
                <li>
                  <span>Mon - Fri</span>
                  <span>7:00am - 5:00pm</span>
                </li>
                <li>
                  <span>Saturday</span>
                  <span>Quote by appointment</span>
                </li>
              </ul>
              <p className="footer-trust-line">Local • Reliable • Tidy finishes</p>
            </section>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} Genesis Landscaping. All Rights Reserved.</p>
              <div className="footer-bottom-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
