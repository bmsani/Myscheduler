import React from "react";

const Steps = () => {
  return (
    <div className="pb-16">
      <h2 className="text-primary text-3xl lg:text-5xl font-bold w-full lg:w-[750px] text-center mx-auto pb-16 px-2">
        We make it easy to get started
      </h2>
      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        <li className="step step-neutral">
          <div className="card w-64 lg:w-96 text-neutral border shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">Create simple rules</h2>
              <p className="text-lg text-gray-600">
                Let MyScheduler know your availability preferences and it'll do
                the work for you.
              </p>
            </div>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="card w-64 lg:w-96 h-full text-neutral border shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">Share your link</h2>
              <p className="text-lg text-gray-600">Send guests your Calendly link or embed it on your website.</p>
            </div>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="card w-64 lg:w-96 h-full text-neutral border shadow-lg">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl font-semibold">Get booked</h2>
              <p className="text-lg text-gray-600">They pick a time and the event is added to your calendar.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
