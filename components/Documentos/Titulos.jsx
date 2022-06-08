import React from 'react'

const Titulos = ({titulo1,titulo2,titulo3}) => {
  return (
<>

      <div className="tituloAnexo1">
      <div  > <b> {titulo1}</b></div>
       
        <div style={{marginTop:"10px"}}> <b>{titulo2} </b></div>
      <div> <b>{titulo3}</b></div>
    </div>
      <style jsx>{`

.tituloAnexo1{
  background-color:  white;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
   box-shadow:inset 2px 2px 40px 2px rgba(0, 0, 0, 0.4);
   
   border-radius:8px;

 
}



`}</style>
</>


  )
}

export default Titulos