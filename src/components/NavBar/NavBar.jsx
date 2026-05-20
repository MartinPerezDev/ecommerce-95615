import logo from "../../img/logo.png";
import Cartwidget from "../CartWidget/Cartwidget";
import "./navbar.css";

const NavBar = () => {

  const categories = [
    {
      id: 1,
      label: "Streaming"
    },
    {
      id: 2,
      label: "Mouse"
    },
    {
      id: 3,
      label: "Auriculares"
    }
  ];

  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} className="brand-img" alt="" />      
      </div>  
  
      <ul className="categories">
        {
          categories.map( (category) => (
            <li key={category.id} className="category" >{category.label}</li>
          ))
        }
      </ul>

      <Cartwidget />
    </nav>
  )
}

export default NavBar