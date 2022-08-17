import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useState } from "react";
import { GoCalendar, GoDash } from "react-icons/go";
import { Link } from "react-router-dom";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import { FcOvertime } from "react-icons/fc";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const UpcomingEvent = () => {
  const [eventDetails, setEventDetails] = useState(false);
  const today = moment(new Date()).format().split("T")[0];
  const { data: bookedEvents, isLoading } = useQuery(["bookedEvents"], () =>
    fetch(`http://localhost:5000/api/bookedEvents`, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    <Loading />;
  }
  const upcomingEvents = bookedEvents?.filter(
    (singleEvent: any) => singleEvent?.date > today
  );
  console.log(eventDetails);
  return (
    <div>
      {upcomingEvents?.length ? (
        <div>
          {upcomingEvents?.map((event: any) => (
            <div className="text-primary">
              <div className="border bg-gray-50">
                <p className="text-lg px-4 py-3">
                  {moment(event?.date?.split("T")[0]).format("MMMM Do YYYY")}
                </p>
              </div>
              <div onClick={() => setEventDetails(!eventDetails)}>
                <div className="p-4 flex items-center justify-between">
                  <div className="grid grid-cols-2 gap-12">
                    <div className="flex items-center">
                      <FcOvertime className="w-[30px] h-[30px]" />
                      <span className="ml-2">{event?.eventStartTime}</span>
                      <GoDash />
                      <span>{event?.eventEndTime}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{event?.inviteeName}</h3>
                      <p>
                        Event Type{" "}
                        <span className="font-semibold">
                          {event?.eventName}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiFillCaretDown />
                    <AiFillCaretRight />
                    <p>Details</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center text-gray-500">
          <div className="text-center">
            <GoCalendar className="w-[150px] h-[150px] mx-auto mt-12 mb-4" />
            <h2 className="text-2xl font-semibold my-2">No Events Yet</h2>
            <p className=" mb-4">Share Event Type links to schedule events.</p>
            <Link
              to="/dashboard"
              className="bg-blue-500 text-white px-5 py-2 rounded-full"
            >
              View Event Types
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvent;
