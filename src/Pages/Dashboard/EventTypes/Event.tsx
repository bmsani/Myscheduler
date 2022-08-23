import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
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
    <div className="mr-10 ml-5 pt-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          {userInfo?.imageURL ? (
            <img
              className="w-[50px] h-[50px] object-cover rounded-full border border-primary"
              src={userInfo?.imageURL as string}
              alt=""
            />
          ) : (
            <p className="w-[50px] h-[50px] rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
              <span className="text-3xl font-semibold uppercase">{firstLetter}</span>
            </p>
          )}
          <div>
            <p>{user?.displayName}</p>
            <Link
              target="_blank"
              to={`/allEvent/${email}`}
              className="text-secondary"
            >
              myscheduler.com/{email}
            </Link>
          </div>
        </div>
        <div>
          {userInfo?.refreshToken ? (
            <Link to="/createEvent">
              <button className="mt-4 bg-primary py-2 px-4 text-white rounded-full hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
                <span className="flex items-center gap-1">
                  <AiOutlinePlus /> New Event
                </span>
              </button>
            </Link>
          ) : (
            <Link to="/calenderConnection">
              <button className="mt-4 bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
                <span className="flex items-center gap-1">
                  <AiOutlinePlus /> New Event
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="divider"></div>

      {events?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((e: any, index: number) => (
            <div>
              {index > 1 ? (
                <>
                  {userInfo?.paymentStatus ? (
                    <div
                      className="card w-[300] md:w-[320px] shadow hover:shadow-xl duration-300 cursor-pointer"
                      key={e._id}
                    >
                      <div className="bg-blue-500 h-2 w-full rounded-t-2xl"></div>
                      <div className="p-5">
                        <h2 className="text-xl">{e.eventName}</h2>
                        <p className="text-sm">
                          {e.eventDuration} mins, One-on-One
                        </p>
                        <Link
                          target="_blank"
                          to={`/bookingCalender/${e._id}`}
                          className="text-secondary mt-2"
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
                      className="card w-[300] md:w-[320px] shadow hover:shadow-xl duration-300 cursor-pointer text-gray-400"
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
                            className="mt-4 py-1 px-4 border border-primary rounded-full text-white bg-blue-500 hover:shadow-md hover:shadow-blue-500 duration-300 cursor-pointer"
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
                  className="card w-[300] md:w-[320px] shadow hover:shadow-xl duration-300 cursor-pointer"
                  key={e._id}
                >
                  <div className="bg-blue-500 h-2 w-full rounded-t-2xl"></div>
                  <div className="p-5">
                    <h2 className="text-xl">{e.eventName}</h2>
                    <p className="text-sm">
                      {e.eventDuration} mins, One-on-One
                    </p>
                    <Link
                      target="_blank"
                      to={`/bookingCalender/${e._id}`}
                      className="text-secondary mt-2"
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
        <div className="">
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
