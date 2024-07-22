import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="navbar-links">
            <li className="navbar-item">
                <a className="header-link" href="index.html">Tienda</a>
            </li>
            <li className="navbar-item">
                <a className="header-link" href="#">Ofertas</a>
            </li>
            <li className="navbar-item">
                <a className="header-link" href="#">Contacto</a>
            </li>
        </ul>
        <CartWidget />
    </nav>




    
  )
}

export default Navbar