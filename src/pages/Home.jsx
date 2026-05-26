import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FEATURES, SERVER_IP, SERVER_PORT } from '../data';
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

  return (
    <div className="page-enter luxury-home-canvas">
      <section className="prime-hero-deck">
        <div className="hero-grid-matrix">
          <div className="hero-intel-column">
            <div className="live-status-pill">
              <span className="pulse-indicator"></span>
              <span className="pill-text">MIST NETWORK IS ONLINE</span>
            </div>

            <h1 className="cyber-brand-title">
              MIST <span className="gradient-glow-text">SMP</span>
            </h1>

            <p className="cyber-brand-tagline">
              Dive into a cutthroat, high-stakes vanilla+ survival landscape.
              Navigate localized anomalies, conquer seasonal leaderboards, and engage in tactical base raiding.
            </p>

            <div className="hero-action-dock custom-quad-dock">
              <button className="premium-cta-btn-quad primary-glow" onClick={() => navigate('ranks')}>
                <i className="fa-solid fa-crown" />
                <span>RANKS</span>
              </button>

              <button className="premium-cta-btn-quad cyan-glow" onClick={() => navigate('coins')}>
                <i className="fa-solid fa-coins" />
                <span>COINS</span>
              </button>

              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('about')}>
                <i className="fa-solid fa-circle-info" />
                <span>ABOUT</span>
              </button>

              <button className="premium-cta-btn-quad grey-glow" onClick={() => navigate('rules')}>
                <i className="fa-solid fa-gavel" />
                <span>RULES</span>
              </button>
            </div>
          </div>

          <div className="hero-terminal-column">
            <div className="cyber-terminal-shell">
              <div className="terminal-header-bar">
                <div className="window-dots"><span></span><span></span><span></span></div>
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
                    <span className="card-big-value">1.9-26.1</span>
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
                    : 'Click individual values above to copy instantly.'}
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
          <div className="header-bar-line"></div>
        </div>

        <div className="luxury-feature-grid">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="luxury-feature-card">
              <div className="card-glow-overlay"></div>

              <div className="luxury-icon-container">
                <i className={feat.icon} />
              </div>

              <div className="luxury-card-content">
                <h3 className="luxury-card-title">{feat.title}</h3>
                <p className="luxury-card-desc">{feat.desc}</p>
              </div>

              <div className="luxury-card-border-light"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
