import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../init.firebase";

const GetUserInfo = (email: any) => {
  const navigate = useNavigate();
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
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );

  return { userInfo, isLoading, refetch };
};

export default GetUserInfo;
