import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getProducts, getProductById, addProduct, setProductById, deleteProductById } from "../../services/products.js";

const ItemListContainer = ({ saludo = "Este es un texto por defecto" }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const loadProducts = async () => {
      try {
        //Obtener todos los productos
        const data = await getProducts();
        setProducts(data);

        //Obtener producto por id
        const data2 = await getProductById("0cc0ca35-764e-438e-a1bc-b494497e05a3");
        console.log(data2)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const clickButton = async () => {
    /*
    const newProduct = {
      title: "Microfono",
      price: 150,
      stock: 20,
      image: "/img/BLAZAR.png",
      category: "streaming"
    };

    await addProduct(newProduct);
    
    const updates = {
      title: "Microfono condenser",
      price: 150,
      stock: 20,
      image: "/img/BLAZAR.png",
      category: "streaming"
    }

    const res = await setProductById(updates, "eb9af980-a9ec-4d4e-a38f-23bd89c9c662");
    console.log(res)
    */

    await deleteProductById("39fc6d4e-ada3-41cf-9f18-b1e3cbf57189");

    const data = await getProducts();
    setProducts(data);
  };

  if (isLoading === true) return <Loading />

  if (error !== null) return <div>404 - {error}</div>

  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={clickButton} >borrar producto</button>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer