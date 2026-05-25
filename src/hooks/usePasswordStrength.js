import { useMemo } from 'react';

export function usePasswordStrength(password) {
  return useMemo(() => {
    if (!password) return { score: 0, color: '#ef4444', label: '' };
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;
    const color =
      score <= 25 ? '#ef4444' :
      score <= 50 ? '#f97316' :
      score <= 75 ? '#eab308' : '#00ff87';
    const label =
      score <= 25 ? 'Weak' :
      score <= 50 ? 'Fair' :
      score <= 75 ? 'Good' : 'Strong';
    return { score, color, label };
  }, [password]);
}
