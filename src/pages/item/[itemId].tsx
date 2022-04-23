import type { NextPage } from 'next';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { Icon } from 'components/common/Icon';
import { RadioGroup } from 'components/form/RadioGroup';
import { SelectBox } from 'components/form/SelectBox';
import { CommonLayout } from 'components/layout/Layout';
import styles from 'styles/.scss/object/projects/item/detail.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import img from '../../../public/500x500.png';
import heart from '../../../public/ico_heart.svg';

const itemData = {
  name: '商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。',
  description:
    '商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。商品説明文がはいります。',
  category: ['カテゴリー1', 'カテゴリー2'],
  price: 1000,
  point: 100,
  variation: ['赤', '青', '緑'],
};
const pageTitle = itemData.name;
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const ItemDetail: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <section className={styles['p-item-detail']}>
        <div className={styles['p-item-detail__img']}>
          <Image src={img} width={500} height={500} alt={'dummy'} />
        </div>
        <div className={styles['p-item-detail__info']}>
          <h2 className={clsx('c-hdg', 'c-hdg--4')}>{itemData.name}</h2>
          <div className={styles['p-item-detail__category']}>
            {itemData.category.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          {itemData.variation && (
            <div className={'u-mt20'}>
              <RadioGroup name={'バリエーション'} values={itemData.variation} />
            </div>
          )}
          <div className={'u-mt20'}>
            <SelectBox name={'数量'} values={[...Array(20)].map((_, i) => i + 1)} hdg={'数量'} />
          </div>
          <p className={styles['p-item-detail__price']}>
            ¥{itemData.price.toLocaleString()}
            <span>(税込み)</span>
          </p>
          <p className={styles['p-item-detail__point']}>
            獲得ポイント：<span>{itemData.point}pt</span>
          </p>
          <div className={styles['p-item-detail__btn']}>
            <Button label={'カートに入れる'} color={'red'} />
            <button className={styles['p-item-detail__wish']}>
              <Icon src={heart} alt={'お気に入り'} />
            </button>
          </div>
          <p className={'u-mt20'}>{itemData.description}</p>
        </div>
      </section>
    </CommonLayout>
  );
};

export default ItemDetail;
