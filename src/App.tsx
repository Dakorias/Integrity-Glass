import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import { ContactPage, FAQPage, HomePage, NotFoundPage, PricingPage, PromisePage, ServicesPage } from './Pages'

const pageTitles: Record<string, string> = {
  '/': 'Integrity Glass | Auto Glass Repair & Replacement',
  '/services': 'Auto Glass Services | Integrity Glass',
  '/pricing': 'Sample Pricing | Integrity Glass',
  '/promise': 'Our Promise | Integrity Glass',
  '/faq': 'Auto Glass FAQs | Integrity Glass',
  '/contact': 'Request a Quote | Integrity Glass',
}

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitles[pathname] ?? 'Integrity Glass'
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="promise" element={<PromisePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
