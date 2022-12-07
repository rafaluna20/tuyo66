import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import { FirebaseContext } from '../../firebase';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';

import Modal from '../../components/comPasajero/Modal';




const Producto = () => {

  const [modal, setmodal] = useState(false)
  // state del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [consultarDB, guardarConsultarDB] = useState(true);

  // Routing para obtener el id actual
  const router = useRouter();
  const { query: { id } } = router;

  // context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection('productos').doc(id);
        const producto = await productoQuery.get();
        if (producto.exists) {
          guardarProducto(producto.data());
          guardarConsultarDB(false);
        } else {
          guardarError(true);
          guardarConsultarDB(false);
        }
      }
      obtenerProducto();
    }
  }, [id]);

  if (Object.keys(producto).length === 0 && !error) return 'Cargando...';
  console.log(router)
  console.log(producto)

  const { comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado, asientos, asientosVendidos } = producto;
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  // Administrar y validar los votos 
  const votarProducto = () => {
    if (!usuario) {
      return router.push('/login')
    }
   // obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;
    // Verificar si el usuario actual ha votado
    if (haVotado.includes(usuario.uid)) return;
    // guardar el ID del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];
    //  Actualizar en la BD
    firebase.db.collection('productos').doc(id).update({
      votos: nuevoTotal,
      haVotado: nuevoHaVotado
    })
    // Actualizar el state
    guardarProducto({
      ...producto,
      votos: nuevoTotal
    })
    guardarConsultarDB(true); // hay un voto, por lo tanto consultar a la BD
  }
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  // Funciones para crear comentarios
  const comentarioChange = e => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value
    })
  }

  // Identifica si el comentario es del creador del producto
  const esCreador = id => {
    if (creador.id == id) {
      return true;
    }
  }

  const agregarComentario = e => {
    e.preventDefault();

    if (!usuario) {
      return router.push('/login')
    }

    // información extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    // Tomar copia de comentarios y agregarlos al arreglo
    const nuevosComentarios = [...comentarios, comentario];

    // Actualizar la BD
    firebase.db.collection('productos').doc(id).update({
      comentarios: nuevosComentarios
    })

    // Actualizar el state
    guardarProducto({
      ...producto,
      comentarios: nuevosComentarios
    })

    guardarConsultarDB(true); // hay un COMENTARIO, por lo tanto consultar a la BD
  }
//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  // función que revisa que el creador del producto sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;

    if (creador.id === usuario.uid) {
      return true
    }
  }

  // elimina un producto de la bd
  const eliminarProducto = async () => {

    if (!usuario) {
      return router.push('/login')
    }

    if (creador.id !== usuario.uid) {
      return router.push('/')
    }

    try {
      await firebase.db.collection('productos').doc(id).delete();
      router.push('/Pasajeros/ListaCarros')
    } catch (error) {
      console.log(error);
    }
  }
//..mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  //funcion para comprar pasaje.
  const comprarPasaje = () => {
    setmodal(true)
    console.log("diste click para comprar pasaje")
  }


  return (
    <Layout>
      <>
        {error ? <Error404 /> : (
          <div >
            <h1>{nombre} </h1>

            <div>
              <div>
                <p>Publicado hace: {formatDistanceToNow(new Date(creado), { locale: es })} </p>
                <p>Por: {creador.nombre} de {empresa} </p>
                <img src={urlimagen} />
                <p>{descripcion}</p>

                {usuario && (
                  <>
                    <h2>Agrega tu comentario</h2>

                    <form
                      onSubmit={agregarComentario}
                    >
                      <div>
                        <input
                          type="text"
                          name="mensaje"
                          onChange={comentarioChange}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Agregar Comentario"
                      />
                    </form>
                  </>
                )}


                <h2>Comentarios</h2>

                {comentarios.length === 0 ? "Aún no hay comentarios" : (
                  <ul className='cajaComentario'>
                    {comentarios.map((comentario, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                      >
                        <p>{comentario.mensaje}</p>
                        <p>Escrito por:
                          <span >
                            {''} {comentario.usuarioNombre}
                          </span>
                        </p>
                        {esCreador(comentario.usuarioId) && <p>Es Creador</p>}
                      </li>
                    ))}
                  </ul>
                )}
                {/* secion de asientos  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
                <h2>ASIENTOS</h2>

                {asientos.length === 0 ? "Aún no hay asientos vendidos" : (
                  <ul className='cajaAsiento'

                  >
                    {asientos.map((asiento, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                      >
                        <button
                          onClick={comprarPasaje}
                          value={asiento}
                        >asiento numero: {asiento} </button>


                      </li>
                    ))}
                  </ul>
                )}
                {/* termina la secion de asientos    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}



              </div>

              <aside>
                <a
                  href={url}
                >Visitar URL</a>



                <div>
                  <p>{votos} Votos</p>

                  {usuario && (
                    <button
                      onClick={votarProducto}
                    >
                      Votar
                    </button>
                  )}
                </div>
              </aside>
            </div>

            {puedeBorrar() &&
              <button
                onClick={eliminarProducto}
              >Eliminar Producto</button>
            }

            {/* inicio desde modalmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
            {modal && <Modal 
            firebase={firebase}
            producto={producto}
            usuario={usuario}
            setmodal={setmodal}
              guardarProducto={guardarProducto}
              id={id}


            />}

            {/* fin  d pantalla modal   mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/}
          </div>
        )}


      </>
      <style jsx>{`
      .cajaComentario{

  background-color: var(--negro-oscuro1);

      }

         .cajaAsiento{

  background-color: #e1e1e1;

      }   



@media (max-width: 600px) {



}





`}</style>

    </Layout>
  );
}

export default Producto;