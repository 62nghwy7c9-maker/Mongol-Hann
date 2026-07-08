# Bilder / Photos

Drop the real photographs here, then wire them up. Every image slot already has
an art-directed placeholder, so the site looks finished until you do.

## Recommended shots (from the mood board)

| File (suggested)        | Used in                     | Direction                                             |
|-------------------------|-----------------------------|-------------------------------------------------------|
| `hero.jpg`              | Hero background             | Steaming buffet spread / warm-lit interior, golden tungsten light, shallow depth |
| `interior.jpg`          | "Tradition & Moderne" band | Dark wood, warm ambient light, communal tables        |
| `wok.jpg`               | Full-bleed band #1         | Close, saturated food shot · sizzling wok · rising steam |
| `plating.jpg`           | Full-bleed band #2 + menu  | Colourful dishes · generous plating · glossy sauces   |

## How to wire a photo

- **Hero:** set `HERO_IMG = '/images/hero.jpg'` in `components/sections/hero.tsx`.
- **Full-bleed bands:** add `src="/images/wok.jpg"` to the `<ImageBand … />` calls in `app/page.tsx`.
- **Side images:** add `src="/images/interior.jpg"` to the `<ImageSlot … />` calls in the section files.

Prefer landscape JP/PNG at ~2000px on the long edge — Next.js generates the
responsive WebP/AVIF sizes automatically.

## Menu PDF

Put the real menu at `public/speisekarte.pdf` (the "Speisekarte herunterladen"
buttons point at `/speisekarte.pdf`). Send the dish list and it gets filled into
`lib/data.ts` for the online menu page.
