import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

import './styles.css';

import images from '../../assets/call-of-duty-infinite-warfare.png';
import { CheckoutProductsCard } from '../../components/CheckoutProductsCard';
import { useCart } from '../../context/cart';

export function Checkout() {
  const { cart, uniqueProduct } = useCart();

  return (
    <div className="checkout-page-container">
      <NavBar />
      <div className="checkout-content">
        <h1>Meu Carrinho</h1>
        <Link to="/">Continuar comprando</Link>
        <div className="checkout-card-wrapper">
          {uniqueProduct(cart).map((product) => (
            <CheckoutProductsCard
              key={product.id}
              image={images}
              {...product}
            />
          ))}
        </div>
        <div className="summary-card">
        </div>
      </div>
      <Footer />
    </div >
  )
}
