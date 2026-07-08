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

export const menuPlaceholder = false;

// Hinweis zu Zusatzstoffen (von der Speisekarte, verbatim)
export const menuNote =
  'Alle Preise inklusive Bedienung und MwSt. Preisänderungen und Irrtümer vorbehalten. In allen warmen Gerichten sind Geschmacksverstärker enthalten! Auf Wunsch werden alle Gerichte auch ohne Geschmacksverstärker zubereitet.';

export const menu: MenuSection[] = [
  {
    id: 'suppen',
    title: 'Suppen',
    items: [
      { no: 'A 1', name: 'Peking Gulaschsuppe', price: '5,90' },
      { no: 'A 2', name: 'Chinesische Pilzsuppe', desc: 'mit Hühnerbrust', price: '6,00' },
      { no: 'A 3', name: 'Gemüsesuppe', price: '5,90' },
      { no: 'A 5', name: 'Eierblumensuppe', desc: 'mit Hühnerfleisch', price: '5,90' },
    ],
  },
  {
    id: 'vorspeisen',
    title: 'Vorspeisen',
    items: [
      { no: 'B 1', name: 'Frühlingsrolle Spezial', desc: 'mit süß-saurer Sauce', price: '5,90' },
      {
        no: 'B 2',
        name: 'Frühlingsrolle Spezial à la Mongol Hann',
        desc: 'für 2 Personen, mit knuspriger Ente und Krabben, mit süß-saurer Sauce',
        price: '13,00',
      },
      { no: 'B 4', name: 'Krabbensalat', price: '10,00' },
      { no: 'B 5', name: 'Gemischter Salat', price: '7,00' },
      { no: 'B 6', name: 'Kropok', desc: 'Krabbenchips', price: '5,80' },
    ],
  },
  {
    id: 'beilagen',
    title: 'Beilagen',
    items: [
      { no: 'B 7', name: 'Pommes frites', price: '4,90' },
      { no: 'B 8', name: 'Gebratener Reis', price: '4,90' },
      { no: 'B 9', name: 'Gebratene Nudeln', price: '4,90' },
      { no: 'B 10', name: 'Süß-saure Sauce', price: '3,90' },
      { no: 'B 11', name: 'Scharfe Sauce', price: '3,90' },
      { no: 'B 12', name: 'Knoblauchsauce', price: '3,90' },
      { no: 'B 13', name: 'Saté Sauce', price: '3,90' },
      { no: 'B 14', name: 'Reis', price: '3,90' },
    ],
  },
  {
    id: 'rind',
    title: 'Rindfleischgerichte',
    items: [
      { no: 'C 1', name: 'Rindfleisch mit Chop-Suey', price: '13,90' },
      { no: 'C 2', name: 'Rindfleisch mit Zwiebeln', price: '13,90' },
      { no: 'C 3', name: 'Rindfleisch à la Szechuan', desc: 'sehr scharf', price: '13,90' },
      { no: 'C 4', name: 'Rindfleisch mit Champignons', price: '13,90' },
      { no: 'C 5', name: 'Rindfleisch mit Cashewnüssen', desc: 'scharf', price: '13,90' },
      { no: 'C 6', name: 'Rindfleisch Spezial', desc: 'mit Knoblauchsauce, scharf', price: '13,90' },
    ],
  },
  {
    id: 'huhn',
    title: 'Hühnergerichte',
    items: [
      { no: 'H 1', name: 'Hühnerfleisch mit Chop-Suey', price: '13,90' },
      { no: 'H 2', name: 'Hühnerfleisch mit Champignons', price: '13,90' },
      { no: 'H 3', name: 'Hühnerfleisch à la Szechuan', desc: 'scharf', price: '13,90' },
      { no: 'H 4', name: 'Hühnerfleisch mit Cashewnüssen', desc: 'scharf', price: '13,90' },
      { no: 'H 5', name: 'Curry Hühnerfleisch', price: '13,90' },
      { no: 'H 6', name: 'Hühnerfleisch knusprig', desc: 'mit süß-saurer Sauce', price: '13,90' },
      { no: 'H 7', name: 'Hühnerfleisch knusprig', desc: 'mit scharfer Sauce', price: '13,90' },
      { no: 'H 8', name: 'Hühnerfleisch knusprig', desc: 'mit Knoblauchsauce, scharf', price: '13,90' },
    ],
  },
  {
    id: 'ente',
    title: 'Entengerichte',
    note: 'knusprig gebraten',
    items: [
      { no: 'E 1', name: 'Ente mit süß-saurer Sauce', price: '16,90' },
      { no: 'E 2', name: 'Ente mit Curry', price: '16,90' },
      { no: 'E 3', name: 'Ente mit Chop-Suey', price: '16,90' },
      { no: 'E 4', name: 'Ente mit Knoblauchsauce', price: '16,90' },
      { no: 'E 5', name: 'Ente à la Szechuan', desc: 'scharf', price: '16,90' },
    ],
  },
  {
    id: 'fisch',
    title: 'Fischgerichte',
    items: [
      { no: 'F 1', name: 'Fischfilet mit Champignonsauce', price: '13,90' },
      { no: 'F 2', name: 'Fisch süß-sauer', price: '13,90' },
      { no: 'F 3', name: 'Fischfilet mit Chop-Suey', price: '13,90' },
    ],
  },
  {
    id: 'hummer',
    title: 'Hummerkrabbengerichte',
    note: 'groß und frisch, ohne Schale',
    items: [
      { no: 'M 1', name: 'Hummerkrabben Chop-Suey', desc: 'verschiedenes Gemüse', price: '19,90' },
      { no: 'M 2', name: 'Hummerkrabben mit scharfer Sauce', price: '19,90' },
      { no: 'M 3', name: 'Hummerkrabben knusprig Spezial', desc: 'mit süß-saurer Sauce', price: '19,90' },
      { no: 'M 4', name: 'Hummerkrabben mit Knoblauchsauce', desc: 'scharf', price: '19,90' },
      { no: 'M 5', name: 'Hummerkrabben knusprig Spezial', desc: 'mit scharfer Sauce', price: '19,90' },
    ],
  },
  {
    id: 'nudeln',
    title: 'Nudelgerichte',
    items: [
      { no: 'N 1', name: 'Bami Goreng Spezial', price: '11,90' },
      { no: 'N 2', name: 'Gebratene Nudeln mit Hühnerfleisch', price: '11,90' },
      { no: 'N 3', name: 'Gebratene Nudeln mit Rindfleisch', price: '11,90' },
      {
        no: 'N 4',
        name: 'Gebratene Nudeln à la Mongol Hann',
        desc: 'mit Hummerkrabben, Rindfleisch und Hühnerfleisch',
        price: '14,90',
      },
    ],
  },
  {
    id: 'reis',
    title: 'Reisgerichte',
    items: [
      { no: 'R 1', name: 'Nasi Goreng Spezial', price: '11,90' },
      { no: 'R 2', name: 'Gebratener Eierreis mit Rindfleisch', price: '11,90' },
      { no: 'R 3', name: 'Gebratener Eierreis mit Hühnerfleisch', price: '11,90' },
      { no: 'R 4', name: 'Gebratener Eierreis mit Krabben', price: '14,90' },
      {
        no: 'R 5',
        name: 'Gebratener Reis à la Mongol Hann',
        desc: 'mit Hummerkrabben, Rindfleisch und Hühnerfleisch',
        price: '15,90',
      },
    ],
  },
  {
    id: 'vegetarisch',
    title: 'Vegetarische Spezialitäten',
    items: [
      { no: 'P 1', name: 'Sojakeime', price: '8,90' },
      { no: 'P 2', name: 'Chop-Suey', desc: 'verschiedenes Gemüse', price: '8,90' },
      { no: 'P 3', name: 'Morcheln mit Sojakeimen', price: '8,90' },
      { no: 'P 5', name: 'Champignons', price: '10,90' },
    ],
  },
  {
    id: 'kinder',
    title: 'Für unsere kleinen Gäste',
    note: 'bis 12 Jahre',
    items: [
      { no: 'G 1', name: 'Nudeln mit Hühnerfleisch', price: '7,90' },
      { no: 'G 2', name: 'Hühnerfleisch', desc: 'mit Champignons und Pommes frites', price: '7,90' },
      { no: 'G 3', name: 'Gebratener Reis mit Hühnerfleisch', price: '7,90' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    items: [
      { no: 'U 1', name: 'Lychee', price: '5,90' },
      { no: 'U 2', name: 'Gebackene Bananen mit Honig', price: '5,90' },
      { no: 'U 3', name: 'Gebackene Ananas mit Honig', price: '5,90' },
      { no: 'U 4', name: 'Gebackene Bananen mit Vanilleeis', price: '6,90' },
      { no: 'U 5', name: 'Gebackene Ananas mit Vanilleeis', price: '6,90' },
      { no: 'U 6', name: 'Eis mit verschiedenem chin. Obst und Sahne', price: '6,90' },
      { no: 'U 7', name: 'Gemischtes Eis und Sahne', price: '5,90' },
      { no: 'U 8', name: 'Vanille Softeis', price: '5,50' },
    ],
  },
];
