import { VFC, memo } from 'react';
import clsx from 'clsx';
import { CommonButtonType } from '../../types/common/button';

export const Button: VFC<CommonButtonType> = memo((props) => {
  const { label, color, onclick, isDisabled } = props;

  return (
    <button
      className={clsx('c-btn', color && `c-btn--${color}`)}
      type={'button'}
      onClick={onclick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
});
