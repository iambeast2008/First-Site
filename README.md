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
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk **publishable** key only ([dashboard](https://dashboard.clerk.com)) |

Copy `.env.example` to `.env` for local dev. On Vercel, set the same variable in Project → Environment Variables, then redeploy.

**Security:** Never commit `.env` or put `CLERK_SECRET_KEY` / `sk_*` values in any `VITE_*` variable—they are bundled into the public client. Restrict allowed domains in the [Clerk Dashboard](https://dashboard.clerk.com).

## Deployment (Vercel)

Production builds use `vercel.json` security headers (CSP, `X-Frame-Options`, HSTS, etc.). After changing env vars or headers, trigger a new deploy.

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
