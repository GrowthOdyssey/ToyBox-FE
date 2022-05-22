import { ChangeEventHandler } from 'react';

export interface SelectBoxType {
  name: string;
  values: string[] | number[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  selected?: string | number;
  hdg?: string;
}
