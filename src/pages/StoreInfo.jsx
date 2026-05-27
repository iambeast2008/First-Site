import { useState } from 'react';
import { STORE_FAQS, STORE_POLICIES } from '../data/store';
import { DISCORD_INVITE_LINK } from '../data';
import { LEGAL_LAST_UPDATED } from '../data/legal';
import LegalLinks from '../components/LegalLinks';
import './StoreInfo.css';

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open-faq' : ''}`}>
      <button className="faq-trigger" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {faq.q}
        <i className="fa-solid fa-chevron-down" />
      </button>
      <div className="faq-content">
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function StoreInfo() {
  return (
    <div className="page-enter">
      <div className="section-wrap">
        <div className="section-header">
          <p className="section-label">Knowledge Base</p>
          <h2 className="section-title">Store Information</h2>
        </div>

        <p className="page-intro store-intro-block">
          How to buy, what to expect after payment, and the policies that apply to every purchase.
          Legal documents last updated {LEGAL_LAST_UPDATED}.
        </p>

        <div className="purchase-flow-card">
          <h3 className="info-sub-title">How to Purchase</h3>
          <ol className="purchase-steps">
            <li>Browse ranks or coin packs on this site and choose your package.</li>
            <li>
              Click <strong>Confirm Purchase via Discord</strong> to join our server.
            </li>
            <li>Open a purchase ticket in the designated channel and provide your Minecraft username.</li>
            <li>Complete payment using the method staff confirms in your ticket only.</li>
            <li>Receive your rank or coins after payment is verified—usually within a few hours.</li>
          </ol>
          <a
            href={DISCORD_INVITE_LINK}
            className="btn-discord-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord" aria-hidden="true" />
            Open Discord to Purchase
          </a>
        </div>

        <div className="info-layout-grid">
          <div>
            <h3 className="info-sub-title">Frequently Asked Questions</h3>
            <div className="faq-accordion">
              {STORE_FAQS.map(faq => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>

          <div className="policy-block">
            <h3 className="info-sub-title">Policies</h3>
            {STORE_POLICIES.map(policy => (
              <div key={policy.id}>
                <h5>{policy.title}</h5>
                <p>{policy.body}</p>
              </div>
            ))}

            <h5>Related Pages</h5>
            <p>
              Our Terms and Privacy Policy govern account sign-in, site use, and data handling.
              Server rules apply to all players and purchasers.
            </p>
            <LegalLinks className="store-legal-links" />
          </div>
        </div>
      </div>
    </div>
  );
}
