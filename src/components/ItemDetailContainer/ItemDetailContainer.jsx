import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then((data)=> {
        setProduct(data);
      })
      .catch((error)=> {
        setError(error);
      })
  }, []);

  if(error){
    return(
      <div>Error - {error}</div>
    )
  }

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer