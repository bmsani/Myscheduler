import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";
import Loading from "../../Shared/LoadingSpinner/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import BookingConfirm from "./BookingConfirm";
import defaultImg from "../../Utilities/icon/image.png";
import { FaArrowLeft } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Timezone from "./Timezone";
import DatePicker from "react-datetime";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

const BookingCalender = () => {
  const [user, gLoading] = useAuthState(auth);
  const { pathname } = useLocation();
  const [selected, setSelected] = React.useState<any>(new Date());
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    brandLogo: "",
  });

  const [times, setTimes] = useState<any>([]);
  const [startEndTime, setStartEnd] = useState<string>(" ");

  const { name, brandLogo } = userInfo;
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/user/${user?.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user]);

  // ================Times Slots ============================
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/availability/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setTimes(data?.dayData));
    }
  }, [user]);

  const backButton = () => {
    if (pathname === "/bookingCalender") {
      navigate("/eventBooking");
    } else {
      navigate("/bookingCalender");
      setClick(false);
    }
  };

  const dayFromCalendar = format(selected, "PPPPP").split(",")[0].slice(0, 3);
  const dayFromDB = times?.find((d: any) => d.day === dayFromCalendar);
  const yesterday = moment().subtract(1, "day");
  const valid = function (current: any) {
    return (
      current.isAfter(yesterday) && current.day() !== 0 && current.day() !== 6
    );
  };

  const start = dayFromDB?.start;
  const end = dayFromDB?.end;
  const intervalStart = dayFromDB?.interval?.starting;
  const intervalEnd = dayFromDB?.interval?.ending;

  const x = {
    nextSlot: 30,
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
    // console.log(moment(`${selected}${date.toDate()}`).format());
    // console.log(moment(date.toDate()).format());
  };

  const handleConfirmBooking = (selectedTime: string) => {
    const selectDate = moment(selected).format().split("T")[0];
    const startTime = moment(selectDate + " " + selectedTime).format();
    const endTime = moment(selectDate + " " + selectedTime)
      .add(30, "minutes")
      .format();
    const startEnd = startTime + "_" + endTime;
    setStartEnd(startEnd);
    navigate(`/bookingCalender/${startEnd}`);
    setClick(true);
  };
  console.log(startEndTime);
  if (!times || gLoading) {
    return <Loading />;
  }

  return (
    <div className="lg:mx-20 lg:mt-12 border">
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
              className="w-[200px] mx-auto"
              src={brandLogo || defaultImg}
              alt=""
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-500 text-center md:text-left">
              {name}
            </h3>
            <h1 className="font-bold text-3xl text-center md:text-left">
              Doctors Meeting
            </h1>
            <div className="flex gap-2 mt-8">
              <FiClock className="text-2xl" />
              <h2 className="font-bold text-gray-500">30 Minute</h2>
            </div>
          </div>
        </div>
        {!click ? (
          <div className="p-5 col-span-2">
            <h2 className="text-xl font-bold text-center lg:text-left">
              Select Date and Time
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
              <div className=" col-span-2">
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
                <div className="mt-4">
                  <Timezone />
                </div>
              </div>
              <div className=" col-span-1">
                <p className="mt-2 ml-2 mb-5">{format(selected, "PP")}</p>
                <div>
                  <div className="h-[300px] overflow-x-hidden scroll-smooth scroll-p-8 ">
                    {timeCollection.map((time, index) => (
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
          <BookingConfirm />
        )}
      </div>
    </div>
  );
};

export default BookingCalender;
