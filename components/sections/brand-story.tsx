import { Reveal } from '@/components/motion';
import { ImageSlot } from '@/components/image-slot';
import { brandCopy } from '@/lib/data';

export function BrandStory() {
  return (
    <section id="ueber" className="bg-cream py-[var(--space-section)]">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Image */}
        <Reveal className="order-1 md:order-none">
          <ImageSlot
            src="/images/plating.jpg"
            alt="Frisch angerichtete Teller mit Fleisch, Fisch und Gemüse, im Hintergrund der Grill"
            tone="wood"
            aspect="4/5"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="eyebrow">Willkommen bei Mongol Hann</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-fluid-h2">
              Die Tradition mit der
              <span className="text-chili"> Moderne </span>
              verbinden
            </h2>
          </Reveal>
          <div className="mt-6 hairline max-w-[9rem]" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-charcoal/85">
              {brandCopy.lead}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-charcoal/85">
              {brandCopy.philosophy}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
