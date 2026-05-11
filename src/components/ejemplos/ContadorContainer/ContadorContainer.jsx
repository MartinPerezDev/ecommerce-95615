import { useState } from "react";
import Contador from "../Contador/Contador";

const ContadorContainer = () => {
  //hook de estado: useState o variable de estado
  const [ contador, setContador ] = useState(1);

  //let contador = 0;

  const aumentar = () => {
    if(contador < 10){
      setContador( (prevState) => prevState + 1 );
    }
  };

  return (
    <Contador contador={contador} aumentar={aumentar} />
  )
}

export default ContadorContainer