import Button from "../../../Shared/Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bgImage flex items-center">
      <div className="md:grid md:grid-cols-2 w-full">
        <div className="mx-8">
          <div className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold">
            <h1 className="mb-2 md:lg-5">Easy to maintain</h1>
            <h1 className="mb-2 md:lg-5">Interview, meetings</h1>
            <h1 className="mb-2 md:lg-5">MyScheduler Website</h1>
          </div>
          <p className="mb-5 text-sm md:text-xl text-white font-light">
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
