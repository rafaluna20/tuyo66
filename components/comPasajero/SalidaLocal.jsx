import React from 'react'
import CajaS from '../comSimples/CajaS'
import NanLinkA from '../comSimples/NanLinkA'

const SalidaLocal = () => {
  return (
    
      <CajaS
      titulo="SALIDA LOCAL"
      >

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>


        <NanLinkA
          ruta="/Perfil"
          nombre="prueba"
         
        />

        <NanLinkA
          ruta="/Perfil"
          nombre="prueba"
          
        />

      </div>


      </CajaS>


    
  )
}

export default SalidaLocal
