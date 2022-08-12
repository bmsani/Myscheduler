import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";
const Event = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const photo: any = user?.photoURL;
  const {
    data: events,
    isLoading,
    refetch,
  } = useQuery(["events", email], () =>
    fetch(`https://secure-chamber-99191.herokuapp.com/getEvent/${email}`).then(
      (res) => res.json()
    )
  );
  const { data: singleUser } = useQuery(["singleUser", email], () =>
    fetch(`https://secure-chamber-99191.herokuapp.com/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const handleDelete = (id: string) => {
    fetch(
      `https://secure-chamber-99191.herokuapp.com/deleteEvent/${id}?email=${email}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("Event delete successful");
          refetch();
        }
      });
  };
  return (
    <div className="mr-10 ml-5 pt-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-5">
          <img className="w-[70px] rounded-full" src={photo} alt="" />
          <div>
            <p>{user?.displayName}</p>
            {/* <Link to="/eventBooking"> */}
            <p className="text-secondary">{email}</p>
            {/* </Link> */}
          </div>
        </div>
        <Link to="/createEvent">
          <button className="mt-4 bg-primary py-2 px-4 rounded text-white hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
            + New Event
          </button>
        </Link>
      </div>
      <div className=" divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e: any) => (
          <div
            className="cart border rounded-2xl w-[300] md:w-[320px] shadow hover:shadow-xl duration-300 cursor-pointer"
            key={e._id}
          >
            <div className="bg-blue-500 h-2 w-full rounded-t-2xl"></div>
            <div className="p-5">
              <h2 className="text-xl">{e.eventName}</h2>
              <p className="text-sm">{e.eventDuration} mins, One-on-One</p>
              <Link
                target="_blank"
                to={`/bookingCalender/${e._id}`}
                className="text-secondary mt-2"
              >
                View booking page
              </Link>
              <div className="divider"></div>
              <div className="flex justify-between">
                <button className="mt-4 py-1 px-4 border border-primary rounded-full text-primary hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer">
                  Share
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
        ))}
      </div>
    </div>
  );
};

export default Event;
