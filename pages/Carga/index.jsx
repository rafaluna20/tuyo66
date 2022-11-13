import React from 'react'
import Layout from '../../components/layout/Layout'

const Carga = () => {






  

var nombre01="becquer lorenzo cori";
var nombre02 ="rafael escobar lunasdfasdfs";






  return (
    <>
























      <div className='cajaPrimero1'>

      <div className='parte01'>parte 1</div>

        <div className='parte02'> parte 2</div>
      
      </div>





      <div className='cajaPrimero2'>
      caja 02
      </div>

      <div className='cajaPrimero3'>
       caja 03
      </div>


      <div className='cajaPrimero4'>
    
    {nombre01 } es amigo de: {nombre02}

      </div>













      <style jsx>{`

.cajaPrimero1{

  background-color: red;
  width: 500px;
height: 200px;
margin: 5px;

margin-left:300px;

display:flex;

}


.parte01{
  background-color: green;
}

.parte01{
  background-color: green;
  margin:5px;
}

.parte02{
  background-color: blue;
  flex:1;
  margin:5px;
}






.cajaPrimero2{

  background-color: blue;
  width: 400px;
height: 50px;
margin: 5px;


}


.cajaPrimero3{

  background-color: green;
  width: 100px;
height: 50px;
margin: 5px;


}



.cajaPrimero4{

  background-color: yellow;
  width: 700px;
height: 50px;
margin: 5px;


}


`}</style>



























    </>
  )
}

export default Carga;
