import React from "react";
// import Stat from "./stat_section/Stat";
import Steps from "./steps_section/Steps";
// import DoBest from "./DoBest/DoBest";
import Hero from "./Hero/Hero";
import PowerfulFeatures from "./PowerfulFeatures/PowerfulFeatures";
import SchedulingType from "./SchedulingType/SchedulingType";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="mx-auto px-1 md:px-5 lg:px-20 max-w-[1400px]">
        <Hero></Hero>
        <Steps></Steps>
        <PowerfulFeatures />
        {/* <Stat></Stat> */}
        <SchedulingType />

        {/* <DoBest></DoBest> */}
        <CustomerReviews></CustomerReviews>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
