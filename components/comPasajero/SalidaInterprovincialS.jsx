import React from 'react'
import Link from 'next/link'
import style3 from '../../styles/styleComPasajero/SalidaInterprovincialS.module.css'

const SalidaInterprovincial = ({ titulo, url1, nombre1, url2, nombre2 }) => {
  return (
    <div className={style3.cajaSalidaInterprovincial}>

      <div className={style3.tituloSalidaInterprovicial}>
        {titulo}
      </div>



      <div className={style3.salidaProvincia}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <Link href={url1}>
            <a className={style3.salidaProvincia01} >{nombre1}
            </a>
          </Link>


          <Link href={url2}>
            <a className={style3.salidaProvincia02} >
              {nombre2}
            </a>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default SalidaInterprovincial
