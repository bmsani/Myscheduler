import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../init.firebase";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import EventDetailsAdd from "../EventDetailsAdd/EventDetailsAdd";
import { MdArrowBackIos } from "react-icons/md";


const CreateIndividualEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventId, setEventId] = useState("");
  const [next, setNext] = useState(false);
  const durationRef = useRef<HTMLInputElement | null>(null);
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    data: availabilities,
    isLoading,
    refetch,
  } = useQuery(["availabilities", email], () =>
    fetch(`http://localhost:5000/availability/${email}`).then((res) =>
      res.json()
    )
  );
  const handleNext = () => {
    setNext(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleEvent = () => {
    const eventDuration = durationRef?.current?.value;
    if (eventId) {
      const event = {
        eventName: eventName,
        eventLocation: "Google Meet",
        eventDescription: eventDescription,
        eventDuration: eventDuration,
      };
      fetch(`http://localhost:5000/createNewEvent/${eventId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(event),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add event successfully");
          }
        });
    } else {
      const event = {
        email: email,
        eventName: eventName,
        eventLocation: "Google Meet",
        eventDescription: eventDescription,
        eventDuration: eventDuration,
        dayData: availabilities?.dayData,
      };
      fetch(`http://localhost:5000/createNewEvent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(event),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add event successfully");
          }
        });
    }
  };
  return (
    <div>
      {!next ? (
        <div>
          <div className="mt-4">
            <div className="md:flex justify-center md:justify-between items-center py-4 mx-4 lg:mx-40">
              <div>
                <Link to="/createEvent">
                  <button className="text-blue-500 border-blue-400  md:border md:px-7 py-2 rounded-full flex items-center ">
                    <MdArrowBackIos />
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <h2 className="md:text-xl py-3 text-center">
                  Add One-on-One Event Type
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-4 lg:mx-40 sm:mx-8 border-2 border-zinc-500 mt-4 mb-8">
            <div className="flex items-center justify-between border-b px-2 md:px-8 py-2">
              <div>
                <h2>What event is this?</h2>
                <h2 className="text-sm font-light">
                  {eventName ? eventName : "No name given"},&nbsp;
                </h2>
              </div>
              <div className="py-4">
                <div>
                  <Link to="/dashboard">
                    <button className="mr-4 hover:underline text-sm font-medium">
                      Cancel
                    </button>
                  </Link>
                  {eventName === "" ||
                  eventDescription === "" ? (
                    <button
                      className="px-4 py-1 rounded-full text-white bg-gray-400"
                      disabled
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="px-4 py-1 rounded-full text-white bg-blue-500"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mx-2 md:mx-8 mb-6">
              <form className="form-control">
                <label className="label">
                  <span className="label-text">Event Name</span>
                </label>
                <div className="">
                  <input
                    required
                    onChange={(e) => setEventName(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input border-blue-500 w-full max-w-sm"
                  />
                </div>
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <div className="">
                  <input
                    readOnly
                    defaultValue="Google Meet"
                    className="input border-blue-500 w-full max-w-sm"
                  >
                  </input>
                </div>
                <label className="label">
                  <span className="label-text">Description/Instructions</span>
                </label>
                <div className="">
                  <textarea
                    required
                    onChange={(e) => setEventDescription(e.target.value)}
                    className="textarea border-blue-500 w-full max-w-sm"
                    placeholder="Bio"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="border-t grid place-items-end">
              <div className="mx-2 md:mx-8 py-4">
                <Link to="/dashboard">
                  <button className="mr-4 hover:underline text-sm font-medium">
                    Cancel
                  </button>
                </Link>
                {eventName === "" ||
                eventDescription === "" ? (
                  <button
                    className="px-4 py-1 rounded-full text-white bg-gray-400"
                    disabled
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="px-4 py-1 rounded-full text-white bg-blue-500"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EventDetailsAdd
          availabilities={availabilities}
          eventName={eventName}
          durationRef={durationRef}
          handleEvent={handleEvent}
          refetch={refetch}
          eventId={eventId}
          setEventId={setEventId}
        ></EventDetailsAdd>
      )}
    </div>
  );
};

export default CreateIndividualEvent;
