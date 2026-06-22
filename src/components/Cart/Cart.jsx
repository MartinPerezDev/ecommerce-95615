import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const Cart = () => {
  const { cart, deleteProductById, deleteCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito 😢</h1>
        <Link to="/" >Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Listado de productos</h1>
      {
        cart.map((productCart) => (
          <div key={productCart.id} style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={productCart.image} alt="" width={100} />
            <p>{productCart.name}</p>
            <p>precio c/u: ${productCart.price}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio parcial: ${productCart.price * productCart.quantity}</p>
            <button onClick={() => deleteProductById(productCart.id)} >
              <FaTrashAlt size={30} />
            </button>
          </div>
        ))
      }

      <p>Precio total: ${totalPrice()} </p>

      <button onClick={deleteCart}>
        <p>Vaciar carrito</p>
        <FaTrashAlt size={30} />
      </button>
    </div>
  )
}

export default Cart