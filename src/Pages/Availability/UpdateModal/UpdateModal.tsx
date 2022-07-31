import React, { useState } from "react";
import { toast } from "react-toastify";

// interface Props {
//   _id: string;
//   appointDay: string;
//   appointName: string;
//   appointTime: string;
// }

const UpdateModal = ({ updateModal }: any) => {
  const { _id, appointDay, appointName, appointTime } = updateModal;
  const [day, setDay] = useState("");
  const [appointmentName, setAppointmentName] = useState("");
  const [time, setTime] = useState("");

  const handleDay = (e: any) => {
    setDay(e.target.value);
  };
  const handleAppointName = (e: any) => {
    setAppointmentName(e.target.value);
  };
  const handleTime = (e: any) => {
    setTime(e.target.value);
  };

  const handleEdit = (id: string) => {
    const appointment = {
      appointDay: day,
      appointName: appointmentName,
      appointTime: time,
    };

    fetch(`http://localhost:5000/updateSchedule/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
        .then((data) => {
            if (data.acknowledged === true) {
              toast.success("Update successful")
          }
      });
  };
  return (
    <div>
      <input type="checkbox" id="update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg pb-5">Manage your daily schedule</h3>
          <input
            type="text"
            onBlur={handleDay}
            className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
            placeholder={appointDay}
          />
          <input
            type="text"
            onBlur={handleAppointName}
            className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
            placeholder={appointName}
          />
          <input
            type="text"
            onBlur={handleTime}
            className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
            placeholder={appointTime}
          />
          <div className="modal-action justify-center">
            <label
              htmlFor="update-modal"
              onClick={() => handleEdit(_id)}
              className="btn w-full"
            >
              Create now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
