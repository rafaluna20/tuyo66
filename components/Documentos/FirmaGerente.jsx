import React from 'react'
import Image from 'next/image';


const FirmaGerente = () => {
  return (
    <>

      <div className="firmaRL1">
        <Image
          src="/img/firma.png"
          alt="logo de AKALLPA"
          width={260}
          height={190}
          priority
        />
      </div>
      <div className="firmaRL"> <b>Firma,Nombres y Apellidos del Postor o <br></br> Representante Legal,segun corresponda</b>
      </div>

      <style jsx>{`

.firmaRL{

  background-color: white;
  margin: 0 auto;

  width: 400px;
  height: 60px;

  border-style:dashed;
    border-color: #050505 transparent  transparent transparent;
    border-width: 2px 2px 2px 2px;
}



.firmaRL1 {

  background-color: white;
  margin: 0 auto;

  width: 400px;
  height: 120px;


}



`}</style>


    </>
  )
}

export default FirmaGerente