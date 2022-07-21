import React from "react";
import CountUp from 'react-countup';

const Stat = () => {
  return (
    <div className="mt-20 px-10">
      <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-[750px] text-center mx-auto">
        We handle 1000's of bookings for our users every single day
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal w-full gap-4 py-4 my-6">
        <div className="stat text-center text-secondary shadow-md">
          <div className="stat-value"><CountUp start={15} end={150} duration={250} /></div>
          <div className="text-neutral font-bold">Booking today</div>
        </div>

        <div className="stat text-center text-secondary shadow-md">
          <div className="stat-value"><CountUp start={2900} end={3000} duration={5} /></div>
          <div className="text-neutral font-bold">Booking this month</div>
        </div>

        <div className="stat text-center text-secondary shadow-md">
          <div className="stat-value"><CountUp start={9900} end={10000} duration={5} /></div>
          <div className="text-neutral font-bold">Booking al time</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
