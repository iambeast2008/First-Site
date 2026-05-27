import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';

const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const CLERK_FRONTEND_API = import.meta.env.VITE_CLERK_FRONTEND_API;

const clerkConfig = CLERK_KEY
  ? { publishableKey: CLERK_KEY }
  : CLERK_FRONTEND_API
  ? { frontendApi: CLERK_FRONTEND_API }
  : {};

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ClerkProvider {...clerkConfig}>
      <AppProvider>
        <App />
      </AppProvider>
    </ClerkProvider>
  </StrictMode>
);
