import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetail">
      <div className="img-container-itemdetail">
        <img className="img-itemdetail" src={product.image} alt="" />
      </div>
      <div className="text-itemdetail">
        <p className="title-itemdetail">{product.name}</p>
        <p className="description-itemdetail">{product.description}</p>
        <p className="price-itemdetail">Precio: ${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail