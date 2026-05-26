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
  { id: 'pack-1', amount: 500, price: 1.99,  featured: false },
  { id: 'pack-2', amount: 1000, price: 3.59, featured: false },
  { id: 'pack-3', amount: 2500, price: 8.99, featured: false },
  { id: 'pack-4', amount: 6000, price: 19.99, featured: true,  tag: 'Best Value' },
];

// ================= RULES =================
export const RULES = [
  {
    num: '01',
    title: 'No Exploiting or Cheating',
    body: 'Utilization of unauthorized client modifications, exploit mechanics, or duplication glitches is strictly prohibited. All violations result in immediate network-level termination without appeal.',
  },
  {
    num: '02',
    title: 'Respectful Conduct Protocol',
    body: 'Targeted harassment, slur deployment, or sustained personal attacks directed at any network participant are grounds for a permanent access revocation. PvP trash talk within contextual limits is tolerated.',
  },
  {
    num: '03',
    title: 'Territorial Raiding Parameters',
    body: 'Offensive base operations are exclusively authorized during designated raid window cycles. Griefing outside of claimed territories and beyond raid windows constitutes a sanctionable violation.',
  },
  {
    num: '04',
    title: 'Economy Integrity Framework',
    body: 'Real-world item trading, account transfers, or external monetary transactions involving in-game assets are entirely prohibited to maintain competitive balance integrity.',
  },
  {
    num: '05',
    title: 'Content Broadcast Standards',
    body: 'Streaming and content creation involving network assets is encouraged. Explicit content broadcasts, doxxing, or sharing private participant information remains a permanently bannable offense.',
  },
];

// ================= FAQ =================
export const FAQS = [
  {
    q: 'When will I receive my rank after purchase?',
    a: 'Network rank activations are processed and dispatched automatically within 60 seconds of confirmed payment authorization. If your rank is not activated within 10 minutes, open a support ticket.',
  },
  {
    q: 'Are all purchases one-time lifetime payments?',
    a: 'Affirmative. All rank packages and Mist Coin bundles are singular lifetime transactions. There are no recurring subscriptions or hidden renewal charges on this network.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We currently process transactions via Razorpay, which supports UPI, Net Banking, all major Credit/Debit cards, and popular digital wallets.',
  },
  {
    q: 'Can I get a refund after purchasing?',
    a: 'Due to the instant digital delivery nature of all network assets, all sales are final. Exceptions are made only in cases of provable technical delivery failures. See our full policy below.',
  },
];

// ================= SERVER INFO =================
export const SERVER_IP = 'mistsmp.online';

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
];

export const JOIN_STEPS = [
  {
    num: '01',
    title: 'Verify Platform Version',
    body: 'Launch your Minecraft Java Edition client. Ensure your platform profile is configured to run version 1.20.4 or higher for seamless architectural parity.',
  },
  {
    num: '02',
    title: 'Establish Network Node',
    body: 'Navigate to Multiplayer → Add Server within the client interface. Enter play.mistsmp.com within the server connection field.',
  },
  {
    num: '03',
    title: 'Authorize & Authenticate',
    body: 'Connect to the instance. If you have created an online hub account, link your system profile in-game using our structural verification protocol.',
  },
];
