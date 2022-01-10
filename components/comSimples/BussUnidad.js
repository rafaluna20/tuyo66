import Image from "next/image";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";

import {es} from "date-fns/locale"


function BussUnidad({producto}) {


  const { id, comentarios,creado,descripcion,empresa,nombre,url,urlimagen,votos}= producto;

  return (


    <li className="caja-buss-unidad">

      <Link href="/productos/[id]" as={`/productos/${id}`}>
     
      <div className="caja-buss-unidad-izquierdo">

        <div className="caja-buss-unidad-izquierdo-s">

          <div className="caja-buss-unidad-izquierdo-s12">
            <div className="caja-buss-unidad-izquierdo-s12-1">EMPRESA:</div>
            <div className="descripcion">{empresa}</div>
          </div>

          <div className="caja-buss-unidad-izquierdo-s12">
            <div className="caja-buss-unidad-izquierdo-s12-1">NOMBRE:</div>
            <div className="descripcion">{nombre}</div>
          </div>

          <div className="caja-buss-unidad-izquierdo-s12">
            <div className="caja-buss-unidad-izquierdo-s12-1">ASIENTOS LIBRES:</div>
            <div className="descripcion">5 und</div>
          </div>

          <div className="caja-buss-unidad-izquierdo-s12">
            <div className="caja-buss-unidad-izquierdo-s12-1">publicado hace:</div>
            <div className="descripcion">{formatDistanceToNow(new Date(creado),{locale:es}) }</div>
          </div>

        </div>



        <div className="caja-buss-unidad-izquierdo-i">
        <div>
            <div style={{  textAlign:"center",}}> tiempo </div>
            <div style={{ textAlign: "center", }}>  5h:30min:02s </div>
        </div>
          <div>
            <div style={{ textAlign: "center", }}> votos </div>
            <div style={{ textAlign: "center", }}>  {votos} </div>
          </div>
          <div>
            <div style={{ textAlign: "center", }}> comentarios </div>
            <div style={{ textAlign: "center", }}>{comentarios.length}</div>
          </div>

        </div>


      </div>
      </Link>


      <div className="caja-buss-unidad-derecho">

        <span className="caja-buss-unidad-derecho-s">
          <img src={urlimagen} alt="imagen de carro"/>
        </span>

        <div className="caja-buss-unidad-derecho-i">

          <div> PASAJE </div>
          <div>  S/ 50.00 </div>

        </div>


      </div>

<style jsx>{`


img{
width: 120px;

}

.caja-buss-unidad{
 background-color:white;
margin: 5px 10px 5px 10px;

  border-radius: 8px;
  border: solid 0.5px rgb(114, 114, 114);
  padding: 5px;
  width: 450px;
  height: 170px;

   display:grid;
   grid-template-columns: 2.5fr 1fr;
   gap: 5PX;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

}


/* inicio de hover */

.caja-buss-unidad:hover{
 background-color:black;
margin: 5px 10px 5px 10px;

  border-radius: 8px;
  border: solid 0.5px rgb(114, 114, 114);
  padding: 5px;
  width: 450px;
  height: 170px;

   display:grid;
   grid-template-columns: 2.5fr 1fr;
   gap: 5PX;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);


}

/* final de hover */








.caja-buss-unidad-izquierdo{

  
    display:grid;
    grid-template-rows: 2.5fr 1fr;
 
}


.caja-buss-unidad-derecho{

   display:grid;
   grid-template-rows: 2.5fr 1fr;
 

}

.caja-buss-unidad-izquierdo-s{
 background-color: rgb(107, 107, 107);
 border-radius: 5px 5px 0 0;
padding-left: 5px;
    display:grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;  
}

.descripcion{
  font-size:15px;
}


.caja-buss-unidad-izquierdo-s12{
display: flex;
flex-direction: row;

}


.caja-buss-unidad-izquierdo-s12-1{

  font-size: 14px;
font-weight: bold;  
}


.caja-buss-unidad-izquierdo-i{

    background-color: rgb(27, 27, 27);
border-radius: 8px;
   display: flex;
   flex-direction: row;
  justify-content: space-evenly;
   align-items: center;
   color: white;
   font-weight: bolder;
   font-size: 14px;
}


.caja-buss-unidad-derecho-i{

    background-color: rgb(27, 27, 27);
border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: white;
   font-weight: bolder;
    font-size: 14px;

}

@media (max-width: 600px) {

img{
width: 70px;

}


.caja-buss-unidad{


margin: 3px 5px 3px 5px;

  border-radius: 5px;
  padding: 3px;
  width: 100%;
  height: 125px;
   gap: 2PX;


}


/* inicio de hover */

.caja-buss-unidad:hover{
margin: 3px 5px 3px 5px;

  border-radius: 5px;
  padding: 3px;
  width: 100%;
  height: 125px;
   gap: 2PX;


}

/* final de hover */


.caja-buss-unidad-izquierdo-s{

 border-radius: 3px 3px 0 0;
padding-left: 2px;
}




.caja-buss-unidad-izquierdo-s12-1{

  font-size: 11px;
font-weight: 600;  
}


.caja-buss-unidad-izquierdo-i{


border-radius: 5px;

   color: white;
   font-weight: 600;
   font-size: 11px;
}
.descripcion{
  font-size:11px;
}



.caja-buss-unidad-derecho-i{

   
border-radius: 5px;

   font-weight: 600;
    font-size: 11px;

}

}





`}</style>


    </li>
  );
}

export default BussUnidad;