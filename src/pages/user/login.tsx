import type { NextPage } from 'next';
import { Form } from 'components/form/Form';
import { CommonLayout } from 'components/layout/Layout';
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
      <div className={styles['p-login-form']}>
        <Form ttl={'ログイン'} name={'ログイン'} btn={formBtn}>
          {formItem}
        </Form>
      </div>
    </CommonLayout>
  );
};

export default UserLogin;
