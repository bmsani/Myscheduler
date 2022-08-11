import React, { FormEvent, useRef } from "react";
import { useParams } from "react-router-dom";

const BookingConfirm = () => {
  const { startEnd } = useParams();

  const getName = useRef<HTMLInputElement | null>(null);
  const getMessage = useRef<HTMLTextAreaElement | null>(null);
  const getEmail = useRef<HTMLInputElement | null>(null);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const startTime = startEnd?.split("_")[0];
    const endTime = startEnd?.split("_")[1];
    const name = getName?.current?.value;
    const email = getEmail?.current?.value;
    const message = getMessage?.current?.value;

    const bookingConfirm = {
      startTime: startTime,
      endTime: endTime,
      name: name,
      email: email,
      message: message,
    };
    console.log(bookingConfirm);
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
            type="text"
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
          <input
            className="mt-4 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
            type="submit"
            value="Booking Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookingConfirm;
