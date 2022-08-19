import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";

const GetUserInfo = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
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
