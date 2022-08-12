import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const UserDetails = () => {
  const { data: event, isLoading } = useQuery(["event"], () =>
    fetch("https://secure-chamber-99191.herokuapp.com/getAllEvent").then(
      (res) => res.json()
    )
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

export default UserDetails;
