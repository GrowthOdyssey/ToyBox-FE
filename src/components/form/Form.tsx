import { VFC, memo, useState } from 'react';
import clsx from 'clsx';
import { Button } from 'components/common/Button';
import { FormPropsType } from '../../types/form/index';
import { FormInput } from './FormInput';

export const Form: VFC<FormPropsType> = memo((props) => {
  const { ttl, name, children, btn, confirm } = props;
  const [isConfirm, setIsConfirm] = useState(false);
  const [formValue, setFormValue] = useState<{ name: string; value: string }[]>([]);

  if (!children || children.length === 0) {
    throw new Error('Not defined FormItems');
  }

  const setConfirm = (bool: boolean) => {
    window.scrollTo(0, 0);
    setIsConfirm(bool);

    if (!bool) return;

    const formValue = children.map((item) => {
      if (item.element.name === 'birthday') {
        return {
          name: item.element.name,
          value: '生年月日',
        };
      } else if (item.type === 'radio') {
        return {
          name: item.element.name,
          value: 'ラジオボタン ',
        };
      } else {
        const element = document.querySelector(`.c-form__detail [name=${item.element.name}]`) as
          | HTMLInputElement
          | HTMLSelectElement;

        return {
          name: item.element.name,
          value: element.value,
        };
      }
    });

    setFormValue(formValue);
  };

  return (
    <form className={clsx('c-form', isConfirm && 'c-form--confirm')} name={name}>
      <h2 className={clsx('c-form__ttl', 'c-hdg', 'c-hdg--2')}>{ttl}</h2>
      {children.map((item, i) => (
        <div className={'c-form__item'} key={i}>
          <div className={'c-form__hdg'}>
            {item.hdg}
            {item.required !== false && <span className={'c-form__required'}>必須</span>}
          </div>
          <div className={'c-form__detail'}>
            {isConfirm ? (
              formValue[i].value
            ) : (
              <>
                {item.annotation && <span className={'c-form__label'}>{item.annotation}</span>}
                <FormInput type={item.type} element={item.element} />
              </>
            )}
          </div>
        </div>
      ))}
      <div className={'c-form__btn'}>
        {isConfirm && <Button label={'戻る'} color={'white'} onclick={() => setConfirm(false)} />}
        {confirm ? (
          isConfirm ? (
            <Button
              label={btn.confirmLabel ?? '送信する'}
              onclick={() => {
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                btn.onclickConfirm!();
              }}
            />
          ) : (
            <Button
              label={btn.submitLabel}
              onclick={() => {
                setConfirm(true);
                btn.onclickSubmit();
              }}
            />
          )
        ) : (
          <Button label={btn.submitLabel} onclick={() => btn.onclickSubmit()} />
        )}
      </div>
    </form>
  );
});
