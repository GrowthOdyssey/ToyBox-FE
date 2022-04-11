import { VFC, memo } from 'react';
import { TextAreaType } from '../../types/form/index';

const componentName = 'TextArea';

export const TextArea: VFC<TextAreaType> = memo((props) => {
  const { name, placeholder = '入力してください', rows = 5 } = props;

  if (!name) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <div className={'c-textarea'}>
      <textarea name={name} placeholder={placeholder} rows={rows} />
    </div>
  );
});
