import React,{useState} from 'react'
import Router from 'next/router'
import Layout from '../components/layout/Layout'


import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

import firebase from '../firebase'


const STATE_INICIAL = {
  nombre: "",
  email: "",
  password: ""

}

const CrearCuenta = () => {
  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)

  const { nombre, email, password } = valores;

  async function crearCuenta() {
    try {
    await  firebase.registrar(nombre, email, password); 
    Router.push("/")
    } catch (error) {
console.error("hubo un error al crear usuario",error.message);
guardarError(error.message);
return
    }
    guardarError(false);
  }



  return (
    <Layout>

      <div className='caja0'>

        <div className='cajaPrincipal'>

          <div className='cajaLogin'>
            <div className='cajaTitulo'>CREAR CUENTA</div>

            <form
              onSubmit={handleSubmit}
            >
              {errores.nombre && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.nombre}</div>}

              <div className='LabelInput'>

                <label htmlFor="nombre">Nombre</label>
                <input
                  className=''
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"

                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              {errores.email && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.email}</div>}
              <div className='LabelInput'>

                <label htmlFor="email">Email</label>
                <input
                  className=''
                  type="email"
                  id="email"
                  placeholder="Tu Email"
                  name="email"

                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              {errores.password && <div style={{ color: "red", background: "black", textAlign: "center" }}>{errores.password}</div>}
              <div className='LabelInput'>

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Tu Password"
                  name="password"

                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

              </div>


              <div className='LabelInput'>

                <input
                  className='cajaCrearCuenta'
                  type="submit"
                  value="CREAR CUENTA" />
              </div>
              {error && <div style={{ color: "red", background: "black", textAlign: "center" }}>{error}</div>}

            </form>
          </div>
        </div>
      </div>

      <style jsx>{`

.cajaCrearCuenta{
  background-color:rgb(41, 41, 41);
  color:white;
  font-size:1.4rem;
}
.cajaCrearCuenta:hover{
  background-color:rgb(70, 70, 70);
  color:white;
  font-size:1.4rem;
}




.cajaTitulo{
  text-align: center;

  margin: 1rem;
  font-size:1.8rem;
  font-weight:600;
}

    label {
        flex: 0 0 120px;
        font-size: 1.5rem;
    }
    input{
        flex: 1;
        padding: 0.5rem;
        border: solid 0.5px black;
        border-radius:5px;
    }

.caja0{
    background-color: rgb(139, 139, 139);
    padding: 5px;
    max-width: 1500px;
    margin: 0 auto;
    
}

.cajaPrincipal{
   background-color: rgb(61, 61, 61);
   max-width: 1200px;
   margin: 0 auto;
   padding-top:5rem;
   height: 100vh;
   border-radius:5px ;
      

}

.cajaLogin{
  background-color: rgb(143, 143, 143);
    margin: 0 auto;
    padding:1rem;
   max-width: 400px;
   border-radius:5px ;
   box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);

}
.LabelInput{
  background-color: rgb(94, 94, 94);
    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:5px;
    display: flex;
    align-items: center;
    box-shadow: 0px 6px 21px 0px rgba(0, 0, 0, 0.7);
}

@media (max-width: 600px) {

.cajaCrearCuenta{

  font-size:1.1rem;
}

.cajaCrearCuenta:hover{

  font-size:1.1rem;
}

  .cajaTitulo{

  text-align: center;

  margin: 1rem;
  font-size:1.2rem;
  font-weight:600;
}

    label {
        flex: 0 0 75px;
        font-size: 1.1rem;
    }
    input{
     
        padding: 0.4rem;
        border: solid 0.5px black;
        border-radius:3px;
    }

.caja0{

    padding: 3px;
    
}

.cajaPrincipal{
   padding-top:8rem;
   border-radius:3px ;
       padding-left:0.7rem;
        padding-right:0.7rem;

}

.cajaLogin{
  
 margin: 0 auto;
    padding:0.1rem;
   border-radius:5px ;

}
.LabelInput{

    margin-bottom: 2rem;
    padding-left:0.5rem;
    border-radius:3px;

}


}




`}</style>
    </Layout>

  )
}

export default CrearCuenta
