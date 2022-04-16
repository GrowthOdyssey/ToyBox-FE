import { VFC, memo } from 'react';
import { LayoutType } from 'types/layout/layout';
import { Footer } from './Footer';
import { CommonHead } from './Head';
import { Header } from './Header';
import { Main } from './Main';

export const CommonLayout: VFC<LayoutType> = memo((props) => {
  const { title, children, breadcrumb } = props;
  return (
    <>
      <CommonHead title={title} />
      <Header />
      <Main breadcrumb={breadcrumb}>{children}</Main>
      <Footer />
    </>
  );
});
