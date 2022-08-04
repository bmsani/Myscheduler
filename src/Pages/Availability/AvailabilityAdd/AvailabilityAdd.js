import { useState } from "react";

const AvailabilityAdd = ({ singleDay }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setendTime] = useState("");

  // console.log(singleDay);
  return (
    <div>
      <input type="checkbox" id="addModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative p-10">
          <label
            htmlFor="addModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Set interval - {singleDay.day}</h3>
          <div className="flex flex-col gap-3 mt-2">
            <input
              type="text"
              // placeholder={singleDay.interval.startTime}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Ending"
              className="input input-bordered w-full"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="addModal" className="btn w-full">
              Add interval
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAdd;
