import React from 'react'
import Image from 'next/image';

import Encabezado from '../../components/Documentos/Encabezado';
import Titulos from '../../components/Documentos/Titulos';
import Dirigido from '../../components/Documentos/Dirigido';
import TablaEmpresa from '../../components/Documentos/TablaEmpresa';
import FirmaGerente from '../../components/Documentos/FirmaGerente';


import Parte01 from '../../components/Documentos/Parte01';





const ContratoProforma = (
  {

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

    aliasEmpresa1, nombreEmpresa1, rucEmpresa1, direccionEmpresa1, inscritoLocalidadEmpresa1,
    fichaEmpresa1, asientoNumeroEmpresa1,

    representanteLegalEmpresa1, dniEmpresa1, direccionRLEmpresa1, emailEmpresa1, telefonoEmpresa1,
    inscritoRLEmpresa1, fichaRLEmpresa1, asientoRLEmpresa1,
  }

) => {


  const conversor = require('conversor-numero-a-letras-es-ar');
  let ClaseConversor = conversor.conversorNumerosALetras;
  let miConversor = new ClaseConversor();

  var numeroLetras = miConversor.convertToText(montoObra);




  return (
    <>
      {/*primera hoja &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >
        <Titulos

          titulo1=""
          titulo2="CONTRATO DE SERVICIO"
          titulo3=""
        />



        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          <br></br>
          Conste por el presente documento, la contratación de servicio <b>{objetoConvocatoriaEntidad} </b> , que celebra de
          una parte <b> {nombreEntidad} </b> en adelante <b> {aliasEntidad} </b> , con  <b> RUC Nº {rucEntidad}</b>,
          con domicilio legal en  {domicilioEntidad}, representada por <b>{representanteLegalEntidad} </b> , identificado con DNI
          Nº  {dniRLegalEntidad}, y de otra parte
          {nombreEmpresa1.length > 0 ? (<>
            <b> {nombreEmpresa1}</b>,  con RUC Nº <b>{rucEmpresa1}</b>, con domicilio
            legal en {direccionEmpresa1}, inscrita en la Ficha N° {fichaEmpresa1} Asiento N°
            {asientoNumeroEmpresa1} del Registro de Personas Jurídicas de la ciudad de <b>{inscritoLocalidadEmpresa1}</b> , debidamente
            representado por su Representante Legal,
          </>

          ) : ""}

          <b> {representanteLegalEmpresa1}</b>, DNI N°
          <b>{dniEmpresa1}</b>, con direccion en {direccionRLEmpresa1}


          {nombreEmpresa1.length > 0 ? (<>
            según poder inscrito en la Ficha N° {fichaRLEmpresa1}, Asiento N° {asientoRLEmpresa1} del Registro
            de Personas Jurídicas de la ciudad de {inscritoRLEmpresa1}
          </>

          ) : ""}

          , a quien en adelante se le denominará <b>
            {aliasEmpresa1}  </b>en los términos y condiciones siguientes:
          <br></br>
          <br></br>

        </div>




        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA PRIMERA: ANTECEDENTES</u> </b>
        </div>


        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Con fecha {fecha1}, el area encargada de las contrataciones o el comité de selección,
          según corresponda, adjudicó la buena pro de la <b>{objetoConvocatoriaEntidad} </b> ,
          a <b> {nombreEmpresa1}</b> , cuyos detalles e importe constan en
          los documentos integrantes del presente contrato.
          <br></br>
          <br></br>
        </div>

        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA SEGUNDA: OBJETO</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          El presente contrato tiene por objeto <b>{objetoConvocatoriaEntidad} </b> .
          <br></br>
          <br></br>
        </div>
        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA TERCERA: MONTO CONTRACTUAL</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          El monto total del presente contrato asciende a <b> {montoObra + ".00"} {ofertaSoles} ({numeroLetras} y/100 soles)</b> ,
          sin IGV.   <br></br>
          Este monto comprende el costo del bien, seguros, transporte,
          asi como cualquier
          otro concepto que pueda tener incidencia sobre la ejecución de la prestación materia del presente
          contrato.
          <br></br>
          <br></br>
        </div>


        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA CUARTA: DEL PAGO</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          <b>{aliasEntidad}</b>  se obliga a pagar la contraprestación a  <b> {aliasEmpresa1}</b> en SOLES de la siguiente forma:
          <br></br>
          <b>PRIMER PAGO:</b> El 20% a la firma del contrato<br></br>
          <b>RESTO DE PAGO:</b> Conforme a la valorizacion de la obra o servicio <br></br>
          Luego de la recepción formal  el responsable debe otorgar la conformidad de la prestación y cancelacion del PAGO  por el servicio u obra, y deberá hacerlo en un
          plazo que no excederá de los siete (7) días de producida la recepción.
          <br></br>
          <br></br>
        </div>



      </Encabezado>
      {/*segunda hoja &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >


        <div style={{ fontSize: "14px" }}>
          <br></br>
          <b>  <u>CLAUSULA QUINTA: DEL PLAZO DE LA EJECUCIÓN DE LA PRESTACIÓN</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          El plazo de ejecución del presente contrato es de <b>{plazoEjecucion}</b>, el mismo que se computa desde
          los 7 dias calendarios  despues de la firma del contrato o desde la fecha en que
          cumplan las condiciones previstas  en el contrato para el inicio de la ejecucion.
          <br></br>
          <br></br>
        </div>

        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA SEXTA: ECEPCIÓN Y CONFORMIDAD DE LA PRESTACIÓN </u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          La recepción será otorgada por representante de  <b> {aliasEntidad}</b> y la conformidad será
          otorgada por area responsable en la contratacion en el plazo máximo de  de 7 días de producida la recepción.
          <br></br>
          De existir observaciones, <b>{aliasEntidad} </b> las comunica a <b>{aliasEmpresa1} </b>, indicando claramente el
          sentido de estas, otorgándole un plazo  que sera acordado por ambas partes.
          Dependiendo de la complejidad o sofisticación de las subsanaciones a realizar el plazo para
          subsanar  se definira una fecha  para la subsanaciones. Si pese al plazo otorgado,
          {aliasEmpresa1} no cumpliese a cabalidad con la subsanación, {aliasEntidad}  puede otorgar al
          {aliasEmpresa1} periodos adicionales para las correcciones pertinentes.
          <br></br>
          <br></br>
        </div>



        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA SEPTIMA: DECLARACIÓN JURADA DE {aliasEmpresa1}</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          <b> {aliasEmpresa1} </b> declara bajo juramento que se compromete a cumplir las obligaciones
          derivadas del presente contrato, bajo sanción de quedar inhabilitado para contratar con <b>{aliasEntidad}  </b>
          en caso de incumplimiento
          <br></br>
          <br></br>
        </div>



        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA OCTAVA:  RESPONSABILIDAD POR VICIOS OCULTOS</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          La recepción conforme de la prestación por parte de<b> {aliasEntidad}  </b> no enerva su derecho a reclamar
          posteriormente por defectos o vicios ocultos.
          El plazo máximo de responsabilidad de <b> {aliasEmpresa1} </b>es de 2 año(s)contado a partir de la conformidad otorgada por<b> {aliasEntidad}  </b>.

          <br></br>
          <br></br>
        </div>



        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA NOVEMA: PENALIDADES</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Si <b> {aliasEmpresa1}</b> incurre en retraso injustificado en la ejecución de las prestaciones objeto del
          contrato, <b> {aliasEntidad} </b> le aplica automáticamente una penalidad por mora por cada día de atraso,
          de acuerdo a la siguiente fórmula:

          <br></br><br></br>
          Penalidad Diaria = (0.1xmonto vigente)/(0.8xplazo vigente en dias)
          <br></br><br></br>
          Si <b>  {aliasEntidad} </b>  incurre en retraso injustificado de pago por las prestaciones objeto del
          contrato, <b>  {aliasEmpresa1} </b> le aplica automáticamente una penalidad por mora por cada día
          de atraso por la misma  formula  anterior.
          <br></br><br></br>
          Penalidad Diaria = (0.1xmonto vigente)/(0.8xplazo vigente en dias)
          <br></br>
          <br></br>

          El retraso se justifica a través de la solicitud de ampliación de plazo debidamente aprobado.
          Adicionalmente, se considera justificado el retraso, y en consecuencia no se aplica penalidad,
          cuando  {aliasEmpresa1} o {aliasEntidad} acredite, de modo objetivamente sustentado.  <br></br>

          La penalidades pueden alcanzar  un monto máximo equivalente al veinte
          por ciento (20%) del monto del contrato vigente, o de ser el caso, del ítem que debió ejecutarse.
          Cuando se llegue a cubrir el monto máximo de la penalidad por mora o el monto máximo para otras
          penalidades, de ser el caso, {aliasEntidad}  o  {aliasEmpresa1} puede resolver el contrato por incumplimiento.
        </div>

      </Encabezado>
      {/*tercera  hoja &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <Encabezado
        nombreEmpresa1={nombreEmpresa1}
        procesoEntidad={procesoEntidad}
      >

        <div style={{ fontSize: "14px" }}>
          <br></br>
          <b>  <u>CLAUSULA DECIMA: RESOLUCIÓN DEL CONTRATO</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Cualquiera de las partes puede resolver el contrato de
          darse el caso.
          <br></br>
          <br></br>
        </div>

        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA UNDECIMA:RESPONSABILIDAD DE LAS PARTES </u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Cuando se resuelva el contrato por causas imputables a algunas de las partes, se debe resarcir los
          daños y perjuicios ocasionados, a través de la indemnización correspondiente. Ello no obsta la
          aplicación de las sanciones administrativas, penales y pecuniarias a que dicho incumplimiento diere
          lugar, en el caso que éstas correspondan.
          Lo señalado precedentemente no exime a ninguna de las partes del cumplimiento de las demás
          obligaciones previstas en el presente contrato.

          <br></br>
          <br></br>
        </div>


        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA DOUDECIMA: MARCO LEGAL DEL CONTRATO</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Las controversias que surjan entre las partes durante la ejecución del contrato se resuelven
          mediante conciliación o arbitraje, según el acuerdo de las partes.
          Cualquiera de las partes tiene derecho a iniciar el arbitraje a fin de resolver dichas controversias.
          <br></br>
          Facultativamente, cualquiera de las partes tiene el derecho a solicitar una conciliación dentro del
          plazo, sin perjuicio de recurrir al arbitraje, en caso no se llegue a un
          acuerdo entre ambas partes o se llegue a un acuerdo parcial. Las controversias sobre nulidad del
          contrato solo pueden ser sometidas a arbitraje.
          El Laudo arbitral emitido es inapelable, definitivo y obligatorio para las partes desde el momento de
          su notificación.
          <br></br>
          <br></br>
        </div>


        <div style={{ fontSize: "14px" }}>
          <b>  <u>CLAUSULA DECIMA TERCERA: DOMICILIO PARA EFECTOS DE LA EJECUCIÓN CONTRACTUAL</u> </b>
        </div>
        <div style={{ textAlign: "justify", fontSize: "14px" }}>
          Las partes declaran el siguiente domicilio para efecto de las notificaciones que se realicen durante
          la ejecución del presente contrato:

          <br></br>
          DOMICILIO DE LA ENTIDAD: {domicilioEntidad}<br></br><br></br>
          DOMICILIO DEL CONTRATISTA:{direccionEmpresa1}<br></br><br></br>

          La variación del domicilio aquí declarado de alguna de las partes debe ser comunicada a la otra
          parte, formalmente y por escrito, con una anticipación no menor de quince (15) días calendario.
          <br></br>
          las partes lo firman por duplicado en señal de conformidad en la ciudad de {fecha1}.

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>


        <div className='ordenarFirma'>

          <div>
            <div className="firmaRL1">
              <Image
                src="/img/firma.png"
                alt="logo de AKALLPA"
                width={260}
                height={190}
                priority
              />
            </div>
            <div className="firmaRL"> <b>  {aliasEmpresa1}</b>
            </div>
          </div>

          <div>

            <div className="firmaRL1">

            </div>
            <div className="firmaRL"> <b>  {aliasEntidad}</b>
            </div>

          </div>

        </div>
        <style jsx>{`
        .ordenarFirma{
          display:flex;
         flex-direction: row;
         justify-content: space-evenly ;
        }

.firmaRL{

  background-color: white;
  width: 250px;
  height: 100px;

  border-style:dashed;
    border-color: #050505 transparent  transparent transparent;
    border-width: 2px 2px 2px 2px;
    text-align: center;
}



.firmaRL1 {

  background-color: white;

  width: 250px;
  height: 120px;


}
`}</style>

      </Encabezado>



    </>
  )
}

export default ContratoProforma