import React, { useEffect, useState, useContext } from 'react'

import BussUnidad from '../comSimples/BussUnidad'
import { FirebaseContext } from '../../firebase'

const ListaCar = () => {

  const [productos, guardarProductos] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {

    const obtenerProductos = () => {
      firebase.db.collection("productos").orderBy("creado", "desc").onSnapshot(manejarSnapshot)
    }
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    guardarProductos(productos);
  }



  return (
    <div >

      <div className='cajaListaCar'>


        {productos.map(producto => (
          <>
            <BussUnidad
            key={producto.id}
              producto={producto}
            />

          </>
        ))}



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
