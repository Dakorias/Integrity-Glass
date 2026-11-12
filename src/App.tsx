import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout'
import HtmlPage from './HtmlPage'
import home from './pages/home.html?raw'
import services from './pages/services.html?raw'
import pricing from './pages/pricing.html?raw'
import promise from './pages/promise.html?raw'
import faq from './pages/faq.html?raw'
import contact from './pages/contact.html?raw'
import adasCalibration from './pages/adas-calibration.html?raw'
import notFound from './pages/not-found.html?raw'
import { business, pageMetadata } from './data'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const normalizedPath = pathname.replace(/\/+$/, '') || '/'
    const metadata = pageMetadata[normalizedPath as keyof typeof pageMetadata]
    const title = metadata?.title ?? 'Page Not Found | Integrity Glass'
    const description = metadata?.description ?? 'Integrity Glass provides auto glass repair, replacement, calibration, and specialty glass services.'
    const canonicalUrl = `${business.website}${normalizedPath}`

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
          <Route index element={<HtmlPage html={home} />} />
          <Route path="services" element={<HtmlPage html={services} />} />
          <Route path="pricing" element={<HtmlPage html={pricing} />} />
          <Route path="promise" element={<HtmlPage html={promise} />} />
          <Route path="faq" element={<HtmlPage html={faq} />} />
          <Route path="contact" element={<HtmlPage html={contact} />} />
          <Route path="adas-calibration" element={<HtmlPage html={adasCalibration} />} />
          <Route path="*" element={<HtmlPage html={notFound} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
