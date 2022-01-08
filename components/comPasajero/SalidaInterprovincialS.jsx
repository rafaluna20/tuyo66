import React from 'react'
import Link from 'next/link'
import style3 from '../../styles/styleComPasajero/SalidaInterprovincialS.module.css'

const SalidaInterprovincial = () => {
  return (
    <div className={style3.cajaSalidaInterprovincial}>

      <div className={style3.tituloSalidaInterprovicial}>
      SALIDAS INTERPROVINCIALES
      </div>



      <div className={style3.salidaProvincia}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <Link href="/Pasajeros/ListaCarros">
            <a className={style3.salidaProvincia01} >PASAJEROS
            </a>
          </Link>
     

          <Link href="/Carga">
            <a className={style3.salidaProvincia02} >
              CARGA ENCOMIENDA
            </a>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default SalidaInterprovincial
