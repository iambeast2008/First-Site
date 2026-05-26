import { useApp } from '../context/AppContext';
import { RANKS } from '../data';
import './Ranks.css';

export default function Ranks() {
  const { navigate } = useApp();
  const DISCORD_INVITE_LINK = "https://discord.gg/PvnHdGkd9T";
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Premium Support Tiers</p>
          <h2 className="section-title">Network Ranks</h2>
        </div>
        <div className="rank-matrix">
          {RANKS.map(rank => (
            <div key={rank.id} className={`rank-card ${rank.className}`}>
              <span className="rank-badge">{rank.badge}</span>
              <h3 className="rank-name">{rank.name}</h3>
              <div className="rank-price-tier">
                <span className="price-currency">$</span>
                <span className="price-amt">{rank.price}</span>
                <span className="price-term">/Monthly</span>
              </div>
              <ul className="rank-perks-summary">
                {rank.perks.map(perk => (
                  <li key={perk}>
                    <i className="fa-solid fa-circle-check" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="btn-store-action" onClick={() => window.location.href = DISCORD_INVITE_LINK}>Confirm Purchase via Discord</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
