import Image from 'next/image';
import { VFC, memo } from 'react';
import { IconType } from 'types/common/icon';

export const Icon: VFC<IconType> = memo((props) => {
  const { src, alt, size = 25 } = props;

  return <Image src={src} alt={alt} width={size} height={size} />;
});
