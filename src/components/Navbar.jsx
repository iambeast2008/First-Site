import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home',       route: 'home'       },
  { label: 'About',      route: 'about'      },
  { label: 'Ranks',      route: 'ranks'      },
  { label: 'Coins',      route: 'coins'      }, // Added the missing currency store view
  { label: 'Rules',      route: 'rules'      },
  { label: 'Store Info', route: 'store-info' },
];

export default function Navbar() {
  const { route, navigate, mobileMenuOpen, setMobileMenuOpen } = useApp();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-nav-link">Skip to content</a>
      <div className="nav-blur" role="banner">
        <nav className="nav-container" aria-label="Main navigation">
          
          <button className="logo-area" onClick={() => navigate('home')} aria-label="MIST SMP home">
            <div className="logo-icon" aria-hidden="true">
              <i className="fa-solid fa-cloud-mist" style={{ color: '#000', fontSize: 14 }} />
            </div>
            <span className="logo-text">MIST SMP</span>
          </button>

          <div className="nav-links">
            {NAV_ITEMS.map(item => (
              <button
                key={item.route}
                className={`nav-item ${route === item.route ? 'active' : ''}`}
                onClick={() => navigate(item.route)}
                aria-current={route === item.route ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-nav-auth">Sign In</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="user-button-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: { width: '32px', height: '32px', borderRadius: '4px' }}}} />
              </div>
            </SignedIn>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(o => !o)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`} />
            </button>
          </div>
        </nav>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!mobileMenuOpen}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.route}
            className={`nav-item ${route === item.route ? 'active' : ''}`}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </button>
        ))}
        <div className="mobile-auth-container">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-nav-auth" style={{ width: '100%' }}>Sign In</button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </>
  );
}