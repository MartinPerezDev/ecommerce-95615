import { useState, useEffect } from "react";
import Contador from "../Contador/Contador";

const ContadorContainer = () => {
  //hook de estado: useState o variable de estado
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  //se ejecuta solamente al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que "contador" se actualice
  //ej: para realizar acciones especificas cuando una variable dependiente cambia
  useEffect(() => {
    console.log("2do useEffect")
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useEffect");
  });

  const aumentar = () => {
    if (contador < 10) {
      setContador((prevState) => prevState + 1);
    }
  };

  const alternarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Contador contador={contador} aumentar={aumentar} />
      <div>
        <p>Valor del toggle: {toggle.toString()} </p>
        <button onClick={alternarToggle} >Alternar valor de toggle</button>
      </div>
    </>
  )
}

export default ContadorContainer