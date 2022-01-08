import Link from 'next/link'
import React from 'react'

const NanLinkA = ({ruta,nombre}) => {
  return (
    <>
      <Link href={ruta}>
        <a className="salidaProvincia01" >{nombre}</a>
      </Link>


      <style jsx>{`
      
    .salidaProvincia01{
    background-color: green;
     border-radius: 5px;
    border: solid black 1px;
    width: 100px;
    height: 50px;

    text-align: center;
     box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

    }

    @media (max-width: 600px) {
.salidaProvincia01{


width: 80px;
height: 40px;
font-size: 12px;


}
      
    }
      
      `}</style>

    </>
  )
}

export default NanLinkA
