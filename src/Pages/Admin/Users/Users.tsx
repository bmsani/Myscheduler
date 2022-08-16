import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import UserRow from "../UserRow/UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery(["users"], () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
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
