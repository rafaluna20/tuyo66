

import Link from "next/link";

function BotonDosIzquierda(props) {
  return (


    <>

      <div className="EstiloLink1-I">
        <Link href={props.direccion1}>
          <a className="EstiloTexto1-I"> {props.nombre1}</a>
        </Link>
      </div>


      <div className="EstiloLink2-I" >
        <Link href={props.direccion2}>
          <a className="EstiloTexto1-I"> {props.nombre2}</a>
        </Link>
      </div>



      <style jsx>{`

.EstiloLink1-I{
    margin: 5px;
        background-color: rgb(165, 165, 165);
       
       width: 150PX;
       height: 30px;
       border-radius: 5px;
        text-decoration: none;
         color: white;
        display: flex;
      flex-direction:column;
      justify-content:center;
       box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
       position: relative;
    

}


.EstiloLink2-I{
        margin: 5px;
      
     background-color: #9858ff;
        width: 150PX;  
       height: 30px;
       border-radius: 5px;
           
       text-decoration: none;
       display: flex;
      flex-direction:column;
      justify-content:center;
      color: white;
       box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
       position: relative;
}

.EstiloLink2-I:after{

content: "";
position: absolute;
top: 21px;
left: 45px;
width: 10px;
height: 10px;

border-style: solid;
border-color: transparent  transparent #9858ff transparent;
border-width:  0 20px 20px  20px;
}


.EstiloTexto1-I{

      text-align: center;
       font-size: 14px;
    font-weight: bolder;



}


@media (max-width: 600px) {
.EstiloLink1-I{
    margin: 3px;
       width: 100PX;
       height: 20px;
       border-radius: 3px;

}


.EstiloLink2-I{
        margin: 3px;
      
     background-color: #9858ff;
        width: 100PX;  
       height: 20px;
       border-radius: 3px;
}

.EstiloLink2-I:after{

top: 21px;
left: 40px;
width: 10px;
height: 10px;


border-width:  0 15px 15px  15px;
}


.EstiloTexto1-I{

      text-align: center;
       font-size: 11px;
       color: black;
    font-weight:600;



}


}
      
      `}</style>


    </>


  );
}

export default BotonDosIzquierda;