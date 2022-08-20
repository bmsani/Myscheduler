import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMessageSquareEdit, BiEdit } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../init.firebase";
import Loading from "../../../../Shared/LoadingSpinner/Loading";

const EventDetailsAdd = ({
  eventName,
  eventLocation,
  availabilities,
  refetch,
  setEventId,
  eventId,
  durationRef,
  handleEvent,
}: any) => {
  const [availabilityModify, setAvailabilityModify] = useState(false);
  const [eventAvailability, setEventAvailability] = useState<any>({});
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  const handleCheckedBox = (id: string, checkedBox: boolean) => {
    const daysId = availabilities._id;
    fetch(
      `http://localhost:5000/customAvailability/checked/${daysId}?dayStatus=${!checkedBox}&dayDataId=${id}&email=${email}`,
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
          fetch(`http://localhost:5000/customAvailability/${data?.eventID}`)
            .then((res) => res.json())
            .then((data) => {
              setEventAvailability(data);
              refetch();
            });
        }
        if (data?.eventId) {
          setEventId(data?.eventId);
          fetch(`http://localhost:5000/customAvailability/${data?.eventId}`)
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
      <div className="mt-4">
        <div className="md:flex justify-center md:justify-between items-center py-4 mx-4 lg:mx-40">
          <div>
            <Link to="/createEvent">
              <button className="text-blue-500 border-blue-400  md:border md:px-7 py-2 rounded-full flex items-center">
                <MdArrowBackIos />
                Back
              </button>
            </Link>
          </div>
          <div>
            <h2 className="md:text-xl py-3 text-center">
              Add One-on-One Event Type
            </h2>
          </div>
        </div>
      </div>
      <div className="xl:mx-48 sm:mx-8 py-4 border-2 border-zinc-200 mt-4 ">
        <div className="flex mx-6">
          <div className="rounded-full h-[18px] w-[18px] bg-violet-600 mr-2"></div>
          <div>
            <h2 className="text-l font-light">What event is this?</h2>
            <h2 className="text-sm font-light">
              {eventName ? eventName : "No name given"},&nbsp;
              {eventLocation ? eventLocation : "No location given"}
            </h2>
          </div>
        </div>
      </div>
      <div className="xl:mx-48 sm:mx-8 border-2 border-zinc-500 mt-2 mb-8 pb-4">
        <div className="flex items-center justify-between mx-4 lg:mx-8 border-b">
          <div>
            <h2>What event is this?</h2>
            <h2 className="text-sm font-light">30 min</h2>
          </div>
          <div className=" mx-6 py-4">
            <div>
              <Link to="/dashboard">
                <button className="mr-4 hover:underline text-sm font-medium">
                  Cancel
                </button>
              </Link>
              <Link to="/dashboard">
                <button
                  className="px-4 py-1 rounded-full text-white bg-blue-500"
                  onClick={handleEvent}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-10">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Duration</span>
              </label>
              <input
                type="number"
                value={30}
                readOnly
                className="input border-blue-500 w-full "
                ref={durationRef}
              />
            </div>
            <div className="mt-10">
              <p className="text-md font-semibold">
                How do you want to offer your availability for this event type?
              </p>
              <div className="mt-4 flex">
                <input
                  className="border-2 mr-2 rounded-full p-3 text-center focus-within:border-indigo-400 w-1/2 cursor-pointer"
                  type="text"
                  readOnly
                  onClick={() => setAvailabilityModify(false)}
                  value={"Use an existing schedule"}
                />
                <input
                  className="border-2 rounded-full p-3 text-center w-1/2 cursor-pointer"
                  type="text"
                  readOnly
                  onClick={() => setAvailabilityModify(true)}
                  value={"Set custom hours"}
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
                                {day.interval.starting} - {day.interval.ending}
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
        <div className="border-t mx-10 py-4  grid place-items-end">
          <div>
            <button className="mr-4 hover:underline text-sm font-medium">
              Cancel
            </button>
            <Link to="/dashboard">
              <button
                className="px-4 py-1 rounded-full text-white bg-blue-500"
                onClick={handleEvent}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsAdd;
