
import Layout from '../../components/layout/Layout'
import FiltroNavegacion from '../../components/comPasajero/FiltroNavegacion'

import BotonDosDerecha from '../../components/comSimples/BotonDosDerecha'

import ListaCar from '../../components/comPasajero/ListaCar'


const ListaCarros= () => {
  return (
    <Layout>
      <FiltroNavegacion />

      <div className="cajaBoton">

        <BotonDosDerecha
          nombre="MAPA"
          direccion="/Pasajeros"
          nombre2="LISTA"
          direccion2="ListaCarros"
        />

      </div>


      <div className='cajaLista'>
        <ListaCar/>
      </div>


      <style jsx>{`

.cajaBoton{

background-color: rgb(139, 139, 139);
  margin:  8px 0;
  border-radius: 5px;


display: flex;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
}
.cajaLista{

  border: solid #9858ff 5px;
  border-radius:5px;
}

@media (max-width: 600px) {


}
      
      `}</style>

    </Layout>
  )
}

export default ListaCarros
