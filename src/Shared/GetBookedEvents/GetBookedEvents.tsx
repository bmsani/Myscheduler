import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../init.firebase";

const GetBookedEvents = (email: any) => {
  const navigate = useNavigate();
  const {
    data: bookedEvents,
    isLoading,
    refetch,
  } = useQuery(["bookedEvents"], () =>
    fetch(`https://myscheduler-server.onrender.com/api/bookedEvents/${email}`, {
      method: "GET",
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
  return { bookedEvents, isLoading, refetch };
};

export default GetBookedEvents;
