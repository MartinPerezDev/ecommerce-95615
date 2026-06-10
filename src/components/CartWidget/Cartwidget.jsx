import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";

const Cartwidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cartwidget">
      <FaCartShopping  size={30} />
      <p className="notification-cartwidget">{ totalQuantity() }</p>
    </div>
  )
}

export default Cartwidget