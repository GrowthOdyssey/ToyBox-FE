import { VFC, memo } from 'react';
import clsx from 'clsx';
import { ColumnListType } from 'types/common/columnList';

const componentName = 'ColumnList';

export const ColumnList: VFC<ColumnListType> = memo((props) => {
  const { children, className } = props;

  if (!children) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <ul className={'c-column'}>
      {children.map((child, i) => (
        <li className={clsx('c-column__item', className)} key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
});
