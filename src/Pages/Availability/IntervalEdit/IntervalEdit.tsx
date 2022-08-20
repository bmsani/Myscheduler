import React, { useRef } from "react";
import { toast } from "react-toastify";

const IntervalEdit = ({ singleDay, days, refetch }: any) => {
  const startingRef: any = useRef();
  const endingRef: any = useRef();

  const intervalEdit = (id: string) => {
    const starting = startingRef.current.value;
    const ending = endingRef.current.value;
    const intervalValue = {
      starting: starting,
      ending: ending,
    };
    console.log(intervalValue);
    fetch(`http://localhost:5000/editInterval/${days}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(intervalValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Interval updated successful");
          refetch();
        }
      });
  };
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
          <h3 className="font-bold text-lg">
            Edit interval in {singleDay.day}
          </h3>
          <div className="flex gap-3 justify-center items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold ">
                  Start time: {singleDay?.interval?.starting}
                </span>
              </label>
              <input
                type="time"
                ref={startingRef}
                className="input input-bordered w-full  border-2 border-primary"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">
                  End time: {singleDay?.interval?.ending}
                </span>
              </label>
              <input
                type="time"
                ref={endingRef}
                className="input input-bordered w-full border-2 border-primary"
              />
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="add-modal"
              className="btn w-full"
              onClick={() => intervalEdit(singleDay.id)}
            >
              Edit interval schedule
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntervalEdit;
