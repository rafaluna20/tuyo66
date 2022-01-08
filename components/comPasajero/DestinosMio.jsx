import React from 'react'
import CajaM from '../comSimples/CajaM'
import RutasV from '../comSimples/RutasV'

const DistinosMio = () => {
  return (
    <CajaM
      titulo="Mis ultimas Viajes"
    >

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

        <RutasV
        origen="Huancayo"
        destino="Lima" />
        <RutasV
          origen="Ayacucho"
          destino="Ica" />
        <RutasV
          origen="Cuzco"
          destino="Huancavelica" />
     

      </div>


    </CajaM>
  )
}

export default DistinosMio
