# Mongol Hann

Website for **Mongol Hann** — Chinesisches & Mongolisches Restaurant in Düren und Kerpen.

Built with **Next.js 14** (App Router), **Tailwind CSS**, **Framer Motion** and
self-hosted fonts (Playfair Display · Cormorant · Work Sans). Long-scroll one-pager
plus an online Speisekarte, Impressum and Datenschutzerklärung.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's here

- `app/page.tsx` — home one-pager (Hero → Marke → Buffets → Features → Speisekarte → Kontakt)
- `app/speisekarte/` — full HTML menu (structured, ready for the real dish list)
- `app/impressum/`, `app/datenschutzerklaerung/` — legal pages (templates, see below)
- `components/` — sections, nav, footer, cookie consent, image slots
- `lib/data.ts` — **all content in one place** (copy, prices, hours, locations, menu)

## Before launch — two things to fill in

1. **Photos.** Every image is an art-directed placeholder. Drop real files into
   `public/images/` and wire them up — see `public/images/README.md` for exact
   filenames and the one-line edits. The mood board calls for: steaming buffet /
   warm interior (hero), sizzling wok, generous plating, dark-wood interior.
2. **Menu.** Put the real PDF at `public/speisekarte.pdf`, and replace the example
   dishes in `lib/data.ts` (`menu`) with the real list, then set
   `menuPlaceholder = false`.

Also review the **legal placeholders** marked `[ … ]` in the Impressum and
Datenschutzerklärung (operator name, USt-IdNr., e-mail, hoster) — have them
checked legally before going live.

## Design system (from the mood board)

| Token       | Hex       | Use                                  |
|-------------|-----------|--------------------------------------|
| chili       | `#8B2412` | Headers, CTAs, accents               |
| amber       | `#C8892B` | Prices, icons, dividers, highlights  |
| charcoal    | `#2B2018` | Text, footer, overlays               |
| cream       | `#F4EBDD` | Section backgrounds                  |
| offwhite    | `#FBF7F0` | Cards, whitespace                    |

Fonts: Playfair Display (display) · Cormorant (italic accents) · Work Sans (body).

## Notes

- Accessibility: keyboard focus rings, skip link, `prefers-reduced-motion`
  respected, zoom **not** disabled, alt text on all imagery.
- SEO: per-page metadata, `max-image-preview:large`, canonical URLs, and
  schema.org `Restaurant` JSON-LD per location.
- GDPR: consent banner (Funktional/Vorlieben/Statistiken/Marketing); Google Maps
  loads only after an explicit click.

## Deploy

Push to a Git repo connected to **Vercel** — it detects Next.js and builds
automatically. No environment variables required.
