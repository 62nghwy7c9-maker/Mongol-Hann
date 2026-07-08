import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { site, locations, nav } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-charcoal text-cream/80">
      <div className="container-x relative grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-cream">Mongol Hann</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-amber">Düren · Kerpen</p>
          <p className="mt-5 max-w-xs font-serif text-lg italic leading-snug text-cream/70">
            „{site.motto}“
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer-Navigation">
          <h2 className="overline text-amber/80">Navigation</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-cream/75 transition-colors hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/speisekarte" className="text-sm text-cream/75 transition-colors hover:text-cream">
                Speisekarte online
              </Link>
            </li>
          </ul>
        </nav>

        {/* Locations */}
        <div>
          <h2 className="overline text-amber/80">Standorte</h2>
          <ul className="mt-4 space-y-5">
            {locations.map((loc) => (
              <li key={loc.city} className="text-sm">
                <p className="font-display text-lg text-cream">{loc.city}</p>
                <p className="mt-1 flex items-start gap-2 text-cream/70">
                  <MapPin size={15} strokeWidth={1.75} className="mt-0.5 shrink-0 text-amber/80" aria-hidden="true" />
                  {loc.address}
                </p>
                <p className="mt-1 flex items-center gap-2">
                  <Phone size={15} strokeWidth={1.75} className="shrink-0 text-amber/80" aria-hidden="true" />
                  <a href={`tel:${loc.phoneHref}`} className="nums text-cream/70 transition-colors hover:text-cream">
                    {loc.phone}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hairline opacity-40" />
      <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 sm:flex-row">
        <p>© {year} Mongol Hann · Chinesisches & Mongolisches Restaurant</p>
        <div className="flex items-center gap-5">
          <Link href="/impressum" className="transition-colors hover:text-cream">Impressum</Link>
          <Link href="/datenschutzerklaerung" className="transition-colors hover:text-cream">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  );
}
