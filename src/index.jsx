import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function MissingClerkKey() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: '#07070a',
        color: '#e8e8f0',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: 20, marginBottom: 12 }}>Configuration required</h1>
        <p style={{ color: '#7a7a8c', maxWidth: 420, lineHeight: 1.6 }}>
          Set <code>VITE_CLERK_PUBLISHABLE_KEY</code> in a <code>.env</code> file
          (see <code>.env.example</code>) and restart the dev server.
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {CLERK_KEY ? (
      <ClerkProvider publishableKey={CLERK_KEY}>
        <AppProvider>
          <App />
        </AppProvider>
      </ClerkProvider>
    ) : (
      <MissingClerkKey />
    )}
  </StrictMode>
);
