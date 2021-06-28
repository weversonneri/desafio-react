import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

const shippingInf = {
  shipping_tax: 10,
  shipping_free: 250
};

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);

  const cartSubTotalPrice = cart.reduce((accumPrice, { price }) => accumPrice + price, 0);

  useEffect(() => {
    if (cartSubTotalPrice > shippingInf.shipping_free) {
      setShipping(0);
      return;
    }
    setShipping(cart.length * shippingInf.shipping_tax);
  }, [cart, cartSubTotalPrice])

  const addToCart = (product) => setCart((currentCart) => [...currentCart, product]);

  const cartQuantityOfItem = (id) => cart.filter((product) => product.id === id).length;

  const removeSigleFromCart = (product) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === product.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const removeItemFromCart = (product) => {
    const newCart = [...cart].filter((cartItem) => cartItem.id !== product.id);
    setCart(newCart);
  };

  const cleanCart = () => setCart([]);

  const uniqueProduct = (product) => Array.from(new Set(product));

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      cartQuantityOfItem,
      cartSubTotalPrice,
      removeItemFromCart,
      removeSigleFromCart,
      uniqueProduct,
      shipping,
      cleanCart,
      shippingFree: shippingInf.shipping_free
    }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };