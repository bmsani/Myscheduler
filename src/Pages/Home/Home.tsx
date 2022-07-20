import React from 'react';
import CustomersReview from './CustomersReview';


import Stat from './stat_section/Stat';
import Steps from './steps_section/Steps';
import DoBest from './DoBest/DoBest';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <DoBest></DoBest>
            <Stat></Stat>
            <Steps></Steps>
            <CustomersReview></CustomersReview>
        </div>
    );
};

export default Home;