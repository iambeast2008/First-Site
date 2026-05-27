import { useApp } from '../context/AppContext';

export default function StoreNotice({ className = '' }) {
  const { navigate } = useApp();

  return (
    <p className={`page-notice store-page-notice ${className}`.trim()}>
      <strong>Purchases via Discord only.</strong> Select a package below, then complete payment in an
      official purchase ticket. All sales are final unless we confirm a delivery failure—see{' '}
      <button type="button" className="inline-nav-link" onClick={() => navigate('store-info')}>
        Store Info
      </button>{' '}
      for full policies.
    </p>
  );
}
