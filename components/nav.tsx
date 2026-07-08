'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { nav, site, locations } from '@/lib/data';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('top');
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const onHome = pathname === '/';

  // Solidify nav after leaving the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy for active section (home only)
  useEffect(() => {
    if (!onHome) return;
    const ids = nav.map((n) => n.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [onHome]);

  // Lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const resolve = (href: string) => (onHome ? href : `/${href}`);
  const solid = scrolled || !onHome;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-out-soft ${
          solid
            ? 'border-b border-charcoal/10 bg-cream/85 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(43,32,24,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex items-center justify-between py-3.5 md:py-4" aria-label="Hauptnavigation">
          {/* Wordmark */}
          <Link
            href={onHome ? '#top' : '/'}
            className="group flex flex-col leading-none"
            aria-label="Mongol Hann — zur Startseite"
          >
            <span
              className={`font-display text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                solid ? 'text-charcoal' : 'text-cream'
              }`}
            >
              Mongol&nbsp;Hann
            </span>
            <span
              className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.28em] transition-colors duration-300 ${
                solid ? 'text-amber' : 'text-amber-soft'
              }`}
            >
              Düren · Kerpen
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive = onHome && active === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={resolve(item.href)}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                      solid ? 'text-charcoal/80 hover:text-chili' : 'text-cream/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-amber transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={`tel:${locations[0].phoneHref}`}
                className={`btn ${solid ? 'btn-primary' : 'btn-on-dark'} !px-5 !py-2.5 text-sm`}
              >
                <Phone size={16} strokeWidth={2} />
                Anrufen
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
              solid ? 'text-charcoal' : 'text-cream'
            }`}
            aria-label="Menü öffnen"
            aria-expanded={open}
          >
            <Menu size={26} strokeWidth={1.75} />
          </button>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-cream md:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex items-center justify-between py-3.5">
              <span className="font-display text-xl text-charcoal">Mongol&nbsp;Hann</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal"
                aria-label="Menü schließen"
              >
                <X size={26} strokeWidth={1.75} />
              </button>
            </div>
            <div className="hairline mx-6" />
            <ul className="flex flex-1 flex-col justify-center gap-2 px-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: reduce ? 0 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={resolve(item.href)}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-4xl text-charcoal"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="px-8 pb-10">
              <a href={`tel:${locations[0].phoneHref}`} className="btn btn-primary w-full justify-center">
                <Phone size={18} /> {locations[0].phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
