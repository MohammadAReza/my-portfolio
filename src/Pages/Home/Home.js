import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;