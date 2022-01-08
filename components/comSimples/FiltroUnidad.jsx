import React from 'react'
import style2 from '../../styles/styleComSimples/FiltroUnidad.module.css'

const FiltroUnidad = ({ nombre, urlimagen }) => {





  return (
    <div className={style2.cajaFiltroUnidad}>

      <div className={style2.cajaFoto}>
        <img className={style2.cajaImagen} src={urlimagen} alt='auto negro' />
      </div>

      <div className={style2.cajaNombre}>
        {nombre}
      </div>

    </div>
  )
}

export default FiltroUnidad
