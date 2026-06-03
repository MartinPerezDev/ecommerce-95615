import { Link } from "react-router"

const ErrorPage = ({ statusCode = 500, message = "Recurso no encontrado" }) => {
  return (
    <div>
      <h2>{statusCode}</h2>
      <h4>{message}</h4>
      <Link to="/">Seguir comprando</Link>
    </div>
  )
}

export default ErrorPage