import { Suspense, lazy } from 'react';
import { useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import AmbientCanvas from './components/AmbientCanvas';
import Home from './pages/Home';

const About     = lazy(() => import('./pages/About'));
const Ranks     = lazy(() => import('./pages/Ranks'));
const Coins     = lazy(() => import('./pages/Coins'));
const Rules     = lazy(() => import('./pages/Rules'));
const StoreInfo = lazy(() => import('./pages/StoreInfo'));
const Account   = lazy(() => import('./pages/Account'));
const Privacy   = lazy(() => import('./pages/Privacy'));
const Terms     = lazy(() => import('./pages/Terms'));

function PageSkeleton() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
      Loading Area...
    </div>
  );
}

function RouteView({ route }) {
  switch (route) {
    case 'home':       return <Home />;
    case 'about':      return <About />;
    case 'ranks':      return <Ranks />;
    case 'coins':      return <Coins />;
    case 'rules':      return <Rules />;
    case 'store-info': return <StoreInfo />;
    case 'account':    return <Account />;
    case 'privacy':    return <Privacy />;
    case 'terms':      return <Terms />;
    default:           return <Home />;
  }
}

export default function App() {
  const { route } = useApp();

  return (
    <>
      <AmbientCanvas />
      <div className="app-container">
        <Navbar />
        <main id="main-content" className="content-wrapper" tabIndex={-1}>
          <Suspense fallback={<PageSkeleton />}>
            <RouteView route={route} />
          </Suspense>
        </main>
        <Footer />
      </div>
      <Toast />
    </>
  );
}
