import { useQuery } from "@tanstack/react-query";

const GetBookedEvents = (email: any) => {
  const {
    data: bookedEvents,
    isLoading,
    refetch,
  } = useQuery(["bookedEvents"], () =>
    fetch(
      `https://secure-chamber-99191.herokuapp.com/api/bookedEvents/${email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  return { bookedEvents, isLoading, refetch };
};

export default GetBookedEvents;
