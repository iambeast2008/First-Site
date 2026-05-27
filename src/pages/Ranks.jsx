import { RANKS, DISCORD_INVITE_LINK } from '../data';
import StoreNotice from '../components/StoreNotice';
import LegalLinks from '../components/LegalLinks';
import './Ranks.css';

export default function Ranks() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Premium Support Tiers</p>
          <h2 className="section-title">Network Ranks</h2>
        </div>

        <StoreNotice />

        <div className="rank-matrix">
          {RANKS.map((rank) => (
            <div
              key={rank.id}
              className={`rank-card ${rank.className}`}
              style={{ '--rank-accent': rank.color }}
            >
              <span className="rank-badge">{rank.badge}</span>
              <h3 className="rank-name" style={{ color: rank.color }}>{rank.name}</h3>
              <div className="rank-price-tier">
                <span className="price-currency">$</span>
                <span className="price-amt">{rank.price}</span>
                <span className="price-term">one-time</span>
              </div>
              <ul className="rank-perks-summary">
                {rank.perks.map((perk) => (
                  <li key={perk}>
                    <i className="fa-solid fa-circle-check" style={{ color: rank.color }} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={DISCORD_INVITE_LINK}
                className="btn-rank-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Confirm Purchase via Discord
              </a>
            </div>
          ))}
        </div>

        <div className="store-page-footer">
          <LegalLinks />
        </div>
      </div>
    </div>
  );
}
