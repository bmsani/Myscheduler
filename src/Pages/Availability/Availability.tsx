import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import date from "../../Utilities/Image/date&time.gif";

const Availability = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold py-4">
        Availability & Time -{""}
        <span className="text-3xl font-bold">Scheduling Setup</span>
      </h3>
      <div className="rounded-box shadow-md mt-10">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid card bg-base-100 px-10">
            <div className="flex justify-start gap-2">
              <h5 className="text-xl font-bold border-2 border-primary py-1 px-2 rounded-full">
                Working Schedule
              </h5>
              <div className="rounded-full border-2 border-primary flex items-center px-2">
                <AiOutlinePlusCircle className="text-xl" />
                <label
                  htmlFor="my-modal"
                  className="modal-button text-xl font-bold"
                >
                  Create new <Modal />
                </label>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid card bg-base-100 p-5">
            <Schedule></Schedule>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add new working schedule</h3>
          <input
            type="text"
            name="scheduling"
            className="border-b-2 border-primary rounded-full shadow px-2"
          />
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Create now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const days: string[] = [
    "Saturday",
    "Sunday",
    "Monday",
    "tuesday",
    "Wednesday",
    "Thursday",
    "friday",
  ];

  return (
    <div>
      <h6 className="text-lg font-bold">Set your weekly hours</h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        <div>
          {days.map((day) => (
            <div className="flex items-center justify-start gap-5">
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-5">
                  <input type="checkbox" className="checkbox mr-2" />
                  <div className="flex items-center justify-center gap-10">
                    <p className="label-text text-lg w-24">{day}</p>
                    <div className="">
                      <input
                        type="number"
                        className="border-2 border-primary mr-3 p-1 px-2 rounded-full w-28"
                        placeholder="hour"
                      />
                      <input
                        type="number"
                        className="border-2 border-primary p-1 px-2 rounded-full w-28"
                        placeholder="minutes"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div className="flex justify-center items-center gap-4">
                <AiFillDelete className=" text-2xl" />
                <IoIosAddCircle className=" text-2xl" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={date} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Availability;
