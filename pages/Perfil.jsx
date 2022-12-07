import React, { useContext, useState } from 'react'
import Layout from '../components/layout/Layout'


import { FirebaseContext } from '../firebase'


const Perfil = () => {

  const [nombre, setNombre] = useState("");
  const [aPaterno, setAPaterno] = useState("");

  const { firebase, usuario } = useContext(FirebaseContext);

  console.log(usuario.displayName);
  console.log(firebase.db.collection("productos").orderBy("creado", "desc"));


  return (

    <Layout>
      <form>


        <div>
          <label htmlFor='nombre'> nombre</label>
          <input
            className=''
            type="text"
            id='nombre'
            placeholder='ingrese su  nombre'
            name='nombre'

            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

          />
        </div>

        <div>
          <label htmlFor='aPaterno'> apellido paterno</label>
          <input
            className=''
            type="text"
            id='aPaterno'
            placeholder='ingrese su  apellido'
            name='aPaterno'

            value={aPaterno}
            onChange={(e) => setAPaterno(e.target.value)}
          />
        </div>

        <div >

          <input
            className=''
            type="submit"
            value="enviar nombre" />
        </div>

      </form>





    </Layout>

  )
}

export default Perfil
