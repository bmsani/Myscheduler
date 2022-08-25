import moment from "moment";
import React from "react";
import { GoCalendar, GoDash } from "react-icons/go";
import { Link } from "react-router-dom";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import { FcOvertime } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../init.firebase";
import GetBookedEvents from "../../../../Shared/GetBookedEvents/GetBookedEvents";

const UpcomingEvent = () => {
  const today = moment(new Date()).format().split("T")[0];
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { bookedEvents, isLoading } = GetBookedEvents(email);

  if (isLoading) {
    <Loading />;
  }
  const upcomingEvents = bookedEvents?.filter(
    (singleEvent: any) => singleEvent?.date > today
  );
  return (
    <div>
      {upcomingEvents?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 md:p-8">
          {upcomingEvents?.map((event: any) => (
            <div className="text-primary card shadow-2xl">
              <div className="p-3 block md:flex justify-between border bg-blue-200">
                <p className="text-lg">
                  {moment(event?.date?.split("T")[0]).format("MMMM Do YYYY")}
                </p>
                <div className="flex items-center">
                  <FcOvertime className="w-[30px] h-[30px] block" />
                  <span className="ml-2">{event?.eventStartTime}</span>
                  <GoDash />
                  <span>{event?.eventEndTime}</span>
                </div>
              </div>
              <div className="p-4">
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="w-1/2">
                      <p className="font-bold">Invitee Name</p>
                      <span className="">{event?.inviteeName}</span>
                    </div>
                    <div className="w-1/2">
                      <p className="font-bold">Event Name</p>
                      <span className="">{event?.eventName}</span>
                    </div>
                  </div>

                  <div>
                    <div className="md:flex items-baseline justify-between gap-4 my-8">
                      <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <p className="font-bold">Email</p>
                        <span className="">{event?.inviteeEmail}</span>
                      </div>
                      <div className="w-full md:w-1/2">
                        <p className="font-bold">Location</p>
                        <span className="">
                          This is a {event?.eventLocation} web conference.
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">Invitee Message</p>
                      <span>{event?.inviteeMessage}</span>
                    </div>
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
              to="/dashboard/allEvents"
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
