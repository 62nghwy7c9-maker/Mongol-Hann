import Image from 'next/image';
import { Camera } from 'lucide-react';

type Tone = 'ember' | 'wood' | 'gold';

const TONES: Record<Tone, string> = {
  ember:
    'radial-gradient(120% 120% at 25% 15%, #5A160B 0%, #3A1710 45%, #2B2018 100%)',
  wood: 'radial-gradient(120% 120% at 75% 10%, #4A3323 0%, #33261B 50%, #241A12 100%)',
  gold: 'radial-gradient(120% 120% at 30% 20%, #7A5320 0%, #4A3520 55%, #2B2018 100%)',
};

/**
 * ImageSlot
 * - Pass `src` to render a real, optimised photo (with a soft zoom on hover).
 * - Omit `src` to show an art-directed placeholder describing the intended shot,
 *   so the layout reads as finished even before real photography arrives.
 *
 * To add a real photo: drop the file in /public/images and pass its path as `src`.
 */
export function ImageSlot({
  src,
  alt,
  caption,
  aspect = '4/3',
  tone = 'ember',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  rounded = true,
}: {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: string;
  tone?: Tone;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden ${rounded ? 'rounded-card' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
      data-image-slot={src ? 'filled' : 'empty'}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out-soft will-change-transform group-hover:scale-[1.06]"
        />
      ) : (
        <div className="grain absolute inset-0" style={{ background: TONES[tone] }} aria-hidden="true">
          {/* gentle rising steam */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 opacity-70">
            <span className="absolute bottom-6 left-[28%] h-24 w-10 rounded-full bg-white/10 blur-xl animate-steam" />
            <span className="absolute bottom-4 left-[50%] h-28 w-12 rounded-full bg-white/10 blur-xl animate-steam [animation-delay:2.5s]" />
            <span className="absolute bottom-8 left-[68%] h-20 w-9 rounded-full bg-white/10 blur-xl animate-steam [animation-delay:4.5s]" />
          </div>
          {/* caption describing the intended photograph */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber/40 text-amber">
              <Camera size={20} strokeWidth={1.5} aria-hidden="true" />
            </span>
            {caption && (
              <p className="max-w-[32ch] font-serif text-base italic leading-snug text-cream/85">
                {caption}
              </p>
            )}
            <span className="overline text-amber/70">Foto folgt</span>
          </div>
        </div>
      )}
    </div>
  );
}
