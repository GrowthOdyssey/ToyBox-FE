import { ReactNode } from 'react';

export interface RowListType {
  children: ReactNode[];
  className?: string;
  pcLine?: 1 | 2 | 3 | 4 | 5 | 6;
  spLine?: 1 | 2;
}
