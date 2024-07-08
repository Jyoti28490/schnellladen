import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
