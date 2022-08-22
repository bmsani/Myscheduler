import { useQuery } from "@tanstack/react-query";

const GetBookedEvents = (email: any) => {
  const {
    data: bookedEvents,
    isLoading,
    refetch,
  } = useQuery(["bookedEvents"], () =>
    fetch(`http://localhost:5000/api/bookedEvents/${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  return { bookedEvents, isLoading, refetch };
};

export default GetBookedEvents;
