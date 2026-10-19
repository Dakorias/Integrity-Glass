import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import { ContactPage, FAQPage, HomePage, NotFoundPage, PricingPage, PromisePage, ServicesPage } from './Pages'
import { business, pageMetadata } from './data'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const metadata = pageMetadata[pathname as keyof typeof pageMetadata]
    const title = metadata?.title ?? 'Page Not Found | Integrity Glass'
    const description = metadata?.description ?? 'Integrity Glass provides auto glass repair, replacement, calibration, and specialty glass services.'
    const canonicalUrl = `${business.website}${pathname}`

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', metadata?.keywords ?? 'Integrity Glass, auto glass repair')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
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
