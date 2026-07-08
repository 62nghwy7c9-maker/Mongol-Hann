import { Stagger, StaggerItem } from '@/components/motion';
import { Award, Sprout, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { features, type Feature } from '@/lib/data';

const ICONS: Record<Feature['icon'], LucideIcon> = {
  quality: Award,
  fresh: Sprout,
  buffet: UtensilsCrossed,
};

export function FeatureBand() {
  return (
    <section className="grain relative overflow-hidden bg-charcoal py-[clamp(3.5rem,2.5rem+4vw,6rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_0%,rgba(139,36,18,0.35),transparent_65%)]" aria-hidden="true" />
      <Stagger className="container-x relative grid gap-10 sm:grid-cols-3 sm:gap-6">
        {features.map((f, i) => {
          const Icon = ICONS[f.icon];
          return (
            <StaggerItem key={f.title} className="relative">
              {i > 0 && (
                <span className="absolute -left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-amber/25 sm:block" aria-hidden="true" />
              )}
              <div className="flex flex-col items-center px-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-amber/40 bg-amber/5 text-amber">
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-cream">{f.title}</h3>
                <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-cream/65">{f.sub}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
