import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const EventDetails = () => {
  const navigate = useNavigate();
  const { data: event, isLoading } = useQuery(["event"], () =>
    fetch("https://myscheduler-server.onrender.com/getAllEvent", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="text-center">Sl no</th>
            <th className="text-center">Email</th>
            <th className="text-center">Event name</th>
            <th className="text-center">Event location</th>
            <th className="text-center">Event duration</th>
          </tr>
        </thead>
        <tbody>
          {event.map((e: any, index: number) => (
            <tr className="hover" key={e._id}>
              <th className="text-center">{index + 1}</th>
              <td className="text-center">{e.email}</td>
              <td className="text-center">{e.eventName}</td>
              <td className="text-center">{e.eventLocation}</td>
              <td className="text-center">{e.eventDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventDetails;
