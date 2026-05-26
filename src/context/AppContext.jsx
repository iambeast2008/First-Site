import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [route, setRoute] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const navigate = (newRoute) => {
    setRoute(newRoute);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg, type = 'info') => {
    setToast({ msg, type, id: Date.now() });
  };

  return (
    <AppContext.Provider 
      value={{ 
        route, 
        navigate, 
        mobileMenuOpen, 
        setMobileMenuOpen, 
        toast, 
        showToast 
      }}
    >
      {children}
    </AppContext.Provider>
  );
}