import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams, useNavigate } from "react-router";

const ItemListContainer = ({ saludo = "Este es un texto por defecto" }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((data) => {
        if(category){
          const filteredProducts = data.filter((product) => product.category === category );
          setProducts(filteredProducts);
        }else{
          setProducts(data);
        }
      })
      .catch((errorMessage) => setError(errorMessage) )
      .finally(()=> setIsLoading(false) )
  }, [category]);

  if(isLoading === true) return <Loading />

  if(error !== null) return <div>404 - {error}</div>

  return (
    <div>
      {
        category && <button onClick={ () => navigate(-1) } >Volver atras</button>
      }
      <h2>{ category ? saludo + " " + category : saludo }</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer