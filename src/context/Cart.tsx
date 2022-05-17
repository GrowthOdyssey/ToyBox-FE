import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export interface CartItemType {
  id: string;
  quantity: number;
}

export interface CartContextType {
  cartItem: CartItemType[];
  setCartItem: Dispatch<SetStateAction<CartItemType[]>>;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [cartItem, setCartItem] = useState<CartItemType[]>([]);

  return <CartContext.Provider value={{ cartItem, setCartItem }}>{children}</CartContext.Provider>;
};

export const useCartContext = (): CartContextType => useContext(CartContext);
