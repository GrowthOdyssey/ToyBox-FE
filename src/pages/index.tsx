import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import kvImg from '../../public/1000x500.png';
import itemImg from '../../public/500x500.png';
import item from '../styles/.scss/object/projects/item/item.module.scss';
import top from '../styles/.scss/object/projects/top.module.scss';
const pageTitle = 'TOP';

const Top: NextPage = () => {
  return (
    <CommonLayout title={pageTitle}>
      <section className={top['p-kv']}>
        <Image src={kvImg} width={1000} height={500} alt={'dummy'} />
      </section>

      <section className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>売れ筋商品</h2>
        <RowList className={item['p-item']}>
          {[...Array(8)].map((_, i) => (
            <Link href={pagesPath.item._itemId('1').$url()} key={i}>
              <a>
                <Image src={itemImg} width={235} height={235} alt={'dummy'} />
              </a>
            </Link>
          ))}
        </RowList>
      </section>

      <section className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>新着商品</h2>
        <RowList className={item['p-item']}>
          {[...Array(8)].map((_, i) => (
            <Link href={pagesPath.item._itemId('1').$url()} key={i}>
              <a>
                <Image src={itemImg} width={235} height={235} alt={'dummy'} />
              </a>
            </Link>
          ))}
        </RowList>
      </section>
      <div className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>欲しいものリスト</h2>
        <RowList className={item['p-item']}>
          {[...Array(8)].map((_, i) => (
            <Link href={pagesPath.item._itemId('1').$url()} key={i}>
              <a>
                <Image src={itemImg} width={235} height={235} alt={'dummy'} />
              </a>
            </Link>
          ))}
        </RowList>
      </div>

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

export default Top;
