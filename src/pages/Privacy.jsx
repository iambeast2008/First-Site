import { LEGAL_LAST_UPDATED, PRIVACY_SECTIONS } from '../data/legal';
import LegalLinks from '../components/LegalLinks';
import './Legal.css';

export default function Privacy() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Legal</p>
          <h2 className="section-title">Privacy Policy</h2>
        </div>

        <div className="legal-doc">
          <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
          <p className="page-intro legal-intro">
            This policy explains what information MIST SMP collects through this website and how
            we use it. It applies only to the Site — not to third-party services such as Discord
            or Minecraft itself.
          </p>

          {PRIVACY_SECTIONS.map(section => (
            <section key={section.title} className="legal-section">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}

          <div className="legal-page-footer">
            <LegalLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
