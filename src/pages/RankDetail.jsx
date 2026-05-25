/**
 * RankDetail.jsx
 *
 * SECURITY FIX:
 * Removed dangerouslySetInnerHTML. The original code used a regex replace
 * to build HTML strings from data values and injected them directly into
 * the DOM. This is replaced by the <RichText> component which constructs
 * safe JSX — no HTML string is ever parsed or executed.
 *
 * ACCESSIBILITY:
 * - Back button has explicit aria-label.
 * - Purchase panel uses a <section> landmark.
 * - Price is wrapped in a <data> element with machine-readable value.
 */

import { useApp } from '../context/AppContext';
import { RANKS } from '../data';
import RichText from '../components/RichText';
import './Ranks.css';

export default function RankDetail({ rankId }) {
  const { navigate, initiateCheckout } = useApp();
  const rank = RANKS.find(r => r.id === rankId);
  const DISCORD_INVITE_LINK = "https://discord.gg/PvnHdGkd9T";

  // Guard: unknown rank ID — redirect back to listing
  if (!rank) {
    return (
      <div className="page-enter">
        <div className="section-wrap" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>Rank not found.</p>
          <button
            className="btn-primary"
            style={{ marginTop: 24 }}
            onClick={() => navigate('ranks')}
          >
            Back to Ranks
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="detail-hero">
          <button
            className="back-nav-link"
            onClick={() => navigate('ranks')}
            aria-label="Back to all ranks"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Back to Ranks
          </button>
          <h2
            className="section-title"
            style={{ fontSize: 48, color: rank.color }}
          >
            {rank.name.toUpperCase()} RANK SPECIFICATION
          </h2>
        </div>

        <div className="perks-expanded-grid">
          {/* Left: perk descriptions */}
          <div className="perks-list-full">
            {rank.detailPerks.map(perk => (
              <div key={perk.title} className="perk-extended-node">
                <i
                  className={perk.icon}
                  style={{ color: rank.color }}
                  aria-hidden="true"
                />
                <div className="perk-extended-info">
                  <h5>{perk.title}</h5>
                  {/* SECURITY: RichText replaces dangerouslySetInnerHTML */}
                  <p><RichText text={perk.desc} /></p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: purchase panel */}
          <section className="purchase-sticky-panel" aria-label="Purchase options">
            <h4>Order Initialization</h4>
            <p>
              Unlock continuous, lifetime operational status for the{' '}
              {rank.name} network tier package.
            </p>
            <data
              value={rank.price}
              className="price-big"
            >
              ${rank.price.toFixed(2)}
            </data>
            <button className="btn-store-action" onClick={() => window.location.href = DISCORD_INVITE_LINK}>Confirm Purchase via Discord</button>
          </section>
        </div>
      </div>
    </div>
  );
}
