
import Link from 'next/link';

function BotonSimple(props) {
  return (


    <div className="cajaBotonUno">

      <div className="EstiloLink" >
        <Link href={props.direccion}>
          <a className="EstiloTexto"> {props.nombre}</a>
        </Link>


      </div>

      <style jsx>{`

.cajaBotonUno{

background-color: rgb(139, 139, 139);
  margin:  8px 0;
  border-radius: 5px;


display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
}


.EstiloLink{
            margin:5px;

          background-color: #9858ff;
          padding:5px;

          position:fixed;
          bottom: 20px;

          width: 250px;
          height: 30px;

          border-radius:5px;
          text-decoration: none;
                 display: flex;
      flex-direction:column;
      justify-content:center;
       box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
          
}

.EstiloTexto{

          text-align: center;
      font-size: 14px;
   font-weight: bold;
   color: black;
 
}

@media (max-width: 600px) {

.cajaBotonUno{


  margin:  5px 0;
  border-radius: 3px;

}


.EstiloLink{
            margin:3px;

          padding:3px;

          position:fixed;
          bottom: 10px;

          width: 150px;
          height: 25px;
          border-radius:3px;
          
}

.EstiloTexto{

          text-align: center;
      font-size: 12px;
   font-weight: 600;
   color: black;
 
}

}
      
      `}</style>

    </div>


  );
}

export default BotonSimple;