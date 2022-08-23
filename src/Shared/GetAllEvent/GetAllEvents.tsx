import { useQuery } from "@tanstack/react-query";

const GetAllEvents = (email: any) => {
  const {
    data: events,
    isLoading,
    refetch,
  } = useQuery(["events", email], () =>
    fetch(`http://localhost:5000/getEvent/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return { events, isLoading, refetch };
};

export default GetAllEvents;
