import React from 'react'
import Link from 'next/link'
import style7 from '../../styles/styleComSimples/CajaM.module.css'

const SalidaInterprovincial = ({ children, titulo }) => {
  return (
    <div className={style7.cajaSalidaInterprovincial}>

      <div className={style7.tituloSalidaInterprovicial}>
        {titulo}
      </div>


      <div className={style7.salidaProvincia}>


     {children}


      </div>


    </div>
  )
}

export default SalidaInterprovincial
