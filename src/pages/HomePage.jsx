
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ContadorContainer from "../components/ejemplos/ContadorContainer/ContadorContainer"

const HomePage = () => {
  return (
    <div>
      <ItemListContainer saludo="Bienvenidos a mi ecommerce" />
      <ContadorContainer />
    </div>
  )
}

export default HomePage