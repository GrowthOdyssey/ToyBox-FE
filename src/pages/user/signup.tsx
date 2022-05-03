import type { NextPage } from 'next';
import { Form } from 'components/form/Form';
import { CommonLayout } from 'components/layout/Layout';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { FormBtnType, FormItemType } from 'types/form';
import styles from '../../styles/.scss/object/projects/user/signup.module.scss';

const pageTitle = '新規会員登録';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];
const formItem: FormItemType[] = [
  {
    hdg: '名前',
    type: 'text',
    element: {
      name: '名前',
      placeholder: '名前を入力してください',
    },
  },
  {
    hdg: '名前カナ',
    type: 'text',
    element: {
      name: '名前カナ',
      placeholder: '名前カナを入力してください',
    },
  },
  {
    hdg: 'メールアドレス',
    type: 'text',
    element: {
      name: 'メールアドレス',
      placeholder: 'メールアドレスを入力してください',
      size: 'large',
    },
  },
  {
    hdg: 'パスワード',
    type: 'text',
    annotation: '半角英数字8文字以上で入力してください',
    element: {
      name: 'パスワード',
      placeholder: 'パスワードを入力してください',
      size: 'large',
    },
  },
  {
    hdg: '性別',
    type: 'radio',
    element: {
      name: '性別',
      values: ['男性', '女性', 'その他'],
    },
  },
  {
    hdg: '生年月日',
    type: 'text',
    element: {
      name: '生年月日',
    },
  },
  {
    hdg: '郵便番号',
    type: 'text',
    element: {
      name: '郵便番号',
      placeholder: '郵便番号を入力してください',
    },
  },
  {
    hdg: '都道府県',
    type: 'text',
    element: {
      name: '都道府県',
    },
  },
  {
    hdg: '市区町村',
    type: 'text',
    element: {
      name: '市区町村',
      size: 'full',
    },
  },
  {
    hdg: '番地',
    type: 'text',
    element: {
      name: '番地',
      size: 'full',
    },
  },
  {
    hdg: '建物',
    required: false,
    type: 'text',
    element: {
      name: '建物',
      size: 'full',
    },
  },
  {
    hdg: '電話番号',
    type: 'text',
    element: {
      name: '電話番号',
      placeholder: '電話番号を入力してください',
    },
  },
  {
    hdg: '支払い方法',
    type: 'radio',
    element: {
      name: '支払い方法',
      values: ['クレジットカード', '銀行振り込み', 'コンビニ払い', 'PayPay'],
    },
  },
];

const formBtn: FormBtnType = {
  label: '登録',
  onclick: () => console.log('signup'),
};

const UserSignup: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <div className={styles['p-signup-form']}>
        <Form ttl={'会員登録'} name={'会員登録'} btn={formBtn}>
          {formItem}
        </Form>
      </div>
    </CommonLayout>
  );
};

export default UserSignup;
