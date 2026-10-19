import { useState } from 'react'
import { ArrowRight, Menu, ShieldCheck, X } from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { business } from './data'

const navigation = [
  { to: '/services', label: 'Services' },
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
        <span>Certified auto glass technicians</span>
        <span className="topline-right"><ShieldCheck size={15} aria-hidden="true" /> Lifetime warranty advertised*</span>
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Integrity Glass home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span>IG</span></span>
          <span className="brand-name">INTEGRITY <b>GLASS</b></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
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
          <Link className="brand footer-brand" to="/">
            <span className="brand-mark" aria-hidden="true"><span>IG</span></span>
            <span className="brand-name">INTEGRITY <b>GLASS</b></span>
          </Link>
          <p>Where a handshake still means something.</p>
          <a href={business.phoneLink}>{business.phone}</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Integrity Glass</span>
          <span>*Pricing, service area, availability, and warranty terms must be confirmed with the business.</span>
          <Link to="/">Back to home ↑</Link>
        </div>
      </footer>
      <a className="mobile-call" href={business.phoneLink}><span>Call Integrity Glass</span><ArrowRight size={17} aria-hidden="true" /></a>
    </>
  )
}
