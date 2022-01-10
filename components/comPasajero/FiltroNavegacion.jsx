import React from 'react'
import FiltroUnidad from '../comSimples/FiltroUnidad';
// import style1 from '../../styles/styleComPasajero/FiltroNavegacion.module.css'



const FiltroNavegacion = () => {



  return (
    <div className="cajaNavegacion">

      <FiltroUnidad
        urlimagen="/img/reloj11.png"
        nombre="Reloj"
      />

      <FiltroUnidad
        urlimagen="/img/auto11.png"
        nombre="Auto"
      />
      <FiltroUnidad
        urlimagen="/img/minivan11.png"
        nombre="Mivan"
      />
      <FiltroUnidad
        urlimagen="/img/buss11.png"
        nombre="Bus"
      />
      <FiltroUnidad
        urlimagen="/img/otros11.png"
        nombre="Otros"
      />

      <style jsx>{`
      .cajaNavegacion{
background-color: var(--negro-oscuro2);

  margin: 8px 0;
  border-radius: 8px;
  padding: 8px;
  height: 90px;

  display: flex;
  flex-direction:row;
  justify-content: space-between;
}


@media (max-width: 600px) {

 .cajaNavegacion{ 
   margin: 5px 0;
     border-radius: 3px;
  padding: 3px;
  height: 50px;}
}
      
      `}</style>

    </div>
  )
}

export default FiltroNavegacion;
