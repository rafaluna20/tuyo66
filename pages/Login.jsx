import React, { useState } from 'react'

import Layout from '../components/layout/Layout'
import Router from 'next/router'

import useValidacion from '../hooks/useValidacion'
import validarIniciarSesion from '../validacion/validarIniciarSesion'

import firebase from '../firebase'


const STATE_INICIAL = {
  email: "",
  password: ""

}



const Login = () => {


  const [error, guardarError] = useState(false);
  const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);

      Router.push('/');
    } catch (error) {
      console.error('Hubo un error al autenticar el usuario ', error.message);
      guardarError(error.message);
    }
  }




  return (
    <Layout>

      <div className='caja0'>

        <div className='cajaPrincipal'>

          <div className='cajaLogin'>
            <div className='cajaTitulo'>LOGIN</div>

            <form

              onSubmit={handleSubmit}
            >

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
                  value="INICIAR SESION" />
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
  font-size:1.2rem;
  padding: 1rem 0;
}
.cajaCrearCuenta:hover{
  background-color:rgb(70, 70, 70);
  color:white;
  font-size:1.2rem;
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
 padding: 0.8rem 0;
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
       padding-left:0.6rem;
        padding-right:0.6rem;

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

export default Login
