import { useState, type FormEvent } from 'react'
import { ArrowDownRight, ArrowRight, Check, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, faqs, priceExamples, services } from './data'

function PageIntro({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description: string }) {
  return (
    <section className="page-intro">
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h1>{title}<br /><em>{accent}</em></h1>
      <p>{description}</p>
    </section>
  )
}

function Callout({ title, text, link = '/contact', label = 'Request a quote' }: { title: string; text: string; link?: string; label?: string }) {
  return (
    <section className="page-callout">
      <div><p className="eyebrow">Integrity Glass</p><h2>{title}</h2><p>{text}</p></div>
      <Link className="button button-blue" to={link}>{label}<ArrowRight size={17} aria-hidden="true" /></Link>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <section className="hero home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Auto glass repair & replacement</p>
          <h1 id="home-title">A clear view.<br /><em>A good hand.</em></h1>
          <p className="hero-lede">Glass work done with care, straight answers, and the kind of follow-through you can count on.</p>
          <div className="hero-actions">
            <a className="button button-blue" href={business.phoneLink}>Call {business.phone}<ArrowRight size={17} aria-hidden="true" /></a>
            <Link className="text-link" to="/services">Explore services<ArrowDownRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-icon"><ShieldCheck size={23} aria-hidden="true" /></div>
            <p><strong>Lifetime warranty advertised*</strong><span>Ask for the written terms before booking.</span></p>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Modern vehicle ready for auto glass service">
          <div className="image-caption"><span>INTEGRITY IN EVERY DETAIL</span><span>01 / 03</span></div>
          <div className="image-stamp"><span>IG</span><small>EST.<br />WITH CARE</small></div>
        </div>
        <div className="hero-bottom"><span>Where a handshake still means something.</span><Link to="/pricing">See sample pricing <ArrowDownRight size={15} aria-hidden="true" /></Link></div>
      </section>

      <section className="service-strip" aria-label="Service highlights">
        <div><span className="strip-number">01</span><span>Auto glass repair</span></div>
        <div><span className="strip-number">02</span><span>Replacement & calibration</span></div>
        <div><span className="strip-number">03</span><span>Mobile appointments*</span></div>
        <div className="strip-area"><MapPin size={17} aria-hidden="true" /><span>Middle Georgia area*</span></div>
      </section>

      <section className="section home-services">
        <div className="section-heading">
          <div><p className="eyebrow">What we work on</p><h2>Good work.<br /><em>Clear choices.</em></h2></div>
          <div><p>From a small chip to a full replacement, get clear options for your glass and your vehicle.</p><Link className="text-link" to="/services">View all services<ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, summary, note }) => (
            <article className="service-item" key={number}>
              <div className="service-top"><span>{number}</span><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{summary}</p><span className="service-note"><Check size={14} aria-hidden="true" />{note}</span>
            </article>
          ))}
        </div>
        <Link className="text-link home-service-link" to="/services">Learn about each service<ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="home-promise">
        <div className="home-promise-copy"><p className="eyebrow">The Integrity promise</p><h2>Where a handshake <em>still means something.</em></h2><p>Know what’s being repaired, what it costs, and what to expect before work begins. That’s how good service should feel.</p><Link className="text-link" to="/promise">What you can expect<ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className="home-promise-image" role="img" aria-label="Careful automotive service work"><span>THE DIFFERENCE IS IN THE DETAILS</span></div>
      </section>

      <section className="steps-section home-steps">
        <div className="section-heading steps-heading"><div><p className="eyebrow">Simple from the first call</p><h2>Three steps to <em>clear.</em></h2></div><p>Tell us what happened. We’ll take it from there, one straightforward step at a time.</p></div>
        <div className="steps-grid">
          <article><span>01</span><h3>Tell us about it</h3><p>Share your vehicle, glass damage, and ZIP code.</p></article>
          <article><span>02</span><h3>Get a clear quote</h3><p>We’ll confirm options, price, glass availability, and timing.</p></article>
          <article><span>03</span><h3>Choose a time</h3><p>Book service once you understand the plan and terms.</p></article>
        </div>
      </section>
      <Callout title="Start with a clear answer." text="Tell us what you drive and what happened. We’ll help you understand the next step." />
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Auto glass services" title="The right fix." accent="Done with care." description="Understand your repair and replacement options. Service recommendations depend on the damage, the vehicle, and the glass specifications." />
      <section className="detail-service-list" aria-label="Service details">
        {services.map(({ number, icon: Icon, title, detail, considerations, note }) => (
          <article className="detail-service" key={number}>
            <div className="detail-service-icon"><span>{number}</span><Icon size={27} aria-hidden="true" /></div>
            <div className="detail-service-copy"><p className="eyebrow">Service {number}</p><h2>{title}</h2><p>{detail}</p><h3>What we’ll check</h3><ul>{considerations.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul><span className="service-note"><Check size={14} aria-hidden="true" />{note}</span></div>
          </article>
        ))}
      </section>
      <section className="service-process">
        <div><p className="eyebrow">Safety comes first</p><h2>Glass is part of your vehicle’s <em>safety system.</em></h2></div>
        <div><p>Windshields help support the vehicle structure and may house cameras and sensors. If replacement is needed, confirm whether your vehicle requires calibration and how that is handled before scheduling.</p><p>For a useful first assessment, share the year, make, model, trim, damage location, and a clear photo if available.</p></div>
      </section>
      <Callout title="Not sure which service fits?" text="Describe the damage and your vehicle. We’ll help identify what information is needed for an accurate quote." />
    </>
  )
}

