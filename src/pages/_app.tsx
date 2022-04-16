import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { commonModules } from '../modules/common/index';
import '../styles/style.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    commonModules();
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
