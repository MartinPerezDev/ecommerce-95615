import { createBrowserRouter } from "react-router";
import LayoutApp from "./layouts/LayoutApp";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "detail",
        element: <ProductDetailPage />
      },
      {
        path: "*",
        element: <ErrorPage statusCode={404} message={"Página no encontrada"} />
      }
    ]
  }
]);