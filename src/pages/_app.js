import { useEffect } from 'react';
import '@/styles/globals.css';
import Layout from '../../Layout/layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lato:wght@300;400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return <Layout><Component {...pageProps} /></Layout>;
}
