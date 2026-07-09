'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const TONES = {
  ember: 'radial-gradient(120% 130% at 30% 20%, #5A160B 0%, #3A1710 50%, #211710 100%)',
  wood: 'radial-gradient(120% 130% at 70% 10%, #4A3323 0%, #33261B 55%, #201711 100%)',
  gold: 'radial-gradient(120% 130% at 40% 15%, #7A5320 0%, #4A3520 55%, #241A12 100%)',
} as const;

export function ImageBand({
  src,
  alt,
  label,
  caption,
  tone = 'ember',
}: {
  src?: string;
  alt: string;
  label?: string;
  caption?: string;
  tone?: keyof typeof TONES;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="relative flex h-[clamp(22rem,46vh,34rem)] items-end overflow-hidden"
      aria-label={caption ? `${caption} – ${alt}` : alt}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
        {src ? (
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        ) : (
          <div className="grain h-full w-full" style={{ background: TONES[tone] }} aria-hidden="true">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 opacity-60">
              <span className="absolute bottom-8 left-[30%] h-40 w-16 rounded-full bg-white/10 blur-2xl animate-steam" />
              <span className="absolute bottom-4 left-[62%] h-48 w-20 rounded-full bg-amber/10 blur-2xl animate-steam [animation-delay:3s]" />
            </div>
          </div>
        )}
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(20,13,9,0.88), rgba(20,13,9,0.18) 58%, rgba(20,13,9,0.32))' }}
        aria-hidden="true"
      />

      {(label || caption) && (
        <div className="container-x relative pb-8 md:pb-10">
          {label && <p className="overline text-amber-soft">{label}</p>}
          {caption && (
            <p className="mt-2 max-w-2xl font-display text-3xl text-cream md:text-4xl">{caption}</p>
          )}
          {!src && <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/50">Foto folgt</p>}
        </div>
      )}
    </section>
  );
}
