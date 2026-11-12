import { useState } from 'react'
import { ArrowRight, Mail, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { business } from './data'

const navigation = [
  { to: '/services', label: 'Services' },
  { to: '/adas-calibration', label: 'ADAS' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/promise', label: 'Our promise' },
  { to: '/faq', label: 'FAQ' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topline">
        <a href={business.phoneLink}><Phone size={16} aria-hidden="true" />{business.phone}</a>
        <a href={`mailto:${business.email}`}><Mail size={16} aria-hidden="true" />{business.email}</a>
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Integrity Glass home" onClick={closeMenu}>
          <img className="brand-logo" src="/IntegrityGlass_Header.webp" width="1510" height="390" alt="Integrity Glass" />
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav id="main-navigation" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : undefined}>
              {item.label}
            </NavLink>
          ))}
          <NavLink className="nav-quote" to="/contact" onClick={closeMenu}>Request a quote <ArrowRight size={15} aria-hidden="true" /></NavLink>
        </nav>
      </header>

      <main id="main"><Outlet /></main>

      <footer className="site-footer">
        <div className="footer-main">
          <Link className="footer-wordmark" to="/">Integrity <b>Glass</b></Link>
          <p>Where a handshake still means something.</p>
          <a href={business.phoneLink}>{business.phone}</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Integrity Glass</span>
          <span>*Pricing, exact ZIP-code coverage, availability, and warranty terms must be confirmed with the business.</span>
          <Link to="/">Back to home ↑</Link>
        </div>
      </footer>
      <a className="mobile-call" href={business.phoneLink}><span>Call Integrity Glass</span><ArrowRight size={17} aria-hidden="true" /></a>
    </>
  )
}
