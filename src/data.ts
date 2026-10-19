import { ShieldCheck, Sparkles, Wrench, type LucideIcon } from 'lucide-react'

export const business = {
  phone: '478-244-9596',
  phoneLink: 'tel:+14782449596',
  email: 'Integrityglass.26@gmail.com',
  serviceArea: 'Middle Georgia area (sample; confirm coverage)',
}

export type Service = {
  number: string
  icon: LucideIcon
  title: string
  summary: string
  note: string
  detail: string
  considerations: string[]
}

export const services: Service[] = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Windshield repair',
    summary: 'Small chips and short cracks repaired before they spread, when the damage is a good candidate.',
    note: 'Fast, focused repair',
    detail: 'A repair may restore strength and improve the appearance of minor windshield damage without replacing the whole glass. The technician checks the size, type, location, and age of the damage first.',
    considerations: ['Impact size and number', 'Distance from the glass edge', 'Whether the damage is in the driver’s direct sightline'],
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Windshield replacement',
    summary: 'A careful replacement with glass selected for your vehicle and its equipment.',
    note: 'Vehicle-specific glass',
    detail: 'When damage cannot be safely repaired, replacement restores the windshield opening. Glass options, moldings, and any camera or sensor calibration needs are confirmed for the vehicle before booking.',
    considerations: ['Year, make, model, and trim', 'Rain sensors, cameras, and driver-assistance features', 'Glass availability and any required calibration'],
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Side & rear glass',
    summary: 'Help with broken door, quarter, and back glass, with cleanup discussed for your vehicle.',
    note: 'Most makes and models',
    detail: 'Side and rear glass often need replacement rather than repair. Share which window is damaged and whether the vehicle is secure so the right part and service plan can be identified.',
    considerations: ['Which panel is broken', 'Tint, defrost, and antenna features', 'Safe temporary covering and cleanup needs'],
  },
]

export const priceExamples = [
  { service: 'Single chip repair', range: '$79–$129', detail: 'Per chip; size, location, and repairability matter' },
  { service: 'Windshield replacement', range: '$275–$650+', detail: 'Vehicle, glass specification, and calibration affect price' },
  { service: 'Side or rear glass', range: '$225–$700+', detail: 'Panel, trim, tint, and availability affect price' },
]

export const faqs = [
  {
    question: 'Can every chip or crack be repaired?',
    answer: 'No. Size, type, location, and how long the damage has been exposed all matter. Damage near the edge or in the driver’s direct sightline may need replacement. A technician can review the details and explain the options.',
  },
  {
    question: 'How do I know if I need repair or replacement?',
    answer: 'A technician assesses the damage and the vehicle’s glass requirements. Share clear photos, your vehicle year/make/model, and where the damage sits on the glass to help start that conversation.',
  },
  {
    question: 'Do you offer mobile appointments?',
    answer: 'Mobile availability depends on the address, vehicle, weather, and work required. Include your ZIP code with a quote request so current coverage can be confirmed.',
  },
  {
    question: 'What is the service area?',
    answer: 'Middle Georgia is shown as a sample service area on this site. Confirm your exact ZIP code and availability with Integrity Glass before scheduling.',
  },
  {
    question: 'Will my vehicle need camera calibration?',
    answer: 'Some vehicles require driver-assistance camera or sensor calibration after windshield replacement. Provide the exact year, make, model, and trim so the technician can confirm what applies.',
  },
  {
    question: 'What does the lifetime warranty cover?',
    answer: 'The business card advertises a lifetime warranty. Ask for the current written terms, including what is covered, exclusions, and how to request warranty service.',
  },
  {
    question: 'Can I use insurance?',
    answer: 'Coverage and deductibles vary by policy. Contact your insurer to confirm benefits and claim requirements; Integrity Glass can discuss the information needed for a quote.',
  },
  {
    question: 'How do I get an accurate price?',
    answer: 'Send the vehicle year, make, model, trim, damaged glass location, ZIP code, and any sensor or camera details you know. The listed ranges are examples only and are not a confirmed quote.',
  },
]
