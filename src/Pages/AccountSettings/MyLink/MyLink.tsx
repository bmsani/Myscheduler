import React from "react";

const MyLink = () => {
  return (
    <div className="w-96 mx-auto">
      <p className="py-6">
        Changing your Myscheduler URL will mean that all of your copied links
        will no longer work and will need to be updated.
      </p>
      <div>
        <span className="font-bold">Myscheduler.com/</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary ml-3 w-1/2"
        />
      </div>
      <button className="mt-6 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
        Save Change
      </button>
    </div>
  );
};

export default MyLink;
