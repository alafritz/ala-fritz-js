import React from 'react';
import '../styles/index.scss';
import '../styles/Patterns.scss';
import '../styles/Typography.scss';
import '../styles/Colors.scss';
import '../styles/menuitem.scss';
import '../styles/linkout.scss';
import Layout from '../components/layout';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}




