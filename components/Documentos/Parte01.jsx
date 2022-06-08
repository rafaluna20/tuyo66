import React from 'react'

const Parte01 = (nombreEmpresa1, rucEmpresa1, direccionEmpresa1,
  fichaEmpresa1, asientoNumeroEmpresa1, inscritoLocalidadEmpresa1
  ) => {
  return (
    <><b> {nombreEmpresa1}</b>,  con RUC Nº <b>{rucEmpresa1}</b>, con domicilio
      legal en {direccionEmpresa1}, inscrita en la Ficha N° {fichaEmpresa1} Asiento N°
      {asientoNumeroEmpresa1} del Registro de Personas Jurídicas de la ciudad de <b>{inscritoLocalidadEmpresa1}</b> , debidamente
      representado por su Representante Legal,      
       </>
  )
}

export default Parte01