export function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Pricing & estimates" title="Clear pricing." accent="No guesswork." description="Use these sample ranges as a conversation starter. Final pricing is based on your exact vehicle, glass, availability, and work required." />
      <section className="pricing-page-section">
        <div className="pricing-page-heading"><div><p className="eyebrow">Illustrative examples only</p><h2>Typical starting ranges</h2></div><p>Replace all sample figures with current business pricing before publishing or quoting a job.</p></div>
        <div className="price-list pricing-page-list">
          {priceExamples.map((item, index) => <div className="price-row" key={item.service}><span className="price-index">0{index + 1}</span><div className="price-detail"><h3>{item.service}</h3><p>{item.detail}</p></div><strong>{item.range}</strong></div>)}
          <p className="price-disclaimer">Sample ranges only; not a quote or guaranteed price. A technician must confirm vehicle fitment, glass type, parts availability, labor, and any required ADAS calibration.</p>
        </div>
      </section>
      <section className="price-factors">
        <div><p className="eyebrow">What changes the price</p><h2>It depends on <em>your vehicle.</em></h2><p>Two vehicles that look alike can use different glass. These details help narrow down the right part and service.</p></div>
        <div className="factor-list">
          <article><span>01</span><div><h3>Vehicle details</h3><p>Year, make, model, trim, and optional packages.</p></div></article>
          <article><span>02</span><div><h3>Glass features</h3><p>Acoustic tint, heating, rain sensors, cameras, and other integrated equipment.</p></div></article>
          <article><span>03</span><div><h3>Damage & availability</h3><p>Which panel is damaged, whether repair is suitable, and current part availability.</p></div></article>
          <article><span>04</span><div><h3>Calibration & access</h3><p>Any required calibration and whether mobile service is available at your location.</p></div></article>
        </div>
      </section>
      <section className="estimate-steps"><h2>For a more accurate estimate, send:</h2><ul><li>Your vehicle year, make, model, and trim</li><li>Which glass is damaged and where</li><li>Your ZIP code and preferred timing</li><li>A photo and sensor or camera details, if known</li></ul></section>
      <Callout title="Get a vehicle-specific quote." text="Pricing and availability are confirmed individually. Call or send the details for your vehicle." />
    </>
  )
}

export function PromisePage() {
  return (
    <>
      <PageIntro eyebrow="The Integrity promise" title="Where a handshake" accent="still means something." description="The card says Integrity Glass. The promise behind the name is straightforward: honest communication, careful work, and clear expectations." />
      <section className="promise-story">
        <div className="promise-story-image" role="img" aria-label="Technician carefully working on a vehicle"><span>THE DIFFERENCE IS IN THE DETAILS</span></div>
        <div className="promise-story-copy"><p className="eyebrow">A good job is more than the glass</p><h2>Respect your vehicle.<br /><em>Respect your time.</em></h2><p>Auto glass work affects visibility, comfort, and on some vehicles, safety systems. Customers deserve to know what the work involves before handing over the keys.</p><p>Ask questions, review the written estimate, and confirm the warranty and service details for your specific job.</p></div>
      </section>
      <section className="promise-commitments">
        <div><p className="eyebrow">What to expect</p><h2>Principles we work by</h2></div>
        <div className="commitment-list">
          <article><span>01</span><div><h3>Explain the options</h3><p>Understand whether repair or replacement is appropriate and why.</p></div></article>
          <article><span>02</span><div><h3>Confirm before work</h3><p>Review the price, parts, timing, and any calibration requirements ahead of the appointment.</p></div></article>
          <article><span>03</span><div><h3>Handle the vehicle carefully</h3><p>Know how the work area and interior will be protected and what cleanup is included.</p></div></article>
          <article><span>04</span><div><h3>Stand behind the work</h3><p>The business card advertises a lifetime warranty. Request the current written terms and keep them with your service records.</p></div></article>
        </div>
      </section>
      <section className="warranty-note"><ShieldCheck size={28} aria-hidden="true"/><div><h2>Ask about warranty coverage.</h2><p>Coverage, exclusions, and claim steps should be provided in writing for your specific service.</p></div><Link className="text-link" to="/faq">Warranty questions<ArrowRight size={16} aria-hidden="true" /></Link></section>
      <Callout title="A good conversation comes first." text="Talk through the damage, the options, and the written terms before booking." />
    </>
  )
}

