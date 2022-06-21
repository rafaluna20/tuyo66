import React from 'react';









const CajaPrimario = ({ producto, formatDistanceToNow }) => {

  const { comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado, asientos, asientosVendidos } = producto;


  return (
    <>
      <div className='caja-primario'>
        <div className='caja-primario-fila1' >
          <div>
            IMAGEN
          </div>
          <div>
            DESTINO
          </div>
        </div>


        <div className='caja-primario-fila2'   >
          <div>
            <b>EMPRESA:</b> {empresa}
          </div>

          <div>
            <b>NOMBRE:</b> {nombre}
          </div>
          <div>
            <b>DESCRIPCION:</b> {descripcion}
          </div>

          <div>creado por: {creador.nombre}   </div>
        </div>

        <div className='caja-primario-fila3'  >
          <div className='caja-primario-fila3-c1'>
            <a
              href={url}
            >Visitar URL</a>
          </div>


          <div className='caja-primario-fila3-c2'>
            <img src={urlimagen} />
          </div>
        </div>

        <div className='caja-primario-fila4'  >

        </div>

      </div>




      <style jsx>{`

.caja-primario{
   background-color:white;
   margin: 5px 10px 5px 10px;
    border-radius: 8px;
      border: solid 0.5px rgb(114, 114, 114);
  padding: 5px;
     width: 410px;
  height: 400px;
     display:grid;
   grid-template-rows:2fr 5fr 4fr 1fr;
   gap: 5PX;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
}


.caja-primario-fila1{
   background-color:green;

        display:grid;
   grid-template-columns: 1fr 4fr;
   gap: 5PX;

}
.caja-primario-fila2{

  background-color:yellow; 
     display:grid;
   grid-template-rows:1fr 1fr 1fr 1fr;
   gap: 5PX;
}

.caja-primario-fila3{

  background-color:blue; 
    display: grid;
     gap: 5PX;
   grid-template-columns:1fr 1fr;
}

.caja-primario-fila3-c1{
 background-color:black; 
     display:grid;
   grid-template-rows:1fr 1fr 1fr ;
   gap: 5PX;


}

.caja-primario-fila4{

  background-color: white;
  display: grid;
     gap: 5PX;
   grid-template-columns:1fr 1fr 1fr 1fr;


  
}


.caja-primario-fila4-c1{
 background-color: #B0B3B8;
padding: 0px 5px 0px 10px;
border-radius:5px;

  
}


img{
width: 120px;

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
    </>
  )
}

export default CajaPrimario