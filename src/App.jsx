import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
