import { VFC, memo } from 'react';
import { BreadCrumb } from 'components/common/Breadcrumb';
import { MainType } from 'types/layout/main';

export const Main: VFC<MainType> = memo((props) => {
  const { children, breadcrumb } = props;

  return (
    <main className={'l-main'}>
      <div className={'c-container'}>
        {breadcrumb && <BreadCrumb items={breadcrumb} />}
        {children}
      </div>
    </main>
  );
});
