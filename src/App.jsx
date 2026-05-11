import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContadorContainer from './components/ejemplos/ContadorContainer/ContadorContainer';

function App() {

  function saludando(){
    alert("Saludos desde el componente App");
  };

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a mi ecommerce" saludando={saludando} />
      <ContadorContainer />
    </div>
  )
}

export default App
