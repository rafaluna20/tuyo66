import React, { useState, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import FileUploader from "react-firebase-file-uploader"

import Layout from '../components/layout/Layout'

import useValidacion from '../hooks/useValidacion'
import validarCrearProducto from '../validacion/validarCrearProducto'

import { FirebaseContext } from '../firebase'


const STATE_INICIAL = {
  nombre: "",
  empresa: "",
  imagen: "",
  url: "",
  descripcion: ""

}

const CrearViaje = () => {
  // state de las imagenes
  const [nombreimagen, guardarNombre] = useState('');
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState('');
  //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

  const [error, guardarError] = useState(false);
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto)
  const { nombre, empresa, imagen, url, descripcion } = valores;
  //hook de router para redirecionar

  const router = useRouter();


  //contrxt con las operaciones de CRUD firebase

  const { firebase, usuario } = useContext(FirebaseContext)

  async function crearProducto() {
    //si el usuario no  esta autentificado llevar a login
    if (!usuario) {
      return router.push("/Login");
    }

    //crear el objeto de nuevo producto

    const producto = {
      nombre: nombre,
      empresa: empresa,
      url: url,
      urlimagen: urlimagen,
      descripcion: descripcion,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName
      },
      haVotado: [],
      asientosVendidos: [],
      asientos: [1, 2, 3, 4, 5, 6, 7, 8]
    }
    //insertando en una base datos

    firebase.db.collection("productos").add(producto)
    return router.push('/');
  }
    //funciones para manipular imagen


  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  }

  const handleProgress = progreso => guardarProgreso({ progreso });

  const handleUploadError = error => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = nombre => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre)
    firebase
      .storage
      .ref("productos")
      .child(nombre)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };


  return (
    <Layout>

      <div className='caja0'>

        <div className='cajaPrincipal'>

          <div className='cajaCrearViaje'>
            <div className='cajaTitulo'>Crear Viaje</div>

            <form

              onSubmit={handleSubmit}
            >
              <fieldset>

                <legend>

                  informacion general
                </legend>
                {errores.nombre && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.nombre}</div>}

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
                    onBlur={handleBlur}
                  />
                </div>



                {errores.empresa && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.empresa}</div>}
                <div className='LabelInput'>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    className=''
                    type="text"
                    id="empresa"
                    placeholder="Tu empresa"
                    name="empresa"

                    value={empresa}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>




                <div className='LabelInput'>
                  <label htmlFor="imagen">Imagen</label>

                  <FileUploader
                    accept="image/*"

                    id="imagen"

                    name="imagen"
                    randomizeFilename
                    storageRef={firebase.storage.ref("productos")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </div>

                {errores.url && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.url}</div>}
                <div className='LabelInput'>
                  <label htmlFor="url">URL</label>
                  <input
                    className=''
                    type="url"
                    id="url"

                    name="url"
                    placeholder="url"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>



              </fieldset>

              <fieldset>
                <legend>sobre el viaje</legend>

                {errores.descripcion && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.descripcion}</div>}
                <div className='LabelInput'>
                  <label htmlFor="descripcion">Descripcion</label>
                  <textarea
                    className=''

                    id="descripcion"

                    name="descripcion"

                    value={descripcion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

              </fieldset>

              <div className='LabelInput'>

                <input
                  className='cajaCrearCuenta'
                  type="submit"
                  value="CREAR VIAJE" />
              </div>
              {error && <div style={{ color: "red", background: "black", textAlign: "center" }}>{error}</div>}



            </form>
          </div>
        </div>
      </div>

      <style jsx>{`

.cajaCrearCuenta{
  background-color:rgb(41, 41, 41);
  color:white;
  font-size:1.4rem;
}
.cajaCrearCuenta:hover{
  background-color:rgb(70, 70, 70);
  color:white;
  font-size:1.4rem;
}




.cajaTitulo{
  text-align: center;

  margin: 1.rem;
  font-size:1.8rem;
  font-weight:600;
}

    label {
        flex: 0 0 120px;
        font-size: 1.5rem;
    }
    input{
        flex: 1;
        padding: 0.5rem;
        border: solid 0.5px black;
        border-radius:5px;
    }
    textarea{
      flex: 1;
      padding: 0.5rem;
      height: 100px;

    }
    fieldset{
      margin:1.6rem 0;
      border: 1px solid #e1e1e1;
      font-size:2rem;
      border-radius:5px;
    }


.caja0{
    background-color: rgb(139, 139, 139);
    padding: 5px;
    max-width: 1500px;
    margin: 0 auto;
    
}

.cajaPrincipal{
   background-color: rgb(61, 61, 61);
   max-width: 1200px;
   margin: 0 auto;
   padding-top:1rem;
   height: 100vh;
   border-radius:5px ;
      

}

.cajaCrearViaje{
  background-color: rgb(143, 143, 143);
    margin-left:1rem;
    padding:1rem;
   max-width: 500px;
   border-radius:5px ;
   box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

}
.LabelInput{
  background-color: rgb(94, 94, 94);
    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:5px;
    display: flex;
    align-items: center;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
}

@media (max-width: 600px) {

.cajaCrearCuenta{

  font-size:1.1rem;
}

.cajaCrearCuenta:hover{

  font-size:1.1rem;
}

  .cajaTitulo{

  text-align: center;

  margin: 1rem;
  font-size:1.2rem;
  font-weight:600;
}

    label {
        flex: 0 0 75px;
        font-size: 1.1rem;
    }
    input{
     
        padding: 0.4rem;
        border: solid 0.5px black;
        border-radius:3px;
    }
        fieldset{
      margin:0.2rem 0;
      border: 0.5px solid #e1e1e1;
      font-size:1.1rem;
    }

.caja0{

    padding: 3px;
    
}

.cajaPrincipal{
   padding-top:8rem;
   border-radius:3px ;
       padding-left:0.7rem;
        padding-right:0.7rem;

}

.cajaLogin{
  
 margin: 0 auto;
    padding:0.1rem;
   border-radius:5px ;

}
.cajaCrearViaje{
 
    margin-left:0.5rem;

    padding:0.5rem;


}

.LabelInput{

    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:3px;

}


}




`}</style>
    </Layout>

  )
}

export default CrearViaje;
