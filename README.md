# Integrity Glass Website

A responsive React and TypeScript website for auto glass service. The site has dedicated Home, Services, Pricing, Our Promise, FAQ, and Contact pages. The current content is customizable sample data, and quote requests are handled locally in the browser only.

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
- Confirm the AGSC safety-process statements reflect actual shop procedures and verify any technician certifications, AGSC registration, or audit status before making those claims.
- Replace the automotive photos in `src/styles.css` with licensed business photography as desired.
- The quote form currently validates in the browser and displays a confirmation. Connect it to a secure form endpoint before using it to receive customer requests.
- Add the official Google Business Profile review URL to `business.googleReviewUrl` in `src/data.ts` after the profile is created and verified. The site intentionally displays no ratings or review text before that step.
- The QR image at `public/integrityglass-qr.png` points to `https://integrityglassservices.com`. Regenerate it with `npm run generate:qr`; production builds also regenerate it automatically.
- Search metadata is defined per route in `src/data.ts`; `index.html` contains the default description, social tags, canonical URL, and structured business data. Search engines can rewrite snippets, and meta keywords are not a ranking guarantee.
- `public/robots.txt` and `public/sitemap.xml` are configured for the production domain. Submit the sitemap through Google Search Console and Bing Webmaster Tools after deployment and domain verification.

## Search references

- The AGSC site links the [ANSI/AGSC/AGRSS 005-2022 standard](https://agsc.org/wp-content/uploads/2024/07/ANSIAGSCAGRSS005-2022-1.pdf) and describes technician certification, registered-company membership, and independent validation as distinct programs.
- AGSC also publishes a [standard compliance checklist](https://agsc.org/wp-content/uploads/2024/11/AGRSS-Compliance-Checklist-7-14-2023.pdf); verify current shop procedures against the official documents before presenting them as completed practices.
- Service-page organization was informed by the consumer-facing structure of [Glass Doctor auto glass services](https://www.glassdoctor.com/auto-glass), particularly its repair/replacement decision guidance, FAQs, and reviews area. Site copy here is original.
