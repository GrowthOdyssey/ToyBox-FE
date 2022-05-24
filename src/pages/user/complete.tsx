import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'components/common/Button';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import styles from 'styles/.scss/object/projects/complete.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';

const pageTitle = '会員登録完了';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const UserComplete: NextPage = () => {
  const router = useRouter();
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className={styles['p-complete']}>
        <h2 className={styles['p-complete__hdg']}>会員登録完了</h2>
        <p>会員登録が完了しました。</p>
        <div className={styles['p-complete__btn']}>
          <Button label={'トップページへ'} onclick={() => router.push(pagesPath.$url())} />
        </div>
      </div>
    </CommonLayout>
  );
};

export default UserComplete;
