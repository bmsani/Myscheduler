import React from "react";
import { GoCalendar } from "react-icons/go";

const PendingEvent = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center text-gray-500">
        <div className="text-center">
          <GoCalendar className="w-[150px] h-[150px] mx-auto mt-12 mb-4" />
          <h2 className="text-2xl font-semibold my-2">No Pending Events</h2>
        </div>
      </div>
    </div>
  );
};

export default PendingEvent;
