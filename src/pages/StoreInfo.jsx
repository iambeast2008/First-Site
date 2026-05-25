import { useState } from 'react';
import { FAQS } from '../data';
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

        <div className="info-layout-grid">
          {/* FAQ */}
          <div>
            <h3 className="info-sub-title">Frequently Asked Questions</h3>
            <div className="faq-accordion">
              {FAQS.map(faq => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>

          {/* Policy */}
          <div className="policy-block">
            <h3 className="info-sub-title">Policies & Legal</h3>

            <h5>Refund Policy</h5>
            <p>
              All purchases made on this store are considered final and non-refundable due to the
              instant digital delivery of all network assets and rank activations. Exceptions are
              evaluated only in documented cases of confirmed technical delivery failure on our end.
              Please open a support ticket within 48 hours of purchase if you have an issue.
            </p>

            <h5>Chargeback Policy</h5>
            <p>
              Initiating an unauthorized chargeback or payment dispute will result in an immediate
              and permanent ban from all MIST SMP network infrastructure, pending resolution with
              our payment processor.
            </p>

            <h5>Compliance Statement</h5>
            <p>
              All store packages comply with Mojang's Commercial Usage Guidelines. No packages
              grant pay-to-win advantages that affect core competitive gameplay balance. Purchased
              ranks provide cosmetic and quality-of-life utilities only.
            </p>

            <h5>Support</h5>
            <p>
              For all purchase-related inquiries and technical support, please join our Discord
              server and open a ticket in the designated support channel. Response times are
              generally within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
