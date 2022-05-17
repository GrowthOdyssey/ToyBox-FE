/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';
import { CartProvider } from './Cart';

const bundleComponents = (...components: any[]) => {
  if (components.length === 1) {
    return components[0];
  } else {
    return components.reduce((A, B) => (props: any) => (
      <A>
        <B {...props} />
      </A>
    ));
  }
};

const ComposeProvider = bundleComponents(CartProvider);

export const AppContext = (props: { children: ReactNode }) => {
  const { children } = props;

  return <ComposeProvider>{children}</ComposeProvider>;
};
