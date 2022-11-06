import React from "react";
import { Link } from "react-router-dom";
import auth from "../../init.firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Shared/LoadingSpinner/Loading";
import GetUserInfo from "../../Shared/GetUserInfo/GetUserInfo";
import GoogleCalendar from "../../Utilities/Image/google_calendar.png";

const CalenderConnection = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { userInfo, isLoading } = GetUserInfo(email);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-12 mx-auto max-w-[1400px]">
      <h2 className="text-center text-3xl text-secondary font-semibold pb-12">
        Connect Your Google Calendar
      </h2>
      <div className="border m-4 p-1 md:p-4">
        <div className="flex items-center justify-between">
          <img src={GoogleCalendar} alt="" />
          <span>
            {userInfo.refreshToken ? (
              <button className="rounded-lg btn btn-disabled btn-md btn-outline">
                Calendar Connected
              </button>
            ) : (
              <Link to="/addCalender">
                <button className="text-sm rounded-lg btn btn-md btn-outline btn-secondary">
                  Connect Your Calendar
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CalenderConnection;
