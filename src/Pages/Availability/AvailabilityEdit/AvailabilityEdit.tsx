import React, { useRef } from "react";
import { toast } from "react-toastify";

const AvailabilityEdit = ({ singleDay, days, refetch }: any) => {
  const startRef: any = useRef();
  const endRef: any = useRef();

  const editHandle = (singleId: string) => {
    const start = startRef.current.value;
    const end = endRef.current.value;
    const timeValue = {
      newStart: start,
      newEnd: end,
    };
    fetch(`http://localhost:5000/editAvailability/${days}/${singleId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(timeValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Time update successful");
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative text-center">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Change your {singleDay.day} time schedule
          </h3>
          <div className="mt-3">
            <input
              type="time"
              className="p-1 px-5 border-2 border-primary rounded-full mr-2"
              name="start"
              id="start"
              ref={startRef}
            />
            <input
              type="time"
              className="p-1 px-5 border-2 border-primary rounded-full"
              name="end"
              id="end"
              ref={endRef}
            />
          </div>
          <div className="modal-action justify-center">
            <label
              htmlFor="edit-modal"
              onClick={() => editHandle(singleDay.id)}
              className="btn w-80"
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityEdit;
