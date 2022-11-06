import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import UserRow from "../UserRow/UserRow";

const Users = () => {
  const navigate = useNavigate();
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () =>
    fetch("https://secure-chamber-99191.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
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
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Email</th>
              <th>Make admin</th>
              <th>Remove user</th>
              <th>User Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
