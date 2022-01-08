import React from 'react'

import BussUnidad from '../comSimples/BussUnidad'

const ListaCar = () => {
  return (
    <div >

      <div className='cajaListaCar'>
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />

        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />
        <BussUnidad />

      </div>


      <style jsx>{`
      
    .cajaListaCar{
    background-color:white;

     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  
}

  `}</style>
    </div>
  )
}

export default ListaCar
