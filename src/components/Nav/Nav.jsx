import "./Nav.css";
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext/useCartContext";


export const Nav = () =>{
    const { getTotalItems } =  useCartContext();

  
    return (
    <nav>
        <ul>
             <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="categoria/juegos">Juegos</Link>
            </li>
            <li>
                <Link to="categoria/programas">Programas</Link>
            </li>
            <li>
                <Link to="/carrito">Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
        </nav>)

}