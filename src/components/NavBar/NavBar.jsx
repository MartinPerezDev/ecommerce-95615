import logo from "../../img/logo.png";
import Cartwidget from "../CartWidget/Cartwidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} className="brand-img" alt="" />      
      </div>  
  
      <ul className="categories">
        <li>Teclados</li>
        <li>Mouse</li>
        <li>Monitores</li>
      </ul>

      <Cartwidget />
    </nav>
  )
}

export default NavBar