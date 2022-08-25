import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`https://secure-chamber-99191.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  useEffect(() => {
    const email = user?.user?.email;
    const userAvailability = {
      email: email,
      dayData: [
        {
          id: "1",
          day: "Sun",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: false,
        },
        {
          id: "2",
          day: "Mon",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: true,
        },
        {
          id: "3",
          day: "Tue",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: true,
        },
        {
          id: "4",
          day: "Wed",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: true,
        },
        {
          id: "5",
          day: "Thu",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: true,
        },
        {
          id: "6",
          day: "Fri",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: true,
        },
        {
          id: "7",
          day: "Sat",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "00:00",
            ending: "00:00",
          },
          checked: false,
        },
      ],
    };
    if (email) {
      fetch(
        `https://secure-chamber-99191.herokuapp.com/userAvailability/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userAvailability),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Availability create successful");
          }
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
