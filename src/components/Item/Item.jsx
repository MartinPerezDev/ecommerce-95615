import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>

      <div className="text-item-container">
        <p className="title-item">{product.title}</p>
        <p className="price-item">${product.price}</p>
        <div className="button-item">MAS INFORMACION</div>
      </div>
    </li>
  )
}

export default Item