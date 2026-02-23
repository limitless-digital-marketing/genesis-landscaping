import { Link } from 'react-router-dom'
import './FinalCTASection.css'

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <h2 className="final-cta-heading">
            READY TO <span className="highlight">take the next step?</span>
          </h2>
          <p className="final-cta-subheading">
            get a free quote TODAY!
          </p>
          <Link to="/quote" className="btn btn-primary btn-large">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection

