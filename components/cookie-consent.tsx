'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const STORAGE_KEY = 'mh-consent-v1';

type Categories = { funktional: true; vorlieben: boolean; statistiken: boolean; marketing: boolean };

const ALL_ON: Categories = { funktional: true, vorlieben: true, statistiken: true, marketing: true };
const ONLY_REQUIRED: Categories = { funktional: true, vorlieben: false, statistiken: false, marketing: false };

const OPTIONS: { key: keyof Categories; label: string; desc: string; locked?: boolean }[] = [
  { key: 'funktional', label: 'Funktional', desc: 'Für den Betrieb der Website notwendig. Immer aktiv.', locked: true },
  { key: 'vorlieben', label: 'Vorlieben', desc: 'Speichert Einstellungen wie Sprache oder Region.' },
  { key: 'statistiken', label: 'Statistiken', desc: 'Anonyme Auswertung der Nutzung zur Verbesserung.' },
  { key: 'marketing', label: 'Marketing', desc: 'Für personalisierte Inhalte und Reichweitenmessung.' },
];

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<Categories>(ONLY_REQUIRED);
  const reduce = useReducedMotion();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (choice: Categories) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choice, ts: Date.now() }));
    } catch {
      /* storage unavailable — banner simply won't persist */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          aria-modal="false"
          className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container-x">
            <div className="mx-auto max-w-3xl rounded-card border border-charcoal/10 bg-offwhite/95 p-5 shadow-lift backdrop-blur-md sm:p-6">
              <h2 className="font-display text-xl text-charcoal">Wir verwenden Cookies</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
                Wir nutzen Cookies, um unsere Website bestmöglich für Sie zu gestalten. Notwendige Cookies
                sind immer aktiv. Weitere Informationen finden Sie in unserer{' '}
                <Link href="/datenschutzerklaerung" className="link-underline font-medium text-chili">
                  Datenschutzerklärung
                </Link>
                .
              </p>

              <AnimatePresence initial={false}>
                {showSettings && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 space-y-3 overflow-hidden"
                  >
                    {OPTIONS.map((o) => (
                      <li key={o.key} className="flex items-start gap-3 rounded-lg bg-cream/70 p-3">
                        <input
                          id={`consent-${o.key}`}
                          type="checkbox"
                          checked={o.locked ? true : prefs[o.key]}
                          disabled={o.locked}
                          onChange={(e) => setPrefs((p) => ({ ...p, [o.key]: e.target.checked }))}
                          className="mt-1 h-4 w-4 accent-chili disabled:opacity-60"
                        />
                        <label htmlFor={`consent-${o.key}`} className="cursor-pointer">
                          <span className="block text-sm font-semibold text-charcoal">{o.label}</span>
                          <span className="block text-xs text-charcoal/65">{o.desc}</span>
                        </label>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end">
                {!showSettings ? (
                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="btn btn-ghost order-3 justify-center !py-2.5 text-sm sm:order-1"
                  >
                    Einstellungen
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => save({ ...prefs, funktional: true })}
                    className="btn btn-ghost order-3 justify-center !py-2.5 text-sm sm:order-1"
                  >
                    Auswahl speichern
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => save(ONLY_REQUIRED)}
                  className="btn btn-ghost order-2 justify-center !py-2.5 text-sm"
                >
                  Ablehnen
                </button>
                <button
                  type="button"
                  onClick={() => save(ALL_ON)}
                  className="btn btn-primary order-1 justify-center !py-2.5 text-sm sm:order-3"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
