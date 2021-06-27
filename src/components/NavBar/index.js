import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import cartIcon from '../../assets/cart-icon.svg';

import './styles.css';

export function NavBar() {
  const history = useHistory();

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/" className="logo-text">
          GameStore
        </Link>
      </div>
      <div className="cart-icon-container">
        <img
          className="cart-icon"
          src={cartIcon}
          alt="Carrinho"
          onClick={() => { history.push('/checkout') }} />
        <span className="cart-quantity"> 5 </span>
      </div>
    </nav>
  )
}
