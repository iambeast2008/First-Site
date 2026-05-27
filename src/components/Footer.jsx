import { useApp } from '../context/AppContext';
import './Footer.css';

export default function Footer() {
  const { navigate } = useApp();

  return (
    <footer>
      <div className="footer-inner-layout">
        <div className="footer-brand-info">
          <button className="logo-area-footer" onClick={() => navigate('home')}>
            <div className="footer-logo-icon">
              <i className="fa-solid fa-cloud-mist" style={{ color: '#000', fontSize: 12 }} />
            </div>
            <span className="footer-logo-text">MIST SMP</span>
          </button>
          <p className="footer-legal-copy">
            MIST SMP is not affiliated with Mojang AB or Microsoft.
            <br />
            All purchases are final. See{' '}
            <button className="footer-link footer-link-inline" onClick={() => navigate('store-info')}>
              Store Info
            </button>{' '}
            for policy details.
          </p>
        </div>
        <div className="footer-links">
          {['home','about','ranks','coins','rules','store-info'].map(r => (
            <button key={r} className="footer-link" onClick={() => navigate(r)}>
              {r.replace('-', ' ')}
            </button>
          ))}
          <button className="footer-link" onClick={() => navigate('privacy')}>privacy</button>
          <button className="footer-link" onClick={() => navigate('terms')}>terms</button>
        </div>
      </div>
    </footer>
  );
}
