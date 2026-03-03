import HeroQuoteForm from '../components/HeroQuoteForm'
import PageSeo from '../components/PageSeo'
import './QuotePage.css'

const QuotePage = () => {
  return (
    <div className="quote-page">
      <PageSeo
        title="Get Free Landscaping Quote | Genesis Landscaping"
        description="Request a free landscaping quote from Genesis Landscaping for new builds, turf, garden design, planting, restorations, and yard clean ups in Casuarina and surrounding areas."
      />

      <div className="quote-page-intro">
        <h1 className="quote-page-heading">GET YOUR FREE QUOTE</h1>
      </div>

      {/* Glow-safe wrapper: padding buffer prevents shadow clipping */}
      <div className="quote-page-card-wrapper">
        <div className="quote-page-card hero-form-card">
          <img
            src="/Images/logo-white-text.png"
            alt="Genesis Landscaping logo"
            className="form-logo"
          />
          <HeroQuoteForm />
        </div>
      </div>
    </div>
  )
}

export default QuotePage
