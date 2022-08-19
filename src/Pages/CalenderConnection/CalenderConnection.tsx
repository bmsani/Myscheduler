import React from "react";
import calender from "../../Utilities/icon/calendarLogo.png";
import arrowRight from "../../Utilities/icon/calenderArrow.png";
import arrowLeft from "../../Utilities/icon/calederArrow2.png";
import { Link } from "react-router-dom";
import auth from "../../init.firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/LoadingSpinner/Loading";

const CalenderConnection = () => {
  const [user] = useAuthState(auth);

  const { data: singleUser, isLoading } = useQuery(
    ["singleUser", user?.email],
    () =>
      fetch(`https://secure-chamber-99191.herokuapp.com/user/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="shadow border container mx-auto pb-5 mt-8">
        <div className="flex justify-between py-4 px-8">
          <h2 className="text-xl">My calender Account</h2>
          {singleUser.refreshToken ? (
            <button className="rounded-lg btn btn-disabled btn-md btn-outline">
              Your Google Calendar Connected
            </button>
          ) : (
            <Link to="/addCalender">
              <button className="text-sm rounded-lg btn btn-md btn-outline btn-secondary">
                Connect Your Calendar
              </button>
            </Link>
          )}
        </div>
        <div className="">
          <div className="flex justify-between items-center border-t border-b px-2 md:px-8 py-8 bg-gray-50">
            <div className="flex">
              <div className="avatar">
                <div className="w-12 md:w-14 p-3 shadow rounded-full border">
                  <img src={calender} alt="" />
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-light text-sm">Google</h2>
                <h2>{user?.email}</h2>
              </div>
            </div>
            <div>
              <button className="text-error text-sm md:text-lg hover:underline underline-offset-1">
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:shadow-md md:border-[1px] mt-8 rounded mx-2">
        <div className="flex justify-between py-4 md:px-8 border-b">
          <h2 className="text-xl">Configuration</h2>
        </div>
        <div className="py-8 md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex items-center ">
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
            <div className="border hover:border-blue-800 p-4 rounded hover:cursor-pointer mt-2">
              <div className="flex justify-between">
                <img
                  className="w-10 md:w-12 border p-2 rounded-full"
                  src={calender}
                  alt=""
                />
                <div>
                  <div>
                    <h1 className="text-gray-400 text-sm text break-words">
                      Check {user?.email}
                    </h1>
                    <li className="list-disc">{user?.email}</li>
                  </div>
                </div>
                <h2 className="text-blue-800 text-sm ">Edit</h2>
              </div>
            </div>
          </div>
          <div className="border my-6"></div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
            <div className="flex items-center ">
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
            <div className="flex justify-between border hover:border-blue-800 p-4 mt-2">
              <div className="flex justify-between">
                <img
                  className="w-10 md:w-12 border p-2 rounded-full"
                  src={calender}
                  alt=""
                />
                <div>
                  <div>
                    <h1 className="text-gray-400 text-sm text break-words">
                      Check {user?.email}
                    </h1>
                    <li className="list-disc">{user?.email}</li>
                  </div>
                </div>
                <h2 className="text-blue-800 text-sm ">Edit</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalenderConnection;
