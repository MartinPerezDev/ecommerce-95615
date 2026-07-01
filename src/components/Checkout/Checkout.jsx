import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrderWithStockUpdate } from "../../services/firestore.js";
import { toast } from "react-toastify";

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
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    }

    try {
      const newOrderId = await createOrderWithStockUpdate(order, cart);

      //si la orden salio bien, mostramos el id y vaciamos el carrito
      setOrderId(newOrderId);
      deleteCart();
      toast.success("Orden generada correctamente!");
    } catch (error) {
      toast.error(error.message);
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