import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { FcOvertime } from "react-icons/fc";
import { GoCalendar, GoDash } from "react-icons/go";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../init.firebase";


const PendingEvent = () => {
    const [user] = useAuthState(auth);
  const today = moment(new Date()).format().split("T")[0];
  const todayWithDate = moment(new Date()).format();
  const { data: bookedEvents, isLoading } = useQuery(["bookedEvents"], () =>
    fetch(`http://localhost:5000/api/bookedEvents/${user?.email}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    <Loading />;
  }
  const pendingEvents = bookedEvents?.filter(
    (singleEvent: any) => singleEvent?.date === today && moment(singleEvent?.date + " " + singleEvent?.eventStartTime).format() > todayWithDate
  );
  return (
    <div>
      {pendingEvents?.length ? (
        <div className="grid grid-cols-2 gap-8 p-8">
          {pendingEvents?.map((event: any) => (
            <div className="text-primary card shadow-2xl">
              <div className="p-3 flex justify-between border bg-gray-50">
                <p className="text-lg">
                  {moment(event?.date?.split("T")[0]).format("MMMM Do YYYY")}
                </p>
                <div className="flex items-center">
                  <FcOvertime className="w-[30px] h-[30px]" />
                  <span className="ml-2">{event?.eventStartTime}</span>
                  <GoDash />
                  <span>{event?.eventEndTime}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-lg">
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
                  <div className="flex items-baseline justify-between gap-4 my-8">
                    <div className="w-1/2">
                      <p className="font-bold">Email</p>
                      <span className="">{event?.inviteeEmail}</span>
                    </div>
                    <div className="w-1/2">
                      <p className="font-bold">Location</p>
                      <span className="">
                        This is a {event?.eventLocation} web conference.
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">Invitee Message</p>
                    <span>
                      {event?.inviteeMessage} Please share anything that will
                      help prepare for our meeting.
                    </span>
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
            <h2 className="text-2xl font-semibold my-2">No Pending Events</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingEvent;
