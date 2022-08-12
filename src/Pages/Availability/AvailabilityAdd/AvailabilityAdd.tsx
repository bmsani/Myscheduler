import React from "react";

const AvailabilityAdd = ({ singleDay, days, refetch }: any) => {
  return (
    <div>
      <input type="checkbox" id="add-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative text-center">
          <label
            htmlFor="add-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Add interval in {singleDay.day}</h3>
          <div className="flex gap-3 justify-center items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold ">Start time</span>
              </label>
              <input
                type="text"
                placeholder={singleDay?.interval?.starting}
                className="input input-bordered w-full  border-2 border-primary"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">End time</span>
              </label>
              <input
                type="text"
                placeholder={singleDay?.interval?.ending}
                className="input input-bordered w-full border-2 border-primary"
              />
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="add-modal" className="btn w-full">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityAdd;
