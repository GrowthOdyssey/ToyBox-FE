import { VFC, memo, useState } from 'react';
import { slideDown, slideUp } from 'modules/common/_accordion';
import { AccordionType } from 'types/common/accordion';

const componentName = 'Accordion';

export const Accordion: VFC<AccordionType> = memo((props) => {
  const { name, label, children } = props;
  const [isActive, setActive] = useState(false);

  if (!name || !label || !children) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  const onclickTrigger = () => {
    const sec = 300;
    const target = document.querySelector(`[data-accordion-name=${name}] .c-accordion__detail`) as HTMLElement;
    isActive ? slideUp(target, sec) : slideDown(target, sec);
    setTimeout(() => setActive(!isActive), sec);
  };

  return (
    <div className={'c-accordion'} data-accordion-name={name} data-accordion-flag={isActive}>
      <div className={'c-accordion__trigger'} onClick={onclickTrigger}>
        {label}
      </div>
      <div className={'c-accordion__detail'}>{children}</div>
    </div>
  );
});
