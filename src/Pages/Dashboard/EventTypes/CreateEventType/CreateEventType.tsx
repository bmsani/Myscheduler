import { Link } from "react-router-dom";
import single from "../../../../Utilities/icon/single-call.png";
import { MdArrowBackIos } from "react-icons/md";
import ButtonOutline from "../../../../Shared/Button/ButtonOutline";
import Button from "../../../../Shared/Button/Button";

const CreateEventType = () => {
  return (
    <div className="mx-auto px-2 md:px-5 lg:px-20 max-w-[1400px]">
      <div className="flex items-center justify-between my-4 py-8">
        <div>
          <Link to="/dashboard/allEvents">
            <ButtonOutline>
              <div className="flex items-center">
                <MdArrowBackIos />
                <span className="hidden md:block">Back</span>
              </div>
            </ButtonOutline>
          </Link>
        </div>
        <div>
          <h2 className="text-lg">Create New Event</h2>
        </div>
      </div>
      <div className="bg-gray-100 pt-2 pb-20 rounded-lg">
        <div className="md:flex items-center justify-between mx-5 mt-12 py-10">
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
              <Button>
                <span>Create</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventType;
