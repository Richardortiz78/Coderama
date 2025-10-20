import React from 'react';
import { useCartContext } from '../context/CartContext/useCartContext';
import "./Carrito.css"

export const Carrito = () => {
  const {cart} = useCartContext();

  if (cart.length === 0) return <p>El carrito está vacío 🛒</p>;

  return (
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      <ul>
        {cart.map((prod, index) => (
          <li key={index}>
            <img src={prod.imagen} alt={prod.nombre} width="50" />
            <span>{prod.nombre}</span> - <span>${prod.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
