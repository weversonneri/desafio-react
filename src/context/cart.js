import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const cartTotalPrice = cart.reduce((accumPrice, { price }) => accumPrice + price, 0);
  const addToCart = (product) => setCart((currentCart) => [...currentCart, product]);

  const cartQuantityOfItem = (id) => cart.filter((product) => product.id === id).length;
  return (
      cart,
      addToCart,
      cartQuantityOfItem,
      cartTotalPrice,
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };