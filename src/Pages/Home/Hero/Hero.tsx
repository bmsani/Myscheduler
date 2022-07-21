import Button from "../../../Shared/Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="w-full h-[60vh] md:h-[100vh] bgImage flex items-center">
      <div className="md:grid md:grid-cols-2 w-full">
        <div className="mx-2 md:mx-8">
          <div className="text-white text-md md:text-2xl lg:text-4xl font-bold mb-3">
            <h1>Easy to maintain</h1>
            <h1>Interview, meetings</h1>
            <h1>MyScheduler Website</h1>
          </div>
          <p className="mb-5 pr-20 md:pr-10 font-medium text-xs md:text-lg text-justify text-gray-100 md:text-gray-300">
            MyScheduler is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work.
          </p>
          <Button>
            <span>Get Started</span>
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
