import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { RowList } from 'components/common/RowList';
import { CommonLayout } from 'components/layout/Layout';
import img from '../../public/1000x500.png';
import styles from '../styles/.scss/object/projects/top.module.scss';
const pageTitle = 'TOP';

const Top: NextPage = () => {
  return (
    <CommonLayout title={pageTitle}>
      <div className={styles['p-kv']}>
        <Image src={img} width={1000} height={500} alt={'dummy'} />
      </div>

      <div className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>売れ筋商品</h2>
        <RowList>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
        </RowList>
      </div>
      <div className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>新着商品</h2>
        <RowList>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
        </RowList>
      </div>
      <div className={'u-mt40'}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>欲しいものリスト</h2>
        <RowList>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
          <>
            <Image src={img} width={1000} height={500} alt={'dummy'} />
          </>
        </RowList>
      </div>

      <div className={styles['p-topics']}>
        <h2 className={clsx('c-hdg', 'c-hdg--2')}>新着情報</h2>
        <ColumnList>
          <div className={styles['p-topics__inner']}>
            <span className={styles['p-topics__date']}>2020年4月1日</span>
            <Link href={'#'}>
              <a className={styles['p-topics__detail']}>
                お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。
              </a>
            </Link>
          </div>
          <div className={styles['p-topics__inner']}>
            <span className={styles['p-topics__date']}>2020年4月1日</span>
            <Link href={'#'}>
              <a className={styles['p-topics__detail']}>
                お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。
              </a>
            </Link>
          </div>
          <div className={styles['p-topics__inner']}>
            <span className={styles['p-topics__date']}>2020年4月1日</span>
            <Link href={'#'}>
              <a className={styles['p-topics__detail']}>
                お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。お知らせテキストが入ります。
              </a>
            </Link>
          </div>
        </ColumnList>
        <Link href={'#'}>
          <a className={styles['p-topics__more']}>
            <Button label={'もっと見る'}></Button>
          </a>
        </Link>
      </div>
    </CommonLayout>
  );
};

export default Top;
