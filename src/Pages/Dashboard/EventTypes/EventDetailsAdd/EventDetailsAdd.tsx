import { Link } from "react-router-dom";
import leftArrow from "../../../../Utilities/icon/leftArrow.png";
// import world from "../../../../Utilities/icon/world.png";

type userDay = {
  id: string;
  day: string;
  start: any;
  end: any;
  checked: boolean;
  interval: {
    starting: string;
    ending: string;
  };
};

const EventDetailsAdd = ({
  eventName,
  eventLocation,
  availabilities,
  durationRef,
  handleEvent,
}: any) => {
  return (
    <div>
      <div className="border mt-3 shadow-lg">
        <div className="grid grid-cols-3 sm-grid-cols-2  py-4 xl:mx-40">
          <div>
            <Link to="/createEvent">
              <button className="px-5 border-blue-400 flex items-center border-2 py-3 rounded-full">
                <span className="mr-1">
                  <img src={leftArrow} className="w-[20px]" alt="" />
                </span>{" "}
                Back
              </button>
            </Link>
          </div>
          <div>
            <h2 className="text-xl  py-3">Add One-on-One Event Type</h2>
          </div>
          <div>
            <h2 className="text-base py-3 text-end">
              Your event type is{" "}
              <span className="px-5 py-1 text-base ml-1 text-white bg-gray-400 rounded-sm">
                OFF
              </span>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="xl:mx-48 sm:mx-8 py-4 border-2 border-zinc-200 mt-8 ">
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
        <div className="flex items-center justify-between mx-8 border-b">
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
        <div className="mx-8 mb-6 ">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Duration</span>
            </label>
            <input
              type="number"
              value={30}
              readOnly
              className="input  border-blue-500 w-full max-w-xs "
              ref={durationRef}
            />
          </div>

          <div className="mb-8 ">
            <div className="border grid grid-cols-2 mt-5">
              <div className="mx-6">
                <h2 className="text-xs my-3 font-bold">WEEKLY HOURS</h2>
                <div className="">
                  {availabilities?.dayData?.map((a: userDay) => (
                    <div className="grid grid-cols-3 mb-6" key={a.id}>
                      <h2 className="font-bold text-sm">{a.day}</h2>
                      <p className="font-light text-left">
                        {a.checked ? (
                          <span>
                            {a.start} - {a.end}
                          </span>
                        ) : (
                          "unavailable"
                        )}
                      </p>
                      <p>
                        {a.checked && (
                          <span>
                            {a.interval.starting} - {a.interval.ending}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
