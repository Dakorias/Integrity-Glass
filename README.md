# Integrity Glass Website

A responsive React and TypeScript website for an auto glass repair technician. The site has dedicated Home, Services, Pricing, Our Promise, FAQ, and Contact pages. The current content is customizable sample data, and quote requests are handled locally in the browser only.

## Pages

- `/` — Home
- `/services` — Repair and replacement details
- `/pricing` — Sample estimate ranges and price factors
- `/promise` — Service expectations and warranty questions
- `/faq` — Common auto glass questions
- `/contact` — Contact details and demo quote form

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Edit business details

- Update contact details and the service, pricing, and FAQ data in `src/data.ts`.
- Edit page content in `src/Pages.tsx` and shared navigation/footer in `src/Layout.tsx`.
- Replace the sample pricing, mobile-service availability, service area, and warranty language with confirmed business terms before publishing.
- Replace the automotive photos in `src/styles.css` with licensed business photography as desired.
- The quote form currently validates in the browser and displays a confirmation. Connect it to a secure form endpoint before using it to receive customer requests.
