import React from 'react'
import Layout from '../../components/layout/Layout'




const document = () => {


  return (
    <Layout>

      <div className='cajaFondo1'>
        <div className='cajaLabelInput'>
          <label
            htmlFor='aliasEmpresa1'

          > alias empresa</label>
          <input
            className='cajaInput'
            type="text"
            id='aliasEmpresa'
            placeholder='alias de la empresa'
            name='aliasEmpresa'
          />
        </div>

        <div className='cajaLabelInput'>
          <label
            htmlFor='nombreEmpresa1'

          > nombre empresa</label>
          <input
            className='cajaInput'
            type="text"
            id='nombreEmpresa1'
            placeholder='nombre empresa'
            name='nombreEmpresa1'
          />
        </div>

        <div className='cajaLabelInput'>

          <label
            htmlFor='rucEmpresa1'
          > ruc</label>

          <input
            className='cajaInput'
            type="number"
            id='rucEmpresa1'
            placeholder='ruc de empresa'
            name='rucEmpresa1'

          />
        </div>

        <div className='cajaLabelInput'>

          <label
            htmlFor='direccionEmpresa1'
          > direccion</label>

          <input
            className='cajaInput'
            type="text"
            id='direccionEmpresa1'
            placeholder='direcion legal'
            name='direccionEmpresa1'

          />
        </div>

        


      </div>




      <style jsx>{` 

.cajaFondo1{
  background-color: var(--negro-oscuro1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

}

.cajaLabelInput{
  background-color: rgb(165, 253, 167);
  max-width: 600px
}
.cajaInput{
   background-color: rgb(255, 160, 160);
    width: 70%;
}


@media (max-width: 600px) {

img{
width: 70px;

}


}



`}</style>


    </Layout>
  )
}

export default document