import { RULES } from '../data';
import LegalLinks from '../components/LegalLinks';
import './Rules.css';

export default function Rules() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Operational Directives</p>
          <h2 className="section-title">Network Ruleset</h2>
        </div>

        <p className="page-intro">
          These rules apply on the MIST SMP Minecraft server, in our Discord community, and when
          using this website. Violations may result in warnings, restrictions, or permanent bans.
          Store purchases have additional policies—see the links below.
        </p>

        <div className="rules-wrapper">
          {RULES.map(rule => (
            <div key={rule.num} className="rule-card-node">
              <span className="rule-index-num">{rule.num}</span>
              <div className="rule-body">
                <h4>{rule.title}</h4>
                <p>{rule.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rules-legal-footer">
          <p>
            MIST SMP is not affiliated with Mojang AB or Microsoft. By playing, purchasing, or
            using this site, you agree to our community standards and legal terms.
          </p>
          <LegalLinks />
        </div>
      </div>
    </div>
  );
}
