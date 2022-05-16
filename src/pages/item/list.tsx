import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import styles from 'styles/.scss/object/projects/item/item.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { ItemListProps } from 'types/pages/item';
import { getItemListDatas } from '../../../api/item';

const pageTitle = '商品一覧';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const ItemList: NextPage<ItemListProps> = (props) => {
  const { itemListDatas } = props;

  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>商品一覧</h2>
      <RowList className={styles['p-card-item']}>
        {itemListDatas.map((data) => (
          <React.Fragment key={data.id}>
            <Link href={pagesPath.item._id(data.id).$url()}>
              <a>
                <Image src={data.img} alt={'dummy'} width={500} height={500} />
              </a>
            </Link>
            <Link href={pagesPath.item._id(data.id).$url()}>
              <a>
                <h3 className={styles['p-card-item__hdg']}>{data.name}</h3>
              </a>
            </Link>
            <p className={styles['p-card-item__price']}>
              ¥{data.price.toLocaleString()}
              <span>(税込)</span>
            </p>
          </React.Fragment>
        ))}
      </RowList>
    </CommonLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const itemListDatas = await getItemListDatas();

  return {
    props: { itemListDatas },
  };
};

export default ItemList;
