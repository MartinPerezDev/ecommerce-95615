import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(3)
      .then((data)=> {
        setProduct(data);
      })
      .catch((error)=> {
        console.log(error)
      })
  }, []);

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer