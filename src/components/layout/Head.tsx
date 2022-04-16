import Head from 'next/head';
import { VFC, memo } from 'react';
import { HeadType } from 'types/layout/head';

export const CommonHead: VFC<HeadType> = memo((props) => {
  const { title } = props;

  return (
    <Head>
      <title>{title} | ToyBox</title>
      <meta name='description' content='' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
});
