import React from 'react'
import style2 from '../../styles/styleComSimples/FiltroUnidad.module.css';

import Tooltip from '@mui/material/Tooltip';

const FiltroUnidad = ({ nombre, urlimagen }) => {





  return (
    <>
        <Tooltip title={nombre}>
    <div className={style2.cajaFiltroUnidad}>

      <div className={style2.cajaFoto}>
        <img className={style2.cajaImagen} src={urlimagen} alt='auto negro' />
      </div>

      <div className={style2.cajaNombre}>
        ...
      </div>

    </div>
    </Tooltip>
    </>

  )
}

export default FiltroUnidad
