import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = props => {
  return (
    <>

      <Head>
        <title>tuyo expres</title>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;