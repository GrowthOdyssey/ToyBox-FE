export interface BreadcrumbType {
  items: BreadcrumbItemType[];
}

interface BreadcrumbItemType {
  text: string;
  link?: string;
}
