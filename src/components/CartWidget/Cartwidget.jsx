import { FaCartShopping } from "react-icons/fa6";
import "./cartwidget.css";

const Cartwidget = () => {
  return (
    <div className="cartwidget">
      <FaCartShopping  size={30} />
      <p className="notification-cartwidget">1</p>
    </div>
  )
}

export default Cartwidget