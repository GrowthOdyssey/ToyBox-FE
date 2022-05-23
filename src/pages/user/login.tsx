import type { NextPage } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { Form } from 'components/form/Form';
import { CommonLayout } from 'components/layout/Layout';
import { useLogin } from 'hooks/useLogin';
import { pagesPath } from 'paths/$path';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { FormItemType } from 'types/form';
import styles from '../../styles/.scss/object/projects/user/login.module.scss';

const UserLogin: NextPage = () => {
  const { login } = useLogin();
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
        name: 'mail',
        placeholder: 'メールアドレスを入力してください',
      },
    },
    {
      hdg: 'パスワード',
      type: 'text',
      element: {
        name: 'password',
        placeholder: 'パスワードを入力してください',
      },
    },
  ];

  const onclickLoginBtn = () => {
    const form = document.querySelector('form[name="login"]');
    if (!form) return;

    let data = {};

    const items = form.querySelectorAll('input');
    items.forEach((item) => {
      data = { ...data, ...{ [item.name]: item.value } };
    });

    login(data);
  };

  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className={styles['p-login-container']}>
        <div className={styles['p-login-form']}>
          <Form ttl={'ログイン'} name={'login'} btn={{ submitLabel: 'ログイン', onclickSubmit: onclickLoginBtn }}>
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
