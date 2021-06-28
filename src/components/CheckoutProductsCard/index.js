import React from 'react'

import './styles.css';

import images from '../../assets/call-of-duty-infinite-warfare.png';
import { formatCurrency } from '../../utils';


export function CheckoutProductsCard({
  addToCart,
  cartQuantityOfItem,
  removeSigleFromCart,
  removeItemFromCart,
  ...product
}) {
  return (
    <div className="checkout-card">
      <div className="checkout-card-img-name">
        <img
          className="checkout-product-img"
          src={images}
          alt="Produto"
        />
        <h5>{product.name}</h5>
      </div>
      <div className="checkout-products-content">
        <h4 className="checkout-products-price">{formatCurrency(product.price)}</h4>
        <div className="checkout-products-quantity">
          <div className="checkout-products-alter">
            <button
              className="checkout-products-decrease"
              onClick={() => removeSigleFromCart(product)}> - </button>
            {cartQuantityOfItem(product.id)}
            <button
              className="checkout-products-increase"
              onClick={addToCart}> + </button>
          </div>
          <button
            className="checkout-products-remove"
            onClick={() => removeItemFromCart(product)}>Excluir</button>
        </div>
      </div>
    </div>
  );
}
