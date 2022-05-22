import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { SelectBox } from 'components/form/SelectBox';
import { CommonLayout } from 'components/layout/Layout';
import { useCartItemContext } from 'context/CartItem';
import { pagesPath } from 'paths/$path';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { ItemDataType } from 'types/pages/item';
import { itemDatas } from '../../../mock/item';
import cart from '../../styles/.scss/object/projects/cart/cart.module.scss';
import item from '../../styles/.scss/object/projects/item/item.module.scss';

const pageTitle = 'カート';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const CartIndex: NextPage = () => {
  const { cartItem, setCartItem } = useCartItemContext();
  const [cartItemData, setCartItemData] = useState<(ItemDataType & { quantity: number })[]>([]);

  useEffect(() => {
    if (!cartItem.length) return;

    const cartData = cartItem.map((item) => {
      /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
      const data = itemDatas.find((data) => data.id === item.id)!;
      return { ...data, quantity: item.quantity };
    });
    setCartItemData(cartData);
  }, [cartItem]);

  const getCartItemQuantity = () => {
    return cartItemData.reduce((p, v) => p + v.quantity, 0);
  };

  const getCartTotalPrice = () => {
    const totalPrice = cartItemData.reduce((p, v) => p + v.price * v.quantity, 0);
    return totalPrice.toLocaleString();
  };

  const changeItemQuantity = (i: number, e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    cartItem[i].quantity = Number(value);
    setCartItem([...cartItem]);
  };

  const removeCartItem = (index: number) => {
    setCartItem(cartItem.filter((_, i) => i !== index));
    setCartItemData(cartItemData.filter((_, i) => i !== index));
  };

  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>カート</h2>
      {cartItemData.length ? (
        <div className={cart['p-cart-container']}>
          <section className={cart['p-cart-contents']}>
            <ColumnList className={item['p-item']}>
              {cartItemData.map((data, i) => (
                <div key={i} className={item['p-item__inner']}>
                  <div className={item['p-item__img']}>
                    <Link href={pagesPath.item._id(data.id).$url()}>
                      <a>
                        <Image src={data.img} width={500} height={500} alt={'dummy'} />
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
                      <SelectBox
                        name={'数量'}
                        values={[...Array(20)].map((_, i) => i + 1)}
                        onChange={(e) => changeItemQuantity(i, e)}
                        selected={data.quantity}
                        hdg={'数量'}
                      />
                      <button className={item['p-item__delete']} onClick={() => removeCartItem(i)}>
                        削除
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ColumnList>
          </section>
          <section className={cart['p-cart-total']}>
            <div className={cart['p-cart-total__item']}>
              <span>商品点数</span>
              <span>{getCartItemQuantity()}個</span>
            </div>
            <div className={cart['p-cart-total__item']}>
              <span>小計(税込み)</span>
              <span>¥{getCartTotalPrice()}</span>
            </div>
            <div className={cart['p-cart-total__btn']}>
              <Button label={'注文画面に進む'} color={'orange'} />
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
