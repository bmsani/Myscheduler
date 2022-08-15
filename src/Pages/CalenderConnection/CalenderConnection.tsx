import React from "react";
import calender from "../../Utilities/icon/calendarLogo.png";
import arrowRight from "../../Utilities/icon/calenderArrow.png";
import arrowLeft from "../../Utilities/icon/calederArrow2.png";
import { Link } from "react-router-dom";
import auth from "../../init.firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const CalenderConnection = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="shadow border container mx-auto pb-5 mt-8">
        <div className="flex justify-between py-4 px-8">
          <h2 className="text-xl">My calender Account</h2>
          <Link to="/addCalender">
            <button className="text-sm  rounded-lg btn btn-sm btn-outline btn-info">
              Add Calender Account
            </button>
          </Link>
        </div>
        <div className="">
          <div className="flex justify-between border-t border-b px-8 py-8 bg-gray-50">
            <div className="flex">
              <div className="avatar">
                <div className="w-14 p-3 shadow rounded-full border">
                  <img src={calender} alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-light text-sm">Google</h2>
                <h2>{user?.email}</h2>
              </div>
            </div>
            <div>
              <button className="text-secondary text-sm hover:text-red-500 hover:underline underline-offset-1">
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow border container mx-auto mt-8 mb-20">
        <div className="flex justify-between py-4 px-8 border-b">
          <h2 className="text-xl">Configuration</h2>
        </div>
        <div className="py-8 px-8">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
            <div className="flex ">
              <div>
                <img src={arrowRight} className="w-[34px]" alt="" />
              </div>
              <div className="ml-4">
                <h1 className="font-bold text-lg">Check for conflict</h1>
                <h2 className="text-light text-xs">
                  Set the calendar(s) to check for conflicts to prevent double
                  bookings.
                </h2>
              </div>
            </div>
            <div className="flex justify-between border hover:border-blue-800 p-4">
              <div className="flex ">
                <div className="avatar">
                  <div className="w-11 p-3 shadow border rounded-full">
                    <img src={calender} alt="" />
                  </div>
                </div>

                <div className="ml-4">
                  <h1>Check {user?.email}</h1>
                  <li className="list-disc">{user?.email}</li>
                </div>
              </div>
              <div>
                <h2 className="text-blue-800 text-sm">Edit</h2>
              </div>
            </div>
          </div>
          <div className="border my-6"></div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
            <div className="flex ">
              <div>
                <img src={arrowLeft} className="w-[34px]" alt="" />
              </div>
              <div className="ml-4">
                <h1 className="font-bold text-lg">Add to calendar</h1>
                <h2 className="text-light text-xs">
                  Set the calendar you would like to add new events to as
                  they’re scheduled.
                </h2>
              </div>
            </div>
            <div className="flex justify-between border hover:border-blue-800 p-4">
              <div className="flex ">
                <div className="avatar">
                  <div className="w-11 p-3 shadow border rounded-full">
                    <img src={calender} alt="" />
                  </div>
                </div>
                <div className="ml-4">
                  <h1>Check {user?.email}</h1>
                  <li className="list-disc">{user?.email}</li>
                </div>
              </div>
              <div>
                <h2 className="text-blue-800 text-sm">Edit</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderConnection;
