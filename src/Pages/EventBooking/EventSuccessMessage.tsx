import React from "react";
const EventSuccessMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <img
          className=" w-96"
          src="https://i.ibb.co/yPwYvxF/event.png"
          alt=""
        />
        <h1 className="text-4xl text-primary">
          Your Event Successfully Created
        </h1>
      </div>
    </div>
  );
};

export default EventSuccessMessage;
