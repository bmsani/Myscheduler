import React, { FormEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profileImg from "../../../src/Utilities/icon/profile.png";
import auth from "../../init.firebase";

const Profile = () => {
  const [user] = useAuthState(auth);

  const handleProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, message, mobile, profileLink } =
      event.target as typeof event.target & {
        name: { value: string };
        message: { value: string };
        mobile: { value: number };
        profileLink: { value: string };
      };
    console.log(name.value, message.value, mobile.value, profileLink.value);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <form onSubmit={handleProfile} className="min-w-[500px]">
        <div className="flex items-center gap-5">
          {user ? (
            <img
              className="w-[120px] rounded-full border border-primary p-1"
              src={user.photoURL as string}
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
        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            name="name"
            value={user?.displayName as string}
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
            cols={10}
            rows={5}
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
          />
        </div>
        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="profileLink">
            Profile Link
          </label>
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            name="profileLink"
          />
        </div>

        <div className="flex justify-between gap-5 mt-4">
          <input
            className="bg-secondary hover:bg-accent py-2 px-7 text-white font-semibold rounded-lg  duration-300"
            type="submit"
            value="Save Change"
          />
          <button className="border rounded-lg px-5 py-2 border-slate-500 text-slate-500 hover:bg-slate-200 duration-300">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
