import React from 'react';
import Event from '../Event/Event';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

const Home = ({data,handleEvent}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Event data={data} handleEvent={handleEvent}></Event>
        </div>
    );
};

export default Home;