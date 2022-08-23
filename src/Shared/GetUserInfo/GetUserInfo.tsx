import { useQuery } from "@tanstack/react-query";

const GetUserInfo = (email: any) => {
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery(["userInfo", email], () =>
    fetch(`https://secure-chamber-99191.herokuapp.com/user/${email}`).then(
      (res) => res.json()
    )
  );

  return { userInfo, isLoading, refetch };
};

export default GetUserInfo;
