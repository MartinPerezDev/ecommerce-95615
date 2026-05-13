import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const LayoutApp = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "20px" }} >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LayoutApp