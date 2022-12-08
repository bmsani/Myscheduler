import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSpinner from "../../Shared/ButtonSpinner/ButtonSpinner";

const BookingConfirm = ({
  startEndTime,
  singleEvent,
  hostEmail,
  eventLocation,
}: any) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getName = useRef<HTMLInputElement | null>(null);
  const getMessage = useRef<HTMLTextAreaElement | null>(null);
  const getEmail = useRef<HTMLInputElement | null>(null);

  const handleBooking = (event: any) => {
    event.preventDefault();
    setLoading(true);
    const startTimeDate = startEndTime?.split("_")[0];
    const endTimeDate = startEndTime?.split("_")[1];
    const name = getName?.current?.value;
    const email = getEmail?.current?.value;
    const message = getMessage?.current?.value;
    const eventName = singleEvent?.eventName;
    const eventDescription = singleEvent?.eventDescription;

    const startWithUTC = startTimeDate?.split("T")[1];
    const startTime = startWithUTC?.split("+")[0];
    const endWithUTC = endTimeDate?.split("T")[1];
    const endTime = endWithUTC?.split("+")[0];
    const eventDate = startEndTime?.split("T")[0];

    const confirmEvent = {
      eventName: eventName,
      hostEmail: hostEmail,
      inviteeName: name,
      inviteeEmail: email,
      inviteeMessage: message,
      date: eventDate,
      eventStartTime: startTime,
      eventEndTime: endTime,
      eventLocation: eventLocation,
    };

    const bookingConfirm = {
      startTime: startTimeDate,
      endTime: endTimeDate,
      email: email,
      summary: eventName,
      description: eventDescription,
    };
    axios
      .post("https://myscheduler-server.onrender.com/api/create-event", {
        bookingConfirm,
        hostEmail,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .post(
              "https://myscheduler-server.onrender.com/api/createConfirmEvent",
              confirmEvent,
              {
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
              }
            )
            .then((response) => {
              event.target.reset();
              navigate("/eventSuccessMessage");
              setLoading(false);
            });
        }
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="p-5">
      <p className="font-bold text-xl">Enter Details</p>

      <form onSubmit={handleBooking}>
        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="name">
            Name
          </label>

          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            ref={getName}
            required
          />
        </div>
        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="email">
            Email
          </label>

          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="email"
            ref={getEmail}
            required
          />
        </div>

        <div className="mt-4">
          <label className="text-primary text-sm font-medium" htmlFor="message">
            Please share anything that will help prepare for our meeting.
          </label>

          <textarea
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            name="message"
            id="message"
            ref={getMessage}
            cols={10}
            rows={3}
          ></textarea>
        </div>

        <div className="flex justify-between gap-5 mt-4">
          {loading ? (
            <button className="w-[160px] bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
              <ButtonSpinner />
            </button>
          ) : (
            <input
              className="w-[160px] bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
              type="submit"
              value="Booking Confirm"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingConfirm;
