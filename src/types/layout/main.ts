import { ReactNode } from 'react';
import { BreadcrumbItemType } from 'types/common/breadcrumb';

export interface MainType {
  children: ReactNode;
  breadcrumb?: BreadcrumbItemType[];
}
