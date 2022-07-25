import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profileImg from "../../../src/Utilities/icon/profile.png";
import auth from "../../init.firebase";

const Profile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="pt-20 px-20">
      <div className="flex items-center gap-5">
        <img className="rounded-full" src={profileImg} alt="" />
        <input type="file" name="image" id="image" hidden />
        <div
          className="tooltip tooltip-primary hover:tooltip-open tooltip-right"
          data-tip="Upload Image"
        >
          <label
            className="cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-primary text-3xl  text-base-100 hover:bg-secondary duration-300 "
            htmlFor="image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <label htmlFor="name">Name</label>
      <input
        className="border block rounded-lg py-2 w-[320px]"
        type="text"
        name="Name"
        // value={user?.displayName}
      />
    </div>
  );
};

export default Profile;
