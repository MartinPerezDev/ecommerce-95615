import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, writeBatch, doc, increment } from "firebase/firestore";
import db from "../../db/db.js";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    //console.log(event.target.name);
    //console.log(event.target.value);
  }

  const uploadOrder = async (order) => {
    const ordersRef = collection(db, "orders");
    const response = await addDoc(ordersRef, order);

    //guardamos el id de la orden generada
    setOrderId(response.id);
  };

  const updateStock = async () => {
    const batch = writeBatch(db);

    cart.forEach((productCart)=> {
      const productRef = doc(db, "products", productCart.id);

      batch.update(productRef, { stock: increment( -productCart.quantity ) });
    });

    await batch.commit();
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    }

    try {
      //actualizar el stock
      await updateStock();
      //subir la orden de compra
      await uploadOrder(order);
      //vaciamos el carrito de compra
      deleteCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {
        orderId === null ? (
          <form onSubmit={handleSubmitForm}>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre completo" />
            <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="número de telefono" />
            <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="email" />

            <button type="submit">Terminar mi compra</button>
          </form>
        ) : (
          <div>
            <h2>Orden generada correctamente! ❤️</h2>
            <h3>Guarde el id de su orden: {orderId}</h3>
          </div>
        )
      }
    </div>
  )
}

export default Checkout