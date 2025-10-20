import React from 'react';
import './Item.css';

export const Item = ({nombre, precio, descripcion, imagen, children}) => {
    return (
         <article className="item-card">
            {imagen && <img src={imagen} alt={nombre} className="item-img" />}
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripción: {descripcion}</p>
            {children}
        </article>
    )
}