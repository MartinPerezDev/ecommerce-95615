import { useState } from "react";

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
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={handleClickDecrease} >-</button>
        <p>{count}</p>
        <button onClick={handleClickIncrease} >+</button>
      </div>

      <button onClick={ () => addToCart(count) } >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount