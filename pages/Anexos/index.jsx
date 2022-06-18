import React, { useState } from 'react'

import AnexoTotal from './AnexosTotal';
import ContratoProforma from './ContratoProforma';
import Encabezado from '../../components/Documentos/Encabezado';




/*datos de la entidad contratante */
const aliasEntidad = "EL CONTRATANTE";
const nombreEntidad = "ROMERO GRUAS E.I.R.L";
const rucEntidad = "20492660737";
const domicilioEntidad = "CAL. PACHACUTEC NRO.1923 LA VICTORIA/ LAMBAYEQUE-CHICLAYO-LA VICTORIA";

/*datos del representante legal de entidad */
const representanteLegalEntidad = "ROMERO ARO PERCY PABLO";
const dniRLegalEntidad = "08613067";
const emailRlegalEntidad = "a-administrativo@romerogruas.com.pe";
const telefonoRLegalEntidad = "998 192 141";

/*datos del postor 01 */
const aliasEmpresa1 = " EL CONTRATISTA"
const nombreEmpresa1 = "ZURE PERUVIAN TECHNOLOGY S.A.C";
const rucEmpresa1 = "20565307461";
const direccionEmpresa1 = " Av. Manuel Candamo Nro. 559 Bar. Acobamba (S70776254)";

const inscritoLocalidadEmpresa1 = "SEDE LIMA";
const fichaEmpresa1 = "13286038";
const asientoNumeroEmpresa1 = "--";

/*datos del representante legal del postor 01 */
const representanteLegalEmpresa1 = "ALEXANDER J. ESCOBAR NAVARRO";
const dniEmpresa1 = "76349915";
const direccionRLEmpresa1 = "SANTIAGO SURCO ";
const emailEmpresa1 = "ZURE.PERU@GMAIL.COM";
const telefonoEmpresa1 = "922802768";

const inscritoRLEmpresa1 = "SEDE LIMA";
const fichaRLEmpresa1 = "-----";
const asientoRLEmpresa1 = "---";

/*fecha de la presentacion */

const procesoEntidad = "CONTRATO  PARA SERVICIO ";
const objetoConvocatoriaEntidad = "obra: CONSTRUCCION DE CERCO PERIMETRICO DE 340.0metros LINEALES Y UNA ALTURA DE 4.0metros UBICADA EN CHILCA-PUCUSANA-LIMA "


const fecha1 = "LIMA, 09 de junio de 2022"
const plazoEjecucion = "90 DIAS CALENDARIOS "
const montoObra = "260033"
const ofertaSoles = " en soles"


const datosEntidad = {
  aliasEntidad: aliasEntidad,
  nombreEntidad: nombreEntidad,
  rucEntidad: rucEntidad,
  domicilioEntidad: domicilioEntidad,
  procesoEntidad: procesoEntidad,
  objetoConvocatoriaEntidad: objetoConvocatoriaEntidad,
  fecha1: fecha1,
  plazoEjecucion: plazoEjecucion,
  montoObra: montoObra,
  ofertaSoles: ofertaSoles,

  representanteLegalEntidad: representanteLegalEntidad,
  dniRLegalEntidad: dniRLegalEntidad,
  emailRlegalEntidad: emailRlegalEntidad,
  telefonoRLegalEntidad: telefonoRLegalEntidad,

  aliasEmpresa1: aliasEmpresa1,
  nombreEmpresa1: nombreEmpresa1,
  rucEmpresa1: rucEmpresa1,
  direccionEmpresa1: direccionEmpresa1,
  inscritoLocalidadEmpresa1: inscritoLocalidadEmpresa1,
  fichaEmpresa1: fichaEmpresa1,
  asientoNumeroEmpresa1: asientoNumeroEmpresa1,

  representanteLegalEmpresa1: representanteLegalEmpresa1,
  dniEmpresa1: dniEmpresa1,
  direccionRLEmpresa1: direccionRLEmpresa1,
  emailEmpresa1: emailEmpresa1,
  telefonoEmpresa1: telefonoEmpresa1,

  inscritoRLEmpresa1: inscritoRLEmpresa1,
  fichaRLEmpresa1: fichaRLEmpresa1,
  asientoRLEmpresa1: asientoRLEmpresa1,

}



