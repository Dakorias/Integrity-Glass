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

## Deploy to GitHub Pages with Porkbun DNS

The live domain was checked on 2026-10-19. It resolves to Porkbun web-hosting IPs and serves the repository's development `index.html`, which requests `/src/main.tsx` and receives a 404. GitHub Pages needs the compiled site from `dist/`; pointing the domain at a GitHub repository does not build or deploy a Vite application by itself.

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys `dist/` when changes reach `main` or when manually run from the Actions tab. It includes the custom-domain file and route-specific static entry files.

### One-time GitHub setup

1. Push this repository and the workflow to GitHub.
2. In the repository, open **Settings → Pages** and set the publishing source to **GitHub Actions**.
3. Wait for the `Deploy site to GitHub Pages` workflow to complete successfully in the Actions tab.
4. Under **Settings → Pages → Custom domain**, enter `integrityglassservices.com` and save. The build includes `dist/CNAME`, but GitHub still requires the custom domain to be configured in repository settings.
5. After DNS resolves and GitHub provisions TLS, enable **Enforce HTTPS** in Pages settings.

### Porkbun DNS setup

In Porkbun DNS, remove the current web-hosting/parking A records that resolve the apex domain to `207.207.210.43` and `207.207.210.215`, then point the apex to GitHub Pages with these A records:

```text
Type  Host  Answer
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   dakorias.github.io
```

Remove conflicting A/URL-forward records for `www`. DNS changes can take time to propagate. Do not delete unrelated mail (MX/TXT) records. GitHub's current custom-domain instructions should be checked while configuring DNS.

After deployment, check `https://integrityglassservices.com/`, `https://integrityglassservices.com/services/`, and `https://integrityglassservices.com/integrityglass-qr.png`. This workspace cannot change the GitHub Pages setting or Porkbun DNS; those account-side steps are required before the public domain can serve the new build.

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
