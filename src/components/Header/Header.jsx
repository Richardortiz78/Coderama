import { Nav } from "../Nav/Nav"
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header-container">
            <div className="logo-title">
              <Link to="/" className="home-link">
             <img
                src="/images/logo2.png" 
                alt="Logo CODERAMA" 
                className="logo2"
                />
                <h1 className="site-title">CODERAMA</h1>
                </Link>
            </div>
            <Nav/>
        </header>
    )
}