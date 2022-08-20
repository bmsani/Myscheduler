import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../init.firebase";
import GetAllEvents from "../../Shared/GetAllEvent/GetAllEvents";
import Loading from "../../Shared/LoadingSpinner/Loading";

const AllEvent = () => {
  const { email } = useParams();
  const {events} = GetAllEvents(email)
  console.log(events);
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery(["userInfo", email], () =>
    fetch(`http://localhost:5000/user/${email}`).then((res) => res.json())
  );
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
      </div>
    </div>
  );
};

export default AllEvent;
