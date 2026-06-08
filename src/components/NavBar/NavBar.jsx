import logo from "../../img/logo.png";
import Cartwidget from "../CartWidget/Cartwidget";
import { Link, NavLink } from "react-router";
import "./navbar.css";

const NavBar = () => {

  const categories = [
    {
      id: 1,
      label: "Streaming",
      path: "streaming"
    },
    {
      id: 2,
      label: "Mouse",
      path: "mouse"
    },
    {
      id: 3,
      label: "Auriculares",
      path: "auriculares"
    }
  ];

  return (
    <nav className="navbar">
      <Link to="" className="brand">
        <img src={logo} className="brand-img" alt="" />      
      </Link>  
  
      <ul className="categories">
        {
          categories.map( (category) => (
              <NavLink to={`/category/${category.path}`} className="category" key={category.id} >{category.label}</NavLink>
          ))
        }
      </ul>

      <Cartwidget />
    </nav>
  )
}

export default NavBar