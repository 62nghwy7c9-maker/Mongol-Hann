import Link from 'next/link';
import { Reveal } from '@/components/motion';
import { ImageSlot } from '@/components/image-slot';
import { Download, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/data';

export function MenuDownload() {
  return (
    <section id="speisekarte" className="bg-cream py-[var(--space-section)]">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Text */}
        <div className="order-2 md:order-none">
          <Reveal>
            <p className="eyebrow">Speisekarte</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-fluid-h2">
              Jetzt Speisekarte
              <br className="hidden sm:block" /> herunterladen
            </h2>
          </Reveal>
          <div className="mt-6 hairline max-w-[9rem]" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-charcoal/80">
              Von knusprigen Vorspeisen bis zum großen mongolischen Grill – entdecken Sie unsere
              ganze Vielfalt. Als PDF zum Mitnehmen oder bequem online.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={site.menuPdf} download className="btn btn-primary">
                <Download size={18} strokeWidth={2} />
                Als PDF herunterladen
              </a>
              <Link href="/speisekarte" className="btn btn-ghost">
                Online ansehen
                <ArrowUpRight size={18} strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal delay={0.05} className="order-1 md:order-none">
          <ImageSlot
            src="/images/dessert.jpg"
            alt="Farbenfroher Dessert- und Obstteller mit frischen Früchten und süßen Kleinigkeiten"
            tone="gold"
            aspect="3/4"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
