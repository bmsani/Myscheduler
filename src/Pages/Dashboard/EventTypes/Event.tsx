import React from "react";
import userImg from "../../../Utilities/icon/profile.png";
const Event = () => {
  return (
    <div className="mr-10 ml-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img className="w-[70px] rounded-full" src={userImg} alt="" />
          <div>
            <p>Sabbir Ahmed</p>
            <p className="text-secondary">sabbirahmed1021</p>
          </div>
        </div>
        <button className="mt-4 bg-primary py-2 px-4 rounded text-white hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
          + New Event
        </button>
      </div>
      <div className=" divider"></div>

      <div className="cart border rounded-2xl w-[350px] shadow hover:shadow-xl duration-300 cursor-pointer">
        <div className="bg-blue-500 h-2 w-full rounded-t-2xl"></div>
        <div className="p-5">
          <h2 className="text-xl">Business Meeting</h2>
          <p className="text-sm">30 mins, One-on-One</p>
          <p className="text-secondary mt-2">View booking page</p>
          <div className="divider"></div>
          <button className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
