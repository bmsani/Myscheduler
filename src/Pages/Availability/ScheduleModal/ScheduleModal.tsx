import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../init.firebase';

const ScheduleModal = () => {
    const [user] = useAuthState(auth);
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

    const addSchedule: any = () => {
      const appointment = {
        appointDay: day,
        appointName: appointmentName,
        appointTime: time,
        appointUser: user?.email,
      };

      fetch(`http://localhost:5000/schedule/${user?.email}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Your schedule added successfully");
            setDay("");
            setAppointmentName("");
            setTime("");
          }
        });
    };
    return (
      <div>
        <input type="checkbox" id="modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg pb-5">
              Manage your daily schedule
            </h3>
            <input
              type="text"
              onBlur={handleDay}
              className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
              placeholder="Day"
            />
            <input
              type="text"
              onBlur={handleAppointName}
              className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
              placeholder="Name"
            />
            <input
              type="text"
              onBlur={handleTime}
              className="border-b-2 border-primary m-2 text-center rounded-full shadow px-2 py-1"
              placeholder="01:00"
            />
            <div className="modal-action justify-center">
              <label
                htmlFor="modal"
                onClick={addSchedule}
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

export default ScheduleModal;