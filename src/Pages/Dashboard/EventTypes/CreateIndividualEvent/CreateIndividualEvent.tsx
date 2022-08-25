import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../init.firebase";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import EventDetailsAdd from "../EventDetailsAdd/EventDetailsAdd";
import { MdArrowBackIos } from "react-icons/md";
import GetUserAvailablity from "../../../../Shared/GetUserAvailablity/GetUserAvailablity";
import ButtonOutline from "../../../../Shared/Button/ButtonOutline";

const CreateIndividualEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventId, setEventId] = useState("");
  const [next, setNext] = useState(false);
  const durationRef = useRef<HTMLInputElement | null>(null);
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { availabilities, isLoading, refetch } = GetUserAvailablity(email);

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
      fetch(
        `https://secure-chamber-99191.herokuapp.com/createNewEvent/${eventId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(event),
        }
      )
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
      fetch(`https://secure-chamber-99191.herokuapp.com/createNewEvent`, {
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
    <div className="mx-auto px-2 md:px-5 lg:px-20 max-w-[1400px]">
      {!next ? (
        <div>
          <div>
            <div className="md:flex justify-center md:justify-between items-center py-4 mt-2 lg:mx-20">
              <div>
                <Link to="/createEvent">
                  <ButtonOutline>
                    <span className="flex items-center">
                      <MdArrowBackIos />
                      <span> Back</span>
                    </span>
                  </ButtonOutline>
                </Link>
              </div>
              <div>
                <h2 className="md:text-xl py-3 text-center">
                  Add One-on-One Event Type
                </h2>
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-400 mt-4 mb-8 rounded-lg lg:mx-20">
            <div className="flex items-center justify-between border-b px-2 md:px-8 py-2">
              <div>
                <h2>What event is this?</h2>
                <h2 className="text-sm font-bold text-secondary">
                  {eventName ? eventName : "No name given!"}&nbsp;
                </h2>
              </div>
              <div className="py-4">
                <div>
                  <Link to="/dashboard">
                    <button className="mr-4 hover:underline text-sm font-medium">
                      Cancel
                    </button>
                  </Link>
                  {eventName === "" || eventDescription === "" ? (
                    <button
                      className="px-4 py-1 rounded-full text-white bg-gray-400"
                      disabled
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="px-4 py-1 rounded-full text-white bg-secondary"
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
                <div className="mt-4">
                  <input
                    required
                    onChange={(e) => setEventName(e.target.value)}
                    type="text"
                    placeholder="Event Name"
                    className="border border-gray-400 focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 max-w-sm w-full"
                  />
                </div>
                <label className="label mt-2">
                  <span className="label-text">Event Location</span>
                </label>
                <div>
                  <input
                    readOnly
                    defaultValue="Google Meet"
                    className="border border-gray-400 focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 max-w-sm w-full"
                  ></input>
                </div>
                <div className="mt-4">
                  <textarea
                    required
                    onChange={(e) => setEventDescription(e.target.value)}
                    className="border border-gray-400 focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 max-w-sm w-full"
                    placeholder="Description/Instructions"
                    rows={3}
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
                {eventName === "" || eventDescription === "" ? (
                  <button
                    className="px-4 py-1 rounded-full text-white bg-gray-400"
                    disabled
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="px-4 py-1 rounded-full text-white bg-secondary"
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
