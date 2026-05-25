import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import './Toast.css';

export default function Toast() {
  const { toast } = useApp();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!toast) return;
    setCurrent(toast);
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  if (!current) return null;

  const iconClass =
    current.type === 'success' ? 'fa-solid fa-circle-check' :
    current.type === 'error'   ? 'fa-solid fa-circle-exclamation' :
    'fa-solid fa-circle-info';

  const borderColor =
    current.type === 'success' ? '#00ff87' :
    current.type === 'error'   ? '#ef4444' :
    'var(--accent-cyan)';

  const iconColor = borderColor;

  return (
    <div
      className={`toast-notification ${visible ? 'show-toast' : ''}`}
      style={{ borderLeftColor: borderColor }}
      role="alert"
      aria-live="polite"
    >
      <i className={iconClass} style={{ color: iconColor }} />
      <span className="toast-msg-text">{current.msg}</span>
    </div>
  );
}
