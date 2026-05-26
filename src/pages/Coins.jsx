import { COIN_PACKS, DISCORD_INVITE_LINK } from '../data';
import './Coins.css';

export default function Coins() {
  const handlePurchase = () => {
    window.location.href = DISCORD_INVITE_LINK;
  };

  return (
    <div className="page-enter modern-store-theme">
      <div className="section-wrap">
        <div className="section-header store-hero">
          <p className="section-label-premium">In-Game Economy Hub</p>
          <h2 className="section-title-modern">Acquire <span className="text-glow">Mist Coins</span></h2>
        </div>
        <div className="coins-grid-modern">
          {COIN_PACKS.map((pack) => (
            <div
              key={pack.id}
              className={`coin-card-modern ${pack.popular ? 'featured-card' : ''}`}
              style={{ '--card-accent': pack.color }}
            >
              {pack.popular && <div className="premium-ribbon">Best Value</div>}
              <div className="card-header-meta">
                <span className="tier-tag" style={{ color: pack.color }}>{pack.tier}</span>
                <span className="bonus-tag">{pack.bonus}</span>
              </div>
              <div className="coin-display-aura">
                <i
                  className={`${pack.iconClass ?? 'fa-solid fa-coins'} premium-icon`}
                  style={{ color: pack.color }}
                  aria-hidden="true"
                />
              </div>
              <div className="value-block">
                <h3 className="coin-amount-text">
                  {pack.amount.toLocaleString()} <span className="currency-label">Credits</span>
                </h3>
                <div className="price-tag-badge">${pack.price.toFixed(2)}</div>
              </div>
              <button
                className={`btn-store-action ${pack.popular ? 'btn-store-featured' : ''}`}
                onClick={handlePurchase}
              >
                <span>Open Ticket to Pay</span>
                <i className="fa-solid fa-arrow-right-long" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
