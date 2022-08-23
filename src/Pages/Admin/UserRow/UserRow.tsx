import React, { useState } from "react";
import { toast } from "react-toastify";
import GetUserInfo from "../../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import UserDetailsModal from "../UserDetailsModal/UserDetailsModal";

const UserRow = ({ user, refetch, index }: any) => {
  const { email, role } = user;
  const [openModal, setOpenModal] = useState("");
  const { userInfo, isLoading } = GetUserInfo(email);
  const makeAdmin = () => {
    fetch(`https://secure-chamber-99191.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  const removeUser = (id: string) => {
    fetch(`https://secure-chamber-99191.herokuapp.com/removeUser/${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.warning("User delete successful");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {role !== "admin" && (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs" onClick={() => removeUser(user._id)}>
            Remove user
          </button>
        </td>
        <td>
          <label
            htmlFor="my-modal-3"
            className="btn btn-xs modal-button"
            onClick={() => setOpenModal(email)}
          >
            User Details
          </label>
        </td>
      </tr>
      {openModal && (
        <UserDetailsModal email={openModal} setOpenModal={setOpenModal} userInfo={userInfo} />
      )}
    </>
  );
};

export default UserRow;
