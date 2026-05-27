import { JOIN_STEPS } from '../data';
import LegalLinks from '../components/LegalLinks';
import './About.css';

export default function About() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">The Manifesto</p>
          <h2 className="section-title">Forged In Innovation</h2>
        </div>

        <p className="page-intro">
          MIST SMP is a competitive vanilla-plus survival network built for players who want
          skill-based progression, faction strategy, and high-stakes raiding—not inflated pay-to-win
          economies. This site is your hub for server info, store packages, account sign-in, and
          community policies.
        </p>

        <div className="narrative-block">
          We reject the generic, hyper-inflated economy architectures commonly found across modern
          networks. Instead, we deliver a meticulously balance-tuned landscape where individual
          performance, technical faction strategy, and raw combat skill dictate dominance. Store
          ranks and coins provide cosmetic and quality-of-life benefits only—they never break
          competitive fairness.
        </div>

        <div className="section-header" style={{ marginTop: 56 }}>
          <p className="section-label">Onboarding Guide</p>
          <h2 className="section-title">Four Steps To Get Started</h2>
        </div>

        <div className="steps-container">
          {JOIN_STEPS.map(step => (
            <div key={step.num} className="step-node">
              <span className="step-number">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <div className="about-legal-footer">
          <p>Questions about purchases, privacy, or conduct? Use the links below.</p>
          <LegalLinks />
        </div>
      </div>
    </div>
  );
}
