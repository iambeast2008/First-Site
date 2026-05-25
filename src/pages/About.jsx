import { JOIN_STEPS } from '../data';
import './About.css';

export default function About() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">The Manifesto</p>
          <h2 className="section-title">Forged In Innovation</h2>
        </div>
        <div className="narrative-block">
          MIST SMP redefines the structural limits of regular multiplayer survival environments.
          We reject the generic, hyper-inflated economy architectures commonly found across modern
          networks. Instead, we deliver a meticulously balance-tuned, highly competitive
          vanilla-plus landscape where individual performance, technical faction strategy, and raw
          combat skill dictate dominance.
        </div>

        <div className="section-header" style={{ marginTop: 56 }}>
          <p className="section-label">Onboarding Guide</p>
          <h2 className="section-title">Three Steps To Deployment</h2>
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
      </div>
    </div>
  );
}
