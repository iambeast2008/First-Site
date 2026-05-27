import { LEGAL_LAST_UPDATED, TERMS_SECTIONS } from '../data/legal';
import LegalLinks from '../components/LegalLinks';
import './Legal.css';

export default function Terms() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Legal</p>
          <h2 className="section-title">Terms of Service</h2>
        </div>

        <div className="legal-doc">
          <p className="legal-updated">Last updated: {LEGAL_LAST_UPDATED}</p>
          <p className="page-intro legal-intro">
            These Terms govern your use of the MIST SMP website. By using the Site, you agree to
            these Terms and to our server rules and store policies where applicable.
          </p>

          {TERMS_SECTIONS.map(section => (
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
