import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";
import Loading from "../../Shared/LoadingSpinner/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import BookingConfirm from "./BookingConfirm";
import defaultImg from "../../Utilities/icon/image.png";
import { FaArrowLeft } from "react-icons/fa";
type timeType = {
  _id: string;
  time: string;
};

const BookingCalender = () => {
  const [user, gLoading] = useAuthState(auth);
  const { pathname } = useLocation();
  const [selected, setSelected] = React.useState<any>(new Date());
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    brandLogo: "",
  });
  const { name, brandLogo } = userInfo;

  const [times, setTimes] = useState<timeType[]>([]);
  const [click, setClick] = useState(false);
  const minDate = new Date();
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

  useEffect(() => {
    fetch(`http://localhost:5000/times`)
      .then((res) => res.json())
      .then((data) => setTimes(data));
  }, []);

  const handleConfirmBooking = (id: string) => {
    navigate(`/bookingCalender/${id}`);
    setClick(true);
  };

  const backButton = () => {
    if (pathname === "/bookingCalender") {
      navigate("/eventBooking");
    } else {
      navigate("/bookingCalender");
      setClick(false);
    }
  };

  const disabledDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 12),
    new Date(2022, 5, 20),
  ];
  console.log(selected.toDateString());

  if (!times || gLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="lg:mx-20 xl:mt-12 border">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
          <div className=" col-span-1 xl:border-r sm:border-b">
            <div className="flex gap-5 border-b p-5">
              <button
                onClick={backButton}
                className="text-xl text-primary border border-primary hover:bg-blue-100 duration-300 h-12 w-12 rounded-full flex justify-center items-center"
              >
                <FaArrowLeft />
              </button>
              <img className="w-[250px]" src={brandLogo || defaultImg} alt="" />
            </div>
            <div className="p-5">
              <h2 className="font-bold text-gray-500">{name}</h2>
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
          </div>
          {!click ? (
            <div className="p-5 col-span-2">
              <h2 className="text-xl font-bold">Select Date and Time</h2>
              <div className="grid grid-cols-3 mt-4">
                <DayPicker
                  className="m-0 col-span-2"
                  mode="single"
                  selected={selected}
                  onDayClick={setSelected}
                  fromDate={minDate}
                  disabled={disabledDays}
                ></DayPicker>
                <div className=" col-span-1">
                  <p className="mt-2 ml-2 mb-5">{format(selected, "PP")}</p>
                  <div>
                    <div className="h-[300px] overflow-x-hidden scroll-smooth scroll-p-8 ">
                      {times.map((data) => (
                        <button
                          onClick={() => handleConfirmBooking(data._id)}
                          className="text-primary border border-blue-400 hover:border-blue-600 shadow hover:shadow-blue-600/70n rounded m-2 p-2 relative group"
                        >
                          {data.time}
                          <div className="text-base-100  absolute top-0 left-0 w-full hidden group-hover:block duration-300">
                            <div className="grid grid-cols-2">
                              <p className="bg-blue-500 py-2">
                                {data.time.slice(0, 8)}
                              </p>
                              <p className="bg-primary py-2">Confirm</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <select className="select border-none select-ghost w-full max-w-xs">
                  <option disabled selected>
                    Asia/Dhaka
                  </option>
                  <option>USA</option>
                  <option>Italy</option>
                </select>
              </div>
            </div>
          ) : (
            <BookingConfirm selected={selected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingCalender;
