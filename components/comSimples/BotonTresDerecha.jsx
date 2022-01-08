

import './BotonTresDerecha.css';
import { Link } from 'react-router-dom';

function BotonTresDerecha(props) {
  return (


    <div className="EstiloCaja31-Dd">


      <Link className="EstiloLink31-Dd" to={props.direccion1}>
        <p className="EstiloTexto31-Dd"> {props.nombre1}</p>
      </Link>

      <Link className="EstiloLink32-Dd" to={props.direccion2}>
        <p className="EstiloTexto31-Dd"> {props.nombre2}</p>
      </Link>

      <Link className="EstiloLink33-Dd" to={props.direccion3}>
        <p className="EstiloTexto31-Dd"> {props.nombre3}</p>
      </Link>




    </div>


  );
}

export default BotonTresDerecha;