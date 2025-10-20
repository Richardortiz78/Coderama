import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = ({}) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoria } = useParams();

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data) => {
        const productosFiltrados = categoria 
    ? data.filter(prod => prod.categoria === categoria)
    : data;

        setLista(productosFiltrados);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los productos');
        setLoading(false);
      });
  }, [categoria]);

  if (loading || error) {
  return (
    <div className="item-list-container">
      <p>{loading ? 'Cargando productos...' : error}</p>
    </div>
  );
}


  return (
  <div className="item-list-container">
    <ItemList lista={lista} />
  </div>
);

};
