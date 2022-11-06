import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import AllBookingRow from "./AllBookingRow";

const AllBookings = () => {
  const navigate = useNavigate();
  const { data: allBookedEvents, isLoading } = useQuery(
    ["allBookedEvents"],
    () =>
      fetch("https://secure-chamber-99191.herokuapp.com/api/allBookedEvents", {
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
