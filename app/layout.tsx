import type { Metadata, Viewport } from 'next';

// Self-hosted fonts (no external requests) — Playfair Display + Cormorant + Work Sans
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/cormorant/400.css';
import '@fontsource/cormorant/400-italic.css';
import '@fontsource/cormorant/500-italic.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';
import './globals.css';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { CookieConsent } from '@/components/cookie-consent';
import { restaurantJsonLd } from '@/lib/schema';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Mongol Hann — Chinesisches & Mongolisches Restaurant in Düren und Kerpen',
    template: '%s · Mongol Hann',
  },
  description:
    'Mongol Hann – chinesisches & mongolisches Buffet-Restaurant in Düren und Kerpen. Frische Zutaten, gemütliche Atmosphäre, Mittags- und Abendbuffet. Die Essenz des Essens ist der Geschmack.',
  applicationName: 'Mongol Hann',
  keywords: [
    'Mongol Hann', 'Chinesisches Restaurant Düren', 'Mongolisches Restaurant Kerpen',
    'Buffet Düren', 'Abendbuffet', 'Mittagsbuffet', 'China Restaurant NRW',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.url,
    siteName: 'Mongol Hann',
    title: 'Mongol Hann — Chinesisches & Mongolisches Restaurant',
    description:
      'Frische Zutaten, gemütliche Atmosphäre und großzügige Buffets in Düren und Kerpen.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Note: zoom is intentionally NOT disabled (accessibility).
  themeColor: '#F4EBDD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = restaurantJsonLd();
  return (
    <html lang="de">
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-chili focus:px-5 focus:py-2.5 focus:text-sm focus:text-offwhite"
        >
          Zum Inhalt springen
        </a>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
