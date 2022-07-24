import React from "react";
import Stat from "./stat_section/Stat";
import Steps from "./steps_section/Steps";
import DoBest from "./DoBest/DoBest";
import Hero from "./Hero/Hero";
import PowerfulFeatures from "./PowerfulFeatures/PowerfulFeatures";
import SchedulingType from "./SchedulingType/SchedulingType";
import CustomerReviews from "./CustomerReviews/CustomerReviews";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Stat></Stat>
      <Steps></Steps>
      <PowerfulFeatures />
      <SchedulingType />
      <DoBest></DoBest>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
