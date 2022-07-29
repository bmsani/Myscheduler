import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../init.firebase";
import imgIcon from "../../../Utilities/icon/image.png";

const Branding = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="w-full max-w-sm lg:max-w-md mx-auto py-8">
      <h1 className="text-2xl text-gray-600 mb-2">Logo</h1>
      <div className="w-full h-[200px] border border-gray-400 rounded">
        {user ? (
          <div className="h-full flex items-center justify-center">
            <img className="w-32" src={imgIcon} alt="" />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-4xl text-gray-600">No Logo</p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div>
          <input type="file" name="image" id="image" hidden />
          <label
            className="flex items-center gap-3 border border-gray-500 py-2 px-4 rounded text-gray-500 hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
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
            Upload Image
          </label>
        </div>

        <button className="bg-primary py-2 px-4 rounded text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default Branding;
