import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './stats';
import Pricing from './pricing';
import Education from './Education';
import Openaccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
       
        <Hero />
        <Awards/>
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
       

        </>
     );
}

export default HomePage;