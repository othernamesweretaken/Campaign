import React from 'react';

import Header from './header';
import Footer from './footer';
import {Container} from  'semantic-ui-react';
import Head from 'next/head';

const layout = (props) =>{
    return (
        <Container style={{}}>
            <Head>
     
             <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.css"/>    
            </Head>
        <Header/>
            {props.children}
        <Footer/>
        </Container>
    );
}

export default layout;