import { ClipLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-content">
        <ClipLoader color="#dd3d3d" size={60} />
        <p>Cargando...</p>
      </div>
    </div>
  )
}

export default Loading