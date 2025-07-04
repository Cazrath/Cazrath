import { useEffect } from 'react';
import '../styles/globals.css'; // This can stay or be removed based on your setup

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const clearAccess = () => {
      localStorage.removeItem('hasAccess');
    };

    window.addEventListener('beforeunload', clearAccess);

    return () => {
      window.removeEventListener('beforeunload', clearAccess);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
