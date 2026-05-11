import "./titulo.css";
import banner from "../../img/react-banner.webp";

const Titulo = () => {

  return (
    <div className="titulo">
      <img src={banner} className="titulo-img" alt="" />
      <h2 className="titulo-h2" >Bienvenidos a la 2da clase!</h2>
    </div>
  )
};

export default Titulo;