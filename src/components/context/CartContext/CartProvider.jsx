import { useState } from "react"
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const exists = (id) => {
    
    return cart.some(p=> p.id === id);
   
  };

    const addItem = (item) => {
        if (exists (item.id)) {
            //map, cuido mutación a nivel del array
            const updatedCart = cart.map((prod) => {
               if (prod.id === item.id){
                //cuidar mutacion a nivel objeto
                return {...prod, quantity: prod.quantity + (item.quantity || 1)}
               } 
                return prod;
               
            })
            setCart(updatedCart);
            }else{
            setCart([...cart, {...item, quantity: item.quantity || 1}]);
            alert(`${item.nombre} agregado`);
            }
    };
    
  const deleteItem = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => cart.reduce((acc, p) => acc + p.quantity, 0);

  const total = () =>
    Math.round(cart.reduce((acc, p) => acc + p.precio * p.quantity, 0) * 100) /
    100;

    const values = {
        cart, 
        addItem, 
        deleteItem,
        clearCart, 
        getTotalItems,
        total,
    }
    
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};