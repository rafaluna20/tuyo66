import React from 'react';
import Image from 'next/image';



const Separador = ({ children, procesoEntidad, nombreEmpresa1, objetoConvocatoriaEntidad,
  tituloNumero, tituloTexto, tituloSeparador2

}) => {

  return (
    <>
      <div className='marcoRectangular1'>



        <div className="encabezado">

          <div>
            <Image
              src="/img/logoCivil1.png"
              alt="logo de AKALLPA"
              width={180}
              height={150}
              priority
            />
          </div>

          <div>
            <div className='nombreEmpresa1'>
              <b>
                {nombreEmpresa1}
              </b>
            </div>
            <div>
              <i> Al servicio de la sociedad </i>
            </div>
          </div>


        </div>

        <div className='propuestaEconomica'>
          <div style={{ marginLeft: "10px", marginRight: "20px",fontSize:"50px" }}> <b> {tituloNumero}</b></div>
        <div> <b> {tituloTexto}</b></div>
          
        </div>
        <div className='propuestaEconomica1'>
          <b> {tituloSeparador2}</b>
        </div>

        <div className='logoCliente-obra'>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <br></br>
          <b>CLIENTE</b>
            <Image
              src="/img/logoCliente.jpg"
              alt="logo de AKALLPA"
              width={150}
              height={120}
              priority
            />
          </div>

          <div style={{display:"flex",alignItems: "center",flexDirection: "column" }}> 
          <div> 
          <br></br>
          <b>OBRA</b> </div>
            <div style={{ fontSize:"12px"}}> <i> {objetoConvocatoriaEntidad} </i> </div>
         
          </div>

        </div>

  



      </div>




      <style jsx>{`

.marcoRectangular1{
   margin-top: 40px;
    padding:10px 10px 10px 10px;
      background-color:white;
      width:840px;
     height: 1200px;
      border: solid 1.8px black;
    border-radius: 20px;

     box-shadow:inset 0px 5px 380px 380px rgba(0, 0,0, 0.5);
    
}

.encabezado{
  background-color: white;
  margin:60px auto 60px  auto;
  padding: 40px 0px 0px 0px;

  
width:600px;
height:300px;
  display:flex;
  flex-direction:column;
align-items: center;
  
    border-radius:10px;
    
  
}


.nombreEmpresa1{
  font-size:25px;
}


.propuestaEconomica{
    background-color: white;
  margin-top:10px;
  display:flex;
  border-radius:10px;
  flex-direction:row;
  justify-content: center;
align-items: center;
font-size:30px;
height:150px;
color:black;

   box-shadow:  5px 5px 30px 0px rgba(0, 0, 0, 1);

}

.propuestaEconomica1{
   margin-top:40px;
  display:flex;
  flex-direction:row;
  justify-content: center;
align-items: center;
font-size:30px;
height:100px;
color:rgba(0, 0, 0);

   box-shadow: inset 5px 5px 30px 50px rgba(0, 0, 0, 0.4);

}

.logoCliente-obra{

  background-color: white;
  margin-top:250px ;
 height: 180px;

border-radius:15px;
display:grid;
  gap: 10px;
  grid-template-columns:1fr 1.5fr;


 box-shadow:inset 0px 5px 60px 5px rgba(0, 0, 0, 0.15);

}



`}</style>
    </>
  )
}

export default Separador