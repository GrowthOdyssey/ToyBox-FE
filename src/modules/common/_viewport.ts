import { breakPoint, containerSize } from 'variables/config';

export const switchViewportBehavior = (): void => {
  const viewport = document.querySelector('meta[name="viewport"]') as Element;
  const pcBaseSize = containerSize.pc;
  const spBaseSize = 360;
  const initValue = 'width=device-width,initial-scale=1';

  const switchViewport = (): void => {
    const pcMedia = matchMedia(`${breakPoint <= window.outerWidth && window.outerWidth < pcBaseSize}`);
    const value =
      pcMedia.media === 'true'
        ? `width=${pcBaseSize}`
        : window.outerWidth < spBaseSize
        ? `width=${spBaseSize}`
        : initValue;

    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };

  window.addEventListener('resize', switchViewport, false);
  switchViewport();
};
