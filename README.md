# Mario-Max German Language School — website

Bilingual (English / German) informational website for **Mario-Max German Language School Nig Ltd.**, Kubwa, Abuja.

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS 4. No database, CMS, login or payments.

## Scripts

```bash
npm run dev      # development server (http://localhost:3000)
npm run lint     # ESLint
npm run build    # production build (includes the TypeScript check)
npm run start    # serve the production build
```

## Routes

All pages exist in both languages with the same URL structure: `/en/...` and `/de/...`.
`/` redirects to `/en`, and unprefixed paths redirect to the English version (`proxy.ts`).

| Path | Page |
| --- | --- |
| `/[lang]` | Home |
| `/[lang]/about` | About |
| `/[lang]/courses` | Courses (CEFR A1–C2, filters, FAQ) |
| `/[lang]/resources` | Learning resources (search, quiz, flashcards) |
| `/[lang]/resources/[topic]` | Learning topics: vocabulary, grammar, pronunciation, everyday-expressions, reading, writing, listening-speaking, learning-tips |
| `/[lang]/germany-guide` | Germany Guide |
| `/[lang]/student-life` | Student Life (gallery with lightbox) |
| `/[lang]/news`, `/[lang]/news/[slug]` | News list and articles |
| `/[lang]/contact` | Contact (form, map, FAQ) |
| `/[lang]/privacy` | Privacy Policy |

Unknown URLs get the localised 404 page with an HTTP 404 status (`proxy.ts` → `app/[lang]/page-not-found`).
When adding a new page, add its path to `routes` in `i18n/paths.ts`, otherwise the proxy treats it as unknown.

## Where to edit things

| What | File |
| --- | --- |
| Confirmed school facts (address, phone, email, hours, social links, map) | `content/site.ts` |
| Page text — English | `content/dictionaries/en/*.ts` |
| Page text — German (must match the English structure) | `content/dictionaries/de/*.ts` |
| Articles | `content/articles/meta.ts` (list/order), `content/articles/en.ts`, `content/articles/de.ts` |
| Learning material, quizzes, flashcards | `content/learning/words.ts`, `content/learning/en.ts`, `content/learning/de.ts` |
| Official links (Germany Guide, articles) | `content/official-links.ts` |
| Photos and hero video | `content/media.ts` |
| Colours, radii, shadows | `app/globals.css` (`:root` tokens) |

TypeScript enforces that every German dictionary has exactly the same keys as the English one.

## German translations — review required

The German content is a **draft** and must be reviewed by a qualified German speaker.
Until then German pages are marked `noindex`, left out of hreflang alternates and excluded from the sitemap.
After the review, set `indexable: true` for `de` in `i18n/config.ts`.

## Configuration (environment variables)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://www.example.com`. Enables canonical URLs, hreflang, Open Graph URLs, the sitemap and the sitemap line in robots.txt. Not set yet — no domain has been registered. |
| `RESEND_API_KEY` | Email delivery for the contact form (server-side only). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. |
| `CONTACT_FROM_EMAIL` | Verified sender address for the email provider. |

Until the three contact variables are set, the form validates input but **does not pretend to send**:
it tells the visitor the message was not sent and offers pre-filled WhatsApp and email buttons.
The delivery code is in `lib/contact/deliver.ts` and can be switched to another provider.

## Assets

No genuine school photography or video has been supplied. The site uses designed illustrations
(`components/illustrations/scenes.tsx`) that do not pretend to be photographs.

- **Hero video:** add an approved, licensed file under `public/media/hero/` and set `heroVideo` in `content/media.ts`.
- **Gallery photos:** add images under `public/media/gallery/` and list them in `galleryPhotos` in `content/media.ts`.
- **Interactive map:** once the exact location is verified, put the Google Maps embed URL in `site.map.embedUrl` (and optionally `site.map.placeUrl`). The map then loads only when a visitor clicks. Update the privacy policy at the same time.
- **Social media:** add verified accounts to `site.social`. Icons only appear for listed accounts.

## Before launch — information still needed from the school

- Review of proposed wording: mission, vision and approach statements; "What we care about"; FAQ answers.
- Which CEFR levels are currently offered, plus schedules, durations and fees, if they should be published.
- Real photographs and an approved hero video (optional).
- Verified Google Maps location, social media accounts and production domain.
- Review of the German translation, the learning material and the draft articles.
- Review of the privacy policy, including the email provider once chosen.
- Publication dates for articles, if they should be shown.
- The footer year is fixed at build time (`components/layout/footer.tsx`).
