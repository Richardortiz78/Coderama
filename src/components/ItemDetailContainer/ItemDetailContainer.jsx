import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    useEffect (() => {
        fetch("/productos.json")
        .then(res => {
            if (!res.ok) throw new Error('Error al cargar productos');
            return res.json();
            })
        
        
        .then(data => {
            const found = data.find(prod => prod.id.toString() === id)
            console.log("Producto encontrado:", found)
            if (found){setDetail(found);
            } else {
                throw new Error("Producto no encontrado");
            }
        })
        
        .catch(() => {});        
    }, [id]);

    if (!detail.id) return <p>Cargando producto...</p>;
    
    return (
        <main>
            <ItemDetail detail={detail} />
   
    </main>
    )
};