import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Ornament } from '@/components/ornament';

const STEPS = [
  { n: '1', title: 'Zutaten wählen', text: 'Fleisch, Meeresfrüchte, Gemüse & Nudeln vom Buffet' },
  { n: '2', title: 'Frisch gebraten', text: 'Unsere Köche braten alles vor Ihren Augen an' },
  { n: '3', title: 'Genießen', text: 'Ihr Teller – genau nach Ihrem Geschmack' },
];

export function MongolGrill() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-[var(--space-section)]">
      <div className="absolute inset-0 bg-[radial-gradient(75%_90%_at_15%_0%,rgba(139,36,18,0.35),transparent_60%)]" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Photo */}
        <Reveal className="relative">
          <div className="group relative overflow-hidden rounded-card shadow-lift ring-1 ring-amber/20" style={{ aspectRatio: '4/5' }}>
            <Image
              src="/images/grill.jpg"
              alt="Großer mongolischer Grill in Aktion – Meeresfrüchte, Fleisch und Gemüse mit aufsteigendem Dampf"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.05]"
            />
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="overline text-amber">Die Spezialität des Hauses</p>
          </Reveal>
          <Reveal delay={0.05}>
            <Ornament width={180} className="mt-4 text-amber" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-fluid-h2 text-cream">Der Mongolische Grill</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-cream/75">
              Stellen Sie Ihren Teller selbst zusammen: Wählen Sie Ihre Lieblingszutaten vom Buffet –
              Fleisch, frische Meeresfrüchte, knackiges Gemüse und Nudeln. Unsere Köche braten alles
              frisch vor Ihren Augen auf dem großen Grill an.
            </p>
          </Reveal>

          <Stagger className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="flex gap-3 sm:flex-col sm:gap-2">
                  <span className="font-display text-3xl leading-none text-amber">{s.n}</span>
                  <div>
                    <p className="font-semibold text-cream">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream/55">{s.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
