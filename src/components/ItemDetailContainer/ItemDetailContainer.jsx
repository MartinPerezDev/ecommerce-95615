import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProductById = async() => {
    try {
      //Pasar esta funcionalidad a el archivo de firestore.js
      const productRef = doc(db, "products", productId);
      const dataDb = await getDoc(productRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);

    getProductById();
  }, []);

  if(isLoading === true) return <Loading />

  if(error !== null) return <div>404 - {error}</div>

  if (error) {
    return (
      <div>Error - {error}</div>
    )
  }

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer