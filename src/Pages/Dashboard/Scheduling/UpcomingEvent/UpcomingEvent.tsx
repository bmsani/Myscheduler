import React from "react";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center text-gray-500">
        <div className="text-center">
          <GoCalendar className="w-[150px] h-[150px] mx-auto mt-12 mb-4" />
          <h2 className="text-2xl font-semibold my-2">No Events Yet</h2>
          <p className=" mb-4">Share Event Type links to schedule events.</p>
          <Link to="/dashboard" className="bg-blue-500 text-white px-5 py-2 rounded-full">
            View Event Types
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
