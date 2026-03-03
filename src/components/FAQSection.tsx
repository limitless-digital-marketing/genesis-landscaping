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
      answer:
        'Genesis Landscaping works on both residential and commercial properties, including new builds, upgrades, and outdoor refresh projects.'
    },
    {
      id: 2,
      question: 'Do you do landscaping for new builds?',
      answer:
        'Yes. New build landscaping is a core service, including turf, garden beds, planting, and clean presentation work for handover.'
    },
    {
      id: 3,
      question: 'Can you install sod or artificial turf?',
      answer:
        'Yes. We install both natural sod and artificial turf, and we handle the ground preparation needed for a clean finish and long-lasting result.'
    },
    {
      id: 4,
      question: 'Do you design gardens as well as install them?',
      answer:
        'Yes. We can help with garden design and layout planning, then complete the installation of beds, plants, turf, and finishing touches.'
    },
    {
      id: 5,
      question: 'What kind of jobs do yard clean ups include?',
      answer:
        'Yard clean ups can include clearing overgrowth, green waste removal, tidying garden areas, and preparing the site for new landscaping works.'
    },
    {
      id: 6,
      question: 'How do I request a quote?',
      answer:
        'Call 0403 297 672 or send a request through the quote form and we will get back to you to discuss the job and next steps.'
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
              src="/Images/IMG_2615 (1).jpeg"
              alt="Completed landscaping project"
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
