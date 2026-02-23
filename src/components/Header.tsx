import { Link, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { serviceAreas } from '../data/serviceAreas'
import { services } from '../data/services'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLElement | null>(null)

  const closeOpenMenus = useCallback(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setAreasOpen(false)

    const activeElement = document.activeElement
    if (activeElement instanceof HTMLElement) {
      activeElement.blur()
    }
  }, [])

  const handleNavLinkClick = () => {
    closeOpenMenus()
  }

  const isDesktopNav = () => window.matchMedia('(min-width: 901px)').matches

  const handleServicesMouseEnter = () => {
    if (isDesktopNav()) {
      setServicesOpen(true)
    }
  }

  const handleServicesMouseLeave = () => {
    if (isDesktopNav()) {
      setServicesOpen(false)
    }
  }

  const handleAreasMouseEnter = () => {
    if (isDesktopNav()) {
      setAreasOpen(true)
    }
  }

  const handleAreasMouseLeave = () => {
    if (isDesktopNav()) {
      setAreasOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      setServicesOpen(false)
      setAreasOpen(false)
    }
  }, [menuOpen])

  useEffect(() => {
    closeOpenMenus()
  }, [location.pathname, closeOpenMenus])

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const navElement = navRef.current
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ]

    const getFocusable = () =>
      Array.from(navElement?.querySelectorAll<HTMLElement>(focusableSelectors.join(',')) ?? [])

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeOpenMenus()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = getFocusable()
      if (!focusable.length) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey && activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const focusable = getFocusable()
    focusable[0]?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, closeOpenMenus])

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : 'is-top'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="/Images/brads-plumbing-logo.png"
              alt="McKay’s Plumbing and Gasfitting"
              className="logo-image"
            />
          </Link>
          
          {/* CTA Buttons */}
          <nav ref={navRef} className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            <div className="mobile-nav-header">
              <button
                className="mobile-nav-close"
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span />
                <span />
              </button>
            </div>
            <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
              HOME
            </Link>
            <div
              className={`nav-item nav-item-dropdown ${servicesOpen ? 'is-open' : ''}`}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="nav-link nav-link-button"
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                SERVICES
                <svg viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="services-dropdown" aria-label="Services submenu">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="services-dropdown-link"
                    onClick={handleNavLinkClick}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div
              className={`nav-item nav-item-dropdown ${areasOpen ? 'is-open' : ''}`}
              onMouseEnter={handleAreasMouseEnter}
              onMouseLeave={handleAreasMouseLeave}
            >
              <button
                className="nav-link nav-link-button"
                type="button"
                aria-haspopup="true"
                aria-expanded={areasOpen}
                onClick={() => setAreasOpen((open) => !open)}
              >
                SERVICE AREAS
                <svg viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="services-dropdown" aria-label="Service areas submenu">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/service-areas/${area.slug}`}
                    className="services-dropdown-link"
                    onClick={handleNavLinkClick}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/blog" className="nav-link" onClick={handleNavLinkClick}>
              BLOG
            </Link>

            <div className="mobile-nav-cta">
              <Link className="mobile-nav-cta-primary" to="/get-quote" onClick={handleNavLinkClick}>
                GET FREE QUOTE
              </Link>
              <a className="mobile-nav-cta-secondary" href="tel:0438792102" onClick={handleNavLinkClick}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                0438 792 102
              </a>
            </div>
          </nav>

          <div className="header-actions header-actions-desktop">
            <Link className="btn-quote" to="/get-quote">
              GET FREE QUOTE
            </Link>
            <a className="btn-phone" href="tel:0438792102" aria-label="Call 0438 792 102">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              0438 792 102
            </a>
          </div>

          <div className="header-actions-mobile-group">
            <a
              href="tel:0438792102"
              className="btn-call-mobile"
              aria-label="Call 0438 792 102"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Call Now</span>
            </a>

            <button
              className="nav-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
