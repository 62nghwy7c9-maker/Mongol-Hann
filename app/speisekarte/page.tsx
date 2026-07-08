import type { Metadata } from 'next';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Download, Info } from 'lucide-react';
import { menu, menuPlaceholder, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Speisekarte',
  description:
    'Die Speisekarte von Mongol Hann – chinesische und mongolische Spezialitäten in Düren und Kerpen.',
  alternates: { canonical: '/speisekarte' },
};

export default function SpeisekartePage() {
  return (
    <div className="bg-cream pb-[var(--space-section)] pt-28 md:pt-36">
      <div className="container-x">
        {/* Header */}
        <header className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Chinesisch & Mongolisch</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-display text-fluid-h1 leading-[1.05]">Unsere Speisekarte</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
              Tradition trifft Moderne – frisch zubereitet, großzügig serviert.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={site.menuPdf} download className="btn btn-primary mt-7">
              <Download size={18} strokeWidth={2} />
              Als PDF herunterladen
            </a>
          </Reveal>
        </header>

        {/* Placeholder notice */}
        {menuPlaceholder && (
          <Reveal delay={0.05}>
            <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-card border border-amber/30 bg-amber/[0.08] px-5 py-4">
              <Info size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-charcoal/80">
                Dies ist eine Beispielstruktur. Sobald die echte Speisekarte vorliegt, werden die
                Gerichte hier übernommen – Layout und Gestaltung bleiben unverändert.
              </p>
            </div>
          </Reveal>
        )}

        {/* Category quick links */}
        <Reveal delay={0.1}>
          <nav className="mt-12 flex flex-wrap justify-center gap-2.5" aria-label="Kategorien">
            {menu.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-charcoal/15 bg-offwhite px-4 py-1.5 text-sm text-charcoal/80 transition-colors hover:border-chili hover:text-chili"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Reveal>

        {/* Sections */}
        <div className="mx-auto mt-16 max-w-3xl space-y-16">
          {menu.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <Reveal>
                <div className="flex items-end justify-between gap-4">
                  <h2 className="font-display text-fluid-h3 text-chili">{section.title}</h2>
                  <span className="mb-1.5 hidden h-px flex-1 bg-amber/30 sm:block" aria-hidden="true" />
                </div>
                {section.note && (
                  <p className="mt-2 text-sm italic text-charcoal/55">{section.note}</p>
                )}
              </Reveal>

              <Stagger className="mt-6 divide-y divide-charcoal/10">
                {section.items.map((item, i) => (
                  <StaggerItem key={`${section.id}-${i}`}>
                    <div className="flex items-baseline gap-3 py-3.5">
                      {item.no && (
                        <span className="nums w-7 shrink-0 font-serif text-base text-amber">{item.no}</span>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-sans text-base font-semibold text-charcoal">{item.name}</h3>
                          {item.price && (
                            <>
                              <span className="mb-1 hidden flex-1 border-b border-dotted border-charcoal/25 sm:block" aria-hidden="true" />
                              <span className="nums shrink-0 font-semibold text-chili">€ {item.price}</span>
                            </>
                          )}
                        </div>
                        {item.desc && (
                          <p className="mt-0.5 text-sm leading-relaxed text-charcoal/65">{item.desc}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
