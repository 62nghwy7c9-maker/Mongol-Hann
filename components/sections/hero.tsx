'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, ArrowDown } from 'lucide-react';
import { site, brandCopy } from '@/lib/data';

// Hero photograph — warm-lit interior, golden tungsten light.
// Leave empty to show the warm fallback.
const HERO_IMG = '/images/interior.jpg';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 -z-10">
        {HERO_IMG ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={HERO_IMG}
            alt="Dampfendes Buffet im warmen Licht bei Mongol Hann"
            className="h-full w-full object-cover motion-safe:animate-kenburns"
          />
        ) : (
          <div
            className="grain absolute inset-0 motion-safe:animate-kenburns"
            style={{
              background:
                'radial-gradient(130% 100% at 70% 8%, #6E2412 0%, #431A0F 42%, #2B2018 78%, #1C130D 100%)',
            }}
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-70">
              <span className="absolute bottom-10 left-[22%] h-40 w-16 rounded-full bg-amber/10 blur-2xl animate-steam" />
              <span className="absolute bottom-6 left-[46%] h-48 w-20 rounded-full bg-white/10 blur-2xl animate-steam [animation-delay:2.5s]" />
              <span className="absolute bottom-12 left-[72%] h-36 w-14 rounded-full bg-amber/10 blur-2xl animate-steam [animation-delay:4.5s]" />
            </div>
          </div>
        )}
        {/* Legibility + golden glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(20,13,9,0.92) 0%, rgba(28,19,13,0.55) 42%, rgba(28,19,13,0.25) 72%, rgba(28,19,13,0.45) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(200,137,43,0.20),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="container-x relative w-full pb-24 pt-36 md:pb-28">
        <div className="max-w-3xl">
          <motion.p {...rise(0.15)} className="overline mb-5 text-amber-soft">
            {site.tagline}
          </motion.p>

          <motion.h1
            {...rise(0.28)}
            className="font-display text-fluid-h1 font-medium text-cream"
          >
            Mongol&nbsp;Hann
          </motion.h1>

          <motion.p
            {...rise(0.42)}
            className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.32em] text-amber"
          >
            {site.subline}
          </motion.p>

          <motion.p
            {...rise(0.55)}
            className="mt-7 max-w-prose font-serif text-fluid-h3 italic leading-snug text-cream/90"
          >
            „{site.motto}“
          </motion.p>

          <motion.p {...rise(0.66)} className="mt-5 max-w-prose text-base leading-relaxed text-cream/75">
            {brandCopy.lead}
          </motion.p>

          <motion.div {...rise(0.8)} className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/speisekarte" className="btn btn-primary">
              <BookOpen size={18} strokeWidth={2} />
              Zur Speisekarte
            </Link>
            <a href="#buffets" className="btn btn-on-dark">
              Unsere Buffets
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#ueber"
        aria-label="Weiter scrollen"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cream/60 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.span
          className="block"
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
