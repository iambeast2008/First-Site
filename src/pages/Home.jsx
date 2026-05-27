import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FEATURES, HOME_QUICK_LINKS, SERVER_IP, SERVER_PORT } from '../data';
import LegalLinks from '../components/LegalLinks';
import './Home.css';

export default function Home() {
  const { navigate, showToast } = useApp();
  const [copiedHost, setCopiedHost] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const copyHost = () => {
    navigator.clipboard.writeText(SERVER_IP).then(() => {
      setCopiedHost(true);
      showToast('Host address copied', 'success');
      setTimeout(() => setCopiedHost(false), 2500);
    });
  };

  const copyPort = () => {
    navigator.clipboard.writeText(SERVER_PORT).then(() => {
      setCopiedPort(true);
      showToast('Port copied', 'success');
      setTimeout(() => setCopiedPort(false), 2500);
    });
  };

  const handleQuickLink = (link) => {
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
      return;
    }
    navigate(link.route);
  };

  return (
    <div className="page-enter luxury-home-canvas">
      <section className="prime-hero-deck">
        <div className="hero-grid-matrix">
          <div className="hero-intel-column">
            <div className="live-status-pill">
              <span className="pulse-indicator" />
              <span className="pill-text">MIST NETWORK IS ONLINE</span>
            </div>

            <h1 className="cyber-brand-title">
              MIST <span className="gradient-glow-text">SMP</span>
            </h1>

            <p className="cyber-brand-tagline">
              A competitive vanilla-plus survival server with mist events, player-driven economy,
              and tactical raiding. Support the network with lifetime ranks and Mist Coins—all
              purchases go through our official Discord.
            </p>

            <div className="hero-action-dock custom-hex-dock">
              <button className="premium-cta-btn-quad primary-glow" onClick={() => navigate('ranks')}>
                <i className="fa-solid fa-crown" />
                <span>Ranks</span>
              </button>
              <button className="premium-cta-btn-quad cyan-glow" onClick={() => navigate('coins')}>
                <i className="fa-solid fa-coins" />
                <span>Coins</span>
              </button>
              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('store-info')}>
                <i className="fa-solid fa-circle-info" />
                <span>Store Info</span>
              </button>
              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('about')}>
                <i className="fa-solid fa-compass" />
                <span>About</span>
              </button>
              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('rules')}>
                <i className="fa-solid fa-gavel" />
                <span>Rules</span>
              </button>
              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('account')}>
                <i className="fa-solid fa-user" />
                <span>Account</span>
              </button>
            </div>
          </div>

          <div className="hero-terminal-column">
            <div className="cyber-terminal-shell">
              <div className="terminal-header-bar">
                <div className="window-dots"><span /><span /><span /></div>
                <span className="window-title">connection_hub.sys</span>
              </div>

              <div className="terminal-data-body">
                <div className="data-metric-row">
                  <span className="metric-label">HOST ADDRESS</span>
                  <div
                    className="terminal-ip-box port-box-variant"
                    onClick={copyHost}
                    onKeyDown={(e) => e.key === 'Enter' && copyHost()}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="ip-string-highlight text-cyan-accent">{SERVER_IP}</span>
                    <i className={copiedHost ? 'fa-solid fa-circle-check text-green' : 'fa-regular fa-copy'} />
                  </div>
                </div>

                <div className="data-metric-row">
                  <span className="metric-label">CONNECTION PORT (BEDROCK)</span>
                  <div
                    className="terminal-ip-box port-box-variant"
                    onClick={copyPort}
                    onKeyDown={(e) => e.key === 'Enter' && copyPort()}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="ip-string-highlight text-cyan-accent">{SERVER_PORT}</span>
                    <i className={copiedPort ? 'fa-solid fa-circle-check text-green' : 'fa-regular fa-copy'} />
                  </div>
                </div>

                <div className="terminal-grid-stats">
                  <div className="stat-terminal-card">
                    <span className="card-mini-label">VERSION</span>
                    <span className="card-big-value">1.9–26.1</span>
                  </div>
                  <div className="stat-terminal-card">
                    <span className="card-mini-label">CURRENT SEASON</span>
                    <span className="card-big-value" style={{ color: 'var(--accent-cyan)' }}>01</span>
                  </div>
                  <div className="stat-terminal-card">
                    <span className="card-mini-label">TICKRATE</span>
                    <span className="card-big-value">20.0 TPS</span>
                  </div>
                </div>

                <p className="terminal-footer-hint">
                  {copiedHost || copiedPort
                    ? '✓ Field copied successfully!'
                    : 'Click values above to copy. Java & Bedrock supported.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem-section-wrap">
        <div className="modern-section-header">
          <p className="micro-accent-title">SYSTEM ARCHITECTURE</p>
          <h2 className="macro-display-title">ENGINEERED FOR CHAOS</h2>
          <div className="header-bar-line" />
        </div>

        <div className="luxury-feature-grid">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="luxury-feature-card">
              <div className="card-glow-overlay" />
              <div className="luxury-icon-container">
                <i className={feat.icon} />
              </div>
              <div className="luxury-card-content">
                <h3 className="luxury-card-title">{feat.title}</h3>
                <p className="luxury-card-desc">{feat.desc}</p>
              </div>
              <div className="luxury-card-border-light" />
            </div>
          ))}
        </div>
      </section>

      <section className="home-quick-section">
        <div className="modern-section-header">
          <p className="micro-accent-title">COMMUNITY HUB</p>
          <h2 className="macro-display-title">CONNECT & SUPPORT</h2>
          <div className="header-bar-line" />
        </div>

        <div className="home-quick-grid">
          {HOME_QUICK_LINKS.map((link) => (
            <button
              key={link.title}
              type="button"
              className="home-quick-card"
              onClick={() => handleQuickLink(link)}
            >
              <i className={link.icon} aria-hidden="true" />
              <h3>{link.title}</h3>
              <p>{link.desc}</p>
            </button>
          ))}
        </div>

        <div className="home-legal-strip">
          <p>
            MIST SMP is not affiliated with Mojang AB or Microsoft. By using this site you agree to
            our policies.
          </p>
          <LegalLinks />
        </div>
      </section>
    </div>
  );
}
