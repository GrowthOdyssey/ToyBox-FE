import { VFC, memo } from 'react';

export const CommonLoading: VFC = memo(() => {
  return (
    <div className={'c-loading'}>
      <div className={'c-loading__icon'}>
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'>
          <circle cx='20' cy='20' r='18' />
        </svg>
      </div>
    </div>
  );
});
