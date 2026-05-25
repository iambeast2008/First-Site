import { RULES } from '../data';
import './Rules.css';

export default function Rules() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Operational Directives</p>
          <h2 className="section-title">Network Ruleset</h2>
        </div>
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
      </div>
    </div>
  );
}
