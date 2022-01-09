import React, { useEffect, useContext, useState } from 'react'

import { useRouter } from 'next/router'
import { FirebaseContext } from '../../firebase'
import Error404 from '../../components/layout/404'

import Layout from '../../components/layout/Layout'

const Producto = () => {
  //state del componente mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  const [producto, guardarProducto] = useState({});
  const [error, guardarerror] = useState(false);
  //routing para obtener el id actual  mmmmmmmmmmmmmmmmmmmmmmm
  const router = useRouter();
  const { query: { id } } = router;

  //context de firebase mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  const { firebase } = useContext(FirebaseContext);

  //obtener producto de fiebase con id mmmmmmmmmmmmmmmmmmmmmmmm
  useEffect(() => {

    if (id) {
      const obtenerProducto = async () => {
        const productoQuery = await firebase.db.collection("productos").doc(id);
        const producto = await productoQuery.get();

        if (producto.exists) {
          guardarProducto(producto.data())

        } else {
          guardarerror(true);
        }

      }
      obtenerProducto();
    }

  }, [id])

  const { comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos,creador,haVotado } = producto;
console.log(comentarios)

  return (
    <Layout>
      {error && <Error404/>}

   <div className="">
        <div className="">id:{id} </div>
        <div className="">publicado hace:{creado}</div>
        <div className="">empresa:{empresa}</div>
        <div className="">nombre:{nombre}</div>
        <div className="">url:{url}</div>
        <div className="">urlimagen:{urlimagen}</div>

     
        <div className="">votos:{votos}</div>
        <div className="">descripcion:{descripcion}</div>
      </div>

      <div>
        <h3>agrega comentario</h3>
        <form>
          <div>
            <input
              type="text"
              name='mensaje'
            />
          </div>
          <input
            type="submit"
            value="agreagar comentario"
          />


        </form>
        <h3>agrega comentario</h3>

      </div>



    </Layout>
  );
}

export default Producto
