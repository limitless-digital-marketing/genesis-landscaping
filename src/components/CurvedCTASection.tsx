import { Link, useLocation } from 'react-router-dom'
import './CurvedCTASection.css'

const CurvedCTASection = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  return (
    <section className="curved-cta">
      <div className="curved-cta-content">
        <h2>READY TO TAKE THE NEXT STEP?</h2>
        <p>GET FREE QUOTE TODAY!</p>
        {isHomePage ? (
          <a className="curved-cta-button" href="#quote-section">
            GET FREE QUOTE
          </a>
        ) : (
          <Link className="curved-cta-button" to="/get-quote">
            GET FREE QUOTE
          </Link>
        )}
      </div>
    </section>
  )
}

export default CurvedCTASection
