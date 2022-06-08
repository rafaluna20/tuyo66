import React, { useState, useEffect } from 'react'

import Encabezado from '../../components/Documentos/Encabezado';
import Titulos from '../../components/Documentos/Titulos';
import Dirigido from '../../components/Documentos/Dirigido';
import TablaEmpresa from '../../components/Documentos/TablaEmpresa';
import FirmaGerente from '../../components/Documentos/FirmaGerente';

import Separador from '../../components/Documentos/Separador';
import SubSeparador from '../../components/Documentos/SubSeparador';
import SubSubSeparador from '../../components/Documentos/SubSubSeparador';
import CuartoSeparador from '../../components/Documentos/CuartoSeparador';


const admisionOferta1 = {
  separador1Numero: "",
  separador1Texto: "DOCUMENTOS PARA LA ADMISION DE LA OFERTA",
  subSeparador11Numero: "",
  subSeparador11Texto: "DOCUMENTOS OBLIGATORIO",
  subSubSeparador111Numero: "",
  subSubSeparador111Texto: "DECLARACION JURADA DE DATOS DEL POSTOR (ANEXO 01)",
  subSubSeparador112Numero: "",
  subSubSeparador112Texto: "DOCUMENTO QUE ACREDITE LA PRESENTACIÓN DE QUIEN SUSCRIBE LA OFERTA.",
  subSubSeparador113Numero: "",
  subSubSeparador113Texto: "DECLARACIÓN JURADA DE ACUERDO CON EL LITERAL B) DEL ARTICULO 52 DEL REGLAMENTO. (ANEXO 02).",
  subSubSeparador114Numero: "",
  subSubSeparador114Texto: "DECLARACIÓN JURADA DE CUMPLIMIENTO DE LA ESPECIFICACIONES TÉCNICAS",
  subSubSeparador115Numero: "",
  subSubSeparador115Texto: "DECLARACIÓN JURADA DE PLAZO DE ENTREGA. (ANEXO 4)",
  subSeparador12Numero: "",
  subSeparador12Texto: "  DOCUMENTACION DE PRESENTACION FACULTATIVA",



  separador2Numero: "",
  separador2Texto: "DOCUMENTOS PARA ACREDITAR LOS REQUISITOS DE CALIFICACION",
  subSeparador21Numero: "",
  subSeparador21Texto: "PROPUESTA ECOCNOMICA",
  subSeparador22Numero: "",
  subSeparador22Texto: "PROPUESTA TECNICA ESTRATEGICA",
  subSubSeparador221Numero: "2.2.1",
  subSubSeparador221Texto: "INFRAESTRUCTURA ESTRATÉGICA",
  subSubSeparador222Numero: "2.2.2",
  subSubSeparador222Texto: "EQUIPAMIENTO ESTRATÉGICO",
  subSubSeparador223Numero: "2.2.3",
  subSubSeparador223Texto: "CERTIFICADO DE CALIBRACION",
  subSubSeparador224Numero: "2.2.4",
  subSubSeparador224Texto: "GARANTIA COMERCIAL E INSTALACION",

  subSeparador23Numero: "",
  subSeparador23Texto: "EXPERIENCIA DEL POSTOR",
  subSeparador24Numero: "",
  subSeparador24Texto: "EXPERIENCIA DEL PROFESIONAL CLAVE",

  subSubSeparador241Numero: "",
  subSubSeparador241Texto: "RESIDENTE DE LA OBRA",

  subSubSeparador242Numero: "",
  subSubSeparador242Texto: "PERSONAL DE APOYO",

  separador3Numero: "",
  separador3Texto: "MEJORAS A LOS TERMINOS DE REFERENCIA",


}






