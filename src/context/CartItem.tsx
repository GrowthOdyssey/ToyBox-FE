import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export interface CartItemType {
  id: string;
  quantity: number;
}

export interface CartItemContextType {
  cartItem: CartItemType[];
  setCartItem: Dispatch<SetStateAction<CartItemType[]>>;
}

export const CartItemContext = createContext({} as CartItemContextType);

export const CartItemProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [cartItem, setCartItem] = useState<CartItemType[]>([]);

  return <CartItemContext.Provider value={{ cartItem, setCartItem }}>{children}</CartItemContext.Provider>;
};

export const useCartItemContext = (): CartItemContextType => useContext(CartItemContext);
