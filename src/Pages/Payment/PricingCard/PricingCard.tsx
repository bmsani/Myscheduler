import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PricingCard = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/payment");
  };
  return (
    <div className="py-12 px-2">
      <div className="flex justify-center items-center h-[85vh]">
      <div className="w-[400px] border border-primary rounded-lg">
        <div className="bg-primary rounded-t-lg text-white text-center p-8">
          <p className=" uppercase text-xl font-bold">professional</p>
          <div className="flex items-start justify-center gap-2">
            <span className="mt-3 text-2xl">$</span>
            <span className="text-7xl font-bold">99.95</span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-500">
              <IoIosCheckmark />
            </span>{" "}
            <p className="text-sm">
              {" "}
              Create unlimited event types (one-on-one, group)
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-500">
              <IoIosCheckmark />
            </span>{" "}
            <p className="text-sm">
              {" "}
              Customize email notifications and reminders
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-500">
              <IoIosCheckmark />
            </span>{" "}
            <p className="text-sm"> Collect payments via Strip</p>
          </div>
          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-500">
              <IoIosCheckmark />
            </span>{" "}
            <p className="text-sm">
              {" "}
              Integrate Gmail and Outlook for workflows
            </p>
          </div>
          <div>
            <button
              onClick={handleCheckout}
              className="bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer w-full my-8"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingCard;
