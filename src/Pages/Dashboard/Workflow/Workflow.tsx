import React from "react";
import login from "../../../Utilities/warframe/login.gif";
import availability from "../../../Utilities/warframe/availability.gif";
import newEvent from "../../../Utilities/warframe/eventCreate.png";
import fillForm from "../../../Utilities/warframe/from.gif";
import googleCalender from "../../../Utilities/warframe/googleCalender.png";
import dashboard from "../../../Utilities/warframe/dashboard.png";
import { AiFillCaretRight } from "react-icons/ai";

const Workflow = () => {
  return (
    <div className="bg-violet-50 px-10">
      <h4 className="text-xl md:text-2xl lg:text-3xl text-center font-bold">
        How to create an event
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 py-3">
        <div className="flex items-center">
          <div className="h-full p-2 border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              1.Login your account
            </h6>
            <img src={login} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-full p-2  border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              2.Set your availability
            </h6>
            <img src={availability} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl" />
          </div>
        </div>
        <div className="flex h-full  items-center">
          <div className="h-full p-2  border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              3.Goto dashboard & create new event
            </h6>
            <img src={newEvent} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-full p-2  border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              4.Connect with google calendar
            </h6>
            <img src={googleCalender} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-full p-2  border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              5.Fill up the from
            </h6>
            <img src={fillForm} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-full p-2  border-4 border-white rounded-xl">
            <h6 className="text-sm md:text-md font-bold text-center">
              6.Goto Dashboard and share your event link
            </h6>
            <img src={dashboard} className="w-[300px]" alt="" />
          </div>
          <div>
            <AiFillCaretRight className="text-6xl text-violet-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
