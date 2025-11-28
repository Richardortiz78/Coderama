import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../services/utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/product";

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({
        nombre:"",
        precio:"",
        categoria:"",
        descripcion:"",
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
            setLoading(true);
            
        try{
            const imagen = await uploadToImgbb(file)
            const productData = {
                ...product, precio: Number(product.precio), imagen,
            };

            await createProduct(productData);
            alert("Producto cargado con exito");

            setProduct({nombre:"", precio:"", categoria:"", descripcion:""})

        }catch (error){
            setErrors({general: error.message})
        }finally{
            setLoading(false)
        }
    }
return <ProductFormUI product={product} errors={errors} onChange ={handleChange} onFileChange={setFile} loading ={loading} onSubmit={handleSubmit} />

}