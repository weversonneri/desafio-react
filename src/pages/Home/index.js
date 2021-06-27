import React from "react";
import { useCart } from '../../context/cart';

import images from '../../assets/call-of-duty-infinite-warfare.png';

import './styles.css';

import products from '../../services/products.json';
import { NavBar } from "../../components/NavBar";

export function Home() {

  return (
    <>
      <NavBar />
      <div className="container">

        <div className="cards">
          {products.map((product) => (

            <div className="card"
              key={product.id}
            >
              <img src={images} alt="Produto" className="card-image" />
              <div className="card-content">
                <h5 className="card-title">
                  {product.name}
                </h5>
                <h3 className="card-price">
                  R$ {product.price}
                </h3>
              </div>
              <button
                className="card-button"
                onClick={() => console.log(product.id)} >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


