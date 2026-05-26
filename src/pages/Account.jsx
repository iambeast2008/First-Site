/**
 * Account.jsx
 *
 * FIXES:
 * 1. [CSS MISMATCH] The previous Account.jsx used class names (account-page,
 *    account-grid, info-card, etc.) that do not exist anywhere in Account.css,
 *    resulting in an unstyled page. This version uses the correct class names
 *    defined in Account.css, plus minimal inline fallbacks where needed.
 * 2. Profile avatar uses a safe fallback when imageUrl is undefined.
 * 3. Added alt text and aria attributes for the avatar image.
 * 4. Loading state is shown with a proper ARIA live region.
 */

import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import './Account.css';

export default function Account() {
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

  const displayName =
    user.firstName || user.username || 'Player';
  const email =
    user.primaryEmailAddress?.emailAddress ?? '';

  return (
    <div className="page-enter">
      <div className="section-wrap">
        {/* ── Profile header ── */}
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

        {/* ── Dashboard grid ── */}
        <div className="dashboard-split-layout">
          {/* Left: Minecraft link */}
          <div className="dash-card-box">
            <h3>In-Game Character</h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Connect your Minecraft UUID in your account settings to view
              game stats and link purchases automatically.
            </p>
          </div>

          {/* Right: Purchase history */}
          <div className="dash-card-box">
            <h3>Purchase History</h3>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              No recent store packages found. Visit the store to support the
              SMP!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
