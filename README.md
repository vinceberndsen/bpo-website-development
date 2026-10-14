# Relavique website

Marketing website for **Relavique**, a specialist and second-line customer support brand.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript. Deployed on Vercel.

- Live: https://www.relavique.com (Production deploys from `main`)
- Working branch: `v0/relavique-positioning`
- Launch scope: **English only**. The translation architecture is in place but no other language is published.

## Legal and operator status

All legal details live in `lib/config/company.ts` and are rendered from there (footer, company page, privacy notices).

- **Brand:** Relavique (not a registered legal name).
- **Currently responsible (2026, preparation phase):** Hatch Europe Consulting, Sterstraat 66a, 3920 Lommel, Belgium — enterprise number 1005.878.023, VAT BE1005.878.023. Also the data controller for website enquiries and applicant data.
- **Greek IKE:** being established; all fields stay `null` until registration is confirmed. The intended operational date (1 January 2027) is an intention only.
- `legal.status` is switched **manually** to `greek-operational` — never based on the calendar — and only after incorporation and the legal arrangements are confirmed. Nothing transfers automatically.

## Run locally

```bash
pnpm install
pnpm dev     # http://localhost:3000 → redirects to /en
pnpm build   # production build (also runs the type check)
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/[locale]/…` | Route files. Each route loads its dictionary and renders a page component. |
| `app/actions/forms.ts` | Server Actions for the business enquiry and candidate forms. |
| `app/sitemap.ts`, `app/robots.ts` | SEO routes (indexing only when allowed, see below). |
| `components/pages/` | Page components: home, services, info pages (how it works, markets, about, careers), legal. |
| `components/site/` | Header, footer, navigation, logo, language switcher. |
| `components/ui-kit/` | Shared layout blocks (section, page hero, CTA band, photo, lists). |
| `components/forms/` | Client form components and shared fields. |
| `lib/config/company.ts` | **Company details**: legal entity, VAT, address, contact email, data controller, brand messaging. |
| `lib/config/site.ts` | Site URL and indexing rules. |
| `lib/i18n/` | Locale config, dictionary loader and dictionaries (`en.ts` live, `nl.ts` unpublished draft). |
| `lib/forms/` | Validation schema and delivery (Resend email or webhook). |
| `lib/routes.ts`, `lib/seo.ts` | Route map and metadata/hreflang helpers. |
| `proxy.ts` | Locale detection and redirects (`/` → `/en`). |
| `next.config.mjs` | Security headers, legacy service redirects, production form-delivery guard. |
| `public/` | Icons and photography (`public/images`). |

## Content and languages

- All copy lives in `lib/i18n/dictionaries/en.ts` (British English). Components contain no hard-coded copy.
- `supportedLocales` in `lib/i18n/config.ts` lists the languages the code can handle (`en`, `nl`, `nb`, `sv`, `da`, `fi`). `locales` lists the **published** ones — currently only `en`.
- Only published locales get routes, appear in the language selector (hidden while there is just one), the sitemap and hreflang. A request for an unpublished prefix such as `/nl/about` redirects to `/en/about`.
- `nl.ts` and the non-English entries in `brandMessaging` are **outdated drafts** from before the specialist / second-line repositioning. They are not registered or served, and must be re-translated from `en.ts` before use.
- Website languages are separate from service-delivery languages (Dutch; German for Germany, Switzerland and Austria; Norwegian; English; others on request).
- To publish a language: bring `lib/i18n/dictionaries/<locale>.ts` to the same shape as `en.ts` (TypeScript flags missing keys), update its `brandMessaging` entry, have it reviewed, register it in `get-dictionary.ts`, then add the locale to `locales`.

## Forms

The business enquiry (Contact) and candidate registration (Careers) forms are validated on the server. Submissions are **not stored** by the website; they are sent on and not logged.

Delivery order:
1. **Resend email** if `RESEND_API_KEY` is set → sent to `FORM_RECIPIENT_EMAIL` (default in `company.ts`), with the submitter as reply-to.
2. **Webhook** if `FORM_WEBHOOK_URL` is set → JSON POST, optional bearer `FORM_WEBHOOK_SECRET`.
3. Otherwise the form shows an honest "not yet enabled" message instead of pretending to succeed.

A production build fails if neither delivery method is configured, unless `ALLOW_UNCONFIGURED_FORMS=true`.

## Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (or webhook) | Provided by the Resend integration. |
| `RESEND_EMAIL_DOMAIN` | Recommended | Verified sending domain (provided by integration). Sender becomes `noreply@<domain>`. |
| `RESEND_FROM_EMAIL` | Optional | Overrides the full sender address. |
| `FORM_RECIPIENT_EMAIL` | Optional | Overrides the recipient in `company.ts`. |
| `FORM_WEBHOOK_URL`, `FORM_WEBHOOK_SECRET` | Optional | Alternative delivery. |
| `NEXT_PUBLIC_SITE_URL` | **Yes for launch** | e.g. `https://www.relavique.com`. Without it the site is not indexed. |
| `ALLOW_UNCONFIGURED_FORMS` | Optional | `true` to deliberately deploy without form delivery. |

Never commit `.env` files; `.env*.local` is git-ignored.

## SEO and indexing

Canonical URLs, hreflang, sitemap entries and `robots.txt` allow-rules are produced **only** when `VERCEL_ENV=production` **and** `NEXT_PUBLIC_SITE_URL` is set. Previews and local builds always send `Disallow: /`.

## Launch checklist

- [x] `NEXT_PUBLIC_SITE_URL=https://www.relavique.com` set for Production.
- [ ] Merge the latest `v0/relavique-positioning` changes into `main` so Production redeploys.
- [ ] Confirm `robots.txt` allows crawling and `sitemap.xml` lists only the English pages.
- [ ] Confirm the `hello@relavique.com` mailbox (Proton) receives mail.
- [ ] Decide the form recipient (currently the default in `company.ts`) and send one test enquiry and one test candidate registration on production.
- [ ] Confirm the exact registered name of the Belgian corporation against the Crossroads Bank for Enterprises (KBO) record, then review the legal pages (privacy, recruitment privacy, cookies, company information) with an adviser.
- [ ] Review all English copy and photography.
- [ ] Check desktop and mobile layouts on real devices.
- [ ] Optional: submit the sitemap in Google Search Console.
- [ ] After English sign-off: translations (nl, nb, sv, da, fi).
