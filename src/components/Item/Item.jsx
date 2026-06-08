import "./item.css";
import { Link } from "react-router";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>

      <div className="text-item-container">
        <p className="title-item">{product.name}</p>
        <p className="price-item">${product.price}</p>
        <Link to={`/detail/${product.id}`}>
          <div className="button-item">MAS INFORMACION</div>
        </Link>
      </div>
    </li>
  )
}

export default Item