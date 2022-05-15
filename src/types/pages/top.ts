export interface CardItemType {
  id: number;
  name: string;
  img: string;
}

export interface Props {
  hotSeelingItems: CardItemType[];
  newArrivalItems: CardItemType[];
}
