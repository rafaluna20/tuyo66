import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { FirebaseContext } from '../../firebase'
import styled from 'styled-components'

const estadoCaso = {
  nombre: "",
  apellido: "",
  direccion:""

}


const Carga = () => {

  const { firebase, usuario } = useContext(FirebaseContext);


  const [valores,guardarValores] = useState(estadoCaso);

  const { nombre, apellido,direccion } = valores;

  const handleChange = e => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }


  console.log(usuario)




  let numero = 60;
  let numer = 20;

  return (
    <Layout>

      <div>lucho iniciando con  {numero + numer}</div>

      <div>

        <form

        >

          <div className='LabelInput'>
            <label htmlFor="nombre">Nombre</label>
            <input
              className=''
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              name="nombre"

              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="apellido">apellido</label>
            <input
              className=''
              type="text"
              id='apellido'
              placeholder='Apellido'
              name='apellido'

              value={apellido}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='direccion'> direccion</label>
            <input 
            className=''
            type="number"
            id="direccion"
            placeholder="aqui tu direccion"
            name='direccion'

           value={direccion}
           onChange={handleChange}
            ></input>
          </div>



          <div className='LabelInput'>

            <input
              className='cajaCrearCuenta'
              type="submit"
              value="CREAR PROYECTO" />
          </div>

        </form>
      </div>


    






      <style jsx>{`



@media (max-width: 600px) {



}


`}</style>
    </Layout>
  )
}

export default Carga;



