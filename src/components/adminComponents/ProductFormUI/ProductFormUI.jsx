import './ProductFormUI.css'

export const ProductFormUI =({product, errors, loading, onChange, onFileChange, onSubmit}) =>{
return <section>
    <form className= "product-form" onSubmit={onSubmit}>
        <h2>Agregar producto</h2>
        <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={product.nombre} onChange={onChange} required/>
        {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
         <div>
            <label>Precio:</label>
            <input type="number" name="precio" value={product.precio} onChange={onChange} required/>
            {errors.precio && <p className="error">{errors.precio}</p>}
        </div>
        <div>
            <label>Categoria:</label>
            <input type="text" name="categoria" value={product.categoria} onChange={onChange} required/>
            {errors.categoria && <p className="error">{errors.categoria}</p>}
        </div>
        <div>
            <label>Descripción:</label>
            <textarea name="descripcion" value={product.descripcion} onChange={onChange} required/>
            {errors.descripcion && <p className="error">{errors.descripcion}</p>}

        </div>
        <div>
            <label>Imagen</label>
            <input type="file" accept="image/*" onChange={(e) => onFileChange (e.target.files?.[0] ?? null)}/>
            {errors.imagen && <p className="error">{errors.imagen}</p>}
        </div>

        <button type="submit" disabled={loading}>
        {loading ? "Guardando..." : "Guardar producto"}
        </button>
    </form>
</section>
}