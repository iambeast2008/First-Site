import React from 'react';
import { useApp } from '../context/AppContext';
import './Coins.css';

// Replace this with your actual Discord link
const DISCORD_INVITE_LINK = "https://discord.gg/PvnHdGkd9T";

const COIN_PACKS = [
  { id: 'pack-1', amount: 500, price: 1.99, popular: false, tier: 'Bronze Cache', bonus: 'Standard Rate', iconClass: 'fa-solid fa-coins', color: '#cd7f32' },
  { id: 'pack-2', amount: 1000, price: 3.59, popular: true, tier: 'Silver Hoard', bonus: '+20% Extra Coins', iconClass: 'fa-solid fa-coins', color: '#b4b4b4' },
  { id: 'pack-3', amount: 2500, price: 8.99, popular: false, tier: 'Gold Vault', bonus: '+25% Extra Coins', iconClass: 'fa-solid fa-vault', color: '#ffd700' },
  { id: 'pack-4', amount: 6000, price: 19.99, popular: false, tier: 'Mythic Treasury', bonus: '+33% Extra Coins', iconClass: 'fa-solid fa-gem', color: '#a335ee' },
];

export function Coins() {
  const handlePurchase = (packName) => {
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
            <div key={pack.id} className={`coin-card-modern ${pack.popular ? 'featured-card' : ''}`} style={{ '--card-accent': pack.color }}>
              {pack.popular && <div className="premium-ribbon">Best Value</div>}
              <div className="coin-display-aura"><i className={`${pack.iconClass} premium-icon`} style={{ color: pack.color }} /></div>
              <div className="value-block">
                <h3 className="coin-amount-text">{pack.amount.toLocaleString()} <span className="currency-label">Credits</span></h3>
                <div className="price-tag-badge">${pack.price.toFixed(2)}</div>
              </div>
              <button className={`btn-store-action ${pack.popular ? 'btn-store-featured' : ''}`} onClick={() => handlePurchase(pack.tier)}>
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

export function CoinDetail({ packId }) {
  const { navigate } = useApp();
  const pack = COIN_PACKS.find(p => p.id === packId) || COIN_PACKS[0];
  return (
    <div className="page-enter modern-store-theme">
      <button className="btn-back-premium" onClick={() => navigate('coins')}>Back</button>
      <div className="coin-card-modern" style={{ '--card-accent': pack.color, marginTop: 32 }}>
        <h2>{pack.tier}</h2>
        <button className="btn-store-action" onClick={() => window.location.href = DISCORD_INVITE_LINK}>Confirm Purchase via Discord</button>
      </div>
    </div>
  );
}