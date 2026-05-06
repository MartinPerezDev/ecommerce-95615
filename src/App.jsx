import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';

function App() {

  const saludo = "Hola mundo";

  return (
    <div>
      <NavBar />
      <Titulo />
    </div>
  )
}

export default App
