import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import AllBookingRow from "./AllBookingRow";

const AllBookings = () => {
  const { data: allBookedEvents, isLoading } = useQuery(
    ["allBookedEvents"],
    () =>
      fetch("http://localhost:5000/api/allBookedEvents").then((res) =>
        res.json()
      )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Host Email</th>
              <th>Invitee Email</th>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Start Time</th>
              <th>Event End Time</th>
            </tr>
          </thead>
          <tbody>
            {allBookedEvents?.map((event: any, index: number) => (
              <AllBookingRow
                key={event._id}
                event={event}
                index={index}
              ></AllBookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
