import { useQuery } from '@tanstack/react-query';

const GetUserAvailablity = (email: any) => {
    const {
        data: availabilities,
        isLoading,
        refetch,
      } = useQuery(["availabilities", email], () =>
        fetch(`http://localhost:5000/availability/${email}`, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
    return {availabilities, isLoading, refetch}
};

export default GetUserAvailablity;