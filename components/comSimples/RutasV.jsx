import React from 'react'
// import estilos from '../../styles/styleComSimples/RutasV.module.css'

const RutasV = ({origen,destino}) => {
  return (
    <div className="cajaRutas">
      <div className="cajaViajes">viajes a: </div>
      <div className="cajaDestino" >
        <div className="cajaDestinoBorde">
          {origen}-{destino}
        </div>

      </div>
      <div className="cajaVer">ver</div>

      <style jsx>{`


.cajaRutas{
margin:3px 0;
  background-color: rgb(238, 238, 238);
    border-radius: 5px;
  width: 99%;
  height: 35px;
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 3fr 0.5fr;
   box-shadow: 0px 3px 21px 0px rgba(0, 0, 0, 0.9);


}


.cajaViajes{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


}

.cajaDestino{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  font-weight: 600;
  font-size: 16px;
}
.cajaVer{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font-weight: 600;
}

.cajaDestinoBorde{

padding: 0 5px;
border-radius: 5px;
background-color: rgb(155, 155, 155);
 box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.9);
}



@media (max-width: 600px) {

.cajaRutas{
  margin:1px 0;
  border-radius: 3px;
  width: 98%;
  height: 25px;
  gap: 1px;
  box-shadow: 0px 3px 21px 0px rgba(0, 0, 0, 0.6);


}


.cajaViajes{


  font-size: 12px;


}

.cajaDestino{


  font-weight: 600;
  font-size: 12px;
}
.cajaVer{
  font-weight: 600;
  font-size: 12px;

}

.cajaDestinoBorde{

padding: 0 5px;
border-radius: 3px;
}


} 




      `}</style>
    </div>
  )
}

export default RutasV
