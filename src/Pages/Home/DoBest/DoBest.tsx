import image1 from '../../../Utilities/Image/confirm.gif'
import image2 from '../../../Utilities/Image/date.gif'
import image3 from '../../../Utilities/Image/alert.gif'

const DoBest = () => {
    return (
        <div className='text-center mt-20 md:px-20 px-10'>
            <div>
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-neutral font-bold'>Do more of what you do best</h2>
                <p className='font-medium text-justify md:text-center md:text-lg'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p>
            </div>
            <div className='text mt-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-10">
                    <div className='text-left order-2 md:order-1'>
                        <h6 className='text-md md:text-xl text-accent font-bold'>WORKFLOW MANAGEMENT</h6>
                        <h3 className='font-bold text-xl md:text-2xl my-5'>Automate reminders and follow-ups</h3>
                        <p className='text-sm md:text-lg text-justify'>MyScheduler puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It's like getting an assistant, even if you’re a business of one.</p>
                    </div>
                    <div className='order-1 md:order-2'>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-10">
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div className='text-left'>
                        <h6 className='text-md md:text-xl text-accent font-bold'>ON-DEMAND SCHEDULING</h6>
                        <h3 className='font-bold text-xl md:text-2xl my-5'>Make more connections and reduce cancellations</h3>
                        <p className='text-sm md:text-lg text-justify'>Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-10">
                    <div className='text-left order-2 md:order-1'>
                        <h6 className='text-md md:text-xl text-accent font-bold'>THE COURTEOUS APPROACH</h6>
                        <h3 className='font-bold text-xl md:text-2xl my-5'>Delight invitees with modern scheduling</h3>
                        <p className='text-sm md:text-lg text-justify'>Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time.</p>
                    </div>
                    <div className='mx-auto order-1 md:order-2'>
                        <img className='w-[150px] md:w-[300px]' src={image3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoBest;