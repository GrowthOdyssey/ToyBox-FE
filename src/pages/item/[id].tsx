import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { Icon } from 'components/common/Icon';
import { RadioGroup } from 'components/form/RadioGroup';
import { SelectBox } from 'components/form/SelectBox';
import { CommonLayout } from 'components/layout/Layout';
import { useCartContext } from 'context/Cart';
import { pagesPath } from 'paths/$path';
import styles from 'styles/.scss/object/projects/item/detail.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { ItemDetailProps } from 'types/pages/item';
import { getItemListDatas } from '../../../api/item';
import heart from '../../../public/ico_heart.svg';

const ItemDetail: NextPage<ItemDetailProps> = (props) => {
  const { itemData } = props;
  const pageTitle = itemData.name;
  const breadcrumb: BreadcrumbItemType[] = [
    {
      text: pageTitle,
    },
  ];
  const { cartItem, setCartItem } = useCartContext();
  const router = useRouter();

  const addCart = (id: string) => {
    const quantitySelect = document.querySelector('select[name="quantity"]') as HTMLSelectElement;
    setCartItem([...cartItem, { id, quantity: Number(quantitySelect.value) }]);
    router.push(pagesPath.cart.$url());
  };

  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <section className={styles['p-detail']}>
        <div className={styles['p-detail__img']}>
          <Image src={itemData.img} width={500} height={500} alt={'dummy'} />
        </div>
        <div className={styles['p-detail__info']}>
          <h2 className={clsx('c-hdg', 'c-hdg--4')}>{itemData.name}</h2>
          <div className={styles['p-detail__category']}>
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
            <SelectBox name={'quantity'} values={[...Array(20)].map((_, i) => i + 1)} hdg={'数量'} />
          </div>
          <p className={styles['p-detail__price']}>
            ¥{itemData.price.toLocaleString()}
            <span>(税込み)</span>
          </p>
          <p className={styles['p-detail__point']}>
            獲得ポイント：<span>{itemData.point}pt</span>
          </p>
          <div className={styles['p-detail__btn']}>
            <Button label={'カートに入れる'} color={'red'} onclick={() => addCart(itemData.id)} />
            <button className={styles['p-detail__wish']}>
              <Icon src={heart} alt={'お気に入り'} />
            </button>
          </div>
          <p className={'u-mt20'}>{itemData.description}</p>
        </div>
      </section>
    </CommonLayout>
  );
};

export const getStaticPaths = async () => {
  const itemListDatas = await getItemListDatas();
  const paths = itemListDatas.map((data) => ({
    params: {
      id: data.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (props: { params: { id: string } }) => {
  const { params } = props;
  const itemListDatas = await getItemListDatas();
  const itemData = itemListDatas.find((item) => item.id === params.id);

  return {
    props: { itemData },
    // revalidate: 60,
  };
};

export default ItemDetail;
