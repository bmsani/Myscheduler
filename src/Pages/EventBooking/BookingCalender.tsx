import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import Loading from "../../Shared/LoadingSpinner/Loading";
import { useParams } from "react-router-dom";
import BookingConfirm from "./BookingConfirm";
import defaultImg from "../../Utilities/icon/image.png";
import { FaArrowLeft } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import { useQuery } from "@tanstack/react-query";

const BookingCalender = () => {
  const { id } = useParams();
  const [selected, setSelected] = React.useState<any>(new Date());
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    brandLogo: "",
    message: "",
  });
  const { name, brandLogo } = userInfo;
  const [startEndTime, setStartEndTime] = useState(" ");
  const [click, setClick] = useState(false);

  const { data: singleEvent, isLoading } = useQuery(["singleEvent", id], () =>
    fetch(`https://myscheduler-server.onrender.com/getSingleEvent/${id}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  useEffect(() => {
    async function fetchUserData() {
      try {
        const url = `https://myscheduler-server.onrender.com/singleUser/${singleEvent?.email}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors here
      }
    }

    if (singleEvent?.email) {
      fetchUserData();
    }
  }, [singleEvent?.email]);

  const backButton = () => {
    setClick(false);
  };

  const dayFromCalendar = format(selected, "PPPPP").split(",")[0].slice(0, 3);
  const dayFromDB = singleEvent?.dayData?.find(
    (d: any) => d?.day === dayFromCalendar
  );

  // disable unavailable day
  const checked = singleEvent?.dayData?.filter(
    (d: any) => d?.checked === false
  );
  const day = checked?.map((d: any) => d.id - 1);
  const yesterday = moment().subtract(1, "day");
  const valid = function (current: any) {
    return (
      current.isAfter(yesterday) &&
      current.day() !== day[0] &&
      current.day() !== day[1] &&
      current.day() !== day[2] &&
      current.day() !== day[3] &&
      current.day() !== day[4] &&
      current.day() !== day[5] &&
      current.day() !== day[6]
    );
  };

  // split start and end time and create slots
  const start = dayFromDB?.start;
  const end = dayFromDB?.end;
  const intervalStart = dayFromDB?.interval?.starting;
  const intervalEnd = dayFromDB?.interval?.ending;
  const x = {
    nextSlot: singleEvent?.eventDuration,
    breakTime: [[intervalStart, intervalEnd]],
    startTime: start,
    endTime: end,
  };

  let slotTime = moment(x.startTime, "HH:mm");
  let endTime = moment(x.endTime, "HH:mm");

  function isInBreak(slotTime: any, breakTimes: any) {
    return breakTimes.some((br: any) => {
      return (
        slotTime >= moment(br[0], "HH:mm") && slotTime < moment(br[1], "HH:mm")
      );
    });
  }

  let timeCollection = [];
  while (slotTime < endTime) {
    if (!isInBreak(slotTime, x.breakTime)) {
      timeCollection.push(slotTime.format("HH:mm"));
    }
    slotTime = slotTime.add(x.nextSlot, "minutes");
  }

  const handleDate = (date: any) => {
    setSelected(date.toDate());
  };

  const handleConfirmBooking = (selectedTime: string) => {
    const selectDate = moment(selected).format().split("T")[0];
    const startTime = moment(selectDate + " " + selectedTime).format();
    const endTime = moment(selectDate + " " + selectedTime)
      .add(singleEvent?.eventDuration, "minutes")
      .format();
    const startEnd = startTime + "_" + endTime;
    setStartEndTime(startEnd);
    setClick(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  // start and end time of event
  const startWithDate = startEndTime?.split("_")[0];
  const startWithUTC = startWithDate?.split("T")[1];
  const startTime = startWithUTC?.split("+")[0];
  const endWithDate = startEndTime?.split("_")[1];
  const endWithUTC = endWithDate?.split("T")[1];
  const endTimee = endWithUTC?.split("+")[0];
  const eventDate = moment(startEndTime?.split("T")[0]).format("MMMM Do YYYY");

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="lg:mx-20 border">
        <div className="grid grid-cols-1 lg:grid-cols-3  ">
          <div className=" lg:col-span-1 lg:border-r sm:border-b">
            <div className="flex gap-5 border-b p-5">
              <button
                onClick={backButton}
                className="text-xl text-primary border border-primary hover:bg-blue-100 duration-300 h-10 w-10 rounded-full flex justify-center items-center"
              >
                <FaArrowLeft />
              </button>
              <img
                className="w-[250px] h-[200px] object-cover mx-auto"
                src={brandLogo || defaultImg}
                alt=""
              />
            </div>
            <div className="p-5">
              {name ? (
                <h3 className="font-bold text-gray-500 text-center md:text-left">
                  {name}
                </h3>
              ) : (
                <p className="font-bold text-error text-center md:text-left">
                  Name not found!{" "}
                </p>
              )}

              <h1 className="font-bold text-3xl text-center md:text-left">
                {singleEvent?.eventName}
              </h1>
              <div className="flex gap-2 mt-4">
                <FiClock className="text-2xl" />
                <h2 className="font-bold text-gray-500">
                  {singleEvent?.eventDuration} Minute
                </h2>
              </div>
              {startTime && endTimee && (
                <div className="flex gap-2 mt-4">
                  <AiOutlineCalendar className="text-2xl" />
                  <h2 className="font-bold text-gray-500">{`${startTime} - ${endTimee}, ${eventDate}`}</h2>
                </div>
              )}
              <p className="mt-4 text-md font-semibold text-slate-500">
                {singleEvent?.eventDescription}
              </p>
            </div>
          </div>
          {!click ? (
            <div className="p-5 col-span-2">
              <h2 className="text-xl font-bold text-center lg:text-left">
                Select Date and Time
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
                <div className="col-span-2">
                  <DatePicker
                    className="m-0 col-span-2"
                    displayTimeZone=""
                    dateFormat={true}
                    isValidDate={valid}
                    open={true}
                    input={false}
                    timeFormat={false}
                    onChange={handleDate}
                  />
                </div>
                <div className=" col-span-1">
                  <p className="mt-2 ml-2 mb-5">{format(selected, "PP")}</p>
                  <div>
                    <div className="h-[300px] overflow-x-hidden scroll-smooth scroll-p-8 ">
                      {timeCollection?.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => handleConfirmBooking(time)}
                          className="text-primary border border-blue-400 hover:border-blue-600 shadow hover:shadow-blue-600/70n rounded m-2 px-20 py-2 relative group"
                        >
                          {time}
                          <div className="text-base-100  absolute top-0 left-0 w-full hidden group-hover:block duration-300">
                            <div className="grid grid-cols-2">
                              <p className="bg-blue-500 py-2">{time}</p>
                              <p className="bg-primary py-2">Confirm</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <BookingConfirm
              userInfo={userInfo}
              startEndTime={startEndTime}
              singleEvent={singleEvent}
              hostEmail={singleEvent?.email}
              eventLocation={singleEvent?.eventLocation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCalender;
