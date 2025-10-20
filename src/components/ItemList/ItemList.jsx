import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css'; 
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext/useCartContext';

export const ItemList = ({lista}) => {
   const {addItem} = useCartContext();

  return (
     <>
        {lista.length
         ? lista.map((prod) => (
            <div key={prod.id} className="item-card-container">
              <Link key={prod.id} to={`/detail/${prod.id}`}>
  <Item {...prod} />
</Link>

              <button onClick={() => addItem(prod)}>Agregar al carrito</button>
            </div>
          ))
        : <p>No hay productos</p>}
        </>
  );
};