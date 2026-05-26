# MIST SMP — React Project

A React SPA for the MIST SMP Minecraft server store and info site.

## Project Structure

```
src/
├── index.jsx              # Entry point + Clerk bootstrap
├── index.css              # Global styles & design tokens
├── App.jsx                # App shell + client-side router
├── context/
│   └── AppContext.jsx     # Navigation, mobile menu, toasts
├── data/
│   └── index.js           # Ranks, coins, rules, FAQs, server info
├── components/
│   ├── AmbientCanvas.jsx  # Background particle/mist animation
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Toast.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Ranks.jsx
    ├── Coins.jsx
    ├── Rules.jsx
    ├── StoreInfo.jsx
    └── Account.jsx        # Clerk profile (signed-in users)
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template and add your Clerk publishable key
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment

| Variable | Description |
|----------|-------------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key ([dashboard](https://dashboard.clerk.com)) |

`REACT_APP_CLERK_PUBLISHABLE_KEY` is also supported for backward compatibility.

## Key Features

- **Client-side routing** — custom router via `useApp().navigate`
- **Clerk authentication** — sign-in modal and account page
- **Ambient canvas** — particle + mist background (respects reduced motion)
- **Responsive** — mobile nav drawer
- **Toast notifications** — copy-to-clipboard feedback on Home
- **Purchases** — Discord ticket flow for ranks and coins

## Customization

- Edit `src/data/index.js` for ranks, coin packs, rules, FAQs, and server IP
- Design tokens live in `src/index.css` under `:root`
- Update `DISCORD_INVITE_LINK` in `src/data/index.js` for purchase redirects
