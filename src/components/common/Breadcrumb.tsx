import Link from 'next/link';
import { VFC, memo } from 'react';
import { BreadcrumbType } from 'types/common/breadcrumb';

const componentName = 'BreadCrumb';

export const BreadCrumb: VFC<BreadcrumbType> = memo((props) => {
  const { items } = props;

  if (!items) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <ul className={'c-breadcrumb'}>
      <li className={'c-breadcrumb__item'}>
        <Link href={'/'}>TOP</Link>
      </li>
      {items.map((item) => (
        <li className={'c-breadcrumb__item'} key={item.text}>
          {item.link ? <Link href={item.link}>{item.text}</Link> : <span>{item.text}</span>}
        </li>
      ))}
    </ul>
  );
});
