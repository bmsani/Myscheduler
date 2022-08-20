import React from "react";
import { useParams } from "react-router-dom";
import GetAllEvents from "../../Shared/GetAllEvent/GetAllEvents";
import GetUserInfo from "../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../Shared/LoadingSpinner/Loading";
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

const AllEvent = () => {
  const { email } = useParams();
  const { events } = GetAllEvents(email);
  const { userInfo, isLoading, refetch } = GetUserInfo(email);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-20 bg-gray-50">
      <div className="w-full h-screen card shadow-xl border bg-base-100">
        <div className="text-center text-gray-500 pt-6">
          <h3 className="font-semibold text-lg pb-8">{userInfo?.name}</h3>
          <p className="w-72 mx-auto">
            Welcome to my scheduling page. Please follow the instructions to add
            an event to my calendar.
          </p>
        </div>
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
          {events?.map((e: any) => (
            <Link to={`/bookingCalender/${e._id}`} key={e._id}>
              <div className="w-full h-full card shadow cursor-pointer hover:bg-gray-100 duration-300">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BsCircleFill className="w-[25px] h-[25px] text-violet-600" />
                      <h2 className="text-xl font-semibold">{e?.eventName}</h2>
                    </span>
                    <span>
                      <AiFillCaretRight className="w-[25px] h-[25px]"/>
                    </span>
                  </div>
                  <p className="mt-6 font-thin">{e?.eventDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvent;
