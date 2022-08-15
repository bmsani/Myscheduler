import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import profileImg from "../../../Utilities/icon/profile.png";

const Profile = () => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({
    _id: "",
    name: "",
    message: "",
    mobile: "",
  });

  const getName = useRef<HTMLInputElement | null>(null);
  const getMessage = useRef<HTMLTextAreaElement | null>(null);
  const getMobile = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
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
  }, [user]);

  const handleProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = getName?.current?.value;
    const message = getMessage?.current?.value;
    const mobile = getMobile?.current?.value;

    const updatedUser = { name: name, message: message, mobile: mobile };

    const url = `https://secure-chamber-99191.herokuapp.com/updatedUser/${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Profile successfully updated");
        } else {
          toast.error("Failed to update");
        }
      });
  };

  // console.log("User form firebase", user?.displayName);
  // console.log(userInfo);

  if (!userInfo._id) {
    return <Loading />;
  }
  console.log(user?.photoURL);
  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={handleProfile}
        className="mx-2 w-full md:w-[500px] md:mx-0"
      >
        <div className="flex items-center gap-5">
          {user ? (
            <img
              className="w-[120px] rounded-full border border-primary p-1"
              src={user?.photoURL as string}
              alt=""
            />
          ) : (
            <img
              className="w-[120px] rounded-full border border-primary p-1"
              src={profileImg}
              alt=""
            />
          )}

          <input type="file" name="image" id="image" hidden />
          <div
            className="tooltip tooltip-primary hover:tooltip-open tooltip-right"
            data-tip="Upload Image"
          >
            <label
              className="hover:shadow hover:shadow-primary cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-primary text-3xl  text-base-100 hover:bg-secondary duration-300 "
              htmlFor="image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="name">
            Name
          </label>

          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            ref={getName}
            defaultValue={userInfo?.name || user?.displayName || ""}
          />
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="message">
            Welcome Message
          </label>

          <textarea
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            name="message"
            id="message"
            ref={getMessage}
            defaultValue={userInfo?.message}
            cols={10}
            rows={3}
          ></textarea>
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="mobile">
            Mobile
          </label>
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="number"
            name="mobile"
            ref={getMobile}
            defaultValue={userInfo?.mobile}
          />
        </div>
        <div className="flex justify-between gap-5 mt-4">
          <input
            className="mt-4 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
            type="submit"
            value="Save Change"
          />
          {/* <button className="mt-4 bg-error py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Profile;
