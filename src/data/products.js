const products = [
  {
    id: 1,
    name: "Teclado mecanico",
    description: "",
    price: 1200,
    category: "teclados",
    stock: 5
  },
  {
    id: 2,
    name: "Mouse",
    description: "",
    price: 500,
    category: "mouse",
    stock: 3
  }
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};