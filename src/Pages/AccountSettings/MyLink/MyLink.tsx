import React from "react";

const MyLink = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="mx-2 w-full md:w-[500px] md:mx-0">
        <p>
          Changing your MyScheduler URL will mean that all of your copied links
          will no longer work and will need to be updated.
        </p>
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

        <button className="mt-6 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
          Save Change
        </button>
      </div>
    </div>
  );
};

export default MyLink;
