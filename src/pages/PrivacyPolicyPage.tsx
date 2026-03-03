import { Link } from 'react-router-dom'
import PageSeo from '../components/PageSeo'
import './PrivacyPolicyPage.css'

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-page">
      <PageSeo
        title="Privacy Policy | Genesis Landscaping"
        description="Read the Genesis Landscaping privacy policy, including how quote enquiries are handled, what website data may be collected, and how to contact us about privacy questions."
      />

      <section className="privacy-hero">
        <div className="container privacy-hero-container">
          <p className="privacy-eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">
            This policy explains how Genesis Landscaping collects, uses, and stores information when you use this
            website or submit a quote request.
          </p>
          <p className="privacy-effective">Effective date: February 24, 2026</p>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="container privacy-content-container">
          <div className="privacy-card">
            <section className="privacy-block">
              <h2>Information We Collect</h2>
              <p>When you use our website, we may collect:</p>
              <ul>
                <li>Contact details you submit, such as your name, phone number, and email address.</li>
                <li>Project details you provide in your quote request message.</li>
                <li>Basic website usage information, such as pages visited and device/browser information.</li>
                <li>Campaign tracking information (for example UTM parameters) when included in the page URL.</li>
              </ul>
            </section>

            <section className="privacy-block">
              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to quote requests and enquiries.</li>
                <li>Contact you about landscaping services you asked about.</li>
                <li>Improve our website and understand which pages are being used.</li>
                <li>Maintain records of enquiries and follow-up communication.</li>
              </ul>
            </section>

            <section className="privacy-block">
              <h2>Analytics and Cookies</h2>
              <p>
                This website may use analytics tools and cookies to understand website traffic and user behaviour. If
                analytics is enabled, those tools may collect information such as pages viewed, device/browser type, and
                general location data (for example, city or region).
              </p>
              <p>
                You can usually control cookies through your browser settings. Disabling cookies may affect how some
                website features work.
              </p>
            </section>

            <section className="privacy-block">
              <h2>How We Share Information</h2>
              <p>We do not sell your personal information. We may share information with:</p>
              <ul>
                <li>Service providers who help us process website enquiries or maintain the website.</li>
                <li>Professional advisers or legal authorities if required by law.</li>
              </ul>
            </section>

            <section className="privacy-block">
              <h2>Data Storage and Security</h2>
              <p>
                We take reasonable steps to protect the information submitted through this website. However, no online
                system can be guaranteed to be completely secure.
              </p>
            </section>

            <section className="privacy-block">
              <h2>Your Choices</h2>
              <p>
                If you want to update or remove information you have submitted through this website, contact us using the
                details below and we will respond as soon as practical.
              </p>
            </section>

            <section className="privacy-block">
              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy or your information, contact Genesis Landscaping:</p>
              <ul className="privacy-contact-list">
                <li>
                  Phone: <a href="tel:0403297672">0403 297 672</a>
                </li>
                <li>
                  Email: <a href="mailto:jettpaludan3@gmail.com">jettpaludan3@gmail.com</a>
                </li>
              </ul>
              <p className="privacy-cta-note">
                Looking for a quote instead? <Link to="/get-quote">Get a free quote here</Link>.
              </p>
            </section>

            <section className="privacy-block">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated effective date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
