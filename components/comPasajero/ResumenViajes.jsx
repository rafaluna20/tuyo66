import React from 'react'
import style4 from '../../styles/styleComPasajero/ResumenViajes.module.css'




const ResumenViajes = () => {
  return (
    <div className={style4.cajaResumen}>
      <div className={style4.ResumenTexto}>
        <div className={style4.ResumenNumero}>26</div>
        <div className={style4.ResumenD}>minutos de viajes</div>
      </div>

      <div className={style4.ResumenTexto}>
        <div className={style4.ResumenNumero}>10</div>
        <div className={style4.ResumenD}> viajes completados</div>
      </div>

      <div className={style4.ResumenTexto}>
        <div className={style4.ResumenNumero}>1056km</div>
        <div className={style4.ResumenD}>de viaje</div>
      </div>

    </div>
  )
}

export default ResumenViajes
