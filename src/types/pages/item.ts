export interface ItemDataType {
  id: string;
  name: string;
  img: string;
  description: string;
  category: string[];
  price: number;
  point: number;
  variation?: string[];
}

export interface ItemListProps {
  itemListDatas: ItemDataType[];
}

export interface ItemDetailProps {
  itemData: ItemDataType;
}
