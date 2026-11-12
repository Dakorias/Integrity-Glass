import { useEffect, useRef, type FormEvent, type MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { business } from './data'

export default function HtmlPage({ html }: { html: string }) {
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reviews = contentRef.current?.querySelector<HTMLElement>('[data-google-reviews]')
    const link = reviews?.querySelector<HTMLAnchorElement>('[data-google-review-link]')
    if (reviews && link && business.googleReviewUrl) {
      link.href = business.googleReviewUrl
      reviews.hidden = false
    }
  }, [html])

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return

    const reset = event.target.closest('[data-quote-reset]')
    if (reset) {
      const panel = reset.closest('.quote-panel')
      const form = panel?.querySelector<HTMLFormElement>('[data-quote-form]')
      const success = panel?.querySelector<HTMLElement>('[data-quote-success]')
      if (form && success) {
        form.hidden = false
        success.hidden = true
      }
      return
    }

    const link = event.target.closest('a')
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return
    const destination = new URL(link.href, window.location.href)
    if (destination.origin !== window.location.origin || destination.hash) return
    event.preventDefault()
    navigate(`${destination.pathname}${destination.search}`)
  }

  function handleSubmit(event: FormEvent<HTMLDivElement>) {
    const form = event.target
    if (!(form instanceof HTMLFormElement) || !form.hasAttribute('data-quote-form')) return
    event.preventDefault()
    const formData = new FormData(form)
    const submittedAt = new Date()
    const timestamp = submittedAt.toISOString().replace(/\D/g, '').slice(0, 12)
    const quoteId = `IG-${timestamp}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
    const getValue = (name: string) => String(formData.get(name) ?? '').trim() || 'Not provided'
    const name = getValue('name')
    const vehicle = getValue('vehicle')
    const subject = `[Quote Request] ${quoteId} | ${name} | ${vehicle}`
    const body = [
      'INTEGRITY GLASS QUOTE REQUEST',
      '================================',
      `Quote ID: ${quoteId}`,
      `Received: ${submittedAt.toLocaleString()}`,
      '',
      'CUSTOMER',
      '--------',
      `Name: ${name}`,
      `Phone: ${getValue('phone')}`,
      `Email: ${getValue('email')}`,
      '',
      'SERVICE DETAILS',
      '---------------',
      `Vehicle: ${vehicle}`,
      `Service requested: ${getValue('service')}`,
      `What happened: ${getValue('message')}`,
      '',
      'FOLLOW-UP CHECKLIST',
      '-------------------',
      '[ ] Confirm vehicle fitment and glass availability',
      '[ ] Confirm pricing and appointment timing',
      '[ ] Confirm calibration or other vehicle-specific requirements',
    ].join('\n')
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    const success = form.parentElement?.querySelector<HTMLElement>('[data-quote-success]')
    if (success) {
      form.reset()
      form.hidden = true
      success.hidden = false
    }
  }

  return <div ref={contentRef} onClick={handleClick} onSubmit={handleSubmit} dangerouslySetInnerHTML={{ __html: html }} />
}
