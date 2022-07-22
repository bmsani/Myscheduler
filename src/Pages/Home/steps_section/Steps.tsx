import React from "react";

const Steps = () => {
  return (
    <div className="mt-20">
      <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold w-full lg:w-[750px] text-center mx-auto pb-16 px-2">
        We make it easy to get started
      </h2>
      <ul className="steps steps-vertical md:steps-horizontal w-full pb-4">
        <li className="step step-neutral">
          <div className="card m-2 w-full h-full text-neutral">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl md:text-2xl font-bold">
                Create simple rules
              </h2>
              <p className="text-gray-500 text-center">
                Let MyScheduler know your availability preferences and it'll do
                the work for you.
              </p>
            </div>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="card m-2 w-full h-full text-neutral">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl md:text-2xl font-bold">
                Share your link
              </h2>
              <p className="text-gray-500 text-center">
                Send guests your MyScheduler link or embed it on your website.
              </p>
            </div>
          </div>
        </li>
        <li className="step step-neutral">
          <div className="card m-2 w-full h-full text-neutral">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl md:text-2xl font-bold">
                Get booked
              </h2>
              <p className="text-gray-500 text-center">
                They pick a time and the event is added to your calendar.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
