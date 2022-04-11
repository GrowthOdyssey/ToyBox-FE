export const slideUp = (target: HTMLElement, sec: number): void => {
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = '0';
  target.style.marginTop = '0';
  target.style.marginBottom = '0';
  target.style.paddingTop = '0';
  target.style.paddingBottom = '0';
  setTimeout(() => target.removeAttribute('style'), sec);
};

export const slideDown = (target: HTMLElement, sec: number): void => {
  target.style.display = 'block';
  const height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = '0';
  target.style.marginTop = '0';
  target.style.marginBottom = '0';
  target.style.paddingTop = '0';
  target.style.paddingBottom = '0';
  target.offsetHeight;
  target.style.height = `${height}px`;
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  setTimeout(() => target.removeAttribute('style'), sec);
};
