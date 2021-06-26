import React, { createContext, useContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const name = 'name'

  return (
    <CartContext.Provider value={{ name }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };