import ScheduleModal from "../ScheduleModal/ScheduleModal";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";

// type scheduleType = {
//   _id: string;
//   appointDay: string;
//   appointName: string;
//   appointTime: string;
// };

const Table = ({ setUpdateModal, schedules }: any) => {
  const handleDelete = (id: string) => {
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Schedule deleted");
        }
      });
  };
  return (
    <div>
      <div className="mb-5 w-36 text-center px-2 border-2 border-primary rounded-full">
        <label htmlFor="modal">
          Add schedule
          <ScheduleModal></ScheduleModal>
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full text-center border-4">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl no.</th>
              <th>Day</th>
              <th>Appointment Title</th>
              <th>Time</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Default</th>
              <td>Saturday</td>
              <td>No appointment</td>
              <td>13:00</td>
              <td>
                <AiFillEdit className="text-2xl w-full mx-auto" />
              </td>
              <td className="">
                <AiFillDelete className="text-2xl w-full mx-auto" />
              </td>
            </tr>
          </tbody>
          <tbody>
            {schedules.map((schedule: any, index: number) => (
              <tr key={schedule._id}>
                <th>{index + 1}</th>
                <td>{schedule?.appointDay}</td>
                <td>{schedule?.appointName}</td>
                <td>{schedule?.appointTime}</td>
                <td>
                  <label
                    htmlFor="update-modal"
                    className="modal-button text-sm md:text-xl font-bold"
                    onClick={() => setUpdateModal(schedule)}
                  >
                    <AiFillEdit className="text-sm md:text-xl" />
                  </label>
                </td>
                <td className="">
                  <button onClick={() => handleDelete(schedule._id)}>
                    <AiFillDelete className="text-2xl w-full mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
