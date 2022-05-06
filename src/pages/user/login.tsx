import type { NextPage } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { Form } from 'components/form/Form';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { FormBtnType, FormItemType } from 'types/form';
import styles from '../../styles/.scss/object/projects/user/login.module.scss';

const pageTitle = 'ログイン';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];
const formItem: FormItemType[] = [
  {
    hdg: 'メールアドレス',
    type: 'text',
    element: {
      name: 'メールアドレス',
      placeholder: 'メールアドレスを入力してください',
    },
  },
  {
    hdg: 'パスワード',
    type: 'text',
    element: {
      name: 'パスワード',
      placeholder: 'パスワードを入力してください',
    },
  },
];
const formBtn: FormBtnType = {
  label: 'ログイン',
  onclick: () => console.log('login'),
};

const UserLogin: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className={styles['p-login-container']}>
        <div className={styles['p-login-form']}>
          <Form ttl={'ログイン'} name={'ログイン'} btn={formBtn}>
            {formItem}
          </Form>
        </div>
        <div className={styles['p-login-form']}>
          <h2 className={clsx('c-hdg', 'c-hdg--3', 'u-align-center')}>初めての方はこちら</h2>
          <div className={styles['p-login-signup']}>
            <Link href={pagesPath.user.signup.$url()}>
              <a>
                <Button label={'新規会員登録'} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default UserLogin;
