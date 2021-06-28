import React, { useEffect, useState } from "react";
import { useCart } from '../../context/cart';

import { formatCurrency } from '../../utils';

import './styles.css';

import products from '../../database/products.json';
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

export function Home() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('name');
  const { addToCart } = useCart();

  function handleAddToCart(product) {
    addToCart(product);
    alert('Jogo adicionado ao carrinho')
  }

  useEffect(() => {
    const sortProducts = (type) => {
      const sorted = [...products].sort((a, b) => {
        if (type === 'score') {
          return b[type].toString().localeCompare(a[type].toString(), 'pt-BR', { numeric: true })
        }
        return a[type].toString().localeCompare(b[type].toString(), 'pt-BR', { numeric: true })
      });
      setData(sorted);
    }
    sortProducts(sortType);
  }, [sortType]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="products-header">
          <h2>Jogos</h2>
          <div className="sort-list-container">
            <p>Ordenar por</p>
            <select
              value={sortType}
              className="sort-list"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="price">Preço</option>
              <option value="score">Popularidade</option>
              <option value="name">Ordem Alfabética</option>
            </select>
          </div>
        </div>
        <div className="cards">
          {data.map((product) => (

            <div className="card"
              key={product.id}
            >
              <img src={require(`../../assets/${product.image}`).default} alt="Produto" className="card-image" />
              <div className="card-content">
                <h5 className="card-title">
                  {product.name}
                </h5>
                <h3 className="card-price">
                  {formatCurrency(product.price)}
                </h3>
              </div>
              <button
                className="card-button"
                onClick={() => handleAddToCart(product)} >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


