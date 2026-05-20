import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

const ItemListContainer = ({ saludo = "Este es un texto por defecto" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((errorMessage) => setError(errorMessage) )
      .finally(()=> setIsLoading(false) )
  }, []);

  if(isLoading === true) return <Loading />

  if(error !== null) return <div>404 - {error}</div>

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer