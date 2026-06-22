import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import "./cartwidget.css";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const total = totalQuantity();

  return (
    <Link className="cartwidget" to="/cart">
      <FaCartShopping  size={30} />
      {
        total > 0 && <p className="notification-cartwidget">{total}</p>
      } 
    </Link>
  )
}

export default Cartwidget