import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import styles from 'styles/.scss/object/projects/item/item.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import itemImg from '../../../public/500x500.png';

const itemData = {
  name: '商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。',
  img: itemImg,
  category: ['カテゴリー1', 'カテゴリー2'],
  price: 1000,
};
const pageTitle = '商品一覧';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const ItemList: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>商品一覧</h2>
      <RowList className={styles['p-card-item']}>
        {[...Array(20)].map((_, i) => (
          <React.Fragment key={i}>
            <Link href={pagesPath.item._itemId('1').$url()}>
              <a>
                <Image src={itemData.img} alt={'dummy'} />
              </a>
            </Link>
            <Link href={pagesPath.item._itemId('1').$url()}>
              <a>
                <h3 className={styles['p-card-item__hdg']}>{itemData.name}</h3>
              </a>
            </Link>
            <p className={styles['p-card-item__price']}>
              ¥{itemData.price.toLocaleString()}
              <span>(税込み)</span>
            </p>
          </React.Fragment>
        ))}
      </RowList>
    </CommonLayout>
  );
};

export default ItemList;
