'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

/**
 * GDPR-friendly map: nothing is requested from Google until the visitor
 * explicitly clicks to load it. Also keeps the page fast by default.
 */
export function MapEmbed({ query, city }: { query: string; city: string }) {
  const [loaded, setLoaded] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  if (loaded) {
    return (
      <iframe
        title={`Karte – Mongol Hann ${city}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-52 w-full rounded-lg border border-charcoal/10"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative flex h-52 w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-charcoal/10 bg-charcoal/[0.04] text-center transition-colors hover:bg-charcoal/[0.07]"
    >
      <span
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,32,24,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(43,32,24,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-chili text-offwhite shadow-soft transition-transform group-hover:scale-110">
        <MapPin size={20} strokeWidth={2} />
      </span>
      <span className="relative font-medium text-charcoal">Karte laden</span>
      <span className="relative max-w-[26ch] text-xs text-charcoal/55">
        Beim Laden werden Daten an Google Maps übertragen.
      </span>
    </button>
  );
}
