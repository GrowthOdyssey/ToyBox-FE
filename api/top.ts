import { CardItemType } from 'types/pages/top';
import { hotSellingItem, newArrivalItem, wishListItem } from '../mock/top';

// later change to API call
export const getHotSeelingItems = async () => {
  const datas: CardItemType[] = [];

  [...Array(8)].map(() => {
    datas.push(hotSellingItem);
  });

  return datas;
};

// later change to API call
export const getNewArrivalItems = async () => {
  const datas: CardItemType[] = [];

  [...Array(8)].map(() => {
    datas.push(newArrivalItem);
  });

  return datas;
};

// later change to API call
export const getWishListItems = async () => {
  const datas: CardItemType[] = [];

  [...Array(8)].map(() => {
    datas.push(wishListItem);
  });

  return datas;
};
