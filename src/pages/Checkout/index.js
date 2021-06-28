import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

import './styles.css';

import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';

import { CheckoutProductsCard } from '../../components/CheckoutProductsCard';
import { useCart } from '../../context/cart';
import { SummaryCard } from '../../components/SummaryCard';

export function Checkout() {
  const {
    cart,
    uniqueProduct,
    addToCart,
    removeSigleFromCart,
    removeItemFromCart,
    cartQuantityOfItem,
    cartSubTotalPrice,
    shipping,
    cleanCart,
    shippingFree
  } = useCart();

  const history = useHistory();

  function handleSubmit() {
    cleanCart();
    alert('Pedido realizado com sucesso!');
    history.push('/');
  }

  function handleCleanCart() {
    if (
      window.confirm('Você tem certeza que deseja remover todos os jogos de seu carrinho?')
    ) {
      cleanCart();
    }
  }

  return (
    <div className="checkout-page-container">
      <NavBar />
      <div className="checkout-container">
        <h1 className="checkout-title">Meu Carrinho</h1>
        {cart.length < 1 ?
          <div className="checkout-empty">
            <p>O seu carrinho está vazio :(</p>
            <Link to="/" className="checkout-empty-link">
              <span>
                <CartIcon className="checkout-empty-icon" />
                Continuar comprando
              </span>
            </Link>
          </div>
          :
          <>
            <div className="checkout-content">
              <div className="checkout-card-wrapper">
                {uniqueProduct(cart).map((product) => (
                  <CheckoutProductsCard
                    key={product.id}
                    {...product}
                    addToCart={() => addToCart(product)}
                    cartQuantityOfItem={cartQuantityOfItem}
                    removeSigleFromCart={() => removeSigleFromCart(product)}
                    removeItemFromCart={() => removeItemFromCart(product)}
                  />
                ))}
              </div>
              <div className="summary-container">
                <SummaryCard
                  cartSubTotalPrice={cartSubTotalPrice}
                  quantityOfItens={cart.length}
                  shipping={shipping}
                  shippingFree={shippingFree}
                />
                <div className="summary-conclusion-container">
                  <button
                    onClick={handleSubmit}
                    className="summary-btn-conclusion">
                    Fechar Pedido
                  </button>

                  <button
                    onClick={handleCleanCart}
                    className="summary-btn-clean-cart">
                    Limpar Carrinho x
                  </button>

                </div>
              </div>
            </div>
          </>
        }
      </div>
      <Footer />
    </div >
  )
}
