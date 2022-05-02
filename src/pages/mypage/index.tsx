import type { NextPage } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import styles from 'styles/.scss/object/projects/mypage/mypage.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';

const pageTitle = 'マイページ';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];
const cards = [
  {
    hdg: '会員情報',
    link: pagesPath.mypage.info.$url(),
    text: '会員情報の確認・変更が出来ます。',
  },
  {
    hdg: '購入履歴',
    link: pagesPath.mypage.history.$url(),
    text: '今までに購入した商品の履歴の確認が出来ます。',
  },
  {
    hdg: 'お気に入りリスト',
    link: pagesPath.mypage.wishlist.$url(),
    text: 'お気に入りに登録した商品の確認が出来ます。',
  },
  {
    hdg: 'レビュー一覧',
    link: pagesPath.mypage.reviewlist.$url(),
    text: '今までに書いたレビューの確認・編集が出来ます。',
  },
  {
    hdg: 'ポイント履歴',
    link: pagesPath.mypage.point.$url(),
    text: 'ポイントの履歴の確認が出来ます。',
  },
  {
    hdg: '2段階認証',
    link: pagesPath.mypage.auth.$url(),
    text: 'ログインする際の2段階認証の設定が出来ます。',
  },
];

const MypageTop: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>マイページ</h2>
      <RowList className={styles['p-mypage-card']} pcLine={3}>
        {cards.map((card) => (
          <Link href={card.link} key={card.hdg}>
            <a>
              <h3 className={clsx('c-hdg', 'c-hdg--5')}>{card.hdg}</h3>
              <p>{card.text}</p>
            </a>
          </Link>
        ))}
      </RowList>
    </CommonLayout>
  );
};

export default MypageTop;
