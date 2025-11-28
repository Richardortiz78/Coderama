export const validateProduct = (product, fileRequired=true) => {
    const errors = {}

    if(!product.nombre.trim()){
        errors.nombre ="El nombre es obligatorio";
    }   
    if(!product.precio || product.precio <=0){
        errors.precio = "El precio debe ser mayor a cero";
    }
    
    if(!product.categoria.trim()){
        errors.categoria ="La categoria es obligatoria";
    }
    if(!product.descripcion.trim()){
        errors.descripcion ="La descripción es obligatoria";
    }
      return errors;
}