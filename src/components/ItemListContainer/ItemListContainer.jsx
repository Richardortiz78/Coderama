import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { ItemList } from '../ItemList/ItemList';
import { getProducts } from '../../services/product';


export const ItemListContainer = ({}) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoria } = useParams();

useEffect(() => {
  setLoading(true);
  setError(null);

  getProducts(categoria)
    .then((data) => {
      setLista(data);
    })
    .catch((err) => {
      console.error(err);
      setError("No se pudieron cargar los productos");
    })
    .finally(() => {
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
