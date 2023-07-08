import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    const handler = window.scrollTo(0, 0);
    window.addEventListener('unload', handler);
    return () => window.removeEventListener(this, handler);
  }, []);
  return <>{children}</>;
};

export default Layout;
