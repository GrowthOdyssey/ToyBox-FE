import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { SelectBox } from 'components/form/SelectBox';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import itemImg from '../../../public/500x500.png';
import cart from '../../styles/.scss/object/projects/cart/cart.module.scss';
import item from '../../styles/.scss/object/projects/item/item.module.scss';

const pageTitle = 'カート';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];
const itemData = [
  {
    id: 1,
    name: '商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。',
    img: itemImg,
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    name: '商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。',
    img: itemImg,
    price: 1000,
    quantity: 3,
  },
  {
    id: 3,
    name: '商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。商品名がはいります。',
    img: itemImg,
    price: 1000,
    quantity: 4,
  },
];

const CartIndex: NextPage = () => {
  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>カート</h2>
      {itemData.length ? (
        <div className={cart['p-cart-container']}>
          <section className={cart['p-cart-contents']}>
            <ColumnList className={item['p-item']}>
              {itemData.map((data, i) => (
                <div key={i} className={item['p-item__inner']}>
                  <div className={item['p-item__img']}>
                    <Link href={pagesPath.item._id(data.id).$url()}>
                      <a>
                        <Image src={data.img} alt={'dummy'} />
                      </a>
                    </Link>
                  </div>
                  <div className={item['p-item__detail']}>
                    <div className={item['p-item__hdg']}>
                      <Link href={pagesPath.item._id(data.id).$url()}>
                        <a>
                          <h3>{data.name}</h3>
                        </a>
                      </Link>
                    </div>
                    <div className={item['p-item__info']}>
                      <p className={item['p-item__price']}>
                        ¥{data.price.toLocaleString()}
                        <span>(税込み)</span>
                      </p>
                      <SelectBox name={'数量'} values={[...Array(20)].map((_, i) => i + 1)} hdg={'数量'} />
                      <button className={item['p-item__delete']}>削除</button>
                    </div>
                  </div>
                </div>
              ))}
            </ColumnList>
          </section>
          <section className={cart['p-cart-total']}>
            <div className={cart['p-cart-total__item']}>
              <span>商品点数</span>
              <span>3個</span>
            </div>
            <div className={cart['p-cart-total__item']}>
              <span>小計(税込み)</span>
              <span>¥{(3000).toLocaleString()}</span>
            </div>
            <div className={cart['p-cart-total__btn']}>
              <Button label={'精算画面に進む'} color={'orange'} />
            </div>
          </section>
        </div>
      ) : (
        <p>カート内に商品が入っていません。</p>
      )}
    </CommonLayout>
  );
};

export default CartIndex;
