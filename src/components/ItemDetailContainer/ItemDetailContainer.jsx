import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/product";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        getProductById(id)
            .then((data) => {
                setDetail(data);
            })
            .catch(() => {
                setError("Producto no encontrado");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (!detail.id) return <p>Cargando producto...</p>;
    
    return (
        <main>
            <ItemDetail detail={detail} />
   
    </main>
    )
};