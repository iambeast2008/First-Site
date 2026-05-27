import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { useApp } from '../context/AppContext';
import LegalLinks from '../components/LegalLinks';
import './Account.css';

export default function Account() {
  const { navigate } = useApp();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div
        className="page-enter"
        role="status"
        aria-live="polite"
        style={{ textAlign: 'center', padding: '120px 20px' }}
      >
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-display)', letterSpacing: 3, textTransform: 'uppercase', fontSize: 13 }}>
          Loading profile…
        </p>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  const displayName = user.firstName || user.username || 'Player';
  const email = user.primaryEmailAddress?.emailAddress ?? '';

  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Player Hub</p>
          <h2 className="section-title">Your Account</h2>
        </div>

        <p className="page-intro">
          Your profile is managed securely through Clerk. Purchases are completed on Discord—this
          page helps you track your identity and link your in-game character. See our{' '}
          <button type="button" className="inline-nav-link" onClick={() => navigate('privacy')}>
            Privacy Policy
          </button>{' '}
          for how we handle your data.
        </p>

        <div className="account-hero-block">
          <div className="account-meta-info">
            <img
              src={user.imageUrl ?? '/favicon.ico'}
              alt={`${displayName}'s profile avatar`}
              className="account-avatar-large"
            />
            <div className="account-title-details">
              <h2>Welcome back, {displayName}!</h2>
              <p>{email}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-split-layout">
          <div className="dash-card-box">
            <h3>In-Game Character</h3>
            <p>
              Link your Minecraft username so staff can deliver ranks and coins to the correct
              player. Provide your exact in-game name when opening a Discord purchase ticket.
            </p>
            <button type="button" className="btn-secondary account-card-btn" onClick={() => navigate('store-info')}>
              View Store Info
            </button>
          </div>

          <div className="dash-card-box">
            <h3>Purchase History</h3>
            <p>
              No recent store packages found. Browse ranks or coins, then complete payment through
              an official Discord ticket.
            </p>
            <div className="account-card-actions">
              <button type="button" className="btn-primary account-card-btn" onClick={() => navigate('ranks')}>
                Browse Ranks
              </button>
              <button type="button" className="btn-secondary account-card-btn" onClick={() => navigate('coins')}>
                Browse Coins
              </button>
            </div>
          </div>
        </div>

        <div className="account-legal-footer">
          <LegalLinks />
        </div>
      </div>
    </div>
  );
}
