# MIST SMP — React Project

A fully structured React SPA converted from the original single-file HTML site.

## Project Structure

```
src/
├── index.jsx              # React entry point
├── index.css              # Global styles & design tokens
├── App.jsx                # App shell + client-side router
├── context/
│   └── AppContext.jsx     # Global state (auth, navigation, toast, checkout)
├── data/
│   └── index.js           # All static content (ranks, coins, rules, FAQs, features)
├── hooks/
│   └── usePasswordStrength.js
├── components/
│   ├── AmbientCanvas.jsx  # Background particle/mist animation
│   ├── AmbientCanvas.css
│   ├── Navbar.jsx         # Responsive nav + profile dropdown
│   ├── Navbar.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── Toast.jsx          # Notification toasts
│   └── Toast.css
└── pages/
    ├── Home.jsx / Home.css
    ├── About.jsx / About.css
    ├── Ranks.jsx / Ranks.css      # Rank list + detail (RankDetail.jsx)
    ├── RankDetail.jsx
    ├── Coins.jsx / Coins.css      # Coin list + detail (CoinDetail)
    ├── Rules.jsx / Rules.css
    ├── StoreInfo.jsx / StoreInfo.css  # FAQ accordion + policy
    ├── Auth.jsx / Auth.css        # Login / Register / Forgot password
    ├── Account.jsx / Account.css  # Dashboard, stats, order history
    └── Checkout.jsx / Checkout.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Key Features

- **Client-side routing** — custom router via React context (`useApp().navigate`)
- **Auth state** — simulated login/register/Google OAuth, persisted via `localStorage`
- **Ambient canvas** — particle spark + mist layer animation (canvas API)
- **Responsive** — mobile nav drawer, responsive grids
- **Toast notifications** — global notification system
- **Checkout flow** — simulated Razorpay transaction with order history

## Customization

- Edit `src/data/index.js` to update ranks, coin packs, rules, FAQs, server IP
- Design tokens live in `src/index.css` under `:root`
- Swap simulated auth for a real backend (Firebase, Supabase, etc.) in `AppContext.jsx`
- Replace simulated checkout with real Razorpay SDK in `executeCheckout()` in `AppContext.jsx`
