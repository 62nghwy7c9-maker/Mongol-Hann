import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz bei Mongol Hann gemäß DSGVO.',
  alternates: { canonical: '/datenschutzerklaerung' },
  robots: { index: false, follow: true },
};

// NOTE: Vorlage. Bitte vor Veröffentlichung juristisch prüfen lassen und
// die [ ]-Platzhalter mit den echten Angaben füllen.
export default function DatenschutzPage() {
  return (
    <div className="bg-cream pb-[var(--space-section)] pt-28 md:pt-36">
      <div className="container-x">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="mt-2 font-display text-fluid-h2">Datenschutzerklärung</h1>
        <div className="mt-8 legal">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
            sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            <span className="placeholder">[Firmenname / Inhaber]</span> – Mongol Hann
            <br />
            <span className="placeholder">[Anschrift]</span>
            <br />
            E-Mail: <span className="placeholder">[E-Mail-Adresse]</span>
          </p>

          <h2>3. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet
            (<span className="placeholder">[Hoster, z. B. Vercel Inc.]</span>). Die
            personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
            des Hosters gespeichert. Das Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber
            unseren potenziellen und bestehenden Gästen (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
            einer sicheren, schnellen Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f
            DSGVO).
          </p>

          <h2>4. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
            Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
            -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
            Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
            Datenquellen wird nicht vorgenommen.
          </p>

          <h2>5. Cookies &amp; Einwilligung</h2>
          <p>
            Unsere Website verwendet notwendige (funktionale) Cookies sowie – nur nach Ihrer
            ausdrücklichen Einwilligung – Cookies für Vorlieben, Statistiken und Marketing. Ihre
            Einwilligung verwalten Sie jederzeit über den Cookie-Hinweis. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. a DSGVO bzw. § 25 TDDDG.
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Auf dieser Website binden wir Karten des Dienstes Google Maps ein (Anbieter: Google
            Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Die Karten werden erst
            nach Ihrem ausdrücklichen Klick („Karte laden“) geladen; erst dann werden Daten – u. a.
            Ihre IP-Adresse – an Google übertragen. Rechtsgrundlage ist Ihre Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen:{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>

          <h2>8. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns telefonisch kontaktieren, wird Ihre Anfrage inklusive der daraus
            hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns
            gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <p className="mt-8 text-sm text-charcoal/55">
            Stand: <span className="placeholder">[Monat/Jahr eintragen]</span>. Diese Erklärung ist
            eine Vorlage und sollte vor der Veröffentlichung rechtlich geprüft werden.
          </p>
        </div>
      </div>
    </div>
  );
}
