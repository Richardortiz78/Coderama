import { Nav } from "../Nav/Nav"
import "./Header.css";

export const Header = () => {
    return(
        <header className="header-container">
            <div className="logo-title">
            <img
                src="/images/logo2.png" 
                alt="Logo CODERAMA" 
                className="logo2"
                />
                <h1 className="site-title">CODERAMA</h1>
            </div>
            <Nav/>
        </header>
    )
}