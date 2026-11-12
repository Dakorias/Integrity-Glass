import { useEffect, useRef, type FormEvent, type MouseEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { business } from './data'

type QuickQuote = { vehicle: string; service: string; zip: string }

function isQuickQuoteState(value: unknown): value is { quickQuote: QuickQuote } {
  if (!value || typeof value !== 'object' || !('quickQuote' in value)) return false
  const quote = value.quickQuote
  return Boolean(quote && typeof quote === 'object'
    && 'vehicle' in quote && typeof quote.vehicle === 'string'
    && 'service' in quote && typeof quote.service === 'string'
    && 'zip' in quote && typeof quote.zip === 'string')
}

function updateFaqResults(root: HTMLElement) {
  const search = root.querySelector<HTMLInputElement>('[data-faq-search]')?.value.trim().toLowerCase() ?? ''
  const category = root.querySelector<HTMLButtonElement>('[data-faq-filter][aria-pressed="true"]')?.dataset.faqFilter ?? 'all'
  const questions = [...root.querySelectorAll<HTMLDetailsElement>('[data-faq-category]')]
  let visibleCount = 0
  for (const question of questions) {
    const matchesCategory = category === 'all' || question.dataset.faqCategory === category
    const matchesSearch = !search || question.textContent?.toLowerCase().includes(search)
    question.hidden = !matchesCategory || !matchesSearch
    if (!question.hidden) visibleCount += 1
  }
  const status = root.querySelector<HTMLElement>('[data-faq-status]')
  const empty = root.querySelector<HTMLElement>('[data-faq-empty]')
  if (status) status.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'question' : 'questions'}.`
  if (empty) empty.hidden = visibleCount > 0
}

function setQuoteStep(form: HTMLFormElement, step: number) {
  for (const fieldset of form.querySelectorAll<HTMLFieldSetElement>('[data-quote-step]')) {
    fieldset.hidden = Number(fieldset.dataset.quoteStep) !== step
  }
  for (const item of form.querySelectorAll<HTMLElement>('[data-quote-progress]')) {
    if (Number(item.dataset.quoteProgress) === step) item.setAttribute('aria-current', 'step')
    else item.removeAttribute('aria-current')
  }
  const status = form.querySelector<HTMLElement>('[data-quote-step-status]')
  if (status) status.textContent = step === 1 ? 'Step 1 of 2: your contact details' : 'Step 2 of 2: vehicle and damage details'
  form.querySelector<HTMLLegendElement>(`[data-quote-step="${step}"] legend`)?.focus()
}

export default function HtmlPage({ html }: { html: string }) {
  const navigate = useNavigate()
  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = contentRef.current
    if (!root) return
    const reviews = contentRef.current?.querySelector<HTMLElement>('[data-google-reviews]')
    const link = reviews?.querySelector<HTMLAnchorElement>('[data-google-review-link]')
    if (reviews && link && business.googleReviewUrl) {
      link.href = business.googleReviewUrl
      reviews.hidden = false
    }

    updateFaqResults(root)

    if (html.includes('data-quote-form') && isQuickQuoteState(location.state)) {
      const form = root.querySelector<HTMLFormElement>('[data-quote-form]')
      for (const name of ['vehicle', 'service', 'zip'] as const) {
        const field = form?.elements.namedItem(name)
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
          field.value = location.state.quickQuote[name]
        }
      }
    }
  }, [html, location.state])

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    if (!(event.target instanceof Element)) return

    const filter = event.target.closest<HTMLButtonElement>('[data-faq-filter]')
    if (filter) {
      const root = contentRef.current
      if (!root) return
      for (const button of root.querySelectorAll<HTMLButtonElement>('[data-faq-filter]')) {
        button.setAttribute('aria-pressed', String(button === filter))
      }
      updateFaqResults(root)
      return
    }

    const stepButton = event.target.closest<HTMLButtonElement>('[data-quote-next], [data-quote-back]')
    if (stepButton) {
      const form = stepButton.closest<HTMLFormElement>('[data-quote-form]')
      if (!form) return
      const currentStep = stepButton.hasAttribute('data-quote-next') ? 1 : 2
      if (currentStep === 1) {
        const currentFieldset = form.querySelector<HTMLFieldSetElement>('[data-quote-step="1"]')
        const invalidField = currentFieldset?.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(':invalid')
        if (invalidField) {
          invalidField.focus()
          invalidField.reportValidity()
          return
        }
      }
      setQuoteStep(form, currentStep === 1 ? 2 : 1)
      return
    }

    const reset = event.target.closest('[data-quote-reset]')
    if (reset) {
      const panel = reset.closest('.quote-panel')
      const form = panel?.querySelector<HTMLFormElement>('[data-quote-form]')
      const success = panel?.querySelector<HTMLElement>('[data-quote-success]')
      if (form && success) {
        form.hidden = false
        success.hidden = true
        setQuoteStep(form, 1)
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
    if (!(form instanceof HTMLFormElement)) return

    if (form.hasAttribute('data-quick-quote')) {
      event.preventDefault()
      const formData = new FormData(form)
      navigate('/contact', {
        state: {
          quickQuote: {
            vehicle: String(formData.get('vehicle') ?? ''),
            service: String(formData.get('service') ?? ''),
            zip: String(formData.get('zip') ?? ''),
          },
        },
      })
      return
    }

    if (!form.hasAttribute('data-quote-form')) return
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
      `Trim: ${getValue('trim')}`,
      `ZIP code: ${getValue('zip')}`,
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

  function handleInput(event: FormEvent<HTMLDivElement>) {
    if (event.target instanceof HTMLInputElement && event.target.matches('[data-faq-search]') && contentRef.current) {
      updateFaqResults(contentRef.current)
    }
  }

  return <div ref={contentRef} onClick={handleClick} onInput={handleInput} onSubmit={handleSubmit} dangerouslySetInnerHTML={{ __html: html }} />
}
