import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";

const GetUserInfo = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data: userInfo, isLoading } = useQuery(["userInfo", email], () =>
    fetch(`http://localhost:5000/user/${email}`).then((res) => res.json())
  );

  return { userInfo, isLoading };
};

export default GetUserInfo;
