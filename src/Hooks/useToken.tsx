import { useEffect, useState } from "react";

const useToken = (user: any) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
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
          day: "Sat",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: false,
        },
        {
          id: "2",
          day: "Sun",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: false,
        },
        {
          id: "3",
          day: "Mon",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: true,
        },
        {
          id: "4",
          day: "Tue",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: true,
        },
        {
          id: "5",
          day: "Wed",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: true,
        },
        {
          id: "6",
          day: "Thu",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: true,
        },
        {
          id: "7",
          day: "Fri",
          start: "09:00",
          end: "17:00",
          interval: {
            starting: "13:00",
            ending: "14:00",
          },
          checked: true,
        },
      ],
    };
    if (email) {
      fetch(`http://localhost:5000/userAvailability/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userAvailability),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user]);

  return [token];
};

export default useToken;
