import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/LoadingSpinner/Loading";

type timeType = {
  _id: string;
  time: string;
};

const BookingConfirm = ({ selected }: any) => {
  const { id } = useParams();
  const [times, setTimes] = useState<timeType>();

  const getName = useRef<HTMLInputElement | null>(null);
  const getMessage = useRef<HTMLTextAreaElement | null>(null);
  const getEmail = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const url = `http://localhost:5000/times/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTimes(data);
      });
  }, [id]);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const time = times?.time;
    const date = selected;
    const name = getName?.current?.value;
    const email = getEmail?.current?.value;
    const message = getMessage?.current?.value;

    const bookingConfirm = {
      time: time,
      date: date,
      name: name,
      email: email,
      message: message,
    };
    console.log(bookingConfirm);
    const url = `http://localhost:5000/d`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingConfirm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Successful");
        } else {
          toast.error("Fail");
        }
      });
  };

  if (!times) {
    return <Loading />;
  }
  // console.log(selected, "And Selected Time is:", times.time);
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
          />
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="message">
            Welcome Message
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
