import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>

      <div className="text-item-container">
        <p className="title-item">{product.name}</p>
        <p className="price-item">${product.price}</p>
        <Link to={`/detail/${product.id}`} className="button-item">
          <IoIosArrowForward />
          <p>MAS INFORMACION</p>
        </Link>
      </div>
    </li>
  )
}

export default Item