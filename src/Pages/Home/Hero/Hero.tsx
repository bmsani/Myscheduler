import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero h-[400px] md:h-[600px] bgImage">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="md:grid md:grid-cols-2 w-full ">
            <div  className="text-start mx-8 text-white">
                 <h1 className="mb-2 md:lg-5 text-2xl md:text-3xl lg:text-5xl font-semibold">Easy to maintain</h1>
                 <h1 className="mb-2 md:lg-5 text-2xl md:text-3xl lg:text-5xl font-semibold">Interview, meetings</h1>
                 <h1 className="mb-2 md:lg-5 text-2xl md:text-3xl lg:text-5xl font-semibold">MyScheduler Website</h1>
                 <p className="mb-5 text-sm md:text-xl text-gray-100 font-light">MyScheduler is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.</p>
                 <button className="btn btn-primary">Get Started</button>
            </div>
            <div></div>
        </div>
    </div>
    );
};

export default Hero;