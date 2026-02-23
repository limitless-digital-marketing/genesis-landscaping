import { useState } from 'react'
import './FAQSection.css'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What types of properties do you service?',
      answer: 'We provide domestic plumbing and gasfitting maintenance for all types of dwellings, from apartments to family homes and multi-dwelling residences.'
    },
    {
      id: 2,
      question: 'Do you handle renovations?',
      answer: 'Yes. We cover plumbing and gasfitting work for bathroom, kitchen, and laundry renovations, including fixture installations and pipework updates.'
    },
    {
      id: 3,
      question: 'What hot water systems do you service?',
      answer: 'We install and repair electric, gas, and heat pump hot water systems.'
    },
    {
      id: 4,
      question: 'Do you clear drains and sewer blockages?',
      answer: 'Yes. We handle drain cleaning, sewer blockages, and repairs to restore flow and keep your system working properly.'
    },
    {
      id: 5,
      question: 'Do you provide tap, toilet, and shower repairs?',
      answer: 'Yes. We repair and install taps, toilets, and showers, including leaks, running cisterns, and faulty fittings.'
    },
    {
      id: 6,
      question: 'How do I request a quote?',
      answer: 'Call us or submit a request through the quote form and we\'ll get back to you with clear options and pricing.'
    }
  ]

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="faq-eyebrow">GOT QUESTIONS?</span>
          <div className="faq-heading-row">
            <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${openId === faq.id ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <svg 
                    className="faq-icon"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <span>{faq.question}</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-image-container">
            <img 
              src="/Images/faqs.png" 
              alt="Professional plumber at work"
              className="faq-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
