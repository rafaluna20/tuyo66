import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import stilos from '../../styles/stylelayout/Header.module.css'

import { FirebaseContext } from '../../firebase';

import { useState,useContext } from 'react';


const Header = () => {



  const { usuario, firebase } = useContext(FirebaseContext );



  return (
    <div className={stilos.cajaHeader}>

      <Link href="/">
        <a className={stilos.cajaLogo}>
          <Image
          
            src="/img/logoTuy.png"
            alt="logo de AKALLPA"
            width={60}
            height={60}
            priority
          />
        </a>
      </Link>

      <nav className={stilos.cajaProductos}>
        <li className={stilos.cajaProductosS}>nosotros
        
        </li>
        <li className={stilos.cajaProductosS}>productos</li>
        <li className={stilos.cajaProductosS}>servicios</li>
      </nav>


      <nav className={stilos.cajaDerecha}>





        {usuario ? (
          <>
            <Link href="/CrearProyecto">
              <a className={stilos.crearLogin}>Crear Proyecto</a>
            </Link>
            <div className={stilos.botones}>
             Hola:{usuario.displayName}
            </div>

            <div className={stilos.botones}>

              <button
                className={stilos.botones}
               type='button'
               onClick={()=>firebase.cerrarSesion()}
               > cerrar sesion</button>

            </div>

          </>

        ) : (

          <>

              <Link href="/Login">
                <a className={stilos.crearLogin}>Login</a>
              </Link>

              <Link href="/CrearCuenta">
                <a className={stilos.crearLogin}>crear cuenta</a>
              </Link>

          </>
        )}

        <div className={stilos.botones}>
          saldo
        </div>


        <Link href="/Perfil">
          <a className={stilos.fotoPerfil} >
            <Image
              className={stilos.cajaFoto}
              src="/img/fotoRafa.png"
              alt="Picture of the author"
              width={20}
              height={20}
              priority
            />
          </a>
        </Link>


      </nav>

    </div>
  )
}

export default Header;
