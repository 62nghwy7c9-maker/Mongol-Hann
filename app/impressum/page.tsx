import type { Metadata } from 'next';
import { locations } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von Mongol Hann – Chinesisches & Mongolisches Restaurant in Düren und Kerpen.',
  alternates: { canonical: '/impressum' },
  robots: { index: false, follow: true },
};

// NOTE: Rechtlich verbindliche Angaben bitte vor Veröffentlichung prüfen und
// die mit [ ] markierten Platzhalter durch die echten Betreiberdaten ersetzen.
export default function ImpressumPage() {
  return (
    <div className="bg-cream pb-[var(--space-section)] pt-28 md:pt-36">
      <div className="container-x">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mt-2 font-display text-fluid-h2">Impressum</h1>
        <div className="mt-8 legal">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            <span className="placeholder">[Firmenname / Inhaber]</span>
            <br />
            Mongol Hann – Chinesisches &amp; Mongolisches Restaurant
            <br />
            {locations[0].address}
          </p>

          <h2>Vertreten durch</h2>
          <p><span className="placeholder">[Vor- und Nachname des Inhabers / Geschäftsführers]</span></p>

          <h2>Kontakt</h2>
          <p>
            Telefon Düren: <a href={`tel:${locations[0].phoneHref}`}>{locations[0].phone}</a>
            <br />
            Telefon Kerpen: <a href={`tel:${locations[1].phoneHref}`}>{locations[1].phone}</a>
            <br />
            E-Mail: <span className="placeholder">[E-Mail-Adresse]</span>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            <span className="placeholder">[USt-IdNr., falls vorhanden]</span>
          </p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            <span className="placeholder">[Name]</span>
            <br />
            {locations[0].address}
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
          </p>
        </div>
      </div>
    </div>
  );
}
