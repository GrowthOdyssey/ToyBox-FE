import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { commonModules } from '../modules/common/index';
import '../styles/style.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    commonModules();
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>ToyBox</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
