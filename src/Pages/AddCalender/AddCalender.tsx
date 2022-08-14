import calender from "../../Utilities/icon/calendarLogo.png";
import google from "../../Utilities/icon/google.png";
const AddCalender = () => {
  return (
    <div>
      <div className="shadow border container mx-auto pb-5 mt-6">
        <div className="py-4 px-8">
          <h1 className="text-xl">Select Calendar</h1>
          <h2 className="text-light text-sm">
            Connect your calendar to let Calendly know when you're available and
            update your calendar as events are scheduled.
          </h2>
        </div>
        <div className="flex px-8 py-3 border-t border-b bg-gray-50">
          <img src={google} className="w-[30px]" alt="" />
          <h2 className="ml-4 font-bold">Google</h2>
        </div>
        <div className="flex justify-between mx-8 items-center py-3">
          <div className="flex items-center ">
            <div className="avatar">
              <div className="w-14 p-3 shadow rounded-full border">
                <img src={calender} alt="" />
              </div>
            </div>
            <div className="ml-3">
              <h2>Google Calendar</h2>
            </div>
          </div>
          <div>
            <h2>Gmail, G Suite</h2>
          </div>
          <div>
            <button className="text-sm px-8  rounded-lg btn btn-sm btn-outline btn-info">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCalender;
