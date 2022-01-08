
import Layout from '../../components/layout/Layout'
import FiltroNavegacion from '../../components/comPasajero/FiltroNavegacion'
import MapaGo from './MapaGo'
import BotonDosIzquierda from '../../components/comSimples/BotonDosIzquierda'
import BotonSimple from '../../components/comSimples/BotonSimple'


const Pasajeros = () => {
  return (
    <Layout>
      <FiltroNavegacion />

      <div className="cajaBoton">

        <BotonDosIzquierda
          nombre1="MAPA"
          direccion1="/Pasajeros"
          nombre2="LISTA"
          direccion2="/Pasajeros/ListaCarros"
        />

      </div>


      <div className='cajaMapa'>
        <MapaGo />
      </div>

      <BotonSimple

        nombre="CONTINUAR"
        direccion="/Pasajeros/PasajeroAsientoP1"

      />

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
.cajaMapa{

  border: solid #9858ff 5px;
  border-radius:5px;
}

@media (max-width: 600px) {


}
      
      `}</style>

    </Layout>
  )
}

export default Pasajeros
