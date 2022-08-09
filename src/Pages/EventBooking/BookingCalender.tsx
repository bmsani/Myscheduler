import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Timezone from "./Timezone";

const BookingCalender = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  return (
    <div>
      <div className="xl:mx-32 xl:mt-12 border">
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 ">
          <div className="xl:border-r sm:border-b p-5 ">
            <h2 className="font-bold text-gray-500">Zehadul Islam</h2>
            <h1 className="text-2xl font-bold">30 Minute Meeting</h1>
            <div className="flex gap-2 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="font-bold text-gray-500">30 Minute</h2>
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold">Select Date and Time</h2>
            <div className="flex gap-5 mt-4">
              <DayPicker
                className="m-0"
                mode="single"
                selected={date}
                // onSelect={setDate}
              ></DayPicker>
              <p className="mt-1">{format(date, "PP")}</p>
            </div>
            <div>
              <Timezone />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalender;
