import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import { CardItemType, Props } from 'types/pages/top';
import { getHotSeelingItems, getNewArrivalItems, getWishListItems } from '../../api/top';
import kvImg from '../../public/1000x500.png';
import item from '../styles/.scss/object/projects/item/item.module.scss';
import top from '../styles/.scss/object/projects/top.module.scss';

const pageTitle = 'TOP';

const Top: NextPage<Props> = (props) => {
  const { hotSeelingItems, newArrivalItems } = props;
  const [wishListItems, setWishListItems] = useState<CardItemType[]>([]);

  useEffect(() => {
    (async () => {
      const wishListItems = await getWishListItems();
      setWishListItems(wishListItems);
    })();
  }, []);

  return (
    <CommonLayout title={pageTitle}>
      <section className={top['p-kv']}>
        <Image src={kvImg} width={1000} height={500} alt={'dummy'} />
      </section>

      <section className={clsx(top['p-block'], 'u-mt40')}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>売れ筋商品</h2>
        <Link href='/item/list'>
          <a className={clsx(top['p-more-link'], 'c-link')}>もっと見る</a>
        </Link>
        <RowList className={item['p-card-item']}>
          {hotSeelingItems.map((data, i) => (
            <React.Fragment key={i}>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <Image src={data.img} alt={'dummy'} width={500} height={500} />
                </a>
              </Link>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <h3 className={item['p-card-item__hdg']}>{data.name}</h3>
                </a>
              </Link>
            </React.Fragment>
          ))}
        </RowList>
      </section>

      <section className={clsx(top['p-block'], 'u-mt40')}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>新着商品</h2>
        <Link href='/item/list'>
          <a className={clsx(top['p-more-link'], 'c-link')}>もっと見る</a>
        </Link>
        <RowList className={item['p-card-item']}>
          {newArrivalItems.map((data, i) => (
            <React.Fragment key={i}>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <Image src={data.img} alt={'dummy'} width={500} height={500} />
                </a>
              </Link>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <h3 className={item['p-card-item__hdg']}>{data.name}</h3>
                </a>
              </Link>
            </React.Fragment>
          ))}
        </RowList>
      </section>

      <section className={clsx(top['p-block'], 'u-mt40')}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>欲しいものリスト</h2>
        <Link href='/item/list'>
          <a className={clsx(top['p-more-link'], 'c-link')}>もっと見る</a>
        </Link>
        <RowList className={item['p-card-item']}>
          {wishListItems.map((data, i) => (
            <React.Fragment key={i}>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <Image src={data.img} alt={'dummy'} width={500} height={500} />
                </a>
              </Link>
              <Link href={pagesPath.item._id(data.id).$url()}>
                <a>
                  <h3 className={item['p-card-item__hdg']}>{data.name}</h3>
                </a>
              </Link>
            </React.Fragment>
          ))}
        </RowList>
      </section>

      <section className={top['p-topics']}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>新着情報</h2>
        <ColumnList>
          {[...Array(3)].map((_, i) => (
            <div className={top['p-topics__inner']} key={i}>
              <span className={top['p-topics__date']}>2020年4月1日</span>
              <Link href={'#'}>
                <a className={top['p-topics__detail']}>
                  お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。
                </a>
              </Link>
            </div>
          ))}
        </ColumnList>
        <Link href={'#'}>
          <a className={top['p-topics__more']}>
            <Button label={'もっと見る'}></Button>
          </a>
        </Link>
      </section>
    </CommonLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hotSeelingItems = await getHotSeelingItems();
  const newArrivalItems = await getNewArrivalItems();

  return {
    props: { hotSeelingItems, newArrivalItems },
  };
};

export default Top;
