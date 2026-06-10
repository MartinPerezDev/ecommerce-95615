import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProductInCart, isInCart } = useContext(CartContext);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    //agregar el producto al carrito
    addProductInCart(newProduct);
  };

  //evaluamos si el producto esta en el carrito
  const productIsInCart = isInCart(product.id);

  return (
    <div className="itemdetail">
      <div className="img-container-itemdetail">
        <img className="img-itemdetail" src={product.image} alt="" />
      </div>
      <div className="text-itemdetail">
        <p className="title-itemdetail">{product.name}</p>
        <p className="description-itemdetail">{product.description}</p>
        <p className="price-itemdetail">Precio: ${product.price}</p>
        {
          productIsInCart === true ?
            (<button>Terminar mi compra</button>) :
            (<ItemCount stock={product.stock} addToCart={addToCart} />)
        }
      </div>
    </div>
  )
}

export default ItemDetail