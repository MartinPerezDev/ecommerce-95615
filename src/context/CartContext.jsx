import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (newProduct) => {
    //detectar si el producto nuevo ya esta en el carrito
      //-> si esta: sumar cantidades
      //-> si no esta: agregarlo como nuevo
    setCart([ ...cart, newProduct ]);
  };

  const totalQuantity = () => {
    return cart.reduce((total, productCart) => total + productCart.quantity, 0 );
  };

  const isInCart = (productId) => {
    return cart.some( (productCart) => productCart.id === productId );
  };

  console.log(cart);

  return(
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, isInCart } }>
      {children}
    </CartContext.Provider>
  )
};