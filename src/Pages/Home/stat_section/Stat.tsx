import React from "react";
import CountUp from 'react-countup';

const Stat = () => {
  return (
    <div className="py-16">
      <h2 className="text-primary text-4xl font-semibold w-[750px] text-center mx-auto">
        We handle 1000's of bookings for our users every single day
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full py-4 my-6">
        <div className="stat text-center">
          <div className="stat-value"><CountUp start={15} end={150} duration={250} /></div>
          <div className="text-neutral font-semibold">Booking today</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value"><CountUp start={2900} end={3000} duration={5} /></div>
          <div className="text-neutral font-semibold">Booking this month</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value"><CountUp start={9900} end={10000} duration={5} /></div>
          <div className="text-neutral font-semibold">Booking al time</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
