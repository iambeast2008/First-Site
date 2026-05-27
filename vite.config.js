import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Only VITE_* variables are exposed to client code. Never put secrets (sk_*, API secrets) here.
export default defineConfig({
  plugins: [react()],
  envPrefix: 'VITE_',
});
