import React from "react";

const EventSuccessMessage = ({ userInfo }: any) => {
  const { name } = userInfo;
  return (
    <div className="flex justify-end items-center h-[60vh]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-success">Confirm</h1>
        <h2 className="text-lg">
          You are scheduled with <span className="text-blue-500">{name}</span>
        </h2>
      </div>
    </div>
  );
};

export default EventSuccessMessage;
