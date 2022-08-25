import { useQuery } from "@tanstack/react-query";

const GetUserAvailablity = (email: any) => {
  const {
    data: availabilities,
    isLoading,
    refetch,
  } = useQuery(["availabilities", email], () =>
    fetch(`https://secure-chamber-99191.herokuapp.com/availability/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  return { availabilities, isLoading, refetch };
};

export default GetUserAvailablity;
