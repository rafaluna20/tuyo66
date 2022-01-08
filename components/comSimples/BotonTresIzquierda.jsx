

import './BotonTresIzquierda.css';
import { Link } from 'react-router-dom';

function BotonDosIzquierda(props) {
  return (


    <div className="EstiloCaja31-Ii">


      <Link className="EstiloLink31-Ii" to={props.direccion1}>
        <p className="EstiloTexto31-Ii"> {props.nombre1}</p>
      </Link>

      <Link className="EstiloLink32-Ii" to={props.direccion2}>
        <p className="EstiloTexto31-Ii"> {props.nombre2}</p>
      </Link>

      <Link className="EstiloLink32-Ii" to={props.direccion3}>
        <p className="EstiloTexto31-Ii"> {props.nombre3}</p>
      </Link>




    </div>


  );
}

export default BotonDosIzquierda;