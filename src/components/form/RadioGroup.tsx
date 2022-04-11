import { VFC, memo } from 'react';
import { RadioGroupType } from '../../types/form/index';
import { RadioBtn } from './RadioBtn';

const componentName = 'RadioGroup';

export const RadioGroup: VFC<RadioGroupType> = memo((props) => {
  const { name, values } = props;

  if (!name || !values) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <div className={'c-radiogroup'}>
      {values.map((value, i) => (
        <RadioBtn key={i} index={i + 1} name={name} value={value} />
      ))}
    </div>
  );
});
