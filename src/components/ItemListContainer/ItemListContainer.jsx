import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";

const ItemListContainer = ({ saludo = "Este es un texto por defecto" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
  }, []);

  console.log(products);

  return (
    <div>
      <h2>{saludo}</h2>
      {
        products.map((product) => (
          <div key={product.id} >
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ItemListContainer