const AnexosTotal = ({
  aliasEntidad,
  nombreEntidad,
  rucEntidad,
  domicilioEntidad,
  procesoEntidad,
  objetoConvocatoriaEntidad,
  fecha1,
  plazoEjecucion,
  montoObra,
  ofertaSoles,

  representanteLegalEntidad,
  dniRLegalEntidad,
  emailRlegalEntidad,
  telefonoRLegalEntidad,

  nombreEmpresa1, rucEmpresa1, direccionEmpresa1, inscritoLocalidadEmpresa1,
  fichaEmpresa1, asientoNumeroEmpresa1,

  representanteLegalEmpresa1, dniEmpresa1, direccionRLEmpresa1, emailEmpresa1, telefonoEmpresa1,
  inscritoRLEmpresa1, fichaRLEmpresa1, asientoRLEmpresa1,

}) => {


  const [admisionOferta1N, setAdmisionOferta1N] = useState(admisionOferta1);

  const { separador1Numero, separador1Texto,
    subSeparador11Numero, subSeparador11Texto,
    subSubSeparador111Numero, subSubSeparador111Texto,
    subSubSeparador112Numero, subSubSeparador112Texto,
    subSubSeparador113Numero, subSubSeparador113Texto,
    subSubSeparador114Numero, subSubSeparador114Texto,
    subSubSeparador115Numero, subSubSeparador115Texto,
    subSeparador12Numero, subSeparador12Texto,

    separador2Numero, separador2Texto,

    subSeparador21Numero, subSeparador21Texto,
    subSeparador22Numero, subSeparador22Texto,
    subSeparador23Numero, subSeparador23Texto,
    subSeparador24Numero, subSeparador24Texto,
    subSubSeparador241Numero, subSubSeparador241Texto,
    subSubSeparador242Numero, subSubSeparador242Texto,

    separador3Numero, separador3Texto,

  } = admisionOferta1N

  const conversor = require('conversor-numero-a-letras-es-ar');
  let ClaseConversor = conversor.conversorNumerosALetras;
  let miConversor = new ClaseConversor();

  var numeroLetras = miConversor.convertToText(montoObra);

  const handleChange = e => {
    setAdmisionOferta1N({
      ...admisionOferta1N,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >
        <div style={{ fontsize: "25px", textAlign: "center" }}><b>INDICE </b> </div>


        <form>

          <div>
            <div className='cajaInputPrimaria'>


              <input
                className='inputIzquierdaPrimaria'
                type="number"
                id="separador1Numero"
                placeholder='1.0'
                name='separador1Numero'

                value={separador1Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralPrimaria'
                type="text"
                id="separador1Texto"
                placeholder='separador primario'
                name='separador1Texto'

                value={separador1Texto}
                onChange={handleChange}

              />

              <input
                className='inputDerechaPrimaria'
                type="text"
                placeholder='325'
              />



            </div>



            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador11Numero"
                placeholder='1.1'
                name='subSeparador11Numero'

                value={subSeparador11Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador11Texto"
                placeholder='separador secundario'
                name='subSeparador11Texto'

                value={subSeparador11Texto}
                onChange={handleChange}

              />

              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />

            </div>

            <div className='cajaInputTercera'>


              <input
                className='inputIzquierdaTercera'
                type="texto"
                id="subSubSeparador111Numero"
                placeholder='1.1.1'
                name='subSubSeparador111Numero'

                value={subSubSeparador111Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralTercera'
                type="text"
                id="subSubSeparador111Texto"
                placeholder='separador tercera'
                name='subSubSeparador111Texto'

                value={subSubSeparador111Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaTercera'
                type="text"
                placeholder='325'
              />


            </div>

            <div className='cajaInputTercera'>


              <input
                className='inputIzquierdaTercera'
                type="texto"
                id="subSubSeparador112Numero"
                placeholder='1.1.2'
                name='subSubSeparador112Numero'

                value={subSubSeparador112Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralTercera'
                type="text"
                id="subSubSeparador112Texto"
                placeholder='separador tercera'
                name='subSubSeparador112Texto'

                value={subSubSeparador112Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaTercera'
                type="text"
                placeholder='325'
              />


            </div>

            <div className='cajaInputTercera'>


              <input
                className='inputIzquierdaTercera'
                type="texto"
                id="subSubSeparador113Numero"
                placeholder='1.1.3'
                name='subSubSeparador113Numero'

                value={subSubSeparador113Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralTercera'
                type="text"
                id="subSubSeparador113Texto"
                placeholder='separador tercera'
                name='subSubSeparador113Texto'

                value={subSubSeparador113Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaTercera'
                type="text"
                placeholder='325'
              />


            </div>


            <div className='cajaInputTercera'>


              <input
                className='inputIzquierdaTercera'
                type="texto"
                id="subSubSeparador114Numero"
                placeholder='1.1.4'
                name='subSubSeparador114Numero'

                value={subSubSeparador114Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralTercera'
                type="text"
                id="subSubSeparador114Texto"
                placeholder='separador tercera'
                name='subSubSeparador114Texto'

                value={subSubSeparador114Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaTercera'
                type="text"
                placeholder='325'
              />


            </div>

            <div className='cajaInputTercera'>


              <input
                className='inputIzquierdaTercera'
                type="texto"
                id="subSubSeparador115Numero"
                placeholder='1.1.5'
                name='subSubSeparador115Numero'

                value={subSubSeparador115Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralTercera'
                type="text"
                id="subSubSeparador115Texto"
                placeholder='separador tercera'
                name='subSubSeparador115Texto'

                value={subSubSeparador115Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaTercera'
                type="text"
                placeholder='325'
              />


            </div>


            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador12Numero"
                placeholder='1.2'
                name='subSeparador12Numero'

                value={subSeparador12Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador12Texto"
                placeholder='separador secundario'
                name='subSeparador12Texto'

                value={subSeparador12Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />


            </div>

          </div>







          <div>

            <div className='cajaInputPrimaria'>
              <input
                className='inputIzquierdaPrimaria'
                type="number"
                id="separador2Numero"
                placeholder='2.0'
                name='separador2Numero'

                value={separador2Numero}
                onChange={handleChange}
              />

              <input
                className='inputCentralPrimaria'
                type="text"
                id="separador2Texto"
                placeholder='separador primario'
                name='separador2Texto'

                value={separador2Texto}
                onChange={handleChange}
              />
              <input
                className='inputDerechaPrimaria'
                type="text"
                placeholder='325'
              />


            </div>



            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador2.1Numero"
                placeholder='2.1'
                name='subSeparador2.1Numero'

                value={subSeparador21Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador21Texto"
                placeholder='separador secundario'
                name='subSeparador21Texto'

                value={subSeparador21Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />


            </div>


            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador2.2Numero"
                placeholder='2.2'
                name='subSeparador2.2Numero'

                value={subSeparador22Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador22Texto"
                placeholder='separador secundario'
                name='subSeparador22Texto'

                value={subSeparador22Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />


            </div>

            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador23Numero"
                placeholder='2.3'
                name='subSeparador23Numero'

                value={subSeparador23Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador23Texto"
                placeholder='separador secundario'
                name='subSeparador23Texto'

                value={subSeparador23Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />


            </div>

            <div className='cajaInputSecundaria'>


              <input
                className='inputIzquierdaSecundaria'
                type="number"
                id="subSeparador24Numero"
                placeholder='2.4'
                name='subSeparador24Numero'

                value={subSeparador24Numero}
                onChange={handleChange}

              />

              <input
                className='inputCentralSecundaria'
                type="text"
                id="subSeparador24Texto"
                placeholder='separador secundario'
                name='subSeparador24Texto'

                value={subSeparador24Texto}
                onChange={handleChange}

              />
              <input
                className='inputDerechaSecundaria'
                type="text"
                placeholder='325'
              />


            </div>


          </div>



          <div className='cajaInputPrimaria'>
            <input
              className='inputIzquierdaPrimaria'
              type="number"
              id="separador3Numero"
              placeholder='3.0'
              name='separador3Numero'

              value={separador3Numero}
              onChange={handleChange}
            />

            <input
              className='inputCentralPrimaria'
              type="text"
              id="separador3Texto"
              placeholder='separador primario'
              name='separador3Texto'

              value={separador3Texto}
              onChange={handleChange}
            />

            <input
              className='inputDerechaPrimaria'
              type="text"
              placeholder='325'

            />

          </div>


        </form>



        <style jsx>{`

.cajaInputPrimaria{
   background-color:  #e1e1e1;
   padding:2px;
   display:flex;
   


}

.inputIzquierdaPrimaria{
width:50px;
   font-weight: 700;
font-family: Roboto;
font-size:15px;
}
.inputCentralPrimaria{

  flex:1;
   font-weight: 700;
font-family: Roboto;
font-size:15px;
}


.inputDerechaPrimaria{
    width:50px;
       font-weight: 700;
font-family: Roboto;
font-size:15px;
}


.cajaInputSecundaria{
   background-color:  #e1e1e1;
   margin:0px 0px 0px 10px;
   display:flex;

}

.inputIzquierdaSecundaria{
width:40px;
   font-weight: 400;
font-family: Roboto;
font-size:13px;
}
.inputCentralSecundaria{

  flex:1;
   font-weight: 400;
font-family: Roboto;
font-size:13px;
}


.inputDerechaSecundaria{
    width:50px;
       font-weight: 400;
font-family: Roboto;
font-size:13px;
}







.cajaInputTercera{
   background-color:  #e1e1e1;
   margin:0px 0px 0px 20px;
   display:flex;
   

}

.inputIzquierdaTercera{
width:50px;
   font-weight: 400;
font-family: Roboto;
font-size:11px;
color:blue;
}
.inputCentralTercera{

  flex:1;
   font-weight: 400;
font-family: Roboto;
font-size:11px;
color:blue;
}


.inputDerechaTercera{
    width:50px;
       font-weight: 400;
font-family: Roboto;
font-size:11px;
color:blue;
}







@media (max-width: 600px) {



}





`}</style>
      </Encabezado>




      {separador1Numero.length > 0 ? <Separador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={separador1Numero}
        tituloTexto={separador1Texto}
        tituloSeparador2=""
      /> : ""}

      {subSeparador11Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador11Numero}
        tituloTexto={subSeparador11Texto}

      /> : ""}

      {subSubSeparador111Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador111Numero}
        tituloTexto={subSubSeparador111Texto}

      /> : ""}

      {/*hoja 01############# anex0 01################################# */}

      {subSubSeparador111Numero.length > 0 ?(
     <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >
        <Titulos

          titulo1="ANEXO Nº1"
          titulo2="DECLARACION JURADA DE DATOS DEL POSTOR"
          titulo3=""
        />

        <Dirigido
          dirigido="COMITE ESPECIAL"
          procesoEntidad={procesoEntidad}
        />

        <div style={{ textAlign: "justify" }}>

          El que se suscribe, <b>{representanteLegalEmpresa1} </b> , postor y/o Representante Legal de <b>{nombreEmpresa1} </b> , identificado con <b>DNI N°{dniEmpresa1} </b>, con poder inscrito en la localidad de
          <b> {inscritoLocalidadEmpresa1}</b>  en la Ficha Nº <b> {fichaEmpresa1} </b> Asiento <b> Nº {asientoNumeroEmpresa1},DECLARO BAJO JURAMENTO </b> que la siguiente información se sujeta a la verdad:
        </div>

        <TablaEmpresa
          nombreEmpresa1={nombreEmpresa1}
          direccionEmpresa1={direccionEmpresa1}
          rucEmpresa1={rucEmpresa1}
          telefonoEmpresa1={telefonoEmpresa1}
          emailEmpresa1={emailEmpresa1}
        />

        <div>
          <b>Autorizacion de notificacion por correo electronico:</b>
        </div>

        <div style={{ fontSize: "11px" }}>
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
        <div>
          {fecha1}
        </div>
        <FirmaGerente />


        <style jsx>{`


`}</style>

      </Encabezado>

      ):""}
 
      {subSubSeparador112Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador112Numero}
        tituloTexto={subSubSeparador112Texto}

      /> : ""}

      {subSubSeparador113Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador113Numero}
        tituloTexto={subSubSeparador113Texto}
      /> : ""}


      {/*hoja 02############# anex0 02################################# */}

      {subSubSeparador113Numero.length > 0 ? (
     <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >
        <Titulos

          titulo1="ANEXO Nº2"
          titulo2="DECLARACION JURADA"
          titulo3="(ART. 52 DEL REGLAMENTO DE LA LEY DE CONTRATACIONES DEL ESTADO)"
        />

        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          Mediante el presente el suscrito, postor y/o Representante Legal <b>{representanteLegalEmpresa1} </b> de la
          <b> {nombreEmpresa1} </b>  identificado con <b> DNI º {dniEmpresa1}</b>,con <b> RUC {rucEmpresa1} </b>, domiciliado en {direccionEmpresa1} declaro bajo juramento:
        </div>
        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>
          i. No haber incurrido y me obligo a no incurrir en actos de corrupción, así como a respetar el
          principio de integridad.
          <br></br>  <br></br>
          ii. No tener impedimento para postular en el procedimiento de selección ni para contratar con el
          Estado, conforme al artículo 11 de la Ley de Contrataciones del Estado.
          <br></br>
          <br></br>
          iii. Conocer las sanciones contenidas en la Ley de Contrataciones del Estado y su Reglamento,
          así como las disposiciones aplicables de la Ley N° 27444, Ley del Procedimiento Administrativo
          General.
          <br></br> <br></br>
          iv. Participar en el presente proceso de contratación en forma independiente sin mediar consulta,
          comunicación, acuerdo, arreglo o convenio con ningún proveedor; y, conocer las disposiciones
          del Decreto Legislativo Nº 1034, Decreto Legislativo que aprueba la Ley de Represión de
          Conductas Anticompetitivas.
          <br></br> <br></br>
          v. Conocer, aceptar y someterme a las bases, condiciones y reglas del procedimiento de
          selección.
          <br></br> <br></br>
          vi. Ser responsable de la veracidad de los documentos e información que presento en el presente
          procedimiento de selección.
          <br></br> <br></br>
          vii. Comprometerme a mantener la oferta presentada durante el procedimiento de selección y a
          perfeccionar el contrato, en caso de resultar favorecido con la buena pro.
          <br></br> <br></br>
          <br></br> <br></br>
        </div>
        <div>{fecha1}</div>

        <FirmaGerente />
      </Encabezado>

      ):""}

 
      {subSubSeparador114Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador114Numero}
        tituloTexto={subSubSeparador114Texto}
      /> : ""}

      {/*hoja 03############# anex0 03################################# */}


      {subSubSeparador114Numero.length > 0 ? (
   <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >

        <Titulos

          titulo1="ANEXO Nº3"
          titulo2="DECLARACIÓN JURADA DE CUMPLIMIENTO DE LAS ESPECIFICACIONES TÉCNICAS
"
          titulo3=""
        />

        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          <br></br>
          Es grato dirigirme a usted, para hacer de su conocimiento que luego de haber examinado las bases y
          demás documentos del procedimiento de la referencia y, conociendo todos los alcances y las
          condiciones detalladas en dichos documentos, el postor que suscribe ofrece el <b> {objetoConvocatoriaEntidad}</b> , de conformidad con las Especificaciones Técnicas que se indican
          en el numeral 3.1 del Capítulo III de la sección específica de las bases y los documentos del
          procedimiento.

          <br></br> <br></br>
        </div>

        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>



          <br></br> <br></br>
        </div>
        <div>{fecha1}
          <br></br> <br></br>

        </div>

        <FirmaGerente />
      </Encabezado>
      ):""}

   

      {subSubSeparador115Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador115Numero}
        tituloTexto={subSubSeparador115Texto}
      /> : ""}

      {/*hoja 04############# anex0 04################################# */}

      {subSubSeparador115Numero.length > 0 ?(
              <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >

        <Titulos

          titulo1="ANEXO Nº4"
          titulo2="DECLARACIÓN JURADA DE PLAZO DE ENTREGA"
          titulo3=""
        />

        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          <br></br>
          Mediante el presente, con pleno conocimiento de las condiciones que se exigen en las bases del
          procedimiento de la referencia, me comprometo a entregar los bienes objeto del presente procedimiento
          de selección <b> {objetoConvocatoriaEntidad}</b> en el plazo de<b> {plazoEjecucion} </b>, CONTADOS A PARTIR DEL DIA SIGUIENTE DE
          PERFECCIONADO EL CONTRATO.


          <br></br> <br></br>
        </div>

        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>



          <br></br> <br></br>
        </div>
        <div>{fecha1}
          <br></br> <br></br>

        </div>

        <FirmaGerente />
      </Encabezado>
      ):""}


      {subSeparador12Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador12Numero}
        tituloTexto={subSeparador12Texto}

      /> : ""}


      {separador2Numero.length > 0 ? <Separador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={separador2Numero}
        tituloTexto={separador2Texto}
        tituloSeparador2=""
      /> : ""}

      {subSeparador21Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador21Numero}
        tituloTexto={subSeparador21Texto}

      /> : ""}




      {/*hoja 06############# anex0 06################################# */}

      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >

        <Titulos

          titulo1="ANEXO Nº6"
          titulo2="PRECIO DE LA OFERTA"
          titulo3=""
        />

        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          <br></br>
          Es grato dirigirme a usted, para hacer de su conocimiento que, de acuerdo con las bases, mi oferta es
          la siguiente:



          <br></br> <br></br>
        </div>

        <table style={{ width: "100%" }}>
          <tbody>
            <tr style={{ boxShadow: "inset 5px 5px 30px 5px rgba(64, 8, 221, 0.7" }}>
              <th style={{ width: "70%" }} >CONCEPTO</th>
              <th>PRECIO TOTAL</th>
            </tr>
            <tr>

              <td style={{ fontSize: "12px" }}> {objetoConvocatoriaEntidad} </td>
              <td> {montoObra + ".00"}</td>
            </tr>

            <tr>

              <td> <b>TOTAL </b></td>
              <td ><b>S/. {montoObra + ".00"}</b> </td>
            </tr>
            <tr>

              <td colSpan="2"> <b>{numeroLetras} y /100 soles</b> </td>
              <td colSpan="0" ><b></b> </td>
            </tr>
          </tbody>

        </table>


        <div style={{ textAlign: "justify" }}>
          <br></br>
          El precio de la oferta es  <b>{numeroLetras} y /100,  {ofertaSoles}</b> incluye todos los tributos,
          seguros, transporte, inspecciones, pruebas y, de ser el caso, los costos laborales conforme a la
          legislación vigente, así como cualquier otro concepto que pueda tener incidencia sobre el costo del
          bien a contratar; excepto la de aquellos postores que gocen de alguna exoneración legal, no incluirán
          en el precio de su oferta los tributos respectivos.


          <br></br>
        </div>


        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>



          <br></br>
        </div>
        <div>{fecha1}
          <br></br>

        </div>

        <FirmaGerente />


        <style jsx>{`
table,th,td{
  border:1px solid black;
  border-collapse:collapse;

}
th,td{
  padding:5px;
}

`}</style>
      </Encabezado>

      {subSeparador22Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador22Numero}
        tituloTexto={subSeparador22Texto}

      /> : ""}


      {/*hoja 09############# anexo 09################################# */}

      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >

        <Titulos

          titulo1="ANEXO Nº9"
          titulo2="DECLARACION JURADA"
          titulo3="(NUMERAL 49.4 DEL ARTÍCULO 49 DEL REGLAMENTO) "
        />
        <div>       <br></br> <br></br></div>
        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          <br></br>
          Mediante el presente el suscrito, postor y/o Representante Legal de <b> {representanteLegalEmpresa1} </b>, declaro que la experiencia que acredito de la empresa <b> {nombreEmpresa1} </b> como consecuencia de una reorganización societaria,
          no se encuentra en el supuesto establecido en el numeral 49.4 del artículo 49 del Reglamento.

          <br></br> <br></br>
        </div>



        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>



          <br></br> <br></br>
        </div>
        <div>{fecha1}
          <br></br> <br></br>

        </div>

        <FirmaGerente />
      </Encabezado>


      {/*hoja 10############# anexo 10################################# */}

      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >
        <div style={{ fontSize: "14px" }}>
          <Titulos

            titulo1="ANEXO Nº10"
            titulo2="SOLICITUD DE BONIFICACIÓN DEL CINCO POR CIENTO (5%) POR TENER LA CONDICIÓN DE "
            titulo3="MICRO Y PEQUEÑA EMPRESA "
          />
        </div>


        <div>       <br></br> <br></br></div>
        <Dirigido
          dirigido="COMITE DE SELECCION"
          procesoEntidad={procesoEntidad}

        />
        <div style={{ textAlign: "justify" }}>
          <br></br>
          Mediante el presente el suscrito, postor y/o Representante legal<b> {representanteLegalEmpresa1} </b> , solicito la asignación de la bonificación del cinco por ciento (5%) sobre el
          puntaje total obtenido, debido a que mi representada cuenta con la condición de micro y pequeña
          empresa.
          <br></br> <br></br>
        </div>



        <div style={{ fontSize: "12px", paddingTop: "10px", paddingLeft: "40px", paddingRight: "50px", textAlign: "justify" }}>
          <br></br>



          <br></br> <br></br>
        </div>
        <div>{fecha1}
          <br></br> <br></br>

        </div>

        <FirmaGerente />
      </Encabezado>

      {subSeparador23Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador23Numero}
        tituloTexto={subSeparador23Texto}

      /> : ""}

      {subSeparador24Numero.length > 0 ? <SubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSeparador24Numero}
        tituloTexto={subSeparador24Texto}

      /> : ""}

      {subSubSeparador241Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador241Numero}
        tituloTexto={subSubSeparador241Texto}

      /> : ""}


      <CuartoSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero=""
        tituloTexto="A.1 FORMACIÓN ACADÉMICA"

      />

      <CuartoSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero=""
        tituloTexto="A.2 CAPACITACIÓN"

      />
      <CuartoSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero=""
        tituloTexto="A.3.-EXPERIENCIA DEL PERSONAL CLAVE"

      />

      {subSubSeparador242Numero.length > 0 ? <SubSubSeparador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero={subSubSeparador242Numero}
        tituloTexto={subSubSeparador242Texto}

      /> : ""}


      <Separador
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        tituloNumero="3."
        tituloTexto="MEJORAS A LOS TERMINOS DE REFERENCIA"
        tituloSeparador2=""
      />


    </>


  )
}

export default AnexosTotal