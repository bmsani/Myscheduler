import { useQuery } from "@tanstack/react-query";

const GetUserInfo = (email: any) => {
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery(["userInfo", email], () =>
    fetch(`http://localhost:5000/user/${email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return { userInfo, isLoading, refetch };
};

export default GetUserInfo;
