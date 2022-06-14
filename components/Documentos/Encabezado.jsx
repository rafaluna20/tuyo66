import React from 'react';
import Image from 'next/image';



const Encabezado = ({ children, procesoEntidad, nombreEmpresa1 }) => {

  return (
    <>
      <div className='marcoRectangular1'>



        <div className="encabezado">

          <div>
            <Image
              src="/img/logoCivil1.png"
              alt="logo de AKALLPA"
              width={200}
              height={80}
              priority
            />
          </div>

          <div>
            <div className='nombreEmpresa1'>
              {nombreEmpresa1}
            </div>
            <div>
              <i> {procesoEntidad} </i>
            </div>
          </div>


        </div>


        <div className="cuerp01">
          {children}

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

     box-shadow: 0px 5px 30px 2px rgba(0, 0, 0, 0.7);
    
}

.encabezado{
  background-color: white;
  padding: 5px 0px 0px 20px;

  display:grid;
  gap:5px;
     grid-template-columns: 1fr 4fr;
/*
  border-style: solid;
  border-color: transparent transparent #050505 transparent;
  border-width: 0 2px 2px 2px;
*/
    box-shadow:inset 0px 0px 50px 50px rgba(0, 0, 0, 0.7);
    border-radius:10px;
    color:white;
  
}
.cuerp01{
   background-color:  white;
   padding: 10px 70px 10px 70px;
   height:90%;

    
}

.nombreEmpresa1{
  font-size:25px;
}

`}</style>
    </>
  )
}

export default Encabezado