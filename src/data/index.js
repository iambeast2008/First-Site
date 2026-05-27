// ================= RANKS =================
export const RANKS = [
  {
    id: 'dominator',
    name: 'Dominator',
    badge: 'Entry Elite',
    price: 2.59,
    color: '#00d0f5',
    className: 'rank-id-dominator',
    perks: [
      '🏠 5 home points (vs 3 default)',
      '🎨 Colored username in all chat channels',
      '🎁 Weekly DOMINATOR kit',
      '🏷️ Aqua [DOMINATOR] prefix in chat',
      '🛒 10% discount on all shop purchases',
      '🎰 Weekly DOMINATOR crate key',
      '💰 Bonus daily in-game coins',
      '📣 DOMINATOR Discord channel access',
    ],
  },
  {
    id: 'immortal',
    name: 'Immortal',
    badge: 'Most Popular',
    price: 4.99,
    color: '#9d4edd',
    className: 'rank-id-immortal',
    perks: [
      '🎁 Weekly IMMORTAL kit with exclusive items',
      '🏷️ Green [IMMORTAL] prefix in global chat',
      '🛒 15% discount on all shop purchases',
      '🏠 7 home points',
      '⚡ Priority queue access',
      '🎨 Custom colored username',
      '📦 Weekly IMMORTAL crate keys',
      '🏆 All DOMINATOR perks included',
    ],
  },
  {
    id: 'divine',
    name: 'Divine',
    badge: 'Apex Paradigm',
    price: 7.99,
    color: '#ff0054',
    className: 'rank-id-divine',
    perks: [
      '🎁 Weekly DIVINE kit with exclusive items',
      '🏷️ Gold [DIVINE] prefix in global chat',
      '🛒 30% discount on all shop purchases',
      '🏠 10 home points',
      '💬 Custom join & leave messages',
      '📦 Weekly DIVINE crate keys',
      '👑 Exclusive DIVINE Discord channel',
      '🏆 All IMMORTAL & DOMINATOR perks included',
    ],
  },
];

// ================= COIN PACKS =================
export const COIN_PACKS = [
  {
    id: 'pack-1',
    amount: 500,
    price: 1.99,
    popular: false,
    tier: 'Bronze Cache',
    bonus: 'Standard Rate',
    iconClass: 'fa-solid fa-coins',
    color: '#cd7f32',
  },
  {
    id: 'pack-2',
    amount: 1000,
    price: 3.59,
    popular: true,
    tier: 'Silver Hoard',
    bonus: '+20% Extra Coins',
    iconClass: 'fa-solid fa-coins',
    color: '#b4b4b4',
  },
  {
    id: 'pack-3',
    amount: 2500,
    price: 8.99,
    popular: false,
    tier: 'Gold Vault',
    bonus: '+25% Extra Coins',
    iconClass: 'fa-solid fa-sack-dollar',
    color: '#ffd700',
  },
  {
    id: 'pack-4',
    amount: 6000,
    price: 19.99,
    popular: false,
    tier: 'Mythic Treasury',
    bonus: '+33% Extra Coins',
    iconClass: 'fa-solid fa-gem',
    color: '#a335ee',
  },
];

