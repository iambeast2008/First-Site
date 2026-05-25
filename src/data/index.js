// ================= RANKS =================
export const RANKS = [
  {
    id: 'divine',
    name: 'Divine',
    badge: 'Entry Elite',
    price: 15,
    color: '#00f5d4',
    className: 'rank-id-divine',
    perks: [
      'Glowing Cosmic Chat Prefix',
      '3x Maximum Base Claims',
      'Access to /wb and /condense',
      '12-Slot Player Market Vault',
    ],
    detailPerks: [
      {
        icon: 'fa-solid fa-tags',
        title: 'Visual Identity Framework',
        desc: 'Gain access to the glowing turquoise [DIVINE] prefix across all global chat channels, local voice indicators, and community discord servers.',
      },
      {
        icon: 'fa-solid fa-box-open',
        title: 'Utility Automation Suite',
        desc: 'Execute high-speed inventory processing utilities natively via commands. Includes virtual portable crafting benches (/wb) and material compression (/condense).',
      },
    ],
  },
  {
    id: 'immortal',
    name: 'Immortal',
    badge: 'Most Popular',
    price: 35,
    color: '#9d4edd',
    className: 'rank-id-immortal',
    perks: [
      'Everything in Divine Tier',
      '7x Maximum Base Claims',
      'Priority Dynamic Queue Entry',
      'Access to /fly within Claims',
    ],
    detailPerks: [
      {
        icon: 'fa-solid fa-bolt',
        title: 'Network Privilege Array',
        desc: 'Bypass regular server volume limits with tier-one slot reservation, granting seamless priority entry even when structural capacities hit maximum thresholds.',
      },
      {
        icon: 'fa-solid fa-earth-americas',
        title: 'Spatial Sovereignty',
        desc: 'Gain atmospheric flight authorization (/fly) within your designated claimed zones to accelerate massive architectural builds and defense infrastructure assembly.',
      },
    ],
  },
  {
    id: 'dominator',
    name: 'Dominator',
    badge: 'Apex Paradigm',
    price: 75,
    color: '#ff0054',
    className: 'rank-id-dominator',
    perks: [
      'Everything in Immortal Tier',
      'Unlimited Claim Nodes',
      'Global Join/Leave Broadcaster',
      'Elite Weekly Asset Crate Key',
    ],
    detailPerks: [
      {
        icon: 'fa-solid fa-infinity',
        title: 'Boundless Territorial Authority',
        desc: 'Completely removes the territorial scaling cap. Claim as many distinct defensive regions as your faction resources can actively sustain.',
      },
      {
        icon: 'fa-solid fa-crown',
        title: 'Weekly Resource Injection',
        desc: 'Receive an automated structural key dispatch every server cycle, unlocking access to our top-tier network loot tables and exotic equipment matrices.',
      },
    ],
  },
];

// ================= COIN PACKS =================
export const COIN_PACKS = [
  { id: '500',  amount: 500,  price: 5.00,  featured: false },
  { id: '1000', amount: 1000, price: 10.00, featured: false },
  { id: '1500', amount: 1500, price: 14.00, featured: false },
  { id: '2000', amount: 2000, price: 18.00, featured: true,  tag: 'Best Value' },
  { id: '4000', amount: 4000, price: 32.00, featured: false },
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
export const SERVER_IP = 'PLAY.MISTSMP.COM';

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
