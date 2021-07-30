import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import Progress from '../Progress/Progress';
import Project from '../Project/Project';
import TopHeader from '../TopHeader/TopHeader';
import About from './../About/About';

const Home = () => {
    return (
        <div>
      
            <TopHeader></TopHeader>
            <About></About>
            <Progress></Progress>
            <Contact></Contact>
            <Project></Project>
        </div>
    );
};

export default Home;