export function FAQPage() {
  return (
    <>
      <PageIntro eyebrow="Frequently asked questions" title="The details," accent="made clear." description="Answers to common questions about auto glass service. Your vehicle and current business terms determine what applies to your appointment." />
      <section className="faq-page-section">
        <div className="faq-page-aside"><p className="eyebrow">Before you book</p><h2>Good questions make for <em>clear decisions.</em></h2><p>For vehicle-specific guidance, share the year, make, model, trim, damage location, and ZIP code.</p><a className="text-link" href={business.phoneLink}>Call {business.phone}<ArrowRight size={16} aria-hidden="true" /></a></div>
        <div className="faq-list faq-page-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>
      <Callout title="Still have a question?" text="Call or send a request with your vehicle details and we’ll help you find the next step." />
    </>
  )
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <PageIntro eyebrow="Contact Integrity Glass" title="Tell us what" accent="happened." description="Share a few details about your vehicle and the damage. This sample form confirms locally in your browser and does not send or store your information." />
      <section className="contact-section contact-page-section">
        <div className="contact-info">
          <p className="eyebrow">Start with the details</p><h2>Let’s get you <em>back to clear.</em></h2><p>Call or email directly, or use the sample form to organize the details for your request.</p>
          <a className="contact-method" href={business.phoneLink}><span className="contact-icon"><ArrowRight size={19} aria-hidden="true" /></span><span><small>Call us directly</small><strong>{business.phone}</strong></span><ArrowRight size={17} aria-hidden="true" /></a>
          <a className="contact-method" href={`mailto:${business.email}`}><span className="contact-icon"><MapPin size={19} aria-hidden="true" /></span><span><small>Email</small><strong>{business.email}</strong></span><ArrowRight size={17} aria-hidden="true" /></a>
          <p className="service-area-note">{business.serviceArea}. Confirm the exact service area and appointment availability before booking.</p>
        </div>
        <div className="quote-panel">
          {submitted ? <div className="success-state" role="status" aria-live="polite"><div className="success-icon"><Check size={24} aria-hidden="true" /></div><h3>Request noted.</h3><p>This demo form doesn’t send data yet. Call or email Integrity Glass directly to arrange service.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Start another request<ArrowRight size={16} aria-hidden="true" /></button></div> : (
            <form onSubmit={handleSubmit}>
              <h3>Request a quote</h3><p>Fields marked with <span aria-hidden="true">*</span> are required.</p>
              <div className="form-row"><label>Your name *<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Phone *<input name="phone" type="tel" autoComplete="tel" required placeholder="(555) 555-5555" /></label></div>
              <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
              <div className="form-row"><label>Vehicle<input name="vehicle" placeholder="Year, make & model" /></label><label>Service needed<select name="service" defaultValue=""><option value="" disabled>Select one</option><option>Chip repair</option><option>Windshield replacement</option><option>Side or rear glass</option><option>Not sure yet</option></select></label></div>
              <label>What happened?<textarea name="message" rows={3} placeholder="Describe the damage and your ZIP code" /></label>
              <button className="button button-blue form-submit" type="submit">Review my request<ArrowRight size={17} aria-hidden="true" /></button><small className="form-note">Demo only: this form does not transmit or store your information.</small>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export function NotFoundPage() {
  return <section className="not-found"><p className="eyebrow">Page not found</p><h1>Let’s get you <em>back on the road.</em></h1><Link className="button button-blue" to="/">Return home<ArrowRight size={17} aria-hidden="true" /></Link></section>
}
