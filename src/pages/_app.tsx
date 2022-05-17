import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AppContext } from 'context/App';
import { commonModules } from '../modules/common/index';
import '../styles/style.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    commonModules();
  }, [router.pathname]);

  return (
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  );
}

export default MyApp;
