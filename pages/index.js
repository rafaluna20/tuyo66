import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'
import FiltroNavegacion from '../components/comPasajero/FiltroNavegacion'

import SalidaInterprovincialS from '../components/comPasajero/SalidaInterprovincialS'


import ResumenViajes from '../components/comPasajero/ResumenViajes'
import CajaM from '../components/comSimples/CajaM'
import SalidaLocal from '../components/comPasajero/SalidaLocal'
import RutasV from '../components/comSimples/RutasV'
import DestinosMio from '../components/comPasajero/DestinosMio'


export default function Home() {

  const navInferior = false

  return (
    
    <div className={styles.container}>
      <Head>
        <title>tuyo express</title>
        <meta name="description" content="app para transporte interprovincial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.fondo0}>




        <Layout>
          <div className={styles.cajaFondo1}>

            <FiltroNavegacion />
            <ResumenViajes />

            <div className={styles.InterprovincialLocal}>

              <SalidaInterprovincialS />
              <SalidaInterprovincialS />
            </div>

           <div className={styles.InterprovincialLocal}>

              <DestinosMio/>
              <DestinosMio />

            </div>   

            <div className={styles.InterprovincialLocal}>

              <SalidaLocal />

            </div>
 
            <div className={styles.InterprovincialLocal}>

              <RutasV 
                origen="huancavelica"
                destino="cuzco"
              />

            </div>

          </div>



        </Layout>
      </div>

      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

      <div className={styles.NavegacionInferior}> navegacion</div>

    </div>
  )
}
