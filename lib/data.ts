// ─────────────────────────────────────────────────────────────
// Mongol Hann — content source of truth
// All German copy is verbatim from the build spec. Do not paraphrase.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Mongol Hann',
  tagline: 'Chinesisches & Mongolisches Restaurant',
  subline: 'IN DÜREN und KERPEN',
  url: 'https://mongolhann.com',
  // The "Speisekarte herunterladen" PDF. Drop the real file at /public/speisekarte.pdf.
  menuPdf: '/speisekarte.pdf',
  motto: 'Die Essenz des Essens ist der Geschmack.',
} as const;

export const brandCopy = {
  lead: 'Mongol Hann Restaurant bedeutet: in gemütlicher Atmosphäre miteinander genießen, trinken, essen und feiern. Dabei legen wir großen Wert auf die Frische und die Natürlichkeit der Zutaten.',
  philosophy:
    'Unsere Küchenphilosophie ist es, die Tradition mit der Moderne zu verbinden und dabei das Wesentliche am Essen zu betonen – den Geschmack!',
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Hauptseite', href: '#top' },
  { label: 'Buffets', href: '#buffets' },
  { label: 'Speisekarte', href: '#speisekarte' },
  { label: 'Kontakt', href: '#kontakt' },
];

// ── Buffet price blocks ───────────────────────────────────────
export type Buffet = {
  id: string;
  name: string;
  kicker: string;
  price: string;
  unit: string;
  when: { label: string; time: string }[];
  note?: string;
  extra?: { price: string; unit: string; label: string };
};

export const buffets: Buffet[] = [
  {
    id: 'mittag',
    name: 'Chinesisches Mittagsbuffet',
    kicker: 'Mittags',
    price: '14,90',
    unit: 'pro Person',
    when: [{ label: 'Montag bis Samstag (außer an Feiertagen)', time: '12:00–14:30' }],
    note: 'Kinder ab 3 und unter 10 Jahren: 1/2 Preis',
    extra: { price: '24,90', unit: 'pro Person', label: 'Sonntag + Feiertags · 12:00–22:30' },
  },
  {
    id: 'abend',
    name: 'Großes chinesisches & mongolisches Abendbuffet',
    kicker: 'Abends',
    price: '24,90',
    unit: 'pro Person',
    when: [{ label: 'Montag bis Sonntag', time: '18:00–22:30' }],
  },
  {
    id: 'happyhour',
    name: 'Happy Hour',
    kicker: 'Sonntags',
    price: '19,90',
    unit: 'pro Person',
    when: [{ label: 'Jeden Sonntag', time: '15:00–17:00' }],
    note: 'Kinder ab 3 und unter 10 Jahren: 1/2 Preis · Keine Happy Hour: Ostersonntag, Pfingstsonntag, Heiligabend, Silvester, Muttertag',
  },
];

// ── Feature badges ────────────────────────────────────────────
export type Feature = { icon: 'quality' | 'fresh' | 'buffet'; title: string; sub: string };

export const features: Feature[] = [
  { icon: 'quality', title: 'Kulinarisch wertvoll', sub: 'Qualität und Wert im Kern jedes Gerichts' },
  { icon: 'fresh', title: 'Frische Zutaten', sub: 'Frisch und täglich zubereitet' },
  { icon: 'buffet', title: 'Buffet & Mehr', sub: 'Großzügig auftischen, gemeinsam genießen' },
];

// ── Locations ─────────────────────────────────────────────────
export type Location = {
  city: string;
  address: string;
  phone: string;
  phoneHref: string;
  hours: { days: string; times: string[] }[];
  mapsQuery: string;
};

export const locations: Location[] = [
  {
    city: 'Düren',
    address: 'Josef-Schregel-Straße 29, 52349 Düren',
    phone: '02421 6939233',
    phoneHref: '+4924216939233',
    hours: [
      { days: 'Mo–Sa', times: ['12:00–15:00', '17:30–22:30'] },
      { days: 'So', times: ['12:00–22:30'] },
    ],
    mapsQuery: 'Mongol Hann, Josef-Schregel-Straße 29, 52349 Düren',
  },
  {
    city: 'Kerpen',
    address: 'Sindorfer Str. 7-21, 50171 Kerpen',
    phone: '02237 9758288',
    phoneHref: '+4922379758288',
    hours: [
      { days: 'Mo–Sa', times: ['12:00–15:00', '17:30–22:30'] },
      { days: 'So', times: ['12:00–22:30'] },
    ],
    mapsQuery: 'Mongol Hann, Sindorfer Str. 7-21, 50171 Kerpen',
  },
];

// ── Speisekarte (full HTML menu) ──────────────────────────────
// PLACEHOLDER STRUCTURE. Replace items with the real dish list from the
// menu PDF. Layout, styling and animation already handle any length.
export type MenuItem = { no?: string; name: string; desc?: string; price?: string };
export type MenuSection = { id: string; title: string; note?: string; items: MenuItem[] };

export const menuPlaceholder = true; // set false once real dishes are in

export const menu: MenuSection[] = [
  {
    id: 'vorspeisen',
    title: 'Vorspeisen',
    note: 'Beispielhafte Struktur – Gerichte werden durch die echte Speisekarte ersetzt.',
    items: [
      { no: '1', name: 'Frühlingsrolle', desc: 'Knusprig gebacken, mit süß-saurer Sauce' },
      { no: '2', name: 'Gebratene Wan-Tan', desc: 'Mit würziger Füllung' },
      { no: '3', name: 'Sesambällchen', desc: 'Warm serviert' },
    ],
  },
  {
    id: 'suppen',
    title: 'Suppen',
    items: [
      { no: '10', name: 'Pekingsuppe', desc: 'Scharf-sauer' },
      { no: '11', name: 'Hühnersuppe mit Mais' },
    ],
  },
  {
    id: 'hauptgerichte',
    title: 'Hauptgerichte',
    items: [
      { no: '20', name: 'Knuspriges Entenfleisch', desc: 'Mit Gemüse der Saison' },
      { no: '21', name: 'Rindfleisch mit Brokkoli' },
      { no: '22', name: 'Gebratene Nudeln mit Gemüse', desc: 'Vegetarisch' },
    ],
  },
  {
    id: 'mongolisch',
    title: 'Mongolisch vom Grill',
    items: [
      { no: '30', name: 'Mongolischer Grillteller', desc: 'Nach Wahl frisch am Buffet zubereitet' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    items: [
      { no: '40', name: 'Gebackene Banane', desc: 'Mit Honig' },
      { no: '41', name: 'Frisches Obst' },
    ],
  },
];
