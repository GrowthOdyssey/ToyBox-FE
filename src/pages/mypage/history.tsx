import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { ColumnList } from 'components/common/ColumnList';
import { CommonLayout } from 'components/layout/Layout';
import { pagesPath } from 'paths/$path';
import _history from 'styles/.scss/object/projects/mypage/history.module.scss';
import { BreadcrumbItemType } from 'types/common/breadcrumb';
import { HistoryListType } from 'types/pages/mypage';
import { getHistoryItemDatas } from '../../../api/mypage';
import _item from '../../styles/.scss/object/projects/item/item.module.scss';

const pageTitle = '購入履歴';
const breadcrumb: BreadcrumbItemType[] = [
  {
    text: pageTitle,
  },
];

const MypageHistory: NextPage = () => {
  const [historyItems, setHistoryItems] = useState<HistoryListType[]>([]);

  useEffect(() => {
    (async () => {
      const historyItems = await getHistoryItemDatas();
      setHistoryItems(historyItems);
    })();
  }, []);

  return (
    <CommonLayout title={pageTitle} breadcrumb={breadcrumb}>
      <h2 className={clsx('c-hdg', 'c-hdg--2')}>購入履歴</h2>
      <ul className={_history['p-history-list']}>
        {historyItems.map((history, i) => (
          <li key={i} className={_history['p-history-item']}>
            <div className={_history['p-history-info']}>
              <div className={_history['p-history-info__inner']}>
                <div>
                  <p>注文日: {history.info.orderDate}</p>
                  <p>お届け日: {history.info.arrivalData}</p>
                </div>
                <div>
                  <p>合計金額: ¥{history.info.totalPrice.toLocaleString()}</p>
                  <p>お届け先: {history.info.address}</p>
                  <p>お支払い方法: {history.info.payment}</p>
                </div>
              </div>
            </div>
            <ColumnList className={clsx(_item['p-item'], _item['p-item--history'])}>
              {history.items.map((data, j) => (
                <div key={j} className={_item['p-item__inner']}>
                  <div className={_item['p-item__img']}>
                    <Link href={pagesPath.item._id(data.item.id).$url()}>
                      <a>
                        <Image src={data.item.img} width={500} height={500} alt={'dummy'} />
                      </a>
                    </Link>
                  </div>
                  <div className={_item['p-item__detail']}>
                    <div className={_item['p-item__hdg']}>
                      <Link href={pagesPath.item._id(data.item.id).$url()}>
                        <a>
                          <h3>
                            {data.item.name}[{data.variation}]
                          </h3>
                        </a>
                      </Link>
                    </div>
                    <div className={_item['p-item__info']}>
                      <p className={_item['p-item__price']}>¥{data.item.price.toLocaleString()}</p>
                      <p>数量 {data.quantity}個</p>
                    </div>
                  </div>
                  <div className={_item['p-item__btns']}>
                    <Button label={'再度購入する'} />
                    <Button label={'レビューを書く'} />
                    <Button label={'返品する'} color={'red'} />
                  </div>
                </div>
              ))}
            </ColumnList>
          </li>
        ))}
      </ul>
    </CommonLayout>
  );
};

export default MypageHistory;
