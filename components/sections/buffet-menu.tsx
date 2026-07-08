import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Clock } from 'lucide-react';
import { buffets } from '@/lib/data';

export function BuffetMenu() {
  return (
    <section id="buffets" className="relative bg-offwhite py-[var(--space-section)]">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">All you can enjoy</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-fluid-h2">Unser Buffetmenü</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
              Frisch zubereitet, großzügig aufgetischt – zum Teilen gemacht.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
          {buffets.map((b) => (
            <StaggerItem key={b.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-charcoal/10 bg-cream/60 p-7 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-lift md:p-8">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-100 bg-gradient-to-r from-amber to-chili" />

                <p className="overline">{b.kicker}</p>
                <h3 className="mt-2 font-display text-fluid-h3 leading-tight">{b.name}</h3>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl text-amber">€</span>
                  <span className="nums font-display text-fluid-price font-semibold leading-none text-chili">
                    {b.price}
                  </span>
                  <span className="ml-1 text-sm font-medium text-charcoal/60">{b.unit}</span>
                </div>

                <div className="mt-6 hairline" />

                {/* When */}
                <ul className="mt-5 space-y-2.5">
                  {b.when.map((w) => (
                    <li key={w.time} className="flex items-start gap-2.5 text-[0.95rem]">
                      <Clock size={17} strokeWidth={1.75} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
                      <span className="text-charcoal/85">
                        {w.label}
                        <span className="nums ml-1.5 font-semibold text-charcoal">{w.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Extra price block (e.g. Sunday / holiday) */}
                {b.extra && (
                  <div className="mt-5 rounded-lg bg-chili/[0.06] px-4 py-3">
                    <p className="text-sm text-charcoal/80">{b.extra.label}</p>
                    <p className="mt-1">
                      <span className="font-display text-lg text-amber">€ </span>
                      <span className="nums font-display text-2xl font-semibold text-chili">{b.extra.price}</span>
                      <span className="ml-1.5 text-sm text-charcoal/60">{b.extra.unit}</span>
                    </p>
                  </div>
                )}

                {b.note && (
                  <p className="mt-auto pt-5 text-sm italic leading-relaxed text-charcoal/60">{b.note}</p>
                )}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
