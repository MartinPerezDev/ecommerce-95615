import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams, useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo = "Este es un texto por defecto" }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const productsRef = collection(db, "products");
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const getProductsByCategory = async () => {
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, where( "category", "==", category ));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);

    if(category){
      getProductsByCategory();
    }else{
      getProducts();
    }

  }, [category]);

  if (isLoading === true) return <Loading />

  if (error !== null) return <div>404 - {error}</div>

  return (
    <div>
      {
        category && (
          <button className="button-to-back" onClick={() => navigate(-1)} >
            <IoIosArrowBack />
            <p>Volver atras</p>
          </button>
        )
      }
      <h2>{category ? saludo + " " + category : saludo}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer