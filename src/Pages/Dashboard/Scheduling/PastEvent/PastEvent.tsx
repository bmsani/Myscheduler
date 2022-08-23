import moment from "moment";
import React from "react";
import { FcOvertime } from "react-icons/fc";
import { GoCalendar, GoDash } from "react-icons/go";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../init.firebase";
import axios from "axios";
import { toast } from "react-toastify";
import GetBookedEvents from "../../../../Shared/GetBookedEvents/GetBookedEvents";

const PastEvent = () => {
  const today = moment(new Date()).format();

  const [user] = useAuthState(auth);
  const email = user?.email;
  const { bookedEvents, isLoading, refetch } = GetBookedEvents(email);

  if (isLoading) {
    <Loading />;
  }
  const pastEvents = bookedEvents?.filter(
    (singleEvent: any) =>
      moment(singleEvent?.date + " " + singleEvent?.eventStartTime).format() <
      today
  );
  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:5000/api/bookedEventDelete/${id}`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        if (response?.status === 200) {
          toast.error("Past event deleted");
          refetch();
        }
      });
  };
  return (
    <div>
      {pastEvents?.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {pastEvents?.map((event: any) => (
            <div className="text-primary card shadow-2xl">
              <div className="p-3 flex justify-between border bg-blue-200">
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
                    <span>{event?.inviteeMessage}</span>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    className="w-20 mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 hover:bg-gray-500 hover:text-white duration-300 cursor-pointer"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center text-gray-500">
          <div className="text-center">
            <GoCalendar className="w-[150px] h-[150px] mx-auto mt-12 mb-4" />
            <h2 className="text-2xl font-semibold my-2">No Past Events</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEvent;
