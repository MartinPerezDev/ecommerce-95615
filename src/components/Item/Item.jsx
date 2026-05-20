import "./item.css";

const Item = ({ product }) => {
  return (
    <div className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>

      <div className="text-item-container">
        <p className="title-item">{product.name}</p>
        <p className="price-item">Precio: ${product.price}</p>
        <button className="button-item">MAS INFORMACION</button>
      </div>
    </div>
  )
}

export default Item