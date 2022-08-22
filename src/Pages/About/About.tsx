import handLove from "../../Utilities/icon/love.png";
import cloud from "../../Utilities/icon/clouds.png";
import graduation from "../../Utilities/icon/graduation-hat.png";
import twoWay from "../../Utilities/icon/renew.png";
import happyFace from "../../Utilities/icon/smile.png";
import rocket from "../../Utilities/icon/startup.png";
import Footer from "../../Shared/Footer/Footer";

const About = () => {
  return (
    <div>
      <div className="bg-cyan-500 h-[80vh] lg:h-screen">
        <h2 className="text-center pt-20 text-2xl md:text-3xl lg:text-5xl font-bold">
          About Myscheduler
        </h2>
        <p className="text-lg pt-2 lg:text-xl text-center">
          Find out more about our mission, our principles, and our team.
        </p>
        <div className="pt-10">
          <img
            className="rounded-2xl w-8/12 mx-auto"
            src={"https://i.ibb.co/S7p6nW8/about-main.jpg"}
            alt=""
          />
        </div>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 lg:h-screen items-center">
        <div className="col-span-1">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-20 md:mt-60 lg:mt-80">
            Scheduling everything <br /> for everyone
          </p>
          <h4 className="text-cyan-500 pt-5 pb-2 text-xl font-bold">Mission</h4>
          <p className="text-md md:text-lg text-justify">
            We deliver tools and services that allow businesses, groups, and
            people to effectively organize their time. Managing time should take
            minimal effort and consider a person’s whole life with complete
            respect for their privacy.
          </p>
          <h4 className="text-cyan-500 pt-5 pb-2 text-xl font-bold">Vision</h4>
          <p className="text-md md:text-lg text-justify">
            A world where everyone has more time to spend on what’s important to
            them. Instead of organizing, time should be spent living.
          </p>
        </div>
        <div className="col-span-1">
          <img
            className="lg:w-3/5 w-full mx-auto lg:mt-40 rounded-3xl mt-10"
            src={"https://i.ibb.co/HXQmG4H/vison.jpg"}
            alt=""
          />
        </div>
      </div>
      <div className="mt-20 md:mt-40 lg:mt-60 lg:pt-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Our Core Values
        </h2>
        <p className="text-center pt-2 text-lg pb-10">
          MyScheduler's core values guide everything we do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-5">
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={handLove} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Transparency with everyone</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={graduation} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Continuously learn and apply</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={cloud} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dream big</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={twoWay} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Embrace and drive change</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={happyFace} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Delight our customers</h2>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={rocket} alt="Shoes" className="rounded-xl w-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Own it and live it</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-24">
          Meet our Team
        </h2>
        <p className="text-center pt-2 text-md mx-3 lg:mx-0 md:text-lg pb-10">
          Here are the people behind Myscheduler who help drive innovation in
          the HR Software space.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-10 pb-24">
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/BNzHCDV/avatar5.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">Sammy Jenkins</h4>
          <p className="text-lg text-center">Cofounder - CEO</p>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/mzHFmGk/avatar4.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">Wilbert Evans</h4>
          <p className="text-lg text-center">VP of Engineering</p>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/s3tV4rw/avatar3.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">Karen Frank</h4>
          <p className="text-lg text-center">VP of Operations</p>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/NtD8dSq/avatar2.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">
            Javier Mcbride
          </h4>
          <p className="text-lg text-center">Head of HR</p>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/MCwrWxK/avatar.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">Clara Barnett</h4>
          <p className="text-lg text-center">Sr. Product Manager</p>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="w-40 mask mask-squircle">
            <img src={"https://i.ibb.co/tQpnGzy/avatar1.jpg"} alt="" />
          </div>
          <h4 className="font-bold text-2xl text-center pt-3">Howard Adams</h4>
          <p className="text-lg text-center">Head of Support</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
