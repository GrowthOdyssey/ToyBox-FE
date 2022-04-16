import type { NextPage } from 'next';
import { CommonLayout } from 'components/layout/Layout';

const pageTitle = 'TOP';

const Top: NextPage = () => {
  return <CommonLayout title={pageTitle}>{}</CommonLayout>;
};

export default Top;
