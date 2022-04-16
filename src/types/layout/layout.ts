import { ReactNode } from 'react';
import { BreadcrumbItemType } from 'types/common/breadcrumb';

export interface LayoutType {
  title: string;
  children: ReactNode;
  breadcrumb?: BreadcrumbItemType[];
}