// ================= RULES =================
export const RULES = [
  {
    num: '01',
    title: 'No Exploiting or Cheating',
    body: 'Unauthorized client modifications, exploit mechanics, duplication glitches, and macro/automation abuse are strictly prohibited. Confirmed violations may result in immediate network-level bans without appeal.',
  },
  {
    num: '02',
    title: 'Respectful Conduct',
    body: 'Targeted harassment, hate speech, slurs, and sustained personal attacks against any player or staff member are not tolerated. Contextual PvP trash talk is allowed; threats, doxxing, and discrimination are permanently bannable.',
  },
  {
    num: '03',
    title: 'Raiding & Griefing',
    body: 'Offensive base raids are permitted only during designated raid windows. Griefing unclaimed areas or bypassing claim protections outside those windows is a sanctionable offense.',
  },
  {
    num: '04',
    title: 'Economy Integrity',
    body: 'Real-world trading of in-game items, account selling or sharing, and off-platform deals involving network assets undermine competitive balance and are prohibited. All official purchases must go through our store and Discord ticket process.',
  },
  {
    num: '05',
    title: 'Content & Streaming',
    body: 'Streaming and content creation using network gameplay is welcome. Broadcasting explicit content, sharing private player information, or impersonating staff or other players is prohibited.',
  },
  {
    num: '06',
    title: 'Store & Payment Conduct',
    body: 'Complete purchases only through official Discord purchase tickets. Chargebacks, payment fraud, false dispute claims, or attempting to obtain ranks or coins without payment may result in permanent bans across the server, website, and Discord.',
  },
  {
    num: '07',
    title: 'Website & Account Use',
    body: 'Use of this website and linked accounts (including Clerk sign-in) is subject to our Terms of Service and Privacy Policy. You are responsible for securing your credentials. Abuse of the site, impersonation, or attempts to compromise systems will result in access removal.',
  },
  {
    num: '08',
    title: 'Staff Authority & Appeals',
    body: 'Staff decisions regarding rule enforcement, store delivery, and access restrictions are final unless overturned on appeal. Submit appeals only through official Discord support channels with relevant evidence—do not harass staff in public channels.',
  },
];

// Store FAQs live in ./store.js (import STORE_FAQS from './store')

// ================= SERVER INFO =================
export const SERVER_IP = 'mistsmp.online';
export const SERVER_PORT = '19052';
export const DISCORD_INVITE_LINK = 'https://discord.gg/PvnHdGkd9T';

export const FEATURES = [
  {
    icon: 'fa-solid fa-skull-crossbones',
    title: 'Dynamic Mist Events',
    desc: 'Periodic environmental haze sweeps the landscape, mutating vanilla creatures into high-tier apex threats and spawning localized high-yield loot anomalies.',
  },
  {
    icon: 'fa-solid fa-gem',
    title: 'Player-Driven Commerce',
    desc: 'A fully integrated physical and tokenized economy system featuring deep risk mitigation options, safe-zone markets, and competitive contract bounties.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Strategic Claim Systems',
    desc: 'Advanced power-grid base claims allow calculated raidable windows, striking a meticulous balance between structural defense security and high-octane raiding.',
  },
  {
    icon: 'fa-solid fa-store',
    title: 'Fair Store & Support',
    desc: 'Lifetime ranks and Mist Coin packs are sold through official Discord tickets only. Cosmetic and quality-of-life perks—no pay-to-win. See Store Info for policies.',
  },
];

export const HOME_QUICK_LINKS = [
  {
    icon: 'fa-brands fa-discord',
    title: 'Discord Community',
    desc: 'Join for support, purchase tickets, and server announcements.',
    href: DISCORD_INVITE_LINK,
    external: true,
  },
  {
    icon: 'fa-solid fa-bag-shopping',
    title: 'Store Information',
    desc: 'How to buy, refunds, delivery, and legal policies.',
    route: 'store-info',
  },
  {
    icon: 'fa-solid fa-user-shield',
    title: 'Your Account',
    desc: 'Sign in to manage your profile and link your Minecraft player.',
    route: 'account',
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Rules & Conduct',
    desc: 'Server, store, and website rules every player must follow.',
    route: 'rules',
  },
];

export const JOIN_STEPS = [
  {
    num: '01',
    title: 'Add the Server',
    body: `Open Minecraft (Java 1.20.4+ or Bedrock 1.9–26.1) and add a server with host ${SERVER_IP}. Bedrock players use port ${SERVER_PORT}.`,
  },
  {
    num: '02',
    title: 'Read the Rules',
    body: 'Review our Network Ruleset and Store Info before playing or purchasing. Ignorance of the rules is not an excuse for violations.',
  },
  {
    num: '03',
    title: 'Create a Website Account',
    body: 'Sign in on this site to access your Account page. Linking your Minecraft username helps staff deliver store purchases to the correct player.',
  },
  {
    num: '04',
    title: 'Join Discord for Store & Support',
    body: 'All rank and coin purchases are completed through official Discord purchase tickets. Never pay users who DM you privately.',
  },
];
