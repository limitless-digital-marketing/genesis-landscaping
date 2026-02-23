import HeroQuoteForm from '../components/HeroQuoteForm'
import './QuotePage.css'

const QuotePage = () => {
  return (
    <div className="quote-page">
      {/* Glow-safe wrapper: padding buffer prevents shadow clipping */}
      <div className="quote-page-card-wrapper">
        <div className="quote-page-card hero-form-card">
          <img
            src="/Images/brads-plumbing-logo.png"
            alt="McKay’s Plumbing and Gasfitting"
            className="form-logo"
          />
          <h3 className="hero-form-title">Get A Free Quote</h3>
          <HeroQuoteForm />
        </div>
      </div>
    </div>
  )
}

export default QuotePage
