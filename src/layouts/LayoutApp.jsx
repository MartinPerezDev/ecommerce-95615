import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const LayoutApp = () => {
  return (
    <>
      <NavBar />
        <main style={{ padding: "20px" }} >
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default LayoutApp