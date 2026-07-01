import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const LayoutApp = () => {
  return (
    <>
      <NavBar />
        <main style={{ padding: "20px" }} >
          <Outlet />
        </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  )
}

export default LayoutApp