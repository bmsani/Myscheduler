import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/LoadingSpinner/Loading";
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import GetUserForInvitee from "../../Shared/GetUserForInvitee/GetUserForInvitee";

const AllEvent = () => {
  const { email } = useParams();
  const { singleUser } = GetUserForInvitee(email);

  const { data: events, isLoading } = useQuery(["events", email], () =>
    fetch(`https://secure-chamber-99191.herokuapp.com/getUserEvents/${email}`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-20 min-h-screen bg-gray-50">
      <div className="card shadow-xl border bg-base-100">
        <div className="absolute">
          <div className="p-2 text-gray-400 bg-blue-50 rounded-br-xl">
            <p className="text-sm font-bold text-center">Powered By</p>
            <h4 className="text-md font-bold">MyScheduler</h4>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-6">
          <h3 className="font-semibold text-lg pb-8">{singleUser?.name}</h3>
          <p className="w-72 mx-auto">
            Welcome to my scheduling page. Please follow the instructions to add
            an event to my calendar.
          </p>
        </div>
        {events.length ? (
          <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
            {events?.map((e: any) => (
              <Link to={`/bookingCalender/${e._id}`} key={e._id}>
                <div className="w-full border-t cursor-pointer hover:bg-gray-100 duration-300">
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BsCircleFill className="w-[25px] h-[25px] text-violet-600" />
                        <h2 className="text-xl font-semibold">
                          {e?.eventName}
                        </h2>
                      </span>
                      <span>
                        <AiFillCaretRight className="w-[25px] h-[25px]" />
                      </span>
                    </div>
                    <p className="mt-6 font-thin">{e?.eventDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-44">
            <h2 className="font-bold text-5xl text-center text-gray-200">
              There is no event available
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvent;
