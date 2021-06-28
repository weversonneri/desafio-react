import React from 'react';
import { formatCurrency } from '../../utils';

import './styles.css';

export function SummaryCard(props) {
  return (
    <div className="summary-card-container">
      <div className="summary-content">
        <p className="summary-qnt">{props.quantityOfItens}
          {props.quantityOfItens > 1 ? ' Produtos' : ' Produto'}
        </p>
        <span className="summary-subtotal">
          <p>Subtotal</p>
          <p>{formatCurrency(props.cartSubTotalPrice)}</p>
        </span>
        <span className="summary-shipping">
          <p>Frete</p>
          <p>{props.shipping !== 0 ? formatCurrency(props.shipping) : 'Grátis'}</p>
        </span>
        {props.shipping !== 0 &&
          <p className="summary-shipping-calculator">
            Faltam {formatCurrency(props.shippingFree - props.cartSubTotalPrice)} para frete grátis
          </p>
        }
      </div>
      <div className="summary-total">
        <h2>Total</h2>
        <h3>{formatCurrency(props.cartSubTotalPrice + props.shipping)}</h3>
      </div>
    </div>
  );
}
