import { useApp } from '../context/AppContext';

const LINKS = [
  { route: 'store-info', label: 'Store Info' },
  { route: 'rules', label: 'Rules' },
  { route: 'terms', label: 'Terms' },
  { route: 'privacy', label: 'Privacy' },
];

export default function LegalLinks({ className = '' }) {
  const { navigate } = useApp();

  return (
    <nav className={`legal-links-bar ${className}`} aria-label="Legal and store links">
      {LINKS.map((link, i) => (
        <span key={link.route} className="legal-links-item">
          {i > 0 && <span className="legal-links-sep" aria-hidden="true">·</span>}
          <button type="button" className="inline-nav-link" onClick={() => navigate(link.route)}>
            {link.label}
          </button>
        </span>
      ))}
    </nav>
  );
}
