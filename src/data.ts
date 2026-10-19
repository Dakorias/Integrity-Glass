import { ScanLine, Sparkles, Truck, Wrench, type LucideIcon } from 'lucide-react'

export const business = {
  phone: '478-244-9596',
  phoneLink: 'tel:+14782449596',
  email: 'Integrityglass.26@gmail.com',
  serviceArea: 'Middle Georgia area (sample; confirm coverage)',
  website: 'https://integrityglassservices.com',
  googleReviewUrl: '',
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
    title: 'Windshield repair & replacement',
    summary: 'Windshield repair when suitable, or replacement when damage or vehicle requirements call for it.',
    note: 'Repair or replacement options',
    detail: 'We assess windshield damage and vehicle requirements to help determine whether repair or replacement is appropriate. Replacement glass and installation requirements can vary by year, make, model, and trim.',
    considerations: ['Damage size, type, and location', 'Vehicle-specific glass and installation information', 'Camera or sensor calibration needs after replacement'],
  },
  {
    number: '02',
    icon: ScanLine,
    title: 'ADAS calibration',
    summary: 'Calibration support for vehicles whose cameras or driver-assistance sensors are affected by glass service.',
    note: 'Vehicle-specific requirements',
    detail: 'Some vehicles require camera or sensor calibration after windshield replacement or related work. Requirements vary, so the vehicle information and manufacturer procedures need to be checked for each job.',
    considerations: ['Year, make, model, trim, and installed systems', 'Manufacturer calibration procedures', 'Required post-calibration documentation'],
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Rock-chip repair',
    summary: 'Targeted repair for eligible stone chips before damage grows or spreads.',
    note: 'Damage assessment first',
    detail: 'A rock-chip repair fills and stabilizes eligible impact damage. Results depend on the chip type, size, age, cleanliness, and position; repair may remain visible and cannot be guaranteed to make glass look new.',
    considerations: ['Chip type, size, age, and cleanliness', 'Location relative to the edge and driver view', 'Whether the damage has begun to spread'],
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Custom-cut glass',
    summary: 'Custom glass solutions for applications that need a measured, made-to-fit pane.',
    note: 'Confirm material and fitment',
    detail: 'Custom-cut glass starts with the opening, intended application, glass type, thickness, edge details, and any safety or regulatory requirements. Confirm feasibility and specifications before ordering.',
    considerations: ['Exact measurements and template', 'Application, material, thickness, and edge finish', 'Applicable safety-glazing requirements'],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Heavy equipment installation',
    summary: 'Glass installation for select heavy equipment and work vehicles.',
    note: 'Equipment details required',
    detail: 'Equipment glass can differ by machine, cab, model year, and operating environment. Provide the equipment make, model, serial details if available, and glass location to confirm parts and installation options.',
    considerations: ['Equipment make, model, and serial information', 'Cab opening, curves, seals, and mounting method', 'Site access, equipment condition, and scheduling'],
  },
  {
    number: '06',
    icon: Wrench,
    title: 'Side & rear glass',
    summary: 'Replacement help for damaged door, quarter, and back glass.',
    note: 'Vehicle-specific fitment',
    detail: 'Side and rear glass often need replacement rather than repair. Share which panel is damaged and whether the vehicle is secure so the correct part and service plan can be identified.',
    considerations: ['Which panel is damaged', 'Tint, defrost, antenna, and trim features', 'Safe temporary covering and cleanup needs'],
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
  {
    question: 'Can you calibrate ADAS after windshield replacement?',
    answer: 'ADAS calibration is available for applicable service needs. Whether a vehicle requires static, dynamic, or another manufacturer-specified procedure depends on the vehicle. Confirm the required procedure and documentation when requesting an estimate.',
  },
  {
    question: 'Do you repair rock chips?',
    answer: 'Rock-chip repair is available when the damage is a suitable candidate. Chip size, location, type, and condition affect eligibility, and some repair marks can remain visible.',
  },
  {
    question: 'Do you install custom-cut glass or heavy equipment glass?',
    answer: 'Custom-cut glass and heavy equipment installations are listed services. Feasibility depends on measurements, application, equipment details, glass specifications, and applicable safety requirements; contact the shop to confirm.',
  },
  {
    question: 'Is Integrity Glass AGSC certified or registered?',
    answer: 'AGSC technician certification, registered-company status, and independent validation are separate programs. Ask Integrity Glass to confirm its current participation and technician credentials before booking. This website does not claim an unverified AGSC membership or certification.',
  },
]

export const pageMetadata = {
  '/': {
    title: 'Integrity Glass | Auto Glass Repair & ADAS Calibration',
    description: 'Integrity Glass offers windshield repair and replacement, rock-chip repair, ADAS calibration, custom-cut glass, and heavy equipment glass installation. Call 478-244-9596.',
    keywords: 'Integrity Glass, auto glass repair, windshield repair, windshield replacement, rock chip repair, ADAS calibration, custom cut glass, heavy equipment glass installation',
  },
  '/services': {
    title: 'Auto Glass Services | Integrity Glass',
    description: 'Explore windshield repair and replacement, rock-chip repair, ADAS calibration, custom-cut glass, and heavy equipment glass installation from Integrity Glass.',
    keywords: 'windshield repair and replacement, rock chip repair, ADAS calibration, custom-cut glass, heavy equipment glass installation, auto glass services',
  },
  '/pricing': {
    title: 'Auto Glass Pricing & Estimates | Integrity Glass',
    description: 'Review sample auto glass price ranges and learn what affects a vehicle-specific quote, including glass options, ADAS calibration, availability, and equipment details.',
    keywords: 'auto glass pricing, windshield replacement estimate, rock chip repair cost, ADAS calibration estimate, custom glass quote, heavy equipment glass quote',
  },
  '/promise': {
    title: 'Auto Glass Safety & AGSC Standards | Integrity Glass',
    description: 'Learn how Integrity Glass approaches auto glass safety, the AGSC/AGRSS replacement standard, vehicle-specific procedures, adhesives, and ADAS calibration.',
    keywords: 'AGSC auto glass standards, AGRSS, auto glass safety, windshield installation safety, ADAS calibration, glass technician training',
  },
  '/faq': {
    title: 'Auto Glass Repair & ADAS Calibration FAQs | Integrity Glass',
    description: 'Answers about windshield and rock-chip repair, replacement, ADAS calibration, custom-cut glass, heavy equipment installations, pricing, and warranty terms.',
    keywords: 'auto glass FAQ, windshield repair questions, rock chip repair, ADAS calibration questions, heavy equipment glass, custom cut glass',
  },
  '/contact': {
    title: 'Contact Integrity Glass | Request an Auto Glass Quote',
    description: 'Contact Integrity Glass for windshield repair and replacement, rock-chip repair, ADAS calibration, custom-cut glass, and heavy equipment installation. Call 478-244-9596.',
    keywords: 'contact Integrity Glass, auto glass quote, windshield estimate, ADAS calibration appointment, custom glass, heavy equipment glass installation',
  },
}
