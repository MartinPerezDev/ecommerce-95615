import { collection, query, where, getDocs, doc, runTransaction, serverTimestamp } from "firebase/firestore";
import db from "../db/db.js";

export const createOrderWithStockUpdate = async (order, cart) => {
  const newOrderId = await runTransaction(db, async (transaction) => {
    const ordersRef = collection(db, "orders");
    const orderRef = doc(ordersRef);

    //en esta variable guardamos las referencias y el stock nuevo de cada producto
    const productsToUpdate = [];

    //primero hacemos todas las lecturas y validaciones
    for (const productCart of cart) {
      const productRef = doc(db, "products", productCart.id);
      const productDoc = await transaction.get(productRef);

      if (!productDoc.exists()) {
        throw new Error(`El producto ${productCart.name} no existe`);
      }

      //guardamos el stock actual
      const currentStock = productDoc.data().stock;

      if (currentStock < productCart.quantity) {
        throw new Error(`No hay stock suficiente de ${productCart.name}`);
      }

      productsToUpdate.push({ ref: productRef, newStock: currentStock - productCart.quantity });
    }

    //despues de leer todos los productos en el carrito, hacemos todas las escrituras
    productsToUpdate.forEach((product) => {
      transaction.update(product.ref, { stock: product.newStock });
    });

    //guardamos y subimos la orden dentro de la misma transaccion
    transaction.set(orderRef, { ...order, date: serverTimestamp() });

    return orderRef.id;
  });

  return newOrderId;
};

export const getProductsDB = async (category) => {
  const productsRef = collection(db, "products");

  const productsQuery = category
    ? query(productsRef, where("category", "==", category))
    : productsRef;

  const dataDb = await getDocs(productsQuery);
  const data = dataDb.docs.map((productDb) => {
    return { id: productDb.id, ...productDb.data() };
  });

  return data;
};