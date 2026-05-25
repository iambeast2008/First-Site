import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';

const CLERK_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  console.error("Clerk Publishable Key is missing. Check your .env file.");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={CLERK_KEY || "missing_key_fallback"}>
      <AppProvider>
        <App />
      </AppProvider>
    </ClerkProvider>
  </React.StrictMode>
);