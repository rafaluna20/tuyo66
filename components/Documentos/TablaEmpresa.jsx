import React from 'react'

const TablaEmpresa = ({ nombreEmpresa1, direccionEmpresa1, rucEmpresa1, telefonoEmpresa1, emailEmpresa1}) => {


  return (
<>

      <div className="bordesTabla">
      <div className="fila1">
        <div>  Nombre,Denominacion o <br></br> Razon Social:  </div>
          <div ><b> {nombreEmpresa1} </b>  </div>
      </div>
      <div className="fila2">
        <div>  Domicilio Legal:  </div>
          <div > <b>{direccionEmpresa1} </b>  </div>
      </div>
      <div className="fila3">
        <div>  RUC:  </div>
          <div> <b>{rucEmpresa1} </b>  </div>
        <div className="telefono1">  Telefono:  </div>
          <div className="telefono1"> <b> {telefonoEmpresa1}</b>  </div>
          <div className="telefono1"> {telefonoEmpresa1} </div>
      </div>

      <div className="fila4">
        <div>  MYPE 16  </div>

        <div className="mype16">
          <div className="mype16Sub">SI</div>
          <div className="mype16Sub"><b>X</b></div>
        </div>

        <div className="mype16">
          <div className="mype16Sub">NO</div>
          <div className="mype16Sub"></div>
        </div>

      </div>
      <div className="fila5">
        <div>  Correo electronico:  </div>
          <div > <b>{emailEmpresa1}  </b> </div>

      </div>
    </div>

      <style jsx>{`

.bordesTabla{
  padding: 0px;
  background-color: white;
  margin-top: 40px;
  width: 100%;
  height: 150px;
  font-size: 12px;
  border: solid 0.5px black;

  display: grid;
  gap: 0px;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr;

}

.fila1 {
  margin: 0px;
  background-color:  white;
  border: solid 0.5px black;

  display: grid;
  gap: 0px;
    grid-template-columns: 1.5fr 3fr;

}

.fila2 {

  background-color:  white;
  margin: 0px;
  border: solid 0.5px black;
    display: grid;
    gap: 0px;
      grid-template-columns: 1fr 4fr;
}

.fila3 {
  background-color:  white;
  margin: 0px;
  border: solid 0.5px black;

      display: grid;
      gap: 0px;
        grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr ;
}
.telefono1{
  margin: 0px;
  padding: 0px;
  border: solid 0.5px black;
}

.fila4 {
  margin: 0px;
  padding: 0px;
  background-color:  white;
  border: solid 0.5px black;

      display: grid;
      gap: 0px;
        grid-template-columns:  4.5fr 1fr 1fr ;
}

.mype16{
  margin: 0px;
    padding: 0px;
  border: solid 0.5px black;
    display: grid;
    gap: 0px;
      grid-template-columns: 1fr 1fr;

}
.mype16Sub{
margin: 0px;
  padding: 0px;
  border: solid 0.5px black;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.fila5 {
  background-color:  white;
  margin: 0px;
  padding: 0px;
  border: solid 0.5px black;

    display: grid;
    gap: 0px;
      grid-template-columns: 1fr 4fr;
}


`}</style>

</>

  )
}

export default TablaEmpresa