import { Link } from "react-router-dom";
import group from "../../../../Utilities/icon/group-call.png";
import single from "../../../../Utilities/icon/single-call.png";
import { MdArrowBackIos } from "react-icons/md";
import GetUserInfo from "../../../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../../../Shared/LoadingSpinner/Loading";
import auth from "../../../../init.firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const CreateEventType = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { userInfo, isLoading } = GetUserInfo(email);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between my-4 mx-4 lg:mx-40 ">
        <div>
          <Link to="/dashboard">
            <button className=" border-blue-400 text-blue-500 flex items-center justify-center md:border rounded-full py-2 md:px-6 text-xl lg:text-lg">
              <MdArrowBackIos />
              <span className="hidden md:block">Back</span>
            </button>
          </Link>
        </div>
        <div>
          <h2 className="text-lg">Create New Event Type</h2>
        </div>
      </div>
      <div className="bg-gray-100 pt-2 pb-20">
        <div className="md:flex items-center justify-between mx-4 lg:mx-40 mt-12">
          <div>
            <div className="flex items-center">
              <div>
                <img src={single} className="w-[48px]" alt="" />
              </div>
              <div className="ml-8">
                <h2 className="text-xl" id="one-on-one">
                  One-on-One
                </h2>
                <h2>Let an invitee pick a time to meet with you.</h2>
              </div>
            </div>
          </div>
          <div>
            <Link to="/CreateIndividualEvent">
              <button className="bg-blue-500 text-white px-7 py-3 mt-3 w-full md:mt-0 rounded-full">
                Create
              </button>
            </Link>
          </div>
        </div>
        <div className=" md:flex items-center justify-between mx-4 lg:mx-40 mt-20">
          <div>
            <div className="flex items-center">
              <div>
                <img src={group} className="w-[48px]" alt="" />
              </div>
              <div className="ml-8">
                <h2 className="text-xl" id="group">
                  Group
                </h2>
                <h2 className="text-l">
                  Let multiple invitees meet with you at one time.
                </h2>
              </div>
            </div>
          </div>
          <div>
            {userInfo?.paymentStatus ? (
              <Link
                to="/createGroupEvent"
                className="w-full mt-3 lg:mt-0 bg-blue-500 text-white px-7 py-3 rounded-full"
              >
                Create
              </Link>
            ) : (
              <Link
                to="/priceCart"
                className="w-full mt-3 lg:mt-0 bg-blue-500 text-white px-7 py-3 rounded-full"
              >
                Create
              </Link>
            )}
          </div>
        </div>
        <div className="md:flex items-center justify-between mx-4 lg:mx-40 mt-20 bg-slate-200 p-4 rounded-md">
          <div>
            <h2>
              <span className="font-bold">
                Want to host shared events with others?
              </span>{" "}
              Add members to your account
            </h2>
          </div>
          <div>
            <button className="w-full mt-3 lg:mt-0 px-7 border-blue-400 border-2 py-3 rounded-full">
              Invite members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventType;
