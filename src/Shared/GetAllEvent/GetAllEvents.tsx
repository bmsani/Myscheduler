import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../init.firebase";

const GetAllEvents = (email: any) => {
  const navigate = useNavigate()
  const {
    data: events,
    isLoading,
    refetch,
  } = useQuery(["events", email], () =>
    fetch(`http://localhost:5000/getEvent/${email}`, {
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

  return { events, isLoading, refetch };
};

export default GetAllEvents;
