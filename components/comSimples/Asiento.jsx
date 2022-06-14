import React from 'react'

const Asiento = ({asiento,comprarPasaje}) => {
  return (
    <button
      onClick={comprarPasaje}
      value={asiento}
    >Asiento numero: {asiento}
    
    </button>
  )
}

export default Asiento