import { VFC, memo } from 'react';
import { ColumnListType } from 'types/common/columnList';

const componentName = 'ColumnList';

export const ColumnList: VFC<ColumnListType> = memo((props) => {
  const { children } = props;

  if (!children) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <ul className={'c-column'}>
      {children.map((child, i) => (
        <li className={'c-column__item'} key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
});
