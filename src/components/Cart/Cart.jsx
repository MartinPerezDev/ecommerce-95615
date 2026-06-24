import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import "./cart.css";

const Cart = () => {
  const { cart, deleteProductById, deleteCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>No hay productos en el carrito 😢</h1>
        <Link to="/" className="button-to-home">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      <h1>Listado de productos</h1>
      <div className="products-list-cart">
        {
          cart.map((productCart) => (
            <div key={productCart.id} className="product-cart">
              <img src={productCart.image} alt="" width={100} />
              <p>{productCart.name}</p>
              <p>precio c/u: ${productCart.price}</p>
              <p>cantidad: {productCart.quantity}</p>
              <p>precio parcial: ${productCart.price * productCart.quantity}</p>
              <button className="button-to-delete" onClick={() => deleteProductById(productCart.id)} >
                <FaTrashAlt />
              </button>
            </div>
          ))
        }
      </div>

      <p>Precio total: ${totalPrice()} </p>

      <button className="button-to-delete-all" onClick={deleteCart}>
        <p>Vaciar carrito</p>
        <FaTrashAlt />
      </button>
    </div>
  )
}

export default Cart