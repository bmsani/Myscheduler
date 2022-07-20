import image1 from '../../../Utilities/Image/confirm.gif'
import image2 from '../../../Utilities/Image/date set.gif'
import image3 from '../../../Utilities/Image/alert.gif'

const DoBest = () => {
    return (
        <div className='container mx-auto text-center my-16 md:px-20 px-10'>
            <div>
                <h2 className='text-3xl md:text-5xl text-neutral font-bold'>Do more of what you do best</h2>
                <p className='text-xl font-thin md:text-2xl md:py-6'>With scheduling hassles and interruptions gone, your day is cleared for accomplishment.</p>
            </div>
            <div className='text mt-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-20">
                    <div className='text-left'>
                        <h6 className='text-2xl'>WORKFLOW MANAGEMENT</h6>
                        <h3 className='text-3xl my-5 font-bold'>Automate reminders and follow-ups</h3>
                        <p className='text-xl text-justify'>MyScheduler puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It’s like getting an assistant, even if you’re a business of one.</p>
                    </div>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-20">
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div className='text-left'>
                        <h6 className='text-2xl'>ON-DEMAND SCHEDULING</h6>
                        <h3 className='text-3xl my-5 font-bold'>Make more connections and reduce cancellations</h3>
                        <p className='text-xl text-justify'>Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center my-20">
                    <div className='text-left'>
                        <h6 className='text-2xl'>THE COURTEOUS APPROACH</h6>
                        <h3 className='text-3xl my-5 font-bold'>Delight invitees with modern scheduling</h3>
                        <p className='text-xl text-justify'>Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time.</p>
                    </div>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoBest;