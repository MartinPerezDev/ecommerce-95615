import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
  const [cart, setCart] = useState( cartLocalStorage ? cartLocalStorage : [] );

  useEffect(()=> {
    //cada vez que cart se actualice, guardamos los productos en localStorage
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
  }, [cart]);

  const addProductInCart = (newProduct) => {
    //desafio -> comprobar el stock real, antes de agregar o sumar cantidad en el producto

    //detectar si el producto nuevo ya esta en el carrito
    if( isInCart(newProduct.id) ){
      //-> si esta: sumar cantidades
      //obtenemos el indice del producto que esta en el carrito
      const indexProduct = cart.findIndex((productCart) => productCart.id === newProduct.id );
      //copiamos los datos del carrito, para no modificar el original
      const newCart = [...cart];
      //actualizamos la cantidad
      newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity;
      setCart(newCart);
    }else{
      //-> si no esta: agregarlo como nuevo
      setCart([...cart, newProduct]);
    }
  };

  const totalQuantity = () => {
    return cart.reduce((total, productCart) => total + productCart.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
  };

  const isInCart = (productId) => {
    return cart.some((productCart) => productCart.id === productId);
  };

  const deleteProductById = (productId) => {
    const productsFiltered = cart.filter( (productCart) => productCart.id !== productId );
    setCart(productsFiltered);
  };

  const deleteCart = () => {
    setCart([]);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, isInCart, deleteProductById, deleteCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
};