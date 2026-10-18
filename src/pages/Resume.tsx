import { Link } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  return (
    <main className="resume-page">
      <div className="resume-actions">
        <Link to="/" className="resume-action" data-cursor="disable">
          ← Zurück zur Startseite
        </Link>
        <button
          className="resume-action resume-print"
          onClick={() => window.print()}
          type="button"
        >
          Lebenslauf drucken / als PDF speichern
        </button>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <div className="resume-header-copy">
            <p className="resume-eyebrow">Lebenslauf</p>
            <h1>Shekib Hussain Khil</h1>
            <p className="resume-title">Fachinformatiker für Anwendungsentwicklung</p>
            <div className="resume-contact">
              <span>Tegelerstraße 8, 40789 Monheim</span>
              <a href="tel:+4917644767986">+49 176 44767986</a>
              <a href="mailto:bewerbung@shekib.me">bewerbung@shekib.me</a>
            </div>
            <p className="resume-birth">Geboren am 31. Januar 2003 in Baghlan</p>
          </div>
          <img
            className="resume-photo"
            src="/images/mypicresume.png"
            alt="Shekib Hussain Khil"
          />
        </header>

        <section className="resume-section">
          <h2>Berufserfahrung</h2>
          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div>
                <h3>Webagentur, selbstständig</h3>
                <p>Kaizen Webworks</p>
              </div>
              <time>Nov 2025 – Heute</time>
            </div>
            <ul>
              <li>
                Entwicklung responsiver Firmenwebseiten und Kundenportale mit
                HTML, CSS, JavaScript und AWS.
              </li>
              <li>
                Backend-Implementierung und Datenbankanbindungen für 5–10
                Kundenprojekte.
              </li>
              <li>
                Optimierung von Kundenabläufen durch Self-Service-Portale
                (ca. 70 % Effizienzsteigerung).
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div>
                <h3>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</h3>
                <p>ProLeiT by Schneider Electric</p>
              </div>
              <time>Aug 2023 – Jan 2026</time>
            </div>
            <ul>
              <li>Prozessvisualisierung (Simatic Step 7 / SPS) und Test von Anlagenfunktionen.</li>
              <li>
                Parametrierung im Automatisierungssystem und Mitwirkung an
                internen Kundenportalen.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div>
                <h3>Servicekraft (Teilzeit)</h3>
                <p>Familien Restaurant</p>
              </div>
              <time>Aug 2022 – Mär 2023</time>
            </div>
            <ul>
              <li>
                Empfang und Platzierung der Gäste, Aufnahme von Bestellungen
                sowie fachgerechtes Servieren.
              </li>
              <li>
                Tische eindecken und vorbereiten, Geschirr abräumen und Tische
                reinigen.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div>
                <h3>Verkäufer (Minijob)</h3>
                <p>Papperts Bäckerei</p>
              </div>
              <time>Nov 2021 – Jul 2023</time>
            </div>
            <ul>
              <li>Kundenbedienung, Kassiertätigkeit, Brötchen backen und belegen.</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Ausbildung</h2>
          <div className="resume-entry resume-education">
            <div className="resume-entry-heading">
              <h3>Fachinformatiker für Anwendungsentwicklung</h3>
              <time>Aug 2023 – Jan 2026</time>
            </div>
            <p>Heinrich-Hertz-Berufskolleg Düsseldorf</p>
            <p>
              Schwerpunkte: Webentwicklung (Java), Softwareentwicklung
              (Python), SQL und Netzwerke.
            </p>
          </div>
          <div className="resume-entry resume-education">
            <div className="resume-entry-heading">
              <h3>Fachhochschulreife</h3>
              <time>Sep 2021 – Jul 2022</time>
            </div>
            <p>Fachoberschule Marktheidenfeld</p>
          </div>
          <div className="resume-entry resume-education">
            <div className="resume-entry-heading">
              <h3>Mittlerer Schulabschluss</h3>
              <time>Sep 2019 – Jul 2021</time>
            </div>
            <p>Städtische Wirtschaftsschule Würzburg</p>
          </div>
        </section>

        <section className="resume-section resume-skills">
          <h2>Fähigkeiten</h2>
          <dl>
            <div>
              <dt>Programmierung</dt>
              <dd>C#, Java, Python, HTML, CSS, JavaScript, SQL</dd>
            </div>
            <div>
              <dt>Frameworks &amp; Tools</dt>
              <dd>WPF, MVVM, Flask, .NET, Git, VS Code, SQL Server</dd>
            </div>
            <div>
              <dt>KI &amp; Data Science</dt>
              <dd>Prompt Engineering, Generative AI, Machine Learning</dd>
            </div>
            <div>
              <dt>Sprachen</dt>
              <dd>
                Deutsch (fließend), Englisch (fließend), Dari
                (Muttersprache), Pashtu (fließend), Hindi/Urdu (Anfänger)
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </main>
  );
};

export default Resume;