const Anexos = () => {


  const [datosEntidadNuevo, setDatosEntidadNuevo] = useState(datosEntidad);
  const { aliasEntidad, nombreEntidad, rucEntidad, domicilioEntidad, procesoEntidad, objetoConvocatoriaEntidad,
    fecha1, plazoEjecucion, montoObra, ofertaSoles,

    representanteLegalEntidad, dniRLegalEntidad, emailRlegalEntidad, telefonoRLegalEntidad,

    aliasEmpresa1, nombreEmpresa1, rucEmpresa1, direccionEmpresa1, inscritoLocalidadEmpresa1,
    fichaEmpresa1, asientoNumeroEmpresa1,

    representanteLegalEmpresa1, dniEmpresa1, direccionRLEmpresa1, emailEmpresa1, telefonoEmpresa1,
  }
    = datosEntidadNuevo;



  const handleChange = e => {
    setDatosEntidadNuevo({
      ...datosEntidadNuevo,
      [e.target.name]: e.target.value
    })
  }







  return (
    <>
      <div className='marcoRectangular22'>

        <div className='datosEntidad'>

          <div style={{ textAlign: "center" }}>
            DATOS DE LA ENTIDAD
          </div>
          <form>

            <div className='labelInput'>
              <label htmlFor='aliasEntidad'> Alias</label>
              <input
                className=''
                type="text"
                id="aliasEntidad"
                placeholder=' alias de la Entidad'
                name='aliasEntidad'

                value={aliasEntidad}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='nombreEntidad'> Entidad</label>
              <input
                className=''
                type="text"
                id="nombreEntidad"
                placeholder='nombre de la Entidad'
                name='nombreEntidad'

                value={nombreEntidad}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='rucEntidad'> ruc</label>
              <input
                className=''
                type="number"
                id="rucEntidad"
                placeholder='ruc de la Entidad'
                name='rucEntidad'

                value={rucEntidad}
                onChange={handleChange}
              />
            </div>


            <div className='labelInput'>
              <label htmlFor='domicilioEntidad'> domicilio</label>
              <input
                className=''
                type="text"
                id="domicilioEntidad"
                placeholder='domicilio de la Entidad'

                name='domicilioEntidad'

                value={domicilioEntidad}
                onChange={handleChange}
              />

            </div>


            <div className='labelInput'>
              <label htmlFor='procesoEntidad'> proceso</label>
              <input
                className=''
                type="text"
                id="procesoEntidad"
                placeholder='el proceso lanzado de la Entidad'

                name='procesoEntidad'

                value={procesoEntidad}
                onChange={handleChange}

              />
            </div>

            <div className='labelInput'>
              <label htmlFor='objetoConvocatoriaEntidad'> objeto</label>
              <input
                className=''
                type="text"
                id="objetoConvocatoriaEntidad"
                placeholder='objeto de la convocatoria'

                name='objetoConvocatoriaEntidad'

                value={objetoConvocatoriaEntidad}
                onChange={handleChange}
              />
            </div>

            <div className='labelInput'>
              <label htmlFor='fecha1'> fecha</label>

              <input
                className=''
                type="text"
                id="fecha1"
                placeholder='Lima,26 de enero ejem: fecha de  presentacion'

                name='fecha1'

                value={fecha1}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='plazoEjecucion'>   plazo de Ejecucion</label>

              <input
                className=''
                type="text"
                id="plazoEjecucion"
                placeholder='15  dias calendarios'

                name='plazoEjecucion'

                value={plazoEjecucion}
                onChange={handleChange}

              />
            </div>

            <div className='labelInput'>
              <label htmlFor='montoObra'>   monto de obra</label>

              <input
                className=''
                type="text"
                id="montoObra"
                placeholder='18,000.00'

                name='montoObra'

                value={montoObra}
                onChange={handleChange}
              />
            </div>


            <div className='labelInput'>
              <label htmlFor=' ofertaSoles'> moneda</label>

              <input
                className=''
                type="text"
                id="ofertaSoles"
                placeholder='en soles  o en dolares'

                name='ofertaSoles'

                value={ofertaSoles}
                onChange={handleChange}
              />
            </div>

          </form>

        </div>

        <div className='datosEntidad'>

          <div style={{ textAlign: "center" }}>
            DATOS DEL REPRESENTANTE LEGAL DE LA ENTIDAD
          </div>
          <form>

            <div className='labelInput'>
              <label htmlFor='representanteLegalEntidad'> NOMBRE</label>
              <input
                className=''
                type="text"
                id="representanteLegalEntidad"
                placeholder='nombre representante de entidad'
                name='representanteLegalEntidad'

                value={representanteLegalEntidad}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='dniRLegalEntidad'> DNI</label>
              <input
                className=''
                type="number"
                id="dniRLegalEntidad"
                placeholder='dni de representante legal'
                name='dniRLegalEntidad'

                value={dniRLegalEntidad}
                onChange={handleChange}
              />
            </div>


            <div className='labelInput'>
              <label htmlFor='emailRlegalEntidad'> EMAIL</label>
              <input
                className=''
                type="text"
                id="emailRlegalEntidad"
                placeholder='email '

                name='emailRlegalEntidad'

                value={emailRlegalEntidad}
                onChange={handleChange}
              />

            </div>


            <div className='labelInput'>
              <label htmlFor='telefonoRLegalEntidad'> TELEFONO</label>
              <input
                className=''
                type="text"
                id="telefonoRLegalEntidad"
                placeholder="922823255"

                name='telefonoRLegalEntidad'

                value={telefonoRLegalEntidad}
                onChange={handleChange}

              />
            </div>


          </form>

        </div>

        <div className='datosEntidad'>

          <div style={{ textAlign: "center" }}>
            DATOS DEL CONTRATANTE
          </div>
          <form>


            <div className='labelInput'>
              <label htmlFor='aliasEmpresa1'> Alias</label>
              <input
                className=''
                type="text"
                id="aliasEmpresa1"
                placeholder=' alias de la Empresa 1'
                name='aliasEmpresa1'

                value={aliasEmpresa1}
                onChange={handleChange}

              />
            </div>



            <div className='labelInput'>
              <label htmlFor='nombreEmpresa1'> NOMBRE</label>
              <input
                className=''
                type="text"
                id="nombreEmpresa1"
                placeholder='nombre de la empresa contratante'
                name='nombreEmpresa1'

                value={nombreEmpresa1}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='rucEmpresa1'> RUC</label>
              <input
                className=''
                type="number"
                id="rucEmpresa1"
                placeholder='ruc de la empresa contratante'
                name='rucEmpresa1'

                value={rucEmpresa1}
                onChange={handleChange}
              />
            </div>


            <div className='labelInput'>
              <label htmlFor='direccionEmpresa1'> DIRECCION</label>
              <input
                className=''
                type="text"
                id="direccionEmpresa1"
                placeholder='direcion  legal '

                name='direccionEmpresa1'

                value={direccionEmpresa1}
                onChange={handleChange}
              />

            </div>


            <div className='labelInput'>
              <label htmlFor='inscritoLocalidadEmpresa1'> inscrito  localidad</label>
              <input
                className=''
                type="text"
                id="inscritoLocalidadEmpresa1"
                placeholder="inscrito en la localidad de:"

                name='inscritoLocalidadEmpresa1'

                value={inscritoLocalidadEmpresa1}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='fichaEmpresa1'> ficha SUNARP</label>
              <input
                className=''
                type="text"
                id="fichaEmpresa1"
                placeholder="FICHA SUNARP"

                name='fichaEmpresa1'

                value={fichaEmpresa1}
                onChange={handleChange}

              />
            </div>



            <div className='labelInput'>
              <label htmlFor='asientoNumeroEmpresa1'>  Nº ASIENTO </label>
              <input
                className=''
                type="text"
                id="asientoNumeroEmpresa1"
                placeholder="452"

                name='asientoNumeroEmpresa1'

                value={asientoNumeroEmpresa1}
                onChange={handleChange}

              />
            </div>


          </form>

        </div>
        <div className='datosEntidad'>

          <div style={{ textAlign: "center" }}>
            DATOS DE REPRESENTANTE LEGAL DE CONTRATANTE
          </div>
          <form>

            <div className='labelInput'>
              <label htmlFor='representanteLegalEmpresa1'> NOMBRE</label>
              <input
                className=''
                type="text"
                id="representanteLegalEmpresa1"
                placeholder='nombre representante legal del contratante'
                name='representanteLegalEmpresa1'

                value={representanteLegalEmpresa1}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='dniEmpresa1'> DNI</label>
              <input
                className=''
                type="number"
                id="dniEmpresa1"
                placeholder='dni de representante legal contratante'
                name='dniEmpresa1'

                value={dniEmpresa1}
                onChange={handleChange}
              />
            </div>


            <div className='labelInput'>
              <label htmlFor='direccionRLEmpresa1'> DIRECCION</label>
              <input
                className=''
                type="text"
                id="direccionRLEmpresa1"
                placeholder='direcion  de representante legal del contratante '

                name='direccionRLEmpresa1'

                value={direccionRLEmpresa1}
                onChange={handleChange}
              />

            </div>


            <div className='labelInput'>
              <label htmlFor='emailEmpresa1'> email RL </label>
              <input
                className=''
                type="email"
                id="emailEmpresa1"
                placeholder="ajemplo@comen.com"

                name='emailEmpresa1'

                value={emailEmpresa1}
                onChange={handleChange}

              />
            </div>


            <div className='labelInput'>
              <label htmlFor='telefonoEmpresa1'> telefono</label>
              <input
                className=''
                type="number"
                id="telefonoEmpresa1"
                placeholder="FICHA SUNARP"

                name='telefonoEmpresa1'

                value={telefonoEmpresa1}
                onChange={handleChange}

              />
            </div>



          </form>

        </div>





      </div>




      <AnexoTotal
        nombreEntidad={nombreEntidad}
        rucEntidad={rucEntidad}
        domicilioEntidad={domicilioEntidad}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        fecha1={fecha1}
        plazoEjecucion={plazoEjecucion}
        montoObra={montoObra}
        ofertaSoles={ofertaSoles}

        representanteLegalEntidad={representanteLegalEntidad}
        dniRLegalEntidad={dniRLegalEntidad}
        emailRlegalEntidad={emailRlegalEntidad}
        telefonoRLegalEntidad={telefonoRLegalEntidad}

        nombreEmpresa1={nombreEmpresa1}
        rucEmpresa1={rucEmpresa1}
        direccionEmpresa1={direccionEmpresa1}

        inscritoLocalidadEmpresa1={inscritoLocalidadEmpresa1}
        fichaEmpresa1={fichaEmpresa1}
        asientoNumeroEmpresa1={asientoNumeroEmpresa1}


        representanteLegalEmpresa1={representanteLegalEmpresa1}
        dniEmpresa1={dniEmpresa1}
        emailEmpresa1={emailEmpresa1}
        telefonoEmpresa1={telefonoEmpresa1}
        inscritoRLEmpresa1={inscritoRLEmpresa1}
        fichaRLEmpresa1={fichaRLEmpresa1}
        asientoRLEmpresa1={asientoRLEmpresa1}
      />
      <ContratoProforma
        aliasEntidad={aliasEntidad}
        nombreEntidad={nombreEntidad}
        rucEntidad={rucEntidad}
        domicilioEntidad={domicilioEntidad}
        procesoEntidad={procesoEntidad}
        objetoConvocatoriaEntidad={objetoConvocatoriaEntidad}
        fecha1={fecha1}
        plazoEjecucion={plazoEjecucion}
        montoObra={montoObra}
        ofertaSoles={ofertaSoles}

        representanteLegalEntidad={representanteLegalEntidad}
        dniRLegalEntidad={dniRLegalEntidad}
        emailRlegalEntidad={emailRlegalEntidad}
        telefonoRLegalEntidad={telefonoRLegalEntidad}

        aliasEmpresa1={aliasEmpresa1}
        nombreEmpresa1={nombreEmpresa1}
        rucEmpresa1={rucEmpresa1}
        direccionEmpresa1={direccionEmpresa1}

        inscritoLocalidadEmpresa1={inscritoLocalidadEmpresa1}
        fichaEmpresa1={fichaEmpresa1}
        asientoNumeroEmpresa1={asientoNumeroEmpresa1}


        representanteLegalEmpresa1={representanteLegalEmpresa1}
        dniEmpresa1={dniEmpresa1}
        direccionRLEmpresa1={direccionRLEmpresa1}
        emailEmpresa1={emailEmpresa1}
        telefonoEmpresa1={telefonoEmpresa1}
        inscritoRLEmpresa1={inscritoRLEmpresa1}
        fichaRLEmpresa1={fichaRLEmpresa1}
        asientoRLEmpresa1={asientoRLEmpresa1}
      />



      <style jsx>{`

.marcoRectangular22{
   margin-top: 10px;
    padding:10px 50px 10px 50px;
      background-color:white;
      width:840px;
     height: 1200px;
      border: solid 1.8px black;
    border-radius: 30px;
}

.labelInput{
   
    display:flex;
}

input{
  
  flex-grow:3;
}
label{
  margin:0px 20px 0px 20px;
  font-family:Roboto;
   font-weight: 700;
}


.datosEntidad{

  background-color: rgb(153, 153, 153);
     padding:10px;
     margin-top:20px;
    border-radius: 10px;
      box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

}

`}</style>


    </>

  )
}

export default Anexos