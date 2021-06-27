import React from 'react'

import './styles.css';

import images from '../../assets/call-of-duty-infinite-warfare.png';
import { useCart } from '../../context/cart';


export function CheckoutProductsCard(product) {
  const { removeSigleFromCart, removeItemFromCart, cartQuantityOfItem } = useCart();

  return (
    <div className="checkout-card">
      <img
        className="checkout-product-img"
        src={images}
        alt="Produto"
      />
      <div className="checkout-card-content">
        <h5>{product.name}</h5>
        <div className="checkout-products-quantity">
          <span>
            <button onClick={() => removeSigleFromCart(product)}> - </button>
          </span>
          {cartQuantityOfItem(product.id)}
          <span>
            +
          </span>
        </div>
        <h4>{product.price}</h4>
        <button onClick={() => removeItemFromCart(product)}>remover</button>
      </div>
    </div>
  );
}
