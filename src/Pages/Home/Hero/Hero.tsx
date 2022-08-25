import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import heroImg from "../../../Utilities/Image/heroImg.png";

const Hero = () => {
  return (
    <div className="w-full py-16">
      <div className="flex flex-col-reverse gap-7 lg:grid lg:grid-cols-3 w-full items-center">
        <div className="mx-2 lg:col-span-2">
          <div className="text-primary text-4xl lg:text-5xl font-bold flex flex-col md:gap-2">
            <h1>Easy to Maintain</h1>
            <h1>Interview, Meetings</h1>
            {/* <h1>MyScheduler Website</h1> */}
          </div>
          <p className="my-4 md:my-7 text-lg text-gray-500">
            MyScheduler is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work.
          </p>
          <Link to="/register">
            <Button>
              <span className="mx-4">Get Start</span>
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img className="w-[240px] md:w-[400px]" src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
