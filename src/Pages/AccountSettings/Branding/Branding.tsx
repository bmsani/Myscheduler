import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../init.firebase";

const Branding = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full max-w-sm lg:max-w-md mx-auto py-12">
      <h1 className="text-2xl text-gray-600 mb-2">Logo</h1>
      <div className="w-full h-[200px] border border-gray-400 rounded">
        {user ? (
          <div className="h-full flex items-center justify-center">
            <img className="" src={user?.photoURL as string} alt="" />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-4xl text-gray-600">No Logo</p>
          </div>
        )}
      </div>

      <div className="my-4">
        <input type="file" name="image" id="image" hidden />
        <label
          className="cursor-pointer p-2 text-secondary rounded-full border border-secondary hover:shadow-md hover:shadow-secondary duration-300"
          htmlFor="image"
        >
          Upload Image
        </label>
      </div>
      <div className="border border-b-gray-400 my-8"></div>
      <div className="w-full text-center">
      <button className="mt-6 bg-secondary py-2 px-3 rounded-full text-white hover:shadow-md hover:shadow-secondary duration-300">Save Change</button>
      </div>
    </div>
  );
};

export default Branding;
