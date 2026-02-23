import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServiceAreaPage from './pages/ServiceAreaPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import QuotePage from './pages/QuotePage'

function App() {
  const location = useLocation()
  const hideChrome = location.pathname === '/get-quote'

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.scrollTo(0, 0)
  }, [location.key])

  return (
    <div className="app">
      {!hideChrome && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/service-areas/:areaSlug" element={<ServiceAreaPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/get-quote" element={<QuotePage />} />
        </Routes>
      </main>
      {!hideChrome && <Footer />}
    </div>
  )
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
)

export default AppWithRouter
