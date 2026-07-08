import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { MapEmbed } from '@/components/map-embed';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { locations } from '@/lib/data';

export function Locations() {
  return (
    <section id="kontakt" className="bg-offwhite py-[var(--space-section)]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Kontakt · Zwei Städte, eine Marke</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-fluid-h2">Wir freuen uns auf Sie!</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
              Besuchen Sie uns in Düren oder Kerpen – dieselbe herzliche Gastfreundschaft,
              ganz in Ihrer Nähe.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {locations.map((loc) => (
            <StaggerItem key={loc.city}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-charcoal/10 bg-cream/50 p-7 shadow-soft md:p-8">
                <h3 className="font-display text-fluid-h3 text-chili">{loc.city}</h3>

                <div className="mt-5 space-y-3.5 text-[0.95rem]">
                  <p className="flex items-start gap-3">
                    <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
                    <span className="text-charcoal/85">{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={18} strokeWidth={1.75} className="shrink-0 text-amber" aria-hidden="true" />
                    <a href={`tel:${loc.phoneHref}`} className="nums link-underline font-medium text-charcoal hover:text-chili">
                      {loc.phone}
                    </a>
                  </p>
                  <div className="flex items-start gap-3">
                    <Clock size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
                    <table className="text-charcoal/85">
                      <tbody>
                        {loc.hours.map((h) => (
                          <tr key={h.days}>
                            <th scope="row" className="pr-4 text-left font-semibold text-charcoal">{h.days}</th>
                            <td className="nums">{h.times.join(' · ')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <MapEmbed query={loc.mapsQuery} city={loc.city} />
                </div>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost mt-5 justify-center"
                >
                  <Navigation size={18} strokeWidth={2} />
                  Route planen
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
