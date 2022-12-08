import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../init.firebase";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import ButtonOutline from "../../../../Shared/Button/ButtonOutline";

const EventDetailsAdd = ({
  eventName,
  availabilities,
  refetch,
  setEventId,
  eventId,
  durationRef,
  handleEvent,
}: any) => {
  const [availabilityModify, setAvailabilityModify] = useState<boolean>(false);
  const [eventAvailability, setEventAvailability] = useState<any>({});
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  const handleCheckedBox = (id: string, checkedBox: boolean) => {
    const daysId = availabilities._id;
    fetch(
      `https://myscheduler-server.onrender.com/customAvailability/checked/${daysId}?dayStatus=${!checkedBox}&dayDataId=${id}&email=${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ eventId }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.eventID) {
          setEventId(data?.eventID);
          fetch(
            `https://myscheduler-server.onrender.com/customAvailability/${data?.eventID}`
          )
            .then((res) => res.json())
            .then((data) => {
              setEventAvailability(data);
              refetch();
            });
        }
        if (data?.eventId) {
          setEventId(data?.eventId);
          fetch(
            `https://myscheduler-server.onrender.com/customAvailability/${data?.eventId}`
          )
            .then((res) => res.json())
            .then((data) => {
              setEventAvailability(data);
              refetch();
            });
        }
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div>
        <div className="md:flex justify-center md:justify-between items-center py-4">
          <div>
            <Link to="/createEvent">
              <ButtonOutline>
                <span className="flex items-center">
                  <MdArrowBackIos />
                  <span>Back</span>
                </span>
              </ButtonOutline>
            </Link>
          </div>
          <div>
            <h2 className="md:text-xl py-3 text-center">
              Add One-on-One Event Type
            </h2>
          </div>
        </div>
      </div>
      <div className="border-2 border-zinc-500 mt-2 mb-8 pb-4 rounded-lg">
        <div className="p-2 lg:p-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h2>What event is this?</h2>
              <div className="text-sm flex items-center">
                <div className="text-secondary font-bold">
                  {" "}
                  {eventName ? eventName : "No name given"},&nbsp;
                </div>
                {"On Google Meet"}
              </div>
            </div>
            <div>
              <div>
                <Link to="/dashboard/allEvents">
                  <button className="mr-4 hover:underline text-sm font-medium">
                    Cancel
                  </button>
                </Link>
                <Link to="/dashboard/allEvents">
                  <button
                    className="px-4 py-1 rounded-full text-white bg-secondary"
                    onClick={handleEvent}
                  >
                    Finish
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-10">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Duration</span>
                </label>
                <select
                  className="select border-secondary w-full "
                  ref={durationRef}
                >
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                  <option>60</option>
                </select>
              </div>
              <div className="mt-10">
                <p className="text-md font-semibold">
                  How do you want to offer your availability for this event
                  type?
                </p>
                <div className="mt-4 flex">
                  <input
                    className={
                      availabilityModify === !true
                        ? "border-2 border-black mr-2 rounded-full p-3 text-center w-1/2 cursor-pointer"
                        : "border-2 mr-2 rounded-full p-3 text-center w-1/2 cursor-pointer"
                    }
                    type="text"
                    readOnly
                    onClick={() => setAvailabilityModify(false)}
                    value={"Use an existing schedule"}
                  />
                  <input
                    className={
                      availabilityModify === true
                        ? "border-2 border-black mr-2 rounded-full p-3 text-center w-1/2 cursor-pointer"
                        : "border-2 mr-2 rounded-full p-3 text-center w-1/2 cursor-pointer"
                    }
                    type="text"
                    readOnly
                    onClick={() => setAvailabilityModify(true)}
                    value={"Set custom day"}
                  />
                </div>
              </div>
            </div>

            {availabilityModify ? (
              <div>
                {eventAvailability?.dayData ? (
                  <div>
                    <h2 className="text-xs my-3 font-bold">
                      SET INDIVIDUAL EVENT DAY
                    </h2>
                    <div className="mt-6">
                      <div className="overflow-x-auto w-full border rounded">
                        <table className="table w-full">
                          <thead>
                            <tr>
                              <th>CheckBox</th>
                              <th>Day name</th>
                              <th>Available time</th>
                              <th>Interval Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {eventAvailability?.dayData?.map((day: any) => (
                              <tr key={day.id} className="hover">
                                <th>
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={day?.checked}
                                      className="checkbox"
                                      onChange={() =>
                                        handleCheckedBox(day.id, day.checked)
                                      }
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
                                  {day.checked && (
                                    <span>
                                      {day.interval.starting} -{" "}
                                      {day.interval.ending}
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xs my-3 font-bold">
                      SET INDIVIDUAL EVENT DAY
                    </h2>
                    <div className="mt-6">
                      <div className="overflow-x-auto w-full border rounded">
                        <table className="table w-full">
                          <thead>
                            <tr>
                              <th>CheckBox</th>
                              <th>Day name</th>
                              <th>Available time</th>
                              <th>Interval Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {availabilities?.dayData?.map((day: any) => (
                              <tr key={day.id} className="hover">
                                <th>
                                  <label>
                                    <input
                                      type="checkbox"
                                      checked={day?.checked}
                                      className="checkbox"
                                      onChange={() =>
                                        handleCheckedBox(day.id, day.checked)
                                      }
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
                                  {day.checked && (
                                    <span>
                                      {day.interval.starting} -{" "}
                                      {day.interval.ending}
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-xs my-3 font-bold">WEEKLY HOURS</h2>
                <div className="mt-6">
                  <div className="overflow-x-auto w-full border rounded">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>Day name</th>
                          <th>Available time</th>
                          <th>Interval Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {availabilities?.dayData?.map((day: any) => (
                          <tr key={day.id} className="hover">
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
                              {day.checked && (
                                <span>
                                  {day.interval.starting} -{" "}
                                  {day.interval.ending}
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pt-3 grid place-items-end">
            <div>
              <Link to="/dashboard/allEvents">
                <button className="mr-4 hover:underline text-sm font-medium">
                  Cancel
                </button>
              </Link>
              <Link to="/dashboard/allEvents">
                <button
                  className="px-4 py-1 rounded-full text-white bg-secondary"
                  onClick={handleEvent}
                >
                  Finish
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsAdd;
