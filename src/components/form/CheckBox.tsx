import { VFC, memo } from 'react';
import { CheckBoxType } from '../../types/form/index';

const componentName = 'CheckBox';

export const CheckBox: VFC<CheckBoxType> = memo((props) => {
  const { name, value } = props;

  if (!name || !value) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <div className={'c-checkbox'}>
      <input id={name} type={'checkbox'} name={name} value={value} />
      <label htmlFor={name}>{value}</label>
    </div>
  );
});
