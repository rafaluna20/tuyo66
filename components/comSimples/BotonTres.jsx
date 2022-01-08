

import './BotonTres.css';
import { Link } from 'react-router-dom';

function BotonDos(props) {
  return (


    <div className="EstiloCaja31-Cc">


      <Link className="EstiloLink31-Cc" to={props.direccion1}>
        <p className="EstiloTexto31-Cc"> {props.nombre1}</p>
      </Link>

      <Link className="EstiloLink32-Cc" to={props.direccion2}>
        <p className="EstiloTexto31-Cc"> {props.nombre2}</p>
      </Link>

      <Link className="EstiloLink33-Cc" to={props.direccion3}>
        <p className="EstiloTexto31-Cc"> {props.nombre3}</p>
      </Link>




    </div>


  );
}

export default BotonDos;