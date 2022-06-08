import React from 'react'
import Layout from '../components/layout/Layout'
import styles from '../styles/Perfil.module.css'

import Image from 'next/image';




const Perfil = () => {

  const entidad = "MUNICIPALIDAD DISTRITAL DE LIVITACA";
  const proceso = "ADJUDICACION SIMPLIFICADA Nº016-2022-CS-MDI-1";
  const representanteLegal = "YULISA OFELIA CUAREZ MAURY";
  const dni = "43160220";
  const empresa1 = "ZURE PERUVIAN SAC";
  const direccion = " MZ H LOTE 14 VILLA LAS FLORES-SAN JUAN DE MIRAFLORES";
  const ruc = "20456565";
  const email = "zure.peru@gmail.com";
  const telefono = "922802768";


  return (
    <>
    <div className='marcoRectangular'>


      <div className={styles.titulo}>
        <div className={styles.centradoTexto}>
          <div>
            <i>    {entidad}</i>
          </div>
          <div>
            <i> {proceso} </i>

          </div>
        </div>

      </div>

      <div className={styles.tituloAnexo1}>
        <div> <b> ANEXO Nº1</b></div>
        <div> <b>DECLARACION JURADA DE DATOS DEL POSTOR  </b></div>
          <div> <b>DECLARACION JURADA DE DATOS DEL POSTOR  </b></div>
      </div>





      <div className={styles.centrarTexto} >
        <div className={styles.cuerpoTexto}>
          <div>
            señores:
          </div>
          <div>
            <b>     COMITE DE SELECCION  </b>
          </div>

          <div>
            <b>      {proceso}  </b>

          </div>
          <div>
            Presente.-
          </div>




          <div className={styles.justificarTexto}>
            El que se suscribe, <b>{representanteLegal} </b> , postor y/o Representante Legal de <b>{empresa1} </b> , identificado con <b>DNI N°{dni} </b>, con poder inscrito en la localidad de [CONSIGNAR EN CASO DE SER PERSONA JURÍDICA] en la Ficha Nº [CONSIGNAR EN CASO DE SER PERSONA JURÍDICA] Asiento Nº [CONSIGNAR EN CASO DE SER PERSONA JURÍDICA],DECLARO BAJO JURAMENTO que la siguiente información se sujeta a la verdad:
          </div>


          <div className={styles.bordesTabla}>
            <div className={styles.fila1}>
              <div>  Nombre,Denominacion o <br></br> Razon Social:  </div>
              <div ><b> {empresa1} </b>  </div>
            </div>
            <div className={styles.fila2}>
              <div>  Domicilio Legal:  </div>
              <div > <b>{direccion} </b>  </div>
            </div>

            <div className={styles.fila3}>
              <div>  RUC:  </div>
              <div> <b>{ruc} </b>  </div>
              <div className={styles.telefono1}>  Telefono:  </div>
              <div className={styles.telefono1}> <b> {telefono}</b>  </div>
              <div className={styles.telefono1}>  </div>
            </div>

            <div className={styles.fila4}>
              <div>  MYPE 16  </div>

              <div className={styles.mype16}>
                <div className={styles.mype16Sub}>SI</div>
                <div className={styles.mype16Sub}><b>X</b></div>
              </div>

              <div className={styles.mype16}>
                <div className={styles.mype16Sub}>NO</div>
                <div className={styles.mype16Sub}></div>
              </div>

            </div>
            <div className={styles.fila5}>
              <div>  Correo electronico:  </div>
              <div > <b>{email}  </b> </div>

            </div>
          </div>



          <br></br>
          <br></br>
          <div>
            <b>Autorizacion de notificacion por correo electronico:</b>
          </div>

          <div className={styles.autorizacion}>
            <br></br>
           
            … Si autorizo que se notifiquen al correo electrónico indicado las siguientes <br></br>
            actuaciones:<br></br>
            1.  Solicitud de la descripción a detalle de todos los elementos constitutivos de la oferta.<br></br>
            2.  Solicitud de subsanación de los requisitos para perfeccionar el contrato.<br></br>
            3.  Solicitud al postor que ocupó el segundo lugar en el orden de prelación para presentar los<br></br>
            documentos para perfeccionar el contrato.<br></br>
            4.  Respuesta a la solicitud de acceso al expediente de contratación.<br></br>
            5.  Notificación de la orden de compra17<br></br>
            <br></br>
            Asimismo, me comprometo a remitir la confirmación de recepción, en el plazo máximo de dos (2) días<br></br>
            hábiles de recibida la comunicación.<br></br>
            <br></br>
            <br></br>

          </div>



          <div>fecha   25 de julio 2022
            <br></br>

            <br></br>
          </div>



          <div className={styles.firmaRL1}>
                      <Image
            src="/img/firma.png"
            alt="logo de AKALLPA"
            width={260}
            height={190}
            priority
          />
          </div>
          <div className={styles.firmaRL}> <b>Firma,Nombres y Apellidos del Postor o <br></br> Representante Legal,segun corresponda</b>
          </div>



        </div>



      </div>







      <style jsx>{`

.marcoRectangular{
    padding: 5px;
      background-color:white;
      width:840px;
     height: 1200px;
      border: solid 1.8px black;
    border-radius: 30px;

    


}

@media (max-width: 600px) {



}


`}</style>
    </div>





    </>




  )
}

export default Perfil
