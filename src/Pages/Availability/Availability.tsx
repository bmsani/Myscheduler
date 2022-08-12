import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiMessageSquareAdd, BiEdit } from "react-icons/bi";
import auth from "../../init.firebase";
import Loading from "../../Shared/LoadingSpinner/Loading";
import AvailabilityAdd from "./AvailabilityAdd/AvailabilityAdd";
import AvailabilityEdit from "./AvailabilityEdit/AvailabilityEdit";

type UserDays = {
  id: "string";
  day: "string";
  start: "string";
  end: "string";
  checked: boolean;
  user: "any";
  interval: {
    starting: "string";
    ending: "string";
  };
};

const Availability = () => {
  const [user, loading] = useAuthState(auth);
  const [singleDay, setSingleDay] = useState({});

  const email = user?.email;

  const {
    data: days,
    isLoading,
    refetch,
  } = useQuery(["days", email], () =>
    fetch(`http://localhost:5000/availability/${email}`).then((res) =>
      res.json()
    )
  );

  const handleCheckedBox = (id: string, checkedBox: boolean) => {
    const daysId = days._id;
    const individualId = id;
    fetch(
      `http://localhost:5000/availability/checked/${daysId}?dayStatus=${!checkedBox}&dayDataId=${individualId}&email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  const handleAdd = async (daysId: string, dayId: string) => {
    const response = await fetch(
      `http://localhost:5000/availability/${daysId}/${dayId}`
    );
    const data = await response.json();
    setSingleDay(data);
  };

  const handleEdit = async (daysId: string, dayId: string) => {
    fetch(`http://localhost:5000/availability/${daysId}/${dayId}`)
      .then((res) => res.json())
      .then((data) => setSingleDay(data));
  };

  return (
    <div className="w-4/6 mx-auto py-10">
      <h2 className="text-xl md:text-3xl font-bold text-center">
        Availability setup
      </h2>
      <div>
        <h4 className="text-lg md:text-2xl border-2 px-4 py-1 w-60 rounded-lg text-center border-gray-600 mx-auto my-3">
          Working schedule
        </h4>
        <div className="mt-6">
          <div className="overflow-x-auto w-full border rounded">
            <table className="table w-full">
              <tbody>
                {days.dayData.map((day: UserDays) => (
                  <tr key={day.id} className="hover">
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          checked={day?.checked}
                          className="checkbox"
                          onChange={() => handleCheckedBox(day.id, day.checked)}
                        />
                      </label>
                    </th>
                    <td>
                      <div className="font-bold">{day.day}</div>
                    </td>
                    <td>
                      <div>
                        {day.checked ? (
                          <span>
                            {day.start} - {day.end}
                          </span>
                        ) : (
                          <span>Unavailable</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <label htmlFor="add-modal">
                        <BiMessageSquareAdd
                          onClick={() => handleAdd(days._id, day.id)}
                          className="text-5xl p-3 cursor-pointer"
                        />
                        <AvailabilityAdd
                          singleDay={singleDay}
                          days={days._id}
                          refetch={refetch}
                        />
                      </label>
                    </td>
                    <td>
                      <label htmlFor="edit-modal">
                        <BiEdit
                          className="text-5xl p-3 cursor-pointer"
                          onClick={() => handleEdit(days._id, day.id)}
                        />
                        <AvailabilityEdit
                          singleDay={singleDay}
                          days={days._id}
                          refetch={refetch}
                        />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
