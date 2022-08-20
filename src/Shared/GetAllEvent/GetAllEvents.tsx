import { useQuery } from "@tanstack/react-query";
import React from "react";

const GetAllEvents = (email: any) => {
  const {
    data: events,
    isLoading,
    refetch,
  } = useQuery(["events", email], () =>
    fetch(`http://localhost:5000/getEvent/${email}`).then((res) => res.json())
  );

  return { events, isLoading, refetch };
};

export default GetAllEvents;
