import { useEffect, useState } from "react";

const GetUserInfo = (user: any) => {
  const [userInfo, setUserInfo] = useState({});

  //   console.log("from getuser", userInfo);
  useEffect(() => {
    if (user?.email) {
      const url = `https://secure-chamber-99191.herokuapp.com/user/${user?.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
        });
    }
  }, [user]);

  return [userInfo, setUserInfo];
};

export default GetUserInfo;
