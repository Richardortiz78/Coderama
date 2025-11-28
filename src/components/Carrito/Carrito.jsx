import React from 'react';
import { useCartContext } from '../context/CartContext/useCartContext';
import "./Carrito.css"

export const Carrito = () => {
  const {cart, addItem, clearCart, deleteItem, getTotalItems, total  } = useCartContext();

  if (cart.length === 0) return <p className="carrito-vacio">El carrito está vacío 🛒</p>;

  return (
    <div className="carrito-container">
      <h2>Mi Carrito</h2>
      <ul>
        {cart.map((prod, index) => (
          <li key={index}>
            <img src={prod.imagen} alt={prod.nombre} width="50" />
            <span>{prod.nombre}</span>
            <span>${prod.precio}</span>
            
            <div className="cantidad-controls">
              <button onClick={() => addItem({ ...prod, quantity: 1 })}>+</button>
              <span>{prod.quantity}</span>
              <button
                onClick={() => {
                  if (prod.quantity > 1) {
                    addItem({ ...prod, quantity: -1 });
                  } else {
                    deleteItem(prod.id);
                  }
                }}
              >
                -
              </button>
            </div>

            <button className="delete-btn" onClick={() => deleteItem(prod.id)}>🗑️</button>
          </li>
        ))}
      </ul>
         <div className="carrito-footer">
        <h3>Total: ${total()}</h3>
        <button onClick={clearCart} className="vaciar-btn">Vaciar carrito</button>
      </div>
    </div>
  );
};
