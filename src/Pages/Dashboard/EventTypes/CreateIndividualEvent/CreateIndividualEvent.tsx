import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../init.firebase";
import leftArrow from "../../../../Utilities/icon/leftArrow.png";
import EventDetailsAdd from "../EventDetailsAdd/EventDetailsAdd";
// interface data {
//   dayData: {
//     id: string;
//     day: string;
//     start: string;
//     end: string;
//     checked: boolean;
//   }
// }

const CreateIndividualEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  // const [eventLink, setEventLink] = useState("");
  const [availabilities, setAvailabilities] = useState<any>([]);
  const [next, setNext] = useState(false);
  const durationRef = useRef<HTMLInputElement | null>(null);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/availability/${email}`)
      .then((res) => res.json())
      .then((data) => setAvailabilities(data));
  }, [email]);

  const handleNext = () => {
    setNext(true);
  };

  const handleEvent = () => {
    const eventDuration = durationRef?.current?.value;
    const event = {
      email: email,
      eventName: eventName,
      eventLocation: eventLocation,
      eventDescription: eventDescription,
      eventDuration: eventDuration,
      availabilities: availabilities?.dayData,
    };
    fetch("http://localhost:5000/updateEvent", {
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
  };
  return (
    <div>
      {!next ? (
        <div>
          <div className="border mt-3 shadow-lg">
            <div className="grid grid-cols-3 sm-grid-cols-2  py-4 xl:mx-40">
              <div>
                <Link to="/createEvent">
                  <button className="px-5 border-blue-400 flex items-center border-2 py-3 rounded-full">
                    <span className="mr-1">
                      <img src={leftArrow} className="w-[20px]" alt="" />
                    </span>{" "}
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <h2 className="text-xl py-3">Add One-on-One Event Type</h2>
              </div>
              <div>
                <h2 className="text-base py-3 text-end">
                  Your event type is{" "}
                  <span className="px-5 py-1 text-base ml-1 text-white bg-gray-400 rounded-sm">
                    OFF
                  </span>{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="xl:mx-48 sm:mx-8 border-2 border-zinc-500 mt-8 mb-8 pb-4">
            <div className="flex items-center justify-between mx-8 border-b">
              <div>
                <h2>What event is this?</h2>
                <h2 className="text-sm font-light">
                  {eventName ? eventName : "No name given"},&nbsp;
                  {eventLocation ? eventLocation : "No location given"}
                </h2>
              </div>
              <div className=" mx-6 py-4">
                <div>
                  <Link to="/dashboard">
                    <button className="mr-4 hover:underline text-sm font-medium">
                      Cancel
                    </button>
                  </Link>
                  {eventName === "" ||
                  eventLocation === "" ||
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
            <div className="mx-8 mb-6">
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
                    className="input border-blue-500 w-full max-w-xs "
                  />
                </div>
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <div className="">
                  <select
                    required
                    className="select border-blue-500 w-full max-w-xs"
                    onChange={(e) => setEventLocation(e.target.value)}
                  >
                    <option disabled selected className="text-light">
                      Add Your Location
                    </option>
                    <option>
                      <div>
                        <img src={leftArrow} alt="" />
                        <h2>Google Meet</h2>
                      </div>
                    </option>
                    <option>
                      <div>
                        <img src={leftArrow} className="w-[20px]" alt="" />
                        <h2>Zoom</h2>
                      </div>
                    </option>
                  </select>
                </div>
                <label className="label">
                  <span className="label-text">Description/Instructions</span>
                </label>
                <div className="">
                  <textarea
                    required
                    onBlur={(e) => setEventDescription(e.target.value)}
                    className="textarea border-blue-500 w-full max-w-xs"
                    placeholder="Bio"
                  ></textarea>
                </div>
                {/* <label className="label">
                  <span className="label-text">Event Link</span>
                </label>
                <div className="">
                  <input
                    required
                    onChange={(e) => setEventLink(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input  border-blue-500 w-full max-w-xs "
                  />
                </div> */}
              </form>
            </div>
            <div className="border-t mx-10 py-4  grid place-items-end">
              <div>
                <Link to="/dashboard">
                  <button className="mr-4 hover:underline text-sm font-medium">
                    Cancel
                  </button>
                </Link>
                {eventName === "" ||
                eventLocation === "" ||
                eventDescription === "" ? (
                  // || eventLink === ""
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
        </div>
      ) : (
        <EventDetailsAdd
          availabilities={availabilities}
          eventName={eventName}
          eventLocation={eventLocation}
          durationRef={durationRef}
          handleEvent={handleEvent}
        ></EventDetailsAdd>
      )}
    </div>
  );
};

export default CreateIndividualEvent;
