import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls-itemcount">
        <button className="button-control-itemcount" onClick={handleClickDecrease} >-</button>
        <p className="value-itemcount">{count}</p>
        <button className="button-control-itemcount" onClick={handleClickIncrease} >+</button>
      </div>

      <button className="addcart-itemcount" onClick={() => addToCart(count)} >Agregar al carrito</button>
    </div>

  )
}

export default ItemCount