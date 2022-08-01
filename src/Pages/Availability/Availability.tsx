import { AiOutlinePlusCircle } from "react-icons/ai";
import Table from "./Table/Table";
import Modal from "./Modal/Modal";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal/UpdateModal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../init.firebase";

type scheduleType = {
  _id: string;
  appointDay: string;
  appointName: string;
  appointTime: string;
};

const Availability = () => {
  const [updateModal, setUpdateModal] = useState(null);
  const [user] = useAuthState(auth);
  const [schedules, setSchedules] = useState<scheduleType[]>([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/schedule/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setSchedules(data));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto">
      <h3 className="text-xl md:text-2xl text-center lg:text-3xl font-bold py-4">
        Availability & Time
        <span className="text-xl md:text-2xl lg:text-3xl font-bold">
          Scheduling Setup
        </span>
      </h3>
      <div className="rounded-box shadow-md mt-10">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid card bg-base-100 pl-2">
            <div className="flex justify-start gap-2">
              <h5 className="text-sm md:text-xl w-fit font-bold border-2 border-primary p-1 rounded-full">
                Work Schedule
              </h5>
              <div className="rounded-full border-2 border-primary flex items-center w-fit p-1">
                <AiOutlinePlusCircle className="text-sm md:text-xl" />
                <label
                  htmlFor="my-modal"
                  className="modal-button text-sm md:text-xl font-bold"
                >
                  Create new <Modal />
                </label>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid card bg-base-100 p-5">
            <Table
              schedules={schedules}
              setUpdateModal={setUpdateModal}
            ></Table>
          </div>
        </div>
      </div>
      {updateModal && <UpdateModal updateModal={updateModal} />}
    </div>
  );
};

export default Availability;
