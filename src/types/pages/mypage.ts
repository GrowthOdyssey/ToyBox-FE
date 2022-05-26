import { ItemDataType } from './item';

export interface HistoryListType {
  items: HistoryItemDataType[];
  info: {
    orderId: string;
    orderDate: string;
    arrivalData: string;
    totalPrice: number;
    address: string;
    payment: string;
  };
}

export interface HistoryItemDataType {
  item: ItemDataType;
  quantity: number;
  variation?: string;
}
