/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';
import { CartItemProvider } from './CartItem';
import { LoginUserProvider } from './LoginUser';

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

const ComposeProvider = bundleComponents(CartItemProvider, LoginUserProvider);

export const AppContext = (props: { children: ReactNode }) => {
  const { children } = props;

  return <ComposeProvider>{children}</ComposeProvider>;
};
