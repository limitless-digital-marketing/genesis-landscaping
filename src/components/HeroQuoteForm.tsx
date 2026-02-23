import { useState } from 'react'

const LEAD_ENDPOINT = 'https://www.buildwithlimitless.com/api/new-lead'
const CLIENT_ID = 'd3553ace-cbd5-4af6-b3be-b5fb1610197c'

const HeroQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    hp: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const url = new URL(window.location.href)
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const utmData = utmParams.reduce<Record<string, string>>((acc, key) => {
      const value = url.searchParams.get(key)
      if (value) acc[key] = value
      return acc
    }, {})

    const messageParts = []
    if (formData.message) messageParts.push(formData.message)

    const payload = {
      client_id: CLIENT_ID,
      full_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: messageParts.length ? messageParts.join('\n') : undefined,
      source_url: url.href,
      hp: formData.hp || '',
      ...utmData
    }

    try {
      const response = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Lead submission failed')
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', phone: '', email: '', message: '', hp: '' })
      }, 3000)
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="hero-form-success">
        <p>✓ Thanks! We'll contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="hero-form">
      <div className="hero-form-row">
        <div className="hero-form-group">
          <label className="hero-form-label" htmlFor="hero-full-name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="hero-full-name"
            placeholder="John Doe *"
            required
            value={formData.name}
            onChange={handleChange}
            className="hero-form-input"
          />
        </div>

        <div className="hero-form-group">
          <label className="hero-form-label" htmlFor="hero-phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="hero-phone"
            placeholder="+61 123 456 789 *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="hero-form-input"
          />
        </div>
      </div>

      <div className="hero-form-group">
        <label className="hero-form-label" htmlFor="hero-email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="hero-email"
          placeholder="your.email@example.com *"
          required
          value={formData.email}
          onChange={handleChange}
          className="hero-form-input"
        />
      </div>

      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="hero-hp">HP</label>
        <input
          type="text"
          id="hero-hp"
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="hero-form-group">
        <label className="hero-form-label" htmlFor="hero-message">
          Short message about your needs
        </label>
        <textarea
          name="message"
          id="hero-message"
          placeholder="Your message goes straight to my phone. I'll get back to you as soon as I'm available."
          value={formData.message}
          onChange={handleChange}
          className="hero-form-input"
          rows={3}
        />
      </div>

      {error && <p className="hero-form-error">{error}</p>}

      <button type="submit" className="btn btn-primary btn-block">
        {submitting ? 'SENDING...' : 'GET FREE QUOTE'}
      </button>
    </form>
  )
}

export default HeroQuoteForm
