import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';
import cerrarModal from '../../public/img/cerrar.svg'
import Image from 'next/image'



const Modal = ({ setmodal, usuario, firebase, producto, id, guardarProducto }) => {

  const [asiento, setAsiento] = useState({});
  const [pasajero, setPasajero] = useState("");
  const [pasaje, setPasaje] = useState("");
  const { comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado, asientos, asientosVendidos } = producto;

  const cerrarVentanaModal = () => {
    setmodal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAsiento({
      ...asiento,
      pasaje: pasaje
    })


    // información extra al comentario
    asiento.pasajero= pasajero;
    asiento.usuarioId = usuario.uid;
    asiento.usuarioNombre = usuario.displayName;
    // Tomar copia de comentarios y agregarlos al arreglo
    const nuevosAsientosVendidos = [...asientosVendidos, asiento];
    // Actualizar la BD
    firebase.db.collection('productos').doc(id).update({
      asientosVendidos: nuevosAsientosVendidos
    })
    // Actualizar el state
    guardarProducto({
      ...producto,
      asientosVendidos: nuevosAsientosVendidos
    })


    console.log(nuevosAsientosVendidos)

    setmodal(false);
  }


  return (
    <div className='cajaModal'>

      <div className='cajaFormulario'>
        <div className='cajaImagen'>
          <Image
            onClick={cerrarVentanaModal}
            src={cerrarModal}
            alt='boton cerrar'
            width={20}
            height={20}
          />
        </div>

        <h3>DATOS DEL PASAJERO </h3>

        <form
          onSubmit={handleSubmit}
        >

          <div className='campo'>
            <label htmlFor='pasajero'> nombre pasajero</label>
            <input
              id='pasajero'
              type='text'
              placeholder='nombre de  pasajero'

              value={pasajero}
              onChange={(e) => { setPasajero(e.target.value) }}
            />
          </div>


          <div className='campo'>

            <label htmlFor='pasaje'> pasaje</label>
            <input
              id='pasaje'
              type='number'
              placeholder=' pasaje ultimo'

              value={pasaje}
              onChange={(e) => { setPasaje(Number(e.target.value)) }}
            />
          </div>

          {/* 
          <div className='campo'>
            <label htmlFor='oficina'> oficina</label>
            <select
              id="oficina"

              // value={oficina}
              // onChange={(e) => { setCategoria(e.target.value) }}
            >
              <option value="">--elige--</option>
              <option value="huancayo">huancayo</option>
              <option value="lima">lima</option>
              <option value="jauja">jauja</option>
              <option value="yerbateros">yerbateros</option>
            </select>
          </div> */}

          <input

            type="submit"
            value="vender pasaje"
          />

        </form>




      </div>



      <style jsx>{`
      label{
        color: white;
      }

.campo{
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px;
}

 h3 {
color:white;
 text-align:center;
 }

.cajaImagen{
  display: flex;
justify-content: end;
}


.cajaModal{
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  }


.cajaFormulario{
  background-color: black;
  margin: 0 auto;
  width: 500px;
  height: 800px;
  opacity:0.9;

}

 



@media (max-width: 600px) {



}





`}</style>

    </div>
  )
}

export default Modal
