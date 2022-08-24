import { useAuthState } from "react-firebase-hooks/auth";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import ButtonOutline from "../../../Shared/Button/ButtonOutline";
import GetAllEvents from "../../../Shared/GetAllEvent/GetAllEvents";
import GetUserInfo from "../../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const Event = () => {
  const [user] = useAuthState(auth);
  const firstLetter = user?.displayName?.slice(0, 1);
  const email = user?.email;
  const { userInfo } = GetUserInfo(email);
  const { events, isLoading, refetch } = GetAllEvents(email);

  const handleDelete = (id: string) => {
    fetch(`http://localhost:5000/deleteEvent/${id}?email=${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.error("Event delete successful");
          refetch();
        }
      });
  };

  const handleCopyToClipboard = (eventURL: string) => {
    navigator.clipboard.writeText(eventURL);
    toast.success("Copy To Clipboard");
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className="flex flex-col justify-start md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          {userInfo?.imageURL ? (
            <img
              className="w-[60px] h-[60px] object-cover rounded-full border border-primary"
              src={userInfo?.imageURL as string}
              alt=""
            />
          ) : (
            <p className="w-[50px] h-[50px] rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
              <span className="text-4xl font-semibold uppercase">
                {firstLetter}
              </span>
            </p>
          )}
          <div>
            <p>{user?.displayName}</p>
            <Link
              target="_blank"
              to={`/allEvent/${email}`}
              className="text-accent text-xs md:text-lg"
            >
              myscheduler.com/{email}
            </Link>
          </div>
        </div>
        <div className="mt-4">
          {userInfo?.refreshToken ? (
            <Link to="/createEvent">
              <button className="mt-4 py-2 px-4 border-[2px] border-secondary  text-secondary rounded-full hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
                <span className="flex font-medium items-center gap-1">
                  <GoPlus /> New Event
                </span>
              </button>
            </Link>
          ) : (
            <Link to="/calenderConnection">
              <ButtonOutline>
                <span className="flex items-center gap-1">
                  <GoPlus /> New Event
                </span>
              </ButtonOutline>
            </Link>
          )}
        </div>
      </div>
      <div className="divider"></div>

      {events?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {events?.map((e: any, index: number) => (
            <div>
              {index > 1 ? (
                <>
                  {userInfo?.paymentStatus ? (
                    <div
                      className="card min-w-[300px] shadow hover:shadow-xl duration-300 cursor-pointer bg-base-100"
                      key={e._id}
                    >
                      <div className="bg-primary h-2 w-full rounded-t-2xl"></div>
                      <div className="p-5">
                        <h2 className="text-xl">{e.eventName}</h2>
                        <p className="text-sm">
                          {e.eventDuration} mins, One-on-One
                        </p>
                        <Link
                          target="_blank"
                          to={`/bookingCalender/${e._id}`}
                          className="text-accent mt-2"
                        >
                          View booking page
                        </Link>
                        <div className="divider"></div>
                        <div className="flex justify-between">
                          <button
                            onClick={() =>
                              handleCopyToClipboard(
                                `http://localhost:3000/bookingCalender/${e._id}`
                              )
                            }
                            className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
                          >
                            Copy
                          </button>
                          <button
                            className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
                            onClick={() => handleDelete(e._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="card min-w-[300px] shadow hover:shadow-xl duration-300 cursor-pointer text-gray-400"
                      key={e._id}
                    >
                      <div className="bg-gray-400 h-2 w-full rounded-t-2xl"></div>
                      <div className="p-5">
                        <h2 className="text-xl">{e.eventName}</h2>
                        <p className="text-sm">
                          {e.eventDuration} mins, One-on-One
                        </p>
                        <p>Please pay for active this Event</p>
                        <div className="divider"></div>
                        <div className="flex justify-between">
                          <Link
                            to="/priceCart"
                            className="mt-4 py-1 px-4 border border-primary rounded-full text-white bg-accent hover:shadow-md hover:shadow-accent duration-300 cursor-pointer"
                          >
                            Pay
                          </Link>

                          <button
                            className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
                            onClick={() => handleDelete(e._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div
                  className="card min-w-[300px] shadow hover:shadow-xl duration-300 cursor-pointer bg-base-100"
                  key={e._id}
                >
                  <div className="bg-primary h-2 w-full rounded-t-2xl"></div>
                  <div className="p-5">
                    <h2 className="text-xl">{e.eventName}</h2>
                    <p className="text-sm">
                      {e.eventDuration} mins, One-on-One
                    </p>
                    <Link
                      target="_blank"
                      to={`/bookingCalender/${e._id}`}
                      className="text-accent mt-2"
                    >
                      View booking page
                    </Link>
                    <div className="divider"></div>
                    <div className="flex justify-between">
                      <button
                        onClick={() =>
                          handleCopyToClipboard(
                            `http://localhost:3000/bookingCalender/${e._id}`
                          )
                        }
                        className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
                      >
                        Copy
                      </button>
                      <button
                        className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>You don't have any event types yet.</h2>
          <p className="text-sm mt-4 font-thin">
            You'll want to add an event type to allow people to schedule with
            you.
          </p>
        </div>
      )}
    </div>
  );
};

export default Event;
