import { VFC, memo } from 'react';
import clsx from 'clsx';
import { SelectBoxType } from '../../types/form/index';

const componentName = 'SelectBox';

export const SelectBox: VFC<SelectBoxType> = memo((props) => {
  const { name, values, onChange, selected, hdg } = props;

  if (!name || !values) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <div className={clsx('c-select', hdg && 'c-select--hdg')}>
      {hdg && <span className={'c-select__hdg'}>{hdg}</span>}
      <select name={name} onChange={onChange}>
        {values.map((value) => (
          <option key={value} value={value} selected={selected === value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
});
