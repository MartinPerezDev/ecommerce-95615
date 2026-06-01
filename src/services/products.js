
const API_URL = "https://api-products-coder.onrender.com/api"

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await response.json();
  return data.payload;
};

export const getProductById = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`);
  const data = await response.json();
  return data.payload;
};

export const addProduct = async (newProduct) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct)
  });

  const data = await response.json();
  return data.payload;
};

export const setProductById = async (updates, productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates)
  });

  const data = await response.json();
  return data.payload;
};

export const deleteProductById = async(productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE"
  });

  const data = await response.json();
  return data.payload